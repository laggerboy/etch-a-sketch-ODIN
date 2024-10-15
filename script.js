let gridSize = 16;
let color = "black";
let isToggled = false;

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
    if (colorBtn.className === "active") {
      event.target.style.backgroundColor = `rgb( ${rgb()}, ${rgb()}, ${rgb()})`;
    } else if (darkenBtn.className === "active") {
      if (event.target.style.backgroundColor === "aliceblue") {
        event.target.style.opacity = 0.1;
        event.target.style.backgroundColor = "blue";
      } else {
        event.target.style.opacity =
          parseFloat(event.target.style.opacity) + 0.1;
      }
    } else {
      event.target.style.backgroundColor = "black";
    }
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
  reset();
});

colorBtn.addEventListener("click", function () {
  colorBtn.classList.toggle("active");
  darkenBtn.classList.remove("active");
});

darkenBtn.addEventListener("click", function () {
  Array.from(container.children).forEach((child) => {
    child.style.backgroundColor = "aliceblue";
    child.style.opacity = 1;
  });
  darkenBtn.classList.toggle("active");
  colorBtn.classList.remove("active");
});

function rgb() {
  return Math.floor(Math.random() * 256);
}

function reset() {
  Array.from(container.children).forEach((child) => {
    child.style.backgroundColor = "aliceblue";
    child.style.opacity = 1;
  });
  color = "black";
  darkenBtn.classList.remove("active");
  colorBtn.classList.remove("active");
}
