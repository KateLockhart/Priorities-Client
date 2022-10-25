// Grid imports
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

// List/Priority imports
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export const Matrix = () => {
  return (
    <div>
      <h1>This is the Matrix Page view.</h1>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={6}>
            <Item>
              <Divider>Important and Urgent</Divider>
            </Item>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Item>
              <Divider>Urgent, Less Important</Divider>
            </Item>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Item>
              <Divider>Important, Less Urgent</Divider>
            </Item>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Item>
              <Divider>Less Urgent and Important</Divider>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};
