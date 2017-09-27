import * as auth from './service'

export const baseUrl = '/auth'

export default [
  {
    method: 'POST',
    route: '/',
    handlers: [
      auth.authUser
    ]
  },
  {
    method: 'POST',
    route: '/facebook',
    handlers: [
      auth.authFacebook
    ]
  },
  {
    method: 'GET',
    route: '/facebook/callback',
    handlers: [
      auth.authFacebookCallback
    ]
  } 
]
