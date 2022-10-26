import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import InputLabel from "@mui/material/InputLabel";
import FormHelperText from "@mui/material/FormHelperText";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

// TODO: Add submit button

export const SignUp = () => {
  // TODO: Conditionally render login vs Sign Up forms
  return (
    <div id="signUpPage">
      <h1>Sign Up</h1>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
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
          <TextField id="outlined-basic" label="Username" variant="outlined" />
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
          <FormControlLabel
            control={<Checkbox color="success" />}
            label="I would like to receive notifications of my priorities."
          />

          {/* Notification Preference drop down */}
          <InputLabel id="notification-select-label">
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
          />
        </FormControl>
      </Box>
    </div>
  );
};