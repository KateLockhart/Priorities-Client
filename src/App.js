import "./App.css";
// import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Home,
  Matrix,
  Login,
  SignUp,
  About,
  Contact,
  Privacy,
  CreateCategory,
  CreatePriority,
} from "./views";

import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

// TODO: Conditionally render home page when not logged in(sign up landing and app info), matrix when logged in; nav with same conditional Login/Sign Up and Logout buttons

function App() {
  // const [result, setResult] = useState([]);

  // const fetchData = async () => {
  //   const res = await fetch("", {
  //     method: "",
  //     // headers: {
  //     //   "Content-Type": "application/json",
  //     // },
  //     // body: JSON.stringify(),
  //   });
  //   const data = await res.json();
  //   console.log(data);
  //   setResult(data);
  // };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="" element={<Home />}></Route>
          <Route path="matrix" element={<Matrix />}></Route>
          <Route path="createCategory" element={<CreateCategory />}></Route>
          <Route path="createPriority" element={<CreatePriority />}></Route>
          <Route path="login" element={<Login />} />
          <Route path="signUp" element={<SignUp />} />
          <Route path="about" element={<About />}></Route>
          <Route path="contact" element={<Contact />}></Route>
          <Route path="privacyPolicy" element={<Privacy />}></Route>
        </Routes>

        {/* <button onClick={fetchData}>Press the Button to Fetch</button> */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
