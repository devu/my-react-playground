import { signals } from '../constants'

class DefaultControler {
  constructor() {
    this.colors = ['red', 'orange', 'yellow', 'olive', 'green', 'teal', 'blue', 'violet', 'purple']
    this.words = ['Lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit']
  }

  init() {
    const { UPDATE_COLOR, UPDATE_TEXT } = signals

    this.addSlot(UPDATE_COLOR, this.onColorUpdate)
    this.addSlot(UPDATE_TEXT, this.onTextUpdate)
  }

  onColorUpdate = () => {
    const color = this.getRandom(this.colors)
    this.sendSignal(signals.COLOR_UPDATED, { color })
  }

  onTextUpdate = () => {
    const word = this.getRandom(this.words)
    const extraWord = this.getRandom(this.words)
    this.sendSignal(signals.TEXT_UPDATED, { text: word, extraWord })
  }

  getRandom = array => {
    const index = Math.round(Math.random() * (array.length - 1))
    return array[index]
  }
}

export default DefaultControler
