import React from 'react'

export interface Item {
  title?: string
  url?: string
  items?: Item[]
}

export interface SidebarProps {
  items: Item[]
}

export const Sidebar = ({ items }: SidebarProps) => {
  return (
    <>
      {items &&
        items.map((category, categoryIndex) => {
          return (
            <div className="pl-4 text-sm" key={categoryIndex}>
              {category.title}
              {category.items && <Sidebar items={category.items} />}
            </div>
          )
        })}
    </>
  )
}
