import { UPDATE_COLOR } from '../constants'

class ColorControler {
  constructor() {
    this.colors = ['red', 'orange', 'yellow', 'olive', 'green', 'teal', 'blue', 'violet', 'purple']
  }

  init() {
    this.on(UPDATE_COLOR, this.onColorUpdate)
  }

  onColorUpdate = () => {
    const color = this.getRandom(this.colors)
    this.send(UPDATE_COLOR, { color })
  }

  getRandom = array => {
    const index = Math.round(Math.random() * (array.length - 1))
    return array[index]
  }
}

export default ColorControler
