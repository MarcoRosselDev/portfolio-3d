/*
    <input type="text" class="inputText" />
    <button class="addButton">add</button>
    <button class="deleteButton">delete</button>
    <button class="deleteAll">delete all</button>

    <div class="list"></div>
*/

const inputText = document.querySelector(".inputText");
const addButton = document.querySelector(".addButton");
const deleteButton = document.querySelector(".deleteButton");
const deleteAll = document.querySelector(".deleteAll");
const list = document.querySelector(".list");

let listArray = [];
const areLocalStorage = JSON.parse(localStorage.getItem("reminder"));

if (areLocalStorage) {
  listArray = areLocalStorage;
  print();
}

addButton.addEventListener("click", function () {
  listArray.push(inputText.value);
  inputText.value = "";
  localStorage.setItem("reminder", JSON.stringify(listArray));
  print();
});

deleteAll.addEventListener("click", function () {
  localStorage.clear();
  listArray = [];
  print();
});

deleteButton.addEventListener("click", function () {
  listArray.pop();
  print();
});

function print() {
  let printDOM = "";

  for (let i = 0; i < listArray.length; i++) {
    printDOM += `<h2>${listArray[i]} </h2>`;
  }

  list.innerHTML = printDOM;
}
