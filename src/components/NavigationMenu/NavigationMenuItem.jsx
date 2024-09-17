/* eslint-disable react/prop-types */
import React, { useState } from 'react'

import './NavigationMenuItem.css'

export default function NavigationMenuItem ({ children, position = 'center' }) {
  const [open, setOpen] = useState(false)

  let MenuTrigger = null
  let MenuContent = null
  React.Children.forEach(children, child => {
    if (child.type.displayName === 'NavigationMenuTrigger') {
      MenuTrigger = child
    } else if (child.type.displayName === 'NavigationMenuDropdown') {
      MenuContent = child
    }
  })

  // const showMenuContent = open && MenuContent

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className='MenuItem'
    >
      {React.cloneElement(MenuTrigger, { onClick: () => setOpen(!open) })}

      <div className={`MenuContent ${position} ${open ? 'is-open' : ''}`}>
        <div className='MenuContent-background' />
        <div className='MenuContent-arrow' />
        {React.cloneElement(MenuContent)}
      </div>
    </div>
  )
}
