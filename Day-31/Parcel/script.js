import react from "react";
import ReactDOM from "react-dom/client";
const heading = react.createElement("h1", { id: "title" }, "Heading");

const subHeading = react.createElement(
  "h3",
  { id: "subHeading" },
  "Subheading"
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(react.createElement("div", null, [heading, subHeading]));
