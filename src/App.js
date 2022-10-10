import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import { HomeView } from "./views/Home";
import { MatrixView } from "./views/Matrix";

// TODO: Conditionally render home page when not logged in(sign up landing and app info), matrix when logged in; nav with same conditional Login/Sign Up and Logout buttons
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
    <Router>
      <div className="App">
        <ul className="App-header">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/matrix">My Priorities</Link>
          </li>
          {/* <li>
                <Link to="/contact">Contact Us</Link>
              </li> */}
        </ul>
        <Routes>
          <Route path="/" element={<HomeView />}></Route>
          <Route path="/matrix" element={<MatrixView />}></Route>
        </Routes>

        <button onClick={fetchData}>Press the Button to Fetch</button>
      </div>
    </Router>
  );
}

export default App;
