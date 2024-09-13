import React from "react";
import { Outlet } from "react-router-dom";
import Profile from "./ProfileComponent";

// function AboutUs() {
//   return (
//     <div>
//       <h1>About Us Page</h1>
//       <p>This is the about us page.</p>
//       <Outlet />
//     </div>
//   );
// }

// export default AboutUs;

class AboutUs extends React.Component {
  constructor(props) {
    super(props);
    console.log("parent-constructor");
  }

  componentDidMount() {
    console.log("parent-componentDidMount");
  }
  render() {
    console.log("parent-render");
    return (
      <div>
        <div style={{ marginBottom: "50px" }}>
          <h1>About Us Page</h1>
          <p>This is the about us page.</p>
        </div>
        <Profile name="reddirani" />
      </div>
    );
  }
}

export default AboutUs;
