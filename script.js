const contianer = document.querySelector(".container");
const divs = [];

for (let i = 0; i < 256; i++) {
  divs[i] = document.createElement("div");
  contianer.appendChild(divs[i]);
}
