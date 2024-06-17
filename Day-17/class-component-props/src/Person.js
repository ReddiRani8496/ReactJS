import React from "react";

class Person extends React.Component {
  render() {
    return (
      <>
        <h1>Person Details</h1>
        <p>Name: {this.props.name}</p>
        <p>Age: {this.props.age}</p>
      </>
    );
  }
}

export default Person;
