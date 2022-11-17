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
// Stretch Goal: add 'Productivity Tips' view to logged in view and create page of resources

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

const routes = {
  createCategory: {
    label: "Create Category",
    route: "/createCategory",
  },
  createPriority: {
    label: "Create Priority",
    route: "/createPriority",
  },
  login: {
    label: "Login",
    route: "/login",
  },
  logout: {
    label: "Logout",
    route: "/",
  },
  matrix: {
    label: "Matrix",
    route: "/matrix",
  },
  signUp: {
    label: "Sign Up",
    route: "/signUp",
  },
  userAccount: {
    label: "Account",
    // TODO: Build user account view for update ability
    route: "/",
  },
};

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const hasToken = true;
  let topbarLinks;
  let menuLinks;

  if (hasToken) {
    topbarLinks = [routes.matrix, routes.createPriority, routes.createCategory];
    menuLinks = [routes.userAccount, routes.logout];
  } else {
    topbarLinks = [routes.login, routes.signUp];
  }

  // hasToken = true, top bar show Matrix, Create Priority, Create Category
  // hasToken = false, top bar show Login, Sign Up

  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#4d9699" }}>
      <StyledToolbar disableGutters>
        <Logo component={RouterLink} to="/">
          <AutoGraph />
          <Typography variant="h6" noWrap>
            Priorities
          </Typography>
        </Logo>

        <NavLinks>
          {topbarLinks.map((l) => {
            return (
              <Button
                component={RouterLink}
                to={l.route}
                onClick={(e) => setOpen(false)}
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
            {menuLinks.map((l) => {
              return (
                <MenuItem
                  component={RouterLink}
                  to={l.route}
                  onClick={(e) => setOpen(false)}
                >
                  <Typography textAlign="center">{l.label}</Typography>
                </MenuItem>
              );
            })}
          </Menu>
        </UserMenu>
      </StyledToolbar>
    </AppBar>
  );
};
