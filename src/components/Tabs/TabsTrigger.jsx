import { forwardRef } from 'react'

const TabsTrigger = forwardRef(({ isSelected, onClick, children, type, labelledby }, ref) => {
  return (
    <li
      ref={ref}
      className={`TabItem 
        ${isSelected ? 'is-selected' : ''}`}
      role='tab'
      aria-selected={isSelected}
      data-type={type}
      aria-labelledby={labelledby}
    >
      <button onClick={onClick}>
        {children}
      </button>
    </li>
  )
})

TabsTrigger.displayName = 'TabsTrigger'

export default TabsTrigger
