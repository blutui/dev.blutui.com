import { Children, ComponentPropsWithoutRef, ForwardedRef, ReactElement, forwardRef } from 'react'

import { Tabs } from './tabs'
import { Tab } from './tab'
import { Fence, FenceProps } from 'components/fence'

export type CodeGroupPropsBase = {
  children?: ReactElement<FenceProps>[] | ReactElement<FenceProps>
}

export type CodeGroupProps = CodeGroupPropsBase & Omit<ComponentPropsWithoutRef<'div'>, keyof CodeGroupPropsBase>

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

  const childArr = Children.toArray(children) as Array<Exclude<ReactElement<FenceProps>, boolean | null | boolean>>

  return (
    <div
      ref={ref}
      className="not-prose relative my-4 rounded-2xl bg-zinc-900/5 ring-1 ring-zinc-900/10 dark:bg-white/5 dark:ring-white/10"
      {...props}
    >
      <Tabs>
        {childArr.map((child, tabIndex: number) => (
          <Tab title={child.props.filename || 'Filename'} key={tabIndex}>
            <Fence className="px-1 pb-1" data-language={child.props['data-language']}>
              {child.props.children}
            </Fence>
          </Tab>
        ))}
      </Tabs>
    </div>
  )
})
