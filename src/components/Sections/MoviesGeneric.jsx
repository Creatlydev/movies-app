import Tabs from '../Tabs/Tabs'

export default function MoviesGeneric ({ tabs, ...props }) {
  return (
    <section className='Trends'>
      <div className='container'>
        <Tabs
          tabs={tabs}
          {...props}
        />
      </div>
    </section>
  )
}
