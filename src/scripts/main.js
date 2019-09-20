// Write an event listener that listens for the keyup event on the input field.
// The event handler function should update the textContent property of both sections.

  
let firstArticle = document.getElementById("firstArticle")
let secondArticle = document.getElementById("secondArticle")
let inputElement = document.querySelector("input")

const updateTextContent = (event) => {
  firstArticle.textContent = inputElement.value
  secondArticle.textContent = inputElement.value
}

inputElement.addEventListener("keyup", updateTextContent)