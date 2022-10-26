import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";

// TODO: Turn icons and list items into links that open in new tab

export const Contact = () => {
  return (
    <div>
      <h2>Future Org View contact page.</h2>
      <Box sx={{ flexGrow: 1, padding: "4%" }}>
        <Grid container spacing={4}>
          <Grid item xs={10} sm={8} md={8}>
            <Paper>
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
                  <ListItemText
                    primary="Instagram"
                    secondary="placeholderEmail@email.com"
                  />
                </ListItem>
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar>{/* Icon */}</Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Email"
                    secondary="placeholderEmail@email.com"
                  />
                </ListItem>
              </List>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};
