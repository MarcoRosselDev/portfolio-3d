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
const deleteButton = document.querySelector(".deleteButton");
const deleteAllButton = document.querySelector(".deleteAllButton");
const addText = document.querySelector(".addText");

let inner = [];

let areLocalStorage = JSON.parse(localStorage.getItem("miGato"));

if (areLocalStorage) {
  inner = areLocalStorage;
  print();
}

addButton.addEventListener("click", function () {
  //
  inner.push(inputText.value);
  print();
  saveLocalStorage();
  inputText.value = "";
});

deleteButton.addEventListener("click", function () {
  console.log(inner);
  inner.pop();
  saveLocalStorage();
  print();
});

deleteAllButton.addEventListener("click", function () {
  localStorage.clear();
  inner = [];
  print();
});

function print() {
  let printDom = "";

  for (let i = 0; i < inner.length; i++) {
    printDom += `<h2>${inner[i]}</h2>`;
  }

  addText.innerHTML = printDom;
}

function saveLocalStorage() {
  // local Storage:
  localStorage.setItem("miGato", JSON.stringify(inner));
}
