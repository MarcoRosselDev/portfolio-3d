/*
<section>
      <h1>Portfolio 3d</h1>

      <input type="text" class="inputTipeText" />
      <button class="addButton">add</button>
      <button class="deleteButton">delete</button>
      <button class="deleteAllButton">delete all</button>
      <h2 class="addText"></h2>
</section>
*/

const inputText = document.querySelector(".inputTipeText");
const addButton = document.querySelector(".addButton");
const addText = document.querySelector(".addText");

let inner = [];

let areLocalStorage = JSON.parse(localStorage.getItem("miGato"));
console.log(areLocalStorage);

addButton.addEventListener("click", function () {
  //
  inner.push(inputText.value);
  print();
  // local Storage:
  localStorage.setItem("miGato", JSON.stringify(inner));
  inputText.value = "";
});

function print() {
  let printDom = "";

  for (let i = 0; i < inner.length; i++) {
    printDom += `<h2>${inner[i]}</h2>`;
  }

  addText.innerHTML = printDom;
}
