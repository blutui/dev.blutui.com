import {
  Children,
  ComponentPropsWithoutRef,
  ForwardedRef,
  ReactElement,
  forwardRef,
} from 'react'

import { Code, CodeProps } from './code'
import { Tabs } from './tabs'
import { Tab } from './tab'

export type CodeGroupPropsBase = {
  children?: ReactElement<CodeProps>[] | ReactElement<CodeProps>
}

export type CodeGroupProps = CodeGroupPropsBase &
  Omit<ComponentPropsWithoutRef<'div'>, keyof CodeGroupPropsBase>

export const CodeGroup = forwardRef(function CodeGroup(
  { children, ...props }: CodeGroupProps,
  ref: ForwardedRef<HTMLDivElement> | undefined
) {
  if (children == null) {
    console.warn('CodeGroup has no children, expected at least one Code child.')
    return null
  } else if (!Array.isArray(children)) {
    children = [children]
  }

  const childArr = Children.toArray(children) as Array<
    Exclude<ReactElement<CodeProps>, boolean | null | boolean>
  >

  return (
    <div ref={ref} className="not-prose my-4" {...props}>
      <Tabs>
        {childArr.map((child, tabIndex: number) => (
          <Tab title={child.props.filename || 'Filename'} key={tabIndex}>
            <Code data-language={child.props['data-language']}>
              {child.props.children}
            </Code>
          </Tab>
        ))}
      </Tabs>
    </div>
  )
})
