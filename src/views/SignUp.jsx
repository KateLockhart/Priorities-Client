import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import InputLabel from "@mui/material/InputLabel";
import FormHelperText from "@mui/material/FormHelperText";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export const SignUp = () => {
  // TODO: Conditionally render login vs Sign Up forms, add image and grid 1x2
  return (
    <div id="signUpPage">
      <Box sx={{ flexGrow: 1, padding: "4%" }}>
        <Paper
          elevation="6"
          // sx={{
          //   height: "60vh",
          //   marginTop: 12,
          //   // marginBottom: 2,
          //   mx: 12,
          //   paddingLeft: "3%",
          //   paddingRight: "3%",
          //   paddingBottom: "2%",
          //   paddingTop: "1.8%",
          // }}
        >
          <Typography
            variant="h2"
            // sx={{
            //   color: "var(--blue)",
            //   fontFamily: "Noto sans",
            //   fontWeight: 400,
            //   letterSpacing: ".3rem",
            //   paddingBottom: "1%",
            // }}
          >
            Sign Up
          </Typography>
          <Grid container sx={{ borderTop: "3px solid var(--blue)" }}>
            <Grid
              item
              xs={0}
              sm={6}
              md={6}
              // sx={{
              //   padding: "4%",
              //   display: "flex",
              //   flexDirection: "column",
              //   justifyContent: "space-evenly",
              //   alignItems: "center",
              // }}
            >
              <Typography
                variant="h5"
                // sx={{
                //   fontFamily: "Noto sans",
                //   fontWeight: 200,
                // }}
              >
                Sign up to get started on prioritizing your days.
              </Typography>
              <img
                src="/assets/images/undraw_solution_mindset_fade98.svg"
                alt=""
                id="signUpImg"
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              // sx={{
              //   padding: "1%",
              //   display: "flex",
              //   justifyContent: "space-evenly",
              //   alignItems: "center",
              // }}
            >
              <Box
                component="form"
                sx={{
                  "& .MuiTextField-root": { m: 1, width: "45ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <FormControl>
                  <TextField
                    id="outlined-basic"
                    label="Email Address"
                    variant="outlined"
                  />
                  <FormHelperText id="my-helper-text">
                    We'll never share your email.
                  </FormHelperText>
                  <TextField
                    id="outlined-basic"
                    label="Username"
                    variant="outlined"
                  />
                  <TextField
                    id="outlined-basic"
                    label="Password"
                    type="password"
                    variant="outlined"
                  />
                  <TextField
                    id="outlined-basic"
                    label="Confirm Password"
                    type="password"
                    variant="outlined"
                  />
                  {/* <FormControlLabel
                    control={<Checkbox color="success" />}
                    label="I would like to receive notifications of my priorities."
                  /> */}

                  {/* Notification Preference drop down */}
                  {/* <InputLabel id="notification-select-label">
                    Notification Preference
                  </InputLabel>
                  <Select
                    labelId="notification-select-label"
                    id="notification-select"
                    // value={notificationPreference}
                    label="Notification Preference"
                    // onChange={handleChange}
                  >
                    <MenuItem value={"email"}>Email</MenuItem>
                    <MenuItem value={"phone"}>Text Message</MenuItem>
                  </Select>
                  <TextField
                    id="outlined-basic"
                    label="Phone Number"
                    variant="outlined"
                  /> */}
                  <Button variant="outlined" color="success">
                    Sign Up
                  </Button>
                </FormControl>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </div>
  );
};
