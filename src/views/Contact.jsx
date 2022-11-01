import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import Typography from "@mui/material/Typography";

// TODO: Turn icons and list items into links that open in new tab, add image to half of grid

export const Contact = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1, padding: "4%" }}>
        <Typography variant="h2">Contact Priorities</Typography>
        <Grid container>
          <Grid item xs={10} sm={8} md={8}>
            <Paper elevation="6">
              <List>
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar>
                      <MailOutlineRoundedIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Email"
                    secondary="placeholderEmail@email.com"
                  />
                </ListItem>
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar>{/* Icon */}</Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Instagram" secondary="@Priorities" />
                </ListItem>
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar>{/* Icon */}</Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="LinkedIn?" secondary="Url/link" />
                </ListItem>
              </List>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};
