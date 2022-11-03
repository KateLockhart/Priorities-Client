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
      <Box sx={{ flexGrow: 1, padding: "3%" }}>
        <Paper
          elevation="6"
          sx={{
            height: "50vh",
            marginTop: 13,
            marginBottom: 2.2,
            mx: 12,
            paddingLeft: "5%",
            paddingRight: "5%",
            paddingBottom: "6%",
            paddingTop: "4%",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              color: "var(--blue)",
              fontFamily: "Noto sans",
              fontWeight: 400,
              letterSpacing: ".3rem",
              paddingBottom: "1%",
            }}
          >
            Login
          </Typography>
          <Grid container sx={{ borderTop: "3px solid var(--blue)" }}>
            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              sx={{
                padding: "8%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
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
                    // sx={{ color: "var(--blue)" }}
                  />
                  <Button variant="outlined" color="success">
                    Login
                  </Button>
                </FormControl>
              </Box>
            </Grid>
            <Grid
              item
              xs={0}
              sm={6}
              md={6}
              sx={{
                padding: "4.5%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontFamily: "Noto sans",
                  fontWeight: 300,
                  letterSpacing: ".3rem",
                }}
              >
                Don't have an account yet?
              </Typography>

              <img
                src="/assets/images/undraw_hello_fade98.svg"
                alt=""
                id="loginImg"
              />

              <Typography
                variant="h6"
                sx={{
                  fontFamily: "Noto sans",
                  fontWeight: 200,
                }}
              >
                Use the sign up button above to get started!
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </div>
  );
};
