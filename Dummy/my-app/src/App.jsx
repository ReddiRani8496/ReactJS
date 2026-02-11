import { useEffect, useState } from "react";
import { Body } from "./components/Body";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import "./App.css";

function App() {
  const [value, setValue] = useState(0);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // fetch students from API on mount
    fetch("http://localhost:8080/getStudents")
      .then((res) => res.json())
      .then((data) => setStudents(data))
      .catch((err) => console.error("Error fetching students: ", err));
  }, []);

  const handleIncrement = () => {
    setValue(value + 1);
  };

  const handleDecrement = () => {
    setValue(value - 1);
  };

  const handleReset = () => {
    setValue(0);
  };

  return (
    <div>
      <h2>Student List</h2>
      {students.length === 0 ? (
        <p>Loading students...</p>
      ) : (
        <table
          border="1"
          cellPadding="5"
          style={{ borderCollapse: "collapse" }}
        >
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>Course</th>
              <th>Duration</th>
              <th>Fee</th>
            </tr>
          </thead>
          <tbody>
            {students.map(({ id, name, age, course, duration, fee }) => (
              <tr key={id}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{age}</td>
                <td>{course}</td>
                <td>{duration}</td>
                <td>{fee}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;
