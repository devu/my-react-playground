/* eslint no-return-assign: 0, no-console: 0, no-undef: 0 */

import Emitter from './Emitter'

class BixBite {
  constructor() {
    this.defaultCore = ''
    this.cores = {}
  }

  spawnCore = (id, isDefault) => {
    if (isDefault) this.defaultCore = id
    return this.cores[id] = new Emitter(id)
  }

  destroyCore = id => {
    if (this.get(id)) {
      this.cores[id].destroy()
      this.cores[id] = null
      delete this.cores[id]
    }
  }

  registerControler = (controler, id) => this.get(id).registerControler(controler)

  registerControlers = (controlers, id) => {
    controlers.forEach(controler => this.registerControler(controler, id))
  }

  registerService = (service, id) => {
    this.get(id).registerService(service)
  }

  registerServices = (services, id) => {
    services.forEach(service => this.registerControler(service, id))
  }

  connect = (component, id) => {
    this.get(id).registerComponent(component)
  }

  send = (type, id) => {
    this.get(id).emit(type)
  }

  get = id => {
    const sid = id || this.defaultCore
    if (!this.cores[sid]) {
      throw new Error(`There is no emitter with id ${sid}`)
    }
    return this.cores[sid]
  }
}

const bixbite = new BixBite()
export default bixbite
