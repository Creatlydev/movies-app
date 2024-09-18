/* eslint-disable react/prop-types */

export default function TabList ({ children, ...props }) {
  return (
    <ul className='TabList' role='tablist'>
      {children}
      <div className='TabList-indicator' {...props} />
    </ul>
  )
}
