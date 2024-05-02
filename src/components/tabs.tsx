import { Children, ReactElement, useState } from 'react'
import { Tab, TabProps } from './tab'

export interface TabsProps {
  children: ReactElement<TabProps>[]
}

export function Tabs({ children }: TabsProps) {
  const [activeTabIndex, setActiveTabIndex] = useState(0)
  const childArr = Children.toArray(children) as ReactElement<TabProps>[]
  const activeTabContent = childArr[activeTabIndex]?.props?.children

  return (
    <>
      <ul className="-mb-2 flex min-w-full">
        {childArr.map((child, i: number) => (
          <li
            key={i}
            className="cursor-pointer"
            onClick={() => setActiveTabIndex(i)}
          >
            <Tab
              title={child.props.title ?? 'Tab Title'}
              isActive={i === activeTabIndex}
            />
          </li>
        ))}
      </ul>
      {activeTabContent}
    </>
  )
}
