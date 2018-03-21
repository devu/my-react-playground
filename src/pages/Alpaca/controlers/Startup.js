/* eslint no-return-assign: 0, no-console: 0 */
import { INITIALISE, ON_INITIALISED } from '../constants'

class Starup {
  init() {
    this.addSlot(INITIALISE, () => {
      console.log('Starup::INITIALISE')
      this.request(INITIALISE)
    })

    this.addSlot(ON_INITIALISED, () => {
      console.log('Starup::ON_INITIALISED')
      this.sendSignal(ON_INITIALISED)
    })
  }
}

export default Starup
