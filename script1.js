const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", () => {
  function randomcolor() {
    let randomcolor = Math.floor(Math.random() * hex.length);
    return randomcolor;
  }
  let hexcode = "#";

  for (let i = 0; i < 6; i++) {
    hexcode += hex[randomcolor()];
  }
  document.body.style.backgroundColor = hexcode;
  color.textContent = hexcode;
});

// function randomcolor() {
//   let randomcolor = Math.floor(Math.random() * hex.length);
//   return randomcolor;
// }
