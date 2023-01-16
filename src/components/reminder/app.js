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

addButton.addEventListener("click", function () {
  console.log(inputText.value);
});
