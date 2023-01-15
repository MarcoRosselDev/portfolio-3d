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

addButton.addEventListener("click", function () {
  inner.push(inputText.value);

  // addText.innerHTML = "<h2>hola</h2>";
  addText.innerHTML = `<h2>${inner}</h2>`;
  console.log(inner);
  console.log(inner.push);
  inputText.value = "";
});
