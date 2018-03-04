import fetch from '../helpers/fetch'
import queryString from '../../tools/queryString'
import dealsTransformer from './dealsTransformer'

const DEFAULT_PAGE = 1
const DEFAULT_PAGE_LIMIT = 10

const dealsRepository = {
  findAll: async ({ page = DEFAULT_PAGE, limit = DEFAULT_PAGE_LIMIT } = {}) => {
    const response = await fetch(
      `/dealroom/api/v1/dealrooms?${queryString({ page, limit })}`,
      {
        credentials: 'same-origin'
      }
    )

    if (response.ok) {
      const responseJson = await response.json()
      return dealsTransformer.allFromApi(responseJson)
    }

    throw new Error(response.statusText)
  },
  findById: async id => {
    const response = await fetch(`/dealroom/api/v1/dealrooms/${id}`, {
      credentials: 'same-origin'
    })
    if (response.ok) {
      const responseJson = await response.json()
      return dealsTransformer.fromApi(responseJson)
    }

    throw new Error(response.statusText)
  }
}

export default dealsRepository
