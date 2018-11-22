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

let index = 0;


function onKeyDownHandler(e) {

  const key = e.key;

  if (key === codes[index]) {
    index++;
    console.log(key);

    if (index === codes.length) {
      window.alert("Success!");

      index = 0;
    }
  } else {
    index = 0;
  }
}



function init() {
  // your code here

  // const testLog = function (e) {
  //   console.log(`you pressed ${e.key}`)
  // }

  document.body.addEventListener('keydown', onKeyDownHandler)


}
