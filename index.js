const colors = [
  "pink",
  "purple",
  "red",
  "orange",
  "green",
  "blue",
  "black",
  "yellow",
  "white",
];

// target the elements
const btn = document.getElementById("btn1");
const body = document.body;
const textVal = document.getElementById("txt-val");

btn.addEventListener("click", function () {
  instance = Math.floor(Math.random() * colors.length);
  body.style.backgroundColor = colors[instance];
  textVal.textContent = colors[instance];
});
