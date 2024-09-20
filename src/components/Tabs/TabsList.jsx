export default function TabsList ({ children, ...props }) {
  return (
    <ul className='TabList' role='tablist'>
      {children}
      <div className='TabList-indicator' {...props} />
    </ul>
  )
}
