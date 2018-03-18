/* eslint no-return-assign: 0, no-console: 0, no-undef: 0 */

import Emitter from './Emitter'

class BixBite {
  constructor() {
    this.cores = {}
    this.spawnCore = this.spawnCore.bind(this)
  }

  spawnCore = coreId => {
    const c = new Emitter(coreId)
    this.cores[coreId] = c
    return c
  }

  destroyCore = coreId => {
    if (this.cores[coreId]) {
      this.cores[id].destroy()
      this.cores[id] = null
      delete this.cores[id]
    }
  }

  registerControler = (id, controler) => {
    if (!this.cores[id]) noEmmiter(id)
    return this.cores[id].registerControler(controler)
  }

  registerDataService = (id, service) => {
    if (!this.cores[id]) noEmmiter(id)
    return this.cores[id].registerDataService(service)
  }

  connect = (id, component) => {
    if (!this.cores[id]) noEmmiter(id)
    return this.cores[id].registerComponent(component)
  }

  noEmmiter = id => {
    throw new Error(`There is no emitter with id ${id}`)
  }

}

const bixbite = new BixBite()
export default bixbite
