import { BUTTONS, EVENTS } from '../consts'

function navigate (href) {
  console.log({ href })
  window.history.pushState({}, '', href)

  // crear un evento personalizado
  const navigationEvent = new Event(EVENTS.PUSHSTATE)
  window.dispatchEvent(navigationEvent)
}

export function Link ({ target, to, ...props }) {
  const handleClick = (event) => {
    const isMainEvent = event.button === BUTTONS.primary // primary click
    const isModifiedEvent = event.metaKey || event.altKey || event.ctrlKey || event.shiftKey
    const isManageableEvent = target === undefined || target === '_self'

    if (isMainEvent && isManageableEvent && !isModifiedEvent) {
      event.preventDefault()
      navigate(to) // Navegacion con SPA
    }
  }

  return <a onClick={handleClick} href={to} target={target} {...props} />
}
