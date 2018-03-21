import {
  GET_DEAL_BY_ID,
  GET_DEAL_BY_NAME,
  DEALS_DATA_REQUEST,
  DEALS_DATA_RESPONSE,
  ON_DEALS_DATA,
  ON_DEAL_DATA
} from '../constants'

class DealsControler {
  constructor() {
    this.deals = []
  }

  init() {
    this.addSlot(GET_DEAL_BY_ID, this.getDealById)
    this.addSlot(GET_DEAL_BY_NAME, this.getDealByName)
    this.addSlot(DEALS_DATA_RESPONSE, this.onDealsData)

    this.request(DEALS_DATA_REQUEST)
  }

  onDealsData = deals => {
    this.deals = deals
    this.sendSignal(ON_DEALS_DATA)
  }

  getDealById = ({ id }) => {
    const deal = this.deals.find(d => d.id === id)
    this.sendSignal(ON_DEAL_DATA, deal)
  }

  getDealByName = ({ name }) => {
    const deal = this.deals.find(d => d.name === name)
    this.sendSignal(ON_DEAL_DATA, deal)
  }
}

export default DealsControler
