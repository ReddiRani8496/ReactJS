import logo from "./logo.svg";
import { useQuery, useMutation } from "@tanstack/react-query";
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
  const postsQuery = useQuery({
    queryKey: ["posts"],
    queryFn: () => Promise.reject("Error in loading posts"),
  });

  if (postsQuery.isLoading) return <h1>Loading.....</h1>;

  if (postsQuery.isError) return <h1>{JSON.stringify(postsQuery.error)}</h1>;
  return <div className="App">React Query</div>;
}

export default App;
