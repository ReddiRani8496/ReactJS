import React, { useState } from "react";

const UserList = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "Rahul" },
    { id: 2, name: "Leela" },
    { id: 3, name: "Rama" },
    { id: 4, name: "Revanth" },
  ]);

  const [foundUser, setFoundUser] = useState(null);

  const findUserByName = (name) => {
    const user = users.find(
      (user) => user.name.toLowerCase() === name.toLowerCase()
    );
    setFoundUser(user);
  };

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>

      <button onClick={() => findUserByName("Leela")}>Find Leela</button>

      {foundUser ? <p>Found User: {foundUser.name}</p> : <p>No user found</p>}
    </div>
  );
};

export default UserList;
