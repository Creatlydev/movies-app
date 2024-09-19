/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from 'react'

import './Tab.css'
import TabItem from './TabItem'
import TabList from './TabList'

export default function Tab ({ tabs }) {
  const [activeTab, setActiveTab] = useState(0)
  const [styles, setStyles] = useState({})
  const tabRefs = useRef([])

  const handleClick = (index) => {
    setActiveTab(index)
  }

  useEffect(() => {
    const tabSelected = tabRefs.current[activeTab]

    if (tabSelected) {
      const { offsetWidth, offsetLeft } = tabSelected
      setStyles({ width: offsetWidth, left: offsetLeft })

      tabRefs.current[activeTab].scrollIntoView({
        block: 'center',
        inline: 'center',
        behavior: 'smooth'
      })
    }
  }, [activeTab])

  return (
    <div>
      <TabList style={styles}>
        {
        tabs.map(({ label }, index) => (
          <TabItem
            key={index}
            isSelected={activeTab === index}
            onClick={() => handleClick(index)}
            ref={(el) => (tabRefs.current[index] = el)}
          >
            {label}
          </TabItem>
        ))
      }
      </TabList>

      {/* <div className='TabContent'>
        {tabs[activeTab].content}
      </div> */}
    </div>
  )
}
