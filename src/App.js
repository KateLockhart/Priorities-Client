import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [result, setResult] = useState([]);

  const categoryObj = {
    category: {},
  };

  const fetchData = async () => {
    const res = await fetch("http://localhost:3000/category", {
      method: "POST",
      // headers: {
      //   "Content-Type": "application/json",
      // },
      // body: JSON.stringify(categoryObj),
    });
    const data = await res.json();
    console.log(data);
    setResult(data);
  };

  return (
    <div className="App">
      <button onClick={fetchData}>Press the Button to Fetch</button>
      {/* <br />
      <h3>{result.task.title}</h3>
      <h5>{result.task.description}</h5>
      <h5>Importance: {result.task.importanceRating}</h5> */}
    </div>
  );
}

export default App;
