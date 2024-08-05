'use client'

import React, { useState, useEffect, useRef } from 'react'
// import styles from "./chat.module.css";
import { AssistantStream } from 'openai/lib/AssistantStream'
import Markdown from 'react-markdown'
// @ts-expect-error - no types for this yet
import { AssistantStreamEvent } from 'openai/resources/beta/assistants/assistants'
import { RequiredActionFunctionToolCall } from 'openai/resources/beta/threads/runs/runs'

type MessageProps = {
  role: 'user' | 'assistant' | 'code'
  text: string
}

const UserMessage = ({ text }: { text: string }) => {
  return <div className="">{text}</div>
}

const AssistantMessage = ({ text }: { text: string }) => {
  return (
    <div className="">
      <Markdown>{text}</Markdown>
    </div>
  )
}

const CodeMessage = ({ text }: { text: string }) => {
  return (
    <div className="">
      {text.split('\n').map((line, index) => (
        <div key={index}>
          <span>{`${index + 1}. `}</span>
          {line}
        </div>
      ))}
    </div>
  )
}

const Message = ({ role, text }: MessageProps) => {
  switch (role) {
    case 'user':
      return <UserMessage text={text} />
    case 'assistant':
      return <AssistantMessage text={text} />
    case 'code':
      return <CodeMessage text={text} />
    default:
      return null
  }
}

type ChatProps = {
  functionCallHandler?: (
    toolCall: RequiredActionFunctionToolCall
  ) => Promise<string>
}

const Chat = ({
  functionCallHandler = () => Promise.resolve(''), // default to return empty string
}: ChatProps) => {
  const [userInput, setUserInput] = useState('')
  const [messages, setMessages] = useState<MessageProps[]>([])
  const [inputDisabled, setInputDisabled] = useState(false)
  const [threadId, setThreadId] = useState('')

  // automatically scroll to bottom of chat
  const messagesEndRef = useRef<HTMLDivElement | null>(null)
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }
  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // create a new threadID when chat component created
  useEffect(() => {
    const createThread = async () => {
      const res = await fetch(`/api/threads`, {
        method: 'POST',
      })

      const data = await res.json()
      setThreadId(data.threadId)
    }
    createThread()
  }, [])

  const sendMessage = async (text: any) => {
    console.log('text', text)
    const response = await fetch(`/api/threads/messages/${threadId}`, {
      method: 'POST',
      body: JSON.stringify({
        content: text,
      }),
    })
    console.log('response', response)
    const stream = AssistantStream.fromReadableStream(response.body!)
    console.log('stream', stream)
    handleReadableStream(stream)
  }

  const submitActionResult = async (runId: any, toolCallOutputs: any) => {
    const response = await fetch(`/api/threads/actions/${threadId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        runId: runId,
        toolCallOutputs: toolCallOutputs,
      }),
    })
    const stream = AssistantStream.fromReadableStream(response.body!)
    handleReadableStream(stream)
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    if (!userInput.trim()) return
    sendMessage(userInput)
    setMessages((prevMessages) => [
      ...prevMessages,
      { role: 'user', text: userInput },
    ])
    setUserInput('')
    setInputDisabled(true)
    scrollToBottom()
  }

  /* Stream Event Handlers */

  // textCreated - create new assistant message
  const handleTextCreated = () => {
    appendMessage('assistant', '')
  }

  // textDelta - append text to last assistant message
  const handleTextDelta = (delta: any) => {
    console.log('delta', delta)
    if (delta.value != null) {
      appendToLastMessage(delta.value)
    }
    if (delta.annotations != null) {
      annotateLastMessage(delta.annotations)
    }
  }

  // imageFileDone - show image in chat
  const handleImageFileDone = (image: any) => {
    appendToLastMessage(`\n![${image.file_id}](/api/files/${image.file_id})\n`)
  }

  // toolCallCreated - log new tool call
  const toolCallCreated = (toolCall: any) => {
    if (toolCall.type != 'code_interpreter') return
    appendMessage('code', '')
  }

  // toolCallDelta - log delta and snapshot for the tool call
  const toolCallDelta = (delta: any, snapshot: any) => {
    if (delta.type != 'code_interpreter') return
    if (!delta.code_interpreter.input) return
    appendToLastMessage(delta.code_interpreter.input)
  }

  // handleRequiresAction - handle function call
  const handleRequiresAction = async (
    event: AssistantStreamEvent.ThreadRunRequiresAction
  ) => {
    const runId = event.data.id
    const toolCalls = event.data.required_action.submit_tool_outputs.tool_calls
    // loop over tool calls and call function handler
    const toolCallOutputs = await Promise.all(
      toolCalls.map(async (toolCall: any) => {
        const result = await functionCallHandler(toolCall)
        return { output: result, tool_call_id: toolCall.id }
      })
    )
    setInputDisabled(true)
    submitActionResult(runId, toolCallOutputs)
  }

  // handleRunCompleted - re-enable the input form
  const handleRunCompleted = () => {
    setInputDisabled(false)
  }

  const handleReadableStream = (stream: AssistantStream) => {
    console.log('inside readable satream', stream)
    // messages
    stream.on('textCreated', handleTextCreated)
    stream.on('textDelta', handleTextDelta)

    // image
    stream.on('imageFileDone', handleImageFileDone)

    // code interpreter
    stream.on('toolCallCreated', toolCallCreated)
    stream.on('toolCallDelta', toolCallDelta)

    // events without helpers yet (e.g. requires_action and run.done)
    stream.on('event', (event) => {
      if (event.event === 'thread.run.requires_action')
        handleRequiresAction(event)
      if (event.event === 'thread.run.completed') handleRunCompleted()
    })
  }

  /*
    =======================
    === Utility Helpers ===
    =======================
  */

  const appendToLastMessage = (text: any) => {
    setMessages((prevMessages) => {
      const lastMessage = prevMessages[prevMessages.length - 1]
      const updatedLastMessage = {
        ...lastMessage,
        text: lastMessage.text + text,
      }
      return [...prevMessages.slice(0, -1), updatedLastMessage]
    })
  }

  const appendMessage = (role: any, text: any) => {
    console.log('role', role)
    console.log('text', text)
    setMessages((prevMessages) => [...prevMessages, { role, text }])
  }

  const annotateLastMessage = (annotations: any) => {
    setMessages((prevMessages) => {
      const lastMessage = prevMessages[prevMessages.length - 1]
      const updatedLastMessage = {
        ...lastMessage,
      }
      annotations.forEach((annotation: any) => {
        if (annotation.type === 'file_path') {
          updatedLastMessage.text = updatedLastMessage.text.replaceAll(
            annotation.text,
            `/api/files/${annotation.file_path.file_id}`
          )
        }
      })
      return [...prevMessages.slice(0, -1), updatedLastMessage]
    })
  }

  return (
    <div className="">
      <div className="">
        {messages.map((msg, index) => (
          <Message key={index} role={msg.role} text={msg.text} />
        ))}
        <div ref={messagesEndRef} />
      </div>
      <form onSubmit={handleSubmit} className="">
        <input
          type="text"
          className=""
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Enter your question"
        />
        <button type="submit" className="" disabled={inputDisabled}>
          Send
        </button>
      </form>
    </div>
  )
}

export default Chat
