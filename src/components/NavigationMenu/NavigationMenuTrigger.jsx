/* eslint-disable react/prop-types */

export default function NavigationMenuTrigger ({ children, onClick }) {
  return (
    <button onClick={onClick} className='MenuTrigger'>
      {children}
    </button>
  )
}
NavigationMenuTrigger.displayName = 'NavigationMenuTrigger'
