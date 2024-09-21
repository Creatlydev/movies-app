import Tabs from '../Tabs/Tabs'

export default function MoviesGeneric ({ tabs, title, mediaType, contentType }) {
  return (
    <section className='Trends Section generic'>
      <div className='container'>
        <Tabs
          tabs={tabs}
          title={title}
          mediaType={mediaType}
          contentType={contentType}
        />
      </div>
    </section>
  )
}
