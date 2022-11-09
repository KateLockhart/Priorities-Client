import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
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

//  TODO: Add  link to "Add Priority" form page, test styling dividers with nested typography tag of h3/h4 variant

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export const Matrix = () => {
  const [checked, setChecked] = useState([0]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  // let priority = () => {
  //     return (
  //         <ListItem>
  //             <ListItemButton role={undefined} onClick={handleToggle(value)} dense>
  //           <ListItemIcon>
  //             <Checkbox
  //               edge="start"
  //               checked={checked.indexOf(value) !== -1}
  //               tabIndex={-1}
  //               disableRipple
  //               inputProps={{ 'aria-labelledby': labelId }}
  //             />
  //           </ListItemIcon>
  //           <ListItemText id={labelId} primary={`Line item ${value + 1}`} />
  //         </ListItemButton>
  //         </ListItem>
  //     )
  // }

  return (
    <div>
      <Box
      // sx={{
      //   flexGrow: 1,
      //   padding: "6%",
      //   paddingTop: "8%",
      //   display: "flex",
      //   flexDirection: "column",
      //   alignItems: "center",
      // }}
      >
        <Typography
          variant="h3"
          // sx={{
          //   color: "var(--blue)",
          //   fontFamily: "Noto sans",
          //   fontWeight: 400,
          //   letterSpacing: ".3rem",
          //   paddingBottom: "1%",
          // }}
        >
          Your Priority Matrix
        </Typography>
        <Button
          component={RouterLink}
          to="/createPriority"
          // sx={{
          //   my: 2,
          //   color: "white",
          //   backgroundColor: "var(--blue)",
          //   width: "250px",
          //   display: "block",
          //   alignSelf: "center",
          //   fontFamily: "Noto sans",
          // }}
        >
          Create a New Priority
        </Button>
        <Grid container spacing={4}>
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            // sx={{
            //   outline: "solid 3px #77d6a7",
            //   borderRadius: "3px",
            //   outlineOffset: "10px",
            // }}
          >
            <Divider>
              <Typography
                variant="h6"
                // sx={{
                //   color: "var(--blue)",
                //   fontFamily: "Noto sans",
                //   fontWeight: 400,
                //   letterSpacing: ".1rem",
                //   paddingBottom: "1%",
                // }}
              >
                Important and Urgent
              </Typography>
            </Divider>
            <Item
            // sx={{
            //   margin: "1.5%",
            //   border: "5px solid var(--green)",
            // }}
            >
              {/* To be created by API call */}
              <List
                sx={{
                  width: "100%",
                  maxWidth: 360,
                  bgcolor: "background.paper",
                }}
              >
                {[0, 1, 2, 3].map((value) => {
                  const labelId = `checkbox-list-label-${value}`;

                  return (
                    <ListItem
                      key={value}
                      // secondaryAction={
                      //   <IconButton edge="end" aria-label="comments">
                      //     <CommentIcon />
                      //   </IconButton>
                      // }
                      disablePadding
                    >
                      <ListItemButton
                        role={undefined}
                        onClick={handleToggle(value)}
                        dense
                        disableRipple
                      >
                        <ListItemIcon>
                          <Checkbox
                            edge="start"
                            checked={checked.indexOf(value) !== -1}
                            tabIndex={-1}
                            disableRipple
                            inputProps={{ "aria-labelledby": labelId }}
                          />
                        </ListItemIcon>
                        <ListItemText
                          id={labelId}
                          primary={`Line item ${value + 1}`}
                        />
                      </ListItemButton>
                    </ListItem>
                  );
                })}
              </List>
            </Item>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Divider>
              <Typography
                variant="h6"
                // sx={{
                //   color: "var(--blue)",
                //   fontFamily: "Noto sans",
                //   fontWeight: 400,
                //   letterSpacing: ".1rem",
                //   paddingBottom: "1%",
                // }}
              >
                Urgent, Less Important
              </Typography>
            </Divider>
            <Item
            // sx={{
            //   margin: "1.5%",
            //   border: "3px solid var(--dark-yellow)",
            // }}
            ></Item>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Divider>
              <Typography
                variant="h6"
                // sx={{
                //   color: "var(--blue)",
                //   fontFamily: "Noto sans",
                //   fontWeight: 400,
                //   letterSpacing: ".1rem",
                //   paddingBottom: "1%",
                // }}
              >
                Important, Less Urgent
              </Typography>
            </Divider>
            <Item
            // sx={{
            //   margin: "1.5%",
            //   border: "3px solid var(--dark-yellow)",
            // }}
            ></Item>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Divider>
              <Typography
                variant="h6"
                // sx={{
                //   color: "var(--blue)",
                //   fontFamily: "Noto sans",
                //   fontWeight: 400,
                //   letterSpacing: ".1rem",
                //   paddingBottom: "1%",
                // }}
              >
                Less Urgent and Important
              </Typography>
            </Divider>
            <Item
            // sx={{
            //   margin: "1.5%",
            //   border: "3px solid var(--light-yellow)",
            // }}
            ></Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};
