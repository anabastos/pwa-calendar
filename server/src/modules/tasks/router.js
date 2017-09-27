import * as task from './service'

export const baseUrl = '/task'

export default [
  {
    method: 'GET',
    route: '/',
    handlers: [
      task.getTask
    ]
  },
    {
    method: 'POST',
    route: '/',
    handlers: [
      task.postTask
    ]
  }
]
