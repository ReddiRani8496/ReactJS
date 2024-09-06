import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getPosts } from "./api/posts";

function PostList1() {
  const postQuery = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });

  if (postQuery.isLoading) {
    return <div>Loading...</div>;
  }
  if (postQuery.isError) {
    return <div>Error: {postQuery.error.message}</div>;
  }
  return (
    <div>
      <h1>Post List 1</h1>
      {postQuery.data.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </div>
  );
}

export default PostList1;
