/* eslint no-return-assign: 0 */
import { signals } from '../constants'

class DealsDataService {
  constructor() {
    this.deals = null
  }

  init() {
    this.addSlot(signals.DEALS_DATA_REQUEST, this.onDataRequest)
  }

  onDataRequest = async () => {
    const data = this.deals
      ? this.deals
      : await fetch('http://localhost:3000/deals').then(res => this.deals = res.json())
    this.response(signals.DEALS_DATA_RESPONSE, data)
  }
}

export default DealsDataService
