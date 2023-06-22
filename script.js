//your JS code here. If required.
function updateText() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello, world!");
    }, 1000);
  });
}

// Retrieve the HTML element
const outputElement = document.getElementById("output");

// Call the updateText function and update the HTML element text after the promise resolves
updateText().then((text) => {
  outputElement.innerText = text;
});