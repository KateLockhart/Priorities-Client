import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  AppBar,
  Typography,
  Menu,
  Avatar,
  Tooltip,
  MenuItem,
  Toolbar,
  Box,
  IconButton,
  Button,
  styled,
} from "@mui/material";
import { AutoGraph } from "@mui/icons-material";
// TODO: Fix MUI AppBar width on lg screens
// Stretch Goal: add 'Productivity Tips' view to authViews and create page of resources
// const authViews = ["My Priority Matrix"];
// const authMenu = ["Account", "Logout"];

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Logo = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  marginLeft: "20px",
  fontFamily: "Noto Sans",
  fontWeight: 700,
  letterSpacing: ".2rem",
  color: "inherit",
  textDecoration: "none",
});

const NavLinks = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "15px",
  fontFamily: "Noto sans",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserMenu = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginRight: "20px",
}));

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#4d9699" }}>
      <StyledToolbar disableGutters>
        <Logo component={RouterLink} to="/">
          <AutoGraph />
          <Typography variant="h6" noWrap>
            Priorities
          </Typography>
        </Logo>

        {/* <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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
        {/* <MenuItem
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
        </Box> */}

        <NavLinks>
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
        </NavLinks>

        <UserMenu>
          <Tooltip title="Menu">
            <IconButton onClick={(e) => setOpen(true)}>
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
        </UserMenu>
      </StyledToolbar>
    </AppBar>
  );
};
