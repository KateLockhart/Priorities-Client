import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [result, setResult] = useState([]);

  const fetchData = async () => {
    const res = await fetch("", {
      method: "",
      // headers: {
      //   "Content-Type": "application/json",
      // },
      // body: JSON.stringify(),
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
