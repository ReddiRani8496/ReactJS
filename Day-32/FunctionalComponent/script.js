import React from "react";
import ReactDOM from "react-dom/client";

const Heading = <h1>Welcome to Xable</h1>;

const Title = () => {
  return <h1>Learn, grow</h1>;
};

const HeaderComponent = () => (
  <div>
    {Heading}
    {Title()}
    {/* because title is just normal javascript function so we can call it as a function or component */}
    {/*adding one component inside another component is called as component composition */}
    {<Title />}
    <p>Powered by Xable</p>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent />);
