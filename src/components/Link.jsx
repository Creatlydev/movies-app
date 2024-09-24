import { flushSync } from 'react-dom'

import { BUTTONS } from '../consts'
import { navigate } from '../utils/navigate'

export function Link ({ target, to, ...props }) {
  const handleClick = (event) => {
    const isMainEvent = event.button === BUTTONS.primary // primary click
    const isModifiedEvent = event.metaKey || event.altKey || event.ctrlKey || event.shiftKey
    const isManageableEvent = target === undefined || target === '_self'

    if (isMainEvent && isManageableEvent && !isModifiedEvent) {
      event.preventDefault()
      document.startViewTransition(() => {
        flushSync(() => {
          navigate(to) // Navegacion con SPA
        })
      })
    }
  }

  return <a onClick={handleClick} href={to} target={target} {...props} />
}
