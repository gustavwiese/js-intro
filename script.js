console.log("Hej Gustav!");

window.addEventListener("load", start);

function start() {
  document.querySelector("#square").addEventListener("click", tiltedSquare);
  document.querySelector("#circle").addEventListener("click", specialCircle)
}

function normalCircle() {
  document.querySelector("#circle").classList.remove("move");
  document.querySelector("#circle").classList.remove("size");
}
function specialCircle() {
    document.querySelector("#circle").removeEventListener("click", specialCircle);
  document.querySelector("#circle").classList.add("move");
  document.querySelector("#circle").classList.add("size");
  console.log("specialCircle");
}
function tiltedSquare() {
  console.log("tiltedSquare");
  document.querySelector("#square").removeEventListener("click", tiltedSquare);
  document.querySelector("#square").classList.add("tilt");
  document.querySelector("#square").classList.add("size");
}

