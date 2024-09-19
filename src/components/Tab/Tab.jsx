import { useState, useEffect, useRef } from 'react'

import './Tab.css'
import TabItem from './TabItem'
import TabList from './TabList'

export default function Tab ({ tabs, title }) {
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
      <header className='TabHeader'>
        {title && <h2 className='TabHeader-title'>{title}</h2>}
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
      </header>

      <div className='TabContent'>
        {tabs[activeTab].content ? tabs[activeTab].content : <p>Nada por mostrar</p>}
      </div>
    </div>
  )
}
