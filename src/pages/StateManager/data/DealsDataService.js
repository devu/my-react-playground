/* eslint no-return-assign: 0 */
import { DEALS_DATA_REQUEST, DEALS_DATA_RESPONSE } from '../constants'

class DealsDataService {
  constructor() {
    this.deals = null
  }

  init() {
    this.on(DEALS_DATA_REQUEST, this.onDataRequest)
  }

  onDataRequest = async () => {
    const data = this.deals
      ? this.deals
      : await fetch('http://localhost:3000/deals').then(res => this.deals = res.json())
    this.respond(DEALS_DATA_RESPONSE, data)
  }
}

export default DealsDataService
