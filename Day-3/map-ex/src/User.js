function User(props) {
  return (
    <div id="displaydata">
      <h1>{props.name}</h1>
      <p>{props.age}</p>
    </div>
  );
}

export default User;
