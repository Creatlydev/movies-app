import { EVENTS } from '../consts'

export function navigate (href) {
  window.history.pushState({}, '', href)

  // crear un evento personalizado
  const navigationEvent = new Event(EVENTS.PUSHSTATE)
  window.dispatchEvent(navigationEvent)
}
