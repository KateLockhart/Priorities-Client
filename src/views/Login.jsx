import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export const Login = () => {
  // TODO: Implement full Login form build and functionality
  return (
    <div>
      <Box sx={{ flexGrow: 1, padding: "4%" }}>
        <Typography variant="h1">Login</Typography>
        <Grid container>
          <Grid item xs={10} sm={8} md={8}>
            <Paper elevation="6">
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
                    label="Email"
                    variant="outlined"
                  />
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
            </Paper>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <Paper elevation="6">
              Don't have an account? Use the sign up button above to get
              started!
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};
