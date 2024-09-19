import React from "react";
class Profile extends React.Component {
  constructor(props) {
    super(props);
    console.log("child-constructor");
    this.state = {
      userInfo: {
        login: "Rani",
        public_repos: 30,
      },
    };
  }

  // it is called after the first render
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/reddirani8496");
    const response = await data.json();
    this.setState({
      userInfo: response,
    });
    console.log("child-componentDidMount");

    // if we don't clear the setinterval it will lead to performance issues, so we will clear in componentwillunmount
    // this.timer = setInterval(() => {
    //   console.log("timer");
    // }, 1000);
  }

  // it is called after every re-render
  componentDidUpdate() {
    console.log("child-componentDidUpdate");
  }

  // it is called to update the dom
  // componentWillUnmount() {
  //   clearInterval(this.timer);
  //   // clear the interval in componentWillUnmount to avoid memory leakage, otherwise it will continue to run indefinitely until the component is unmounted.

  //   console.log("child-componentWillUnmount");
  // }

  render() {
    console.log("child-render");
    return (
      <div>
        <h1>Profile component</h1>

        <img src={this?.state?.userInfo?.avatar_url} />
        <h3>Name: {this?.state?.userInfo?.login}</h3>
        <h3>Repos: {this?.state?.userInfo?.public_repos}</h3>
      </div>
    );
  }
}

export default Profile;
