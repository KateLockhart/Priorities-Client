import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  AppBar,
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Button,
  Container,
  Toolbar,
} from "@mui/material";
import {
  Menu,
  MoreHoriz,
  AddBox,
  AddCircle,
  Dataset,
  GridView,
} from "@mui/icons-material";

export const Footer = () => {
  const [open, setOpen] = useState(false);

  return (
    // App bar replaced with BottomBar? Bottom bar be Toolbar on med+ and icons on sm & xs
    <footer>
      {/* Web View Appbar */}
      <Toolbar disableGutters>
        <Box
          sx={{
            flexGrow: 1,
            backgroundColor: "#4d9699",
            height: "8vh",
            display: { xs: "none", sm: "flex", md: "flex" },
            justifyContent: "space-evenly",
          }}
        >
          <Button
            size="small"
            component={RouterLink}
            to="/about"
            onClick={(e) => setOpen(false)}
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
            onClick={(e) => setOpen(false)}
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
            onClick={(e) => setOpen(false)}
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

        <BottomNavigation
          showLabels
          sx={{
            display: { xs: "flex", sm: "none", md: "none" },
            width: "100%",
            backgroundColor: "#4d9699",
            flexDirection: "space-evenly",
          }}
        >
          <BottomNavigationAction label="Matrix" icon={<Dataset />} />
          <BottomNavigationAction label="Priority" icon={<AddBox />} />
          <BottomNavigationAction label="" icon={<MoreHoriz />} />
        </BottomNavigation>
      </Toolbar>
    </footer>
  );
};
