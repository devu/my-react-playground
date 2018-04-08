import { UPDATE_TEXT } from '../constants'

class TextControler {
  constructor() {
    this.words = ['Lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit']
  }

  init() {
    this.on(UPDATE_TEXT, this.onTextUpdate)
  }

  onTextUpdate = () => {
    const word = this.getRandom(this.words)
    const extraWord = this.getRandom(this.words)
    this.send(UPDATE_TEXT, { text: word, extraWord })
  }

  getRandom = array => {
    const index = Math.round(Math.random() * (array.length - 1))
    return array[index]
  }
}

export default TextControler
