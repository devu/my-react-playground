import HttpStatus from 'http-status-codes'

function redirectIfUnauthorized(response) {
  return response.status === HttpStatus.UNAUTHORIZED
    ? document.location.assign('/#logout')
    : response
}

export default function (...args) {
  return fetch(...args).then(redirectIfUnauthorized)
}
