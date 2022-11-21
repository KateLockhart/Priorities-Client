import { AppBar, Box, Button, Container, Toolbar } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import React, { useState } from "react";

function Footer() {
  const [open, setOpen] = useState(false);
  return (
    <AppBar>
      <Toolbar disableGutters>
        <Container
          maxWidth="xl"
          // sx={{
          //   position: "relative",
          //   backgroundColor: "#4d9699",
          //   height: "8vh",
          // }}
        >
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "flex" },
              // justifyContent: "space-evenly",
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
        </Container>
      </Toolbar>
    </AppBar>
  );
}

export default Footer;
