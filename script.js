let gridSize = 16;

// create div to fill the grid
let div = document.createElement("div");
const btn = document.querySelector("#btn");

const container = document.querySelector(".container");

for (let i = 0; i < gridSize * gridSize; i++) {
  let newDiv = div.cloneNode();

  container.appendChild(newDiv);
}

container.addEventListener("mouseover", function () {
  // prevent event from firing on parent div
  if (event.target !== event.currentTarget) {
    event.target.style.backgroundColor = " bisque";
  }
});

btn.addEventListener("click", function () {
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
