/* eslint no-return-assign: 0, no-param-reassign: 0, no-undef: 0 */

import Signal from './Signal'
import Slots from './Slots'

class Emitter {
  constructor(id) {
    this._uid = -1
    this.coreID = id
    this.channelC = {}
    this.channelD = {}
    this.channelV = {}
    this.components = {}
    this.controlers = {}
    this.services = {}
    this.signal = new Signal(this.uid)
  }

  registerComponent = c => {
    c.uid = `@${this.getUID()}::${this.coreID}`
    c.signal = new Signal(this.uid)
    c.on = (type, cb) => this.addSlot(this.channelV, c.uid, type, cb, c)
    c.send = (type, signal) => this.broadcast(this.channelC, type, signal)
  }

  registerControler = C => {
    const uid = `@${this.getUID()}::${this.coreID}`
    const controler = new C()
    controler.uid = uid
    controler.signal = new Signal(uid)
    controler.on = (type, cb) => this.addSlot(this.channelC, uid, type, cb, C)
    controler.send = (type, signal) => this.broadcast(this.channelV, type, signal)
    controler.request = (type, signal) => this.broadcast(this.channelD, type, signal)
    controler.emit = (type, signal) => this.broadcast(this.channelC, type, signal)
    controler.init()
    this.controlers[uid] = controler
    return controler
  }

  registerService = S => {
    const uid = `@${this.getUID()}::${this.coreID}`
    const service = new S()
    service.uid = uid
    service.signal = new Signal(uid)
    service.on = (type, cb) => this.addSlot(this.channelD, uid, type, cb, S)
    service.respond = (type, signal) => this.broadcast(this.channelC, type, signal)
    service.init()
    this.services[uid] = service
    return service
  }

  /**
   * @private
   * Internal method to add Slot for any Component into this Emitter.
   * This is equivalent of addListener or registerNotification known
   * from different systems and implementations.
   * Can be invoked by any Component, however is encapsulated in subclasses
   * in order to simplify API as well as specify concrete channels of communication.
   * @param channel, slot channel
   * @param callerUID, unique id of the caller
   * @param type, type of signal
   * @param callback, listener of the caller that will be added to the slot
   * of certain type and channel
   */
  addSlot = (channel, callerUID, type, callback, c) => {
    if (channel[type] === undefined) channel[type] = new Slots()
    callback._c = c
    channel[type].asl(callerUID, callback)
  }

  /**
   * @private
   * Internal method to remove specific Slot and its callback assigned to
   * an Component from Emitter.
   * Can be invoked by any Component.
   * @param channel, slot channel
   * @param callerUID, unique id of the caller
   * @param type, type of signal
   */
  removeSlot = (channel, callerUID, type) => {
    const slots = channel[type]
    if (!slots || !slots.getSlotByUID(callerUID)) return

    slots.rsl(callerUID)
    if (slots.numSlots === 0) delete this.channel[type]
  }

  /**
   * @private
   * Broadcast signal in Multi-cast mode on specific channel and type
   * @param channel, slot channel
   * @param type
   * @param signal
   */
  broadcast = (channel, type, signal) => {
    if (!channel[type]) return
    channel[type].brc(signal)
  }

  emit = type => {
    this.broadcast(this.channelC, type, this.signal)
  }

  getUID = () => (this._uid += 1)
}

export default Emitter
