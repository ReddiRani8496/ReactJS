import logo from "./logo.svg";
import "./App.css";
import { motion } from "framer-motion";

function App() {
  function addTwoNums(a, b) {
    console.log(a + b);
    return a + b;
  }
  return (
    <div className="App">
      <motion.button
        className={`font-bold py-1 px-4 rounded mt-3 w-full transition-colors duration-300 
        } text-white`}
        whileTap={{ scale: 0.9 }}
        onClick={(e) => {
          e.stopPropagation();
          addTwoNums(10, 20);
        }}
      >
        Add to Cart
      </motion.button>
    </div>
  );
}

export default App;
