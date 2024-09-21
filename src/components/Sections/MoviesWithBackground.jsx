import { useState } from 'react'

import Tabs from '../Tabs/Tabs'

export default function MoviesWithBackground ({ tabs, title, mediaType, contentType }) {
  const [backgroundImage, setBackgroundImage] = useState('')
  return (
    <section
      className='MoviesByStatus Section with-background'
      style={{
        '--bg-image': `url(${backgroundImage})`
      }}
    >
      <div className='container'>
        <Tabs
          tabs={tabs}
          title={title}
          contentType={contentType}
          mediaType={mediaType}
          onMouseEnter={setBackgroundImage}
        />
      </div>
    </section>
  )
}
