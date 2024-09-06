import logo from "./logo.svg";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import "./App.css";
import { query } from "express";

const posts = [
  { id: "1", title: "Post 1" },
  { id: "2", title: "Post 2" },
  { id: "3", title: "Post 3" },
  { id: "4", title: "Post 4" },
  { id: "5", title: "Post 5" },
];

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function App() {
  // const postsQuery = useQuery({
  //   queryKey: ["posts"],
  //   queryFn: () => wait(1000).then(() => [...posts]),
  // });
  const queryClient = useQueryClient();
  const postsQuery = useQuery({
    queryKey: ["posts"],
    queryFn: () => Promise.reject("Error in loading posts"),
  });

  const newMutationPost = useMutation({
    mutationFn: (title) => {
      return wait(1000).then(() => ({ id: crypto.randomUUID(), title }));
    },

    onSuccess: () => {
      queryClient.invalidateQueries("posts");
    },
  });

  if (postsQuery.isLoading) return <h1>Loading.....</h1>;

  if (postsQuery.isError) return <h1>{JSON.stringify(postsQuery.error)}</h1>;
  return (
    <div className="App">
      {postsQuery.data.map((post) => (
        <p id={post.id}>{post.title}</p>
      ))}
      <button
        disabled={newMutationPost.isLoading}
        onClick={() => newMutationPost.mutate("New Post")}
      ></button>
    </div>
  );
}

export default App;

/**
 *  /posts ["post"]
 *
 *  /posts/1 ["posts",1]
 *
 *  /posts?authorId=1 ["posts", {authorId: 1}]
 *
 *  /posts/2/comments  ["posts", 2, "comments"]
 */
