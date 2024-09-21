import { useState } from 'react'

import Tabs from '../Tabs/Tabs'

export default function MoviesWithBackground ({ tabs, ...props }) {
  const [backgroundImage, setBackgroundImage] = useState('')
  return (
    <section
      className='MoviesByStatus'
      style={{
        '--bg-image': `url(${backgroundImage})`
      }}
    >
      <div className='container'>
        <Tabs
          tabs={tabs}
          {...props}
          setHoverBgImage={setBackgroundImage}
        />
      </div>
    </section>
  )
}
