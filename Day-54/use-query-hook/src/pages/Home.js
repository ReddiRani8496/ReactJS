import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function Home() {
  const { catData, isLoading, isError } = useQuery({
    queryKey: ["catFact"],
    queryFn: async () =>
      await axios.get("https://catfact.ninja/fact").then((res) => res.data),
  });
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {isError.message}</div>;

  return (
    <div>
      <p>{catData?.fact}</p>
    </div>
  );
}

export default Home;
