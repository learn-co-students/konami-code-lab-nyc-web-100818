const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

let ind = 0

function init() {
  document.body.addEventListener('keydown', (e) => {
    keyDown(e)
  })
}

function keyDown(e) {
  const key = e.key
  console.log(key)
  if (key === codes[ind]) {
    ind++
    if (ind === codes.length) {
      console.log(`UP UP DOWN DOWN LEFT RIGHT LEFT RIGHT B A!`)
      alert(`UP UP DOWN DOWN LEFT RIGHT LEFT RIGHT B A!`)
      ind = 0
    }
  } else {
    ind = 0
    console.log(`Incorrect key`)
  }
}
