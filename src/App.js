import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home, Matrix, Login, SignUp, About, Contact, Privacy } from "./views";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

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
        <AppBar position="static">
          <Toolbar>
            <Stack direction="row" spacing={3}>
              <Link to="/">
                <Button variant="contained">Home</Button>
              </Link>
              <Link to="/matrix">
                <Button variant="contained">My Priorities</Button>
              </Link>
              <Link to="/login">
                <Button variant="contained">Login</Button>
              </Link>
            </Stack>
          </Toolbar>
        </AppBar>

        <Routes>
          <Route path="" element={<Home />}></Route>
          <Route path="matrix" element={<Matrix />}></Route>
          <Route path="login" element={<Login />} />
          <Route path="signUp" element={<SignUp />} />
          <Route path="about" element={<About />}></Route>
          <Route path="contact" element={<Contact />}></Route>
          <Route path="privacyPolicy" element={<Privacy />}></Route>
        </Routes>

        <button onClick={fetchData}>Press the Button to Fetch</button>

        <footer>
          <Toolbar>
            <Stack direction="row" spacing={50}>
              <Link to="/about">
                <Button variant="contained" size="small">
                  About
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="contained" size="small">
                  Contact
                </Button>
              </Link>
              <Link to="/privacyPolicy">
                <Button variant="contained" size="small">
                  Privacy Policy
                </Button>
              </Link>
            </Stack>
          </Toolbar>
        </footer>
      </div>
    </Router>
  );
}

export default App;
