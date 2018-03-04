import URLSearchParams from 'url-search-params'

const queryString = searchParams => {
  if (!searchParams) {
    return ''
  }

  const qs = new URLSearchParams()

  Object.keys(searchParams).forEach(key => qs.append(key, searchParams[key]))

  return qs.toString()
}

export default queryString
