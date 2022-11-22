import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  AppBar,
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Button,
  Container,
  IconButton,
  Menu as BottomMenu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import {
  Menu as MenuIcon,
  MoreHoriz,
  AddBox,
  AddCircle,
  Dataset,
  GridView,
} from "@mui/icons-material";

const routes = [
  {
    label: "About",
    route: "/about",
  },
  {
    label: "Contact",
    route: "/contact",
  },
  {
    label: "Privacy Policy",
    route: "/privacyPolicy",
  },
];

// TODO: User vs public view for site links in mobile view, mobile menu with routing still needs constructed
export const Footer = () => {
  // const [open, setOpen] = useState(true);
  const [value, setValue] = useState("");
  const hasToken = false;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    // App bar replaced with BottomBar? Bottom bar be Toolbar on med+ and icons on sm & xs
    <footer>
      {/* Web View Appbar */}
      <Toolbar
        disableGutters
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      >
        <Box
          sx={{
            flexGrow: 1,
            backgroundColor: "#4d9699",
            height: "7vh",
            display: { xs: "none", sm: "flex", md: "flex" },
            justifyContent: "space-evenly",
          }}
        >
          {routes.map((l) => {
            return (
              <Button
                size="small"
                component={RouterLink}
                to={l.link}
                // onClick={(e) => setOpen(false)}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  fontFamily: "Noto sans",
                }}
              >
                {l.label}
              </Button>
            );
          })}
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

        <BottomNavigation
          sx={{
            display: { xs: "flex", sm: "none", md: "none" },
            width: "100%",
            backgroundColor: "#4d9699",
            flexDirection: "space-evenly",
            ":selected": { color: "white" },
          }}
          value={value}
          onChange={handleChange}
        >
          <BottomNavigationAction
            label="Matrix"
            value="matrix"
            icon={<Dataset fontSize="large" sx={{ color: "white" }} />}
            sx={{
              ":focus": { color: "white" },
              ":selected": { color: "white" },
            }}
            component={RouterLink}
            to="/matrix"
          />
          <BottomNavigationAction
            label="Add Priority"
            value="priority"
            id="menu-action"
            aria-controls="menu-bottombar"
            icon={<AddBox fontSize="large" sx={{ color: "white" }} />}
            sx={{
              ":focus": { color: "white" },
              ":selected": { color: "white" },
            }}
            component={RouterLink}
            to="/createPriority"
          />
          <BottomNavigationAction
            label="Etc."
            value="etc"
            aria-controls={open ? "menu-bottombar" : undefined}
            icon={<MoreHoriz fontSize="large" sx={{ color: "white" }} />}
            selected="white"
            sx={{
              ":focus": { color: "white" },
              ":selected": { color: "white" },
            }}
            onClick={handleClick}
          />
          <BottomMenu
            id="menu-bottombar"
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
          >
            {routes.map((l) => {
              return (
                <MenuItem
                  component={RouterLink}
                  to={l.route}
                  onClick={handleClose}
                >
                  <Typography textAlign="center">{l.label}</Typography>
                </MenuItem>
              );
            })}
          </BottomMenu>
        </BottomNavigation>
      </Toolbar>
    </footer>
  );
};
