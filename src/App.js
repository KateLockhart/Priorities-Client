import "./App.css";
import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link as RouterLink,
} from "react-router-dom";
import { Home, Matrix, Login, SignUp, About, Contact, Privacy } from "./views";

import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import Button from "@mui/material/Button";

// TODO: Conditionally render home page when not logged in(sign up landing and app info), matrix when logged in; nav with same conditional Login/Sign Up and Logout buttons
// TODO: Test look of links vs buttons in both footer and nav.
// TODO: Fix MUI AppBar width on lg screens
// Stretch Goal: add 'Productivity Tips' view to authViews and create page of resources
const authViews = ["My Priority Matrix"];
const authMenu = ["Account", "Logout"];

function App() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  // const [result, setResult] = useState([]);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
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
        <AppBar position="fixed" sx={{ width: "100%" }}>
          <Container
            maxWidth="xl"
            sx={{
              backgroundColor: "#4d9699",
              height: "10vh",
              maxWidth: "100%",
            }}
          >
            <Toolbar disableGutters>
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 4,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "Noto Sans",
                  fontWeight: 700,
                  letterSpacing: ".2rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                Priorities
              </Typography>
              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                  <MenuItem
                    component={RouterLink}
                    to="/login"
                    onClick={handleCloseNavMenu}
                  >
                    <Typography textAlign="center">Login</Typography>
                  </MenuItem>
                  <MenuItem
                    component={RouterLink}
                    to="/signUp"
                    onClick={handleCloseNavMenu}
                  >
                    <Typography textAlign="center">Sign Up</Typography>
                  </MenuItem>
                </Menu>
              </Box>
              <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
              <Typography
                variant="h5"
                noWrap
                component="a"
                href=""
                sx={{
                  mr: 2,
                  display: { xs: "flex", md: "none" },
                  flexGrow: 1,
                  fontFamily: "Noto sans",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                Priorities
              </Typography>
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                <Button
                  component={RouterLink}
                  to="/login"
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                    fontFamily: "Noto sans",
                  }}
                >
                  Login
                </Button>
                <Button
                  component={RouterLink}
                  to="/signUp"
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                    fontFamily: "Noto sans",
                  }}
                >
                  Sign Up
                </Button>
              </Box>
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="" src="" />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <MenuItem
                    component={RouterLink}
                    to="/"
                    onClick={handleCloseUserMenu}
                  >
                    <Typography textAlign="center">Account</Typography>
                  </MenuItem>
                  <MenuItem
                    component={RouterLink}
                    to="/"
                    onClick={handleCloseUserMenu}
                  >
                    <Typography textAlign="center">Logout</Typography>
                  </MenuItem>
                </Menu>
              </Box>
            </Toolbar>
          </Container>
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

        {/* <button onClick={fetchData}>Press the Button to Fetch</button> */}

        <footer>
          <Toolbar disableGutters>
            <Container
              maxWidth="xl"
              sx={{
                position: "relative",
                backgroundColor: "#4d9699",
                height: "8vh",
              }}
            >
              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "flex", md: "flex" },
                  justifyContent: "space-evenly",
                }}
              >
                <Button
                  size="small"
                  component={RouterLink}
                  to="/about"
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                    fontFamily: "Noto sans",
                  }}
                >
                  About
                </Button>
                <Button
                  size="small"
                  component={RouterLink}
                  to="/contact"
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                    fontFamily: "Noto sans",
                  }}
                >
                  Contact
                </Button>
                <Button
                  size="small"
                  component={RouterLink}
                  to="/privacyPolicy"
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                    fontFamily: "Noto sans",
                  }}
                >
                  Privacy Policy
                </Button>
                <Button
                  size="small"
                  disableFocusRipple
                  disableElevation
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                    fontFamily: "Noto sans",
                    cursor: "default",
                  }}
                >
                  © Priorities 2022
                </Button>
              </Box>
            </Container>
          </Toolbar>
        </footer>
      </div>
    </Router>
  );
}

export default App;
