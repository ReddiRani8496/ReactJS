import React, { cache } from "react";
import Image from "next/image";

const getPosts = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

const getUsers = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

// cache:"no-store" allows us to get new dog image whenever we refresh the page

const dogData = async () => {
  try {
    const response = await fetch("https://dog.ceo/api/breeds/image/random", {
      cache: "no-store",
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
async function page() {
  const [posts, users, dog] = await Promise.all([
    getPosts(),
    getUsers(),
    dogData(),
  ]);
  return (
    <div>
      <Image src={dog.message} alt="dog image" width={300} height={300} />
      <div>
        <h1>Posts</h1>
        {posts.map((post: any) => (
          <p>{post.title}</p>
        ))}
      </div>
      <div>
        <h1>Users</h1>
        {users.map((user: any) => (
          <p>{user.name}</p>
        ))}
      </div>
    </div>
  );
}

export default page;
