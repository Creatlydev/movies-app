import { forwardRef } from 'react'

const TabsTrigger = forwardRef(({ isSelected, onClick, children }, ref) => {
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

TabsTrigger.displayName = 'TabsTrigger'

export default TabsTrigger
