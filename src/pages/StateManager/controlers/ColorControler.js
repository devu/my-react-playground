import { UPDATE_COLOR, COLOR_UPDATED } from '../constants'

class ColorControler {
  constructor() {
    this.colors = ['red', 'orange', 'yellow', 'olive', 'green', 'teal', 'blue', 'violet', 'purple']
  }

  init() {
    this.addSlot(UPDATE_COLOR, this.onColorUpdate)
  }

  onColorUpdate = () => {
    const color = this.getRandom(this.colors)
    this.sendSignal(COLOR_UPDATED, { color })
  }

  getRandom = array => {
    const index = Math.round(Math.random() * (array.length - 1))
    return array[index]
  }
}

export default ColorControler
