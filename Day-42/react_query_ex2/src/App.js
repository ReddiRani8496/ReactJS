import "./App.css";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

function App() {
  const client = useQueryClient();
  const { data, isLoading, error } = useQuery({
    queryKey: ["todo"],
    queryFn: () =>
      fetch("https://jsonplaceholder.typicode.com/todos").then((res) =>
        res.json()
      ),
  });

  const { mutate, isPending, isError } = useMutation({
    mutationFn: (newPost) =>
      fetch("https://jsonplaceholder.typicode.com/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newPost),
      }).then((res) => res.json()),
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ["todo"] });
    },
  });

  if (isLoading || isPending) return <h1>Loading....</h1>;
  if (error || isError) return <h1>Error: {error.message}</h1>;

  return (
    <div className="App">
      <button
        onClick={() => {
          mutate({
            userId: 5000,
            id: 4000,
            title: "Use Mutation",
            completed: false,
          });
        }}
      >
        Add Post
      </button>
      {data && data.map((todo) => <p key={todo.id}>{todo.title}</p>)}
    </div>
  );
}

export default App;
