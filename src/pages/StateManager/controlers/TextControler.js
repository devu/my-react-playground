import { UPDATE_TEXT, TEXT_UPDATED } from '../constants'

class TextControler {
  constructor() {
    this.words = ['Lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit']
  }

  init() {
    this.addSlot(UPDATE_TEXT, this.onTextUpdate)
  }

  onTextUpdate = () => {
    const word = this.getRandom(this.words)
    const extraWord = this.getRandom(this.words)
    this.sendSignal(TEXT_UPDATED, { text: word, extraWord })
  }

  getRandom = array => {
    const index = Math.round(Math.random() * (array.length - 1))
    return array[index]
  }
}

export default TextControler
