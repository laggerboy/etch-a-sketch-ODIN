let gridSize = 16;
let opacity = 0.02;
// create div to fill the grid
let div = document.createElement("div");
const gridBtn = document.querySelector("#grid-btn");
const resetBtn = document.querySelector("#reset-btn");
const colorBtn = document.querySelector("#color-btn");
const darkenBtn = document.querySelector("#darken-btn");

const container = document.querySelector(".container");

for (let i = 0; i < gridSize * gridSize; i++) {
  let newDiv = div.cloneNode();

  container.appendChild(newDiv);
}

container.addEventListener("mouseover", function () {
  // prevent event from firing on parent div
  if (event.target !== event.currentTarget) {
    event.target.style.backgroundColor = ` black`;
    // event.target.style.opacity = opacity;
    // opacity += 0.02;
  }
});

gridBtn.addEventListener("click", function () {
  gridSize = prompt("please enter the number of rows/columns");
  if (gridSize < 101) {
    container.replaceChildren();
    for (let i = 0; i < gridSize * gridSize; i++) {
      let newDiv = div.cloneNode();

      newDiv.style.width = `${100 / gridSize}%`;
      newDiv.style.height = `${100 / gridSize}%`;

      container.appendChild(newDiv);
    }
  }
});

resetBtn.addEventListener("click", function () {
  Array.from(container.children).forEach((child) => {
    child.style.backgroundColor = "aliceblue";
  });
});

function rgb() {
  return Math.floor(Math.random() * 256);
}
// rgb( ${rgb()}, ${rgb()}, ${rgb()})
