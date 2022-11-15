import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  AppBar,
  Typography,
  Menu,
  Avatar,
  Tooltip,
  MenuItem,
  Container,
  Toolbar,
  Box,
  IconButton,
  Button,
  styled,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
// TODO: Fix MUI AppBar width on lg screens
// Stretch Goal: add 'Productivity Tips' view to authViews and create page of resources
// const authViews = ["My Priority Matrix"];
// const authMenu = ["Account", "Logout"];

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#4d9699" }}>
      <Container
      // maxWidth="xl"
      // sx={{
      //   backgroundColor: "#4d9699",
      //   height: "20%",
      //   maxWidth: "100%",
      // }}
      >
        <StyledToolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component={RouterLink}
            to="/"
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
              onClick={(e) => setOpen(true)}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={open}
              onClose={(e) => setOpen(false)}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem
                component={RouterLink}
                to="/login"
                onClick={(e) => setOpen(false)}
              >
                <Typography textAlign="center">Login</Typography>
              </MenuItem>
              <MenuItem
                component={RouterLink}
                to="/signUp"
                onClick={(e) => setOpen(false)}
              >
                <Typography textAlign="center">Sign Up</Typography>
              </MenuItem>
              {/* TODO: Will conditionally render links/views upon login */}
              <MenuItem
                component={RouterLink}
                to="/matrix"
                onClick={(e) => setOpen(false)}
              >
                <Typography textAlign="center">Priority Matrix</Typography>
              </MenuItem>
              <MenuItem
                component={RouterLink}
                to="/createPriority"
                onClick={(e) => setOpen(false)}
              >
                <Typography textAlign="center">Create Priority</Typography>
              </MenuItem>
              <MenuItem
                component={RouterLink}
                to="/createCategory"
                onClick={(e) => setOpen(false)}
              >
                <Typography textAlign="center">Create Category</Typography>
              </MenuItem>
            </Menu>
          </Box>
          {/* Icon to sit in front of name in mobile view <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} /> */}
          <Typography
            variant="h6"
            noWrap
            component={RouterLink}
            to="/"
            sx={{
              mr: 2,
              display: { xs: "flex", sm: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "Noto sans",
              fontWeight: 700,
              letterSpacing: ".1rem",
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
              onClick={(e) => setOpen(false)}
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
              onClick={(e) => setOpen(false)}
              sx={{
                my: 2,
                color: "white",
                display: "block",
                fontFamily: "Noto sans",
              }}
            >
              Sign Up
            </Button>
            <Button
              component={RouterLink}
              to="/matrix"
              onClick={(e) => setOpen(false)}
              sx={{
                my: 2,
                color: "white",
                display: "block",
                fontFamily: "Noto sans",
              }}
            >
              Priority Matrix
            </Button>
            <Button
              component={RouterLink}
              to="/createPriority"
              onClick={(e) => setOpen(false)}
              sx={{
                my: 2,
                color: "white",
                display: "block",
                fontFamily: "Noto sans",
              }}
            >
              Create Priority
            </Button>
            <Button
              component={RouterLink}
              to="/createCategory"
              onClick={(e) => setOpen(false)}
              sx={{
                my: 2,
                color: "white",
                display: "block",
                fontFamily: "Noto sans",
              }}
            >
              Create Category
            </Button>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={(e) => setOpen(true)} sx={{ p: 0 }}>
                <Avatar alt="" src="" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={open}
              onClose={(e) => setOpen(false)}
            >
              <MenuItem
                component={RouterLink}
                to="/"
                onClick={(e) => setOpen(false)}
              >
                <Typography textAlign="center">Account</Typography>
              </MenuItem>
              <MenuItem
                component={RouterLink}
                to="/"
                onClick={(e) => setOpen(false)}
              >
                <Typography textAlign="center">Logout</Typography>
              </MenuItem>
            </Menu>
          </Box>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
};
