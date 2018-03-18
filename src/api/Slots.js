/* eslint no-return-assign: 0, no-plusplus: 0, no-unused-expressions: 0 */
// I'm sorry but this must be fast not pretty :P double linked list implementation

function Slot(uid, cb) {
  this.uid = uid
  this.send = cb
}

function Slots() {
  let h
  let t
  let i = -1

  this.asl = (uid, cb) => {
    const cs = new Slot(uid, cb)
    cs.i = ++i
    h ? (h.n = cs) : (t = cs)
    h = cs
  }

  this.rsl = uid => {
    let w = t
    let p
    while (w.n && w.uid !== uid) {
      p = w
      w = w.n
    }
    if (p && w.n) p.n = w.n
    p = null
    w = null
    i--
    if (i < 0) {
      h = null
      t = null
    }
  }

  this.brc = s => {
    let w = t
    while (w.n) {
      w.send.call(w.send._c, s)
      w = w.n
    }
    w.send.call(w.send._c, s)
  }

  this.num = () => i + 1
}

export default Slots
