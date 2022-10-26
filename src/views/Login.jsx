import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export const Login = () => {
  // TODO: Implement full Login form build and functionality
  return (
    <div>
      <h1>Login</h1>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <FormControl>
          <TextField id="outlined-basic" label="Email" variant="outlined" />
          <TextField
            id="outlined-basic"
            label="Password"
            type="password"
            variant="outlined"
          />
          <Button variant="outlined" color="success">
            Login
          </Button>
        </FormControl>
      </Box>
    </div>
  );
};
