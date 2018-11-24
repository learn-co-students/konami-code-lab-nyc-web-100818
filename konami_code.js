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

function init() {
  index = 0
  const test = document.body.addEventListener('keydown', event =>{
    const key = event.key;
    console.log(`typed: ${key}`);
    if (key === codes[index]) {
      index++;
     if (index === codes.length) {
       alert("Hurray!");
        index = 0;
      }
    }else {
     index = 0;
    }
  });
}
