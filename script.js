const colors = ["green", "red", "aqua", "rgb(133,122,200)", "#f15023"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  let randomcolor = Math.floor(Math.random() * colors.length);
  console.log(randomcolor);
  document.body.style.backgroundColor = colors[randomcolor];
  color.textContent = colors[randomcolor];
});
