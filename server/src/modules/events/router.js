import * as event from './service'

export const baseUrl = '/event'

export default [
  {
    method: 'GET',
    route: '/',
    handlers: [
      event.getEvent
    ]
  },
    {
    method: 'POST',
    route: '/',
    handlers: [
      event.postEvent
    ]
  }
]
