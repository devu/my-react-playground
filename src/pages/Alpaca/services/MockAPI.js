/* eslint no-return-assign: 0, no-console: 0 */
import { INITIALISE, ON_INITIALISED } from '../constants'

class MockAPI {

  init() {
    console.log('MockAPI::Init')
    this.addSlot(INITIALISE, async () => {
      console.log('MockAPI::fetch')
      const data = await fetch('http://localhost:3000/deals').then(res => this.deals = res.json())
      this.response(ON_INITIALISED, data)
    })
  }
}

export default MockAPI

