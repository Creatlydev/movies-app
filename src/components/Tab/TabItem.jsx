/* eslint-disable react/prop-types */
import { forwardRef } from 'react'

const TabItem = forwardRef(({ isSelected, onClick, children }, ref) => {
  return (
    <li
      ref={ref}
      className={`TabItem 
        ${isSelected ? 'is-selected' : ''}`}
      role='tab'
      aria-selected={isSelected}
    >
      <button onClick={onClick}>
        {children}
      </button>
    </li>
  )
})

TabItem.displayName = 'TabItem'

export default TabItem
