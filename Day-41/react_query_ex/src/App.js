import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import PostList1 from "./PostList1";
import PostList2 from "./PostList2";

function App() {
  const [currentPage, setCurrentPage] = useState(<PostList1 />);
  return (
    <div className="App">
      <button onClick={() => setCurrentPage(<PostList1 />)}>PostList1</button>

      <button onClick={() => setCurrentPage(<PostList2 />)}>PostList2</button>
      {currentPage}
    </div>
  );
}

export default App;
