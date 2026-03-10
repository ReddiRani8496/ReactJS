// select parent
const list = document.getElementById("list");

// event delegation
list.addEventListener("click", function (e) {
  // check which child clicked
  if (e.target.tagName === "LI") {
    console.log("Clicked:", e.target.textContent);
  }
});

//html code
// <!DOCTYPE html>
// <html>
// <head>
//   <title>Event Delegation Example</title>
// </head>
// <body>

//   <h2>Event Delegation Example</h2>

//   <ul id="list">
//     <li>Item 1</li>
//     <li>Item 2</li>
//     <li>Item 3</li>
//     <li>Item 4</li>
//   </ul>

//   <script src="script.js"></script>

// </body>
// </html>
