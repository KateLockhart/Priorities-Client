import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import { HomeView } from "./views/HomeView";
import { MatrixView } from "./views/MatrixView";

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
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/" element={<MatrixView />} />
      </Routes>

      <button onClick={fetchData}>Press the Button to Fetch</button>
    </div>
  );
}

export default App;
