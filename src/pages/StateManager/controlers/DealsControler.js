import { signals } from '../constants'

class DealsControler {
  constructor() {
    this.deals = []
  }

  init() {
    this.addSlot(signals.GET_DEAL_BY_ID, this.getDealById)
    this.addSlot(signals.GET_DEAL_BY_NAME, this.getDealByName)
    this.addSlot(signals.DEALS_DATA_RESPONSE, this.onDealsData)

    this.request(signals.DEALS_DATA_REQUEST)
  }

  onDealsData = deals => {
    this.deals = deals
    this.sendSignal(signals.ON_DEALS_DATA)
  }

  getDealById = ({ id }) => {
    const deal = this.deals.find(d => d.id === id)
    this.sendSignal(signals.ON_DEAL_DATA, deal)
  }

  getDealByName = ({ name }) => {
    const deal = this.deals.find(d => d.name === name)
    this.sendSignal(signals.ON_DEAL_DATA, deal)
  }
}

export default DealsControler
