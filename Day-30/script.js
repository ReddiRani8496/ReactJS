const heading = React.createElement("h1", { id: "title" }, "Heading");

const subHeading = React.createElement(
  "h3",
  { id: "subHeading" },
  "Subheading"
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(React.createElement("div", null, [heading, subHeading]));
