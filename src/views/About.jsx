import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Diversity1RoundedIcon from "@mui/icons-material/Diversity1Rounded";
import Diversity2RoundedIcon from "@mui/icons-material/Diversity2Rounded";
import Diversity3RoundedIcon from "@mui/icons-material/Diversity3Rounded";
import Typography from "@mui/material/Typography";

// TODO: Add Box and Grid to page separating core values on one half and origin story on the other, add in images; 1x2 page or 2x2.

export const About = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1, padding: "4%" }}>
        <Typography variant="h2">About Priorities</Typography>
        <Grid container>
          <Grid item xs={10} sm={5} md={5}>
            <Paper elevation="6">
              <List>
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar>
                      <Diversity1RoundedIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Diversity"
                    secondary="We believe in a diverse and welcoming environment where each employee is included in every aspect of who we are as a company and team."
                  />
                </ListItem>
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar>
                      <Diversity2RoundedIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Collaboration"
                    secondary="Without collaboration and team effort, none of our progress would be possible. Every team member is essential and valued in all we do."
                  />
                </ListItem>
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar>
                      <Diversity3RoundedIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Communication"
                    secondary="No collaboration would be possible without valuing communication: the freedom to express all thoughts and ideas on our projects, work environment, and process. Communication is key to our personal growth, autonomy, and project success from within the team, with customers, and all app users. Communication is key to a positive and balanced work environment for all individuals."
                  />
                </ListItem>
              </List>
            </Paper>
          </Grid>
          <Grid item xs={10} sm={5} md={5}>
            <Paper elevation="6">{/* Why Priorities was created */}</Paper>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};
