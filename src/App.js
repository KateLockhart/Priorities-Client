import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [result, setResult] = useState([]);

  const taskObj = {
    task: {},
  };

  const fetchData = async () => {
    const res = await fetch("http://localhost:3000/task/", {
      method: "POST",
      // headers: {
      //   "Content-Type": "application/json",
      // },
      // body: JSON.stringify(taskObj),
    });
    const data = await res.json();
    console.log(data);
    setResult(data);
  };

  return (
    <div className="App">
      <button onClick={fetchData}>Press the Button to Fetch</button>
    </div>
  );
}

export default App;
