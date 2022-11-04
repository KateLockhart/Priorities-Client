import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import FormControl from "@mui/material/FormControl";
// import FormControlLabel from "@mui/material/FormControlLabel";
import InputLabel from "@mui/material/InputLabel";
import FormHelperText from "@mui/material/FormHelperText";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Input from "@mui/material/Input";

// TODO: add tooltips for buttons; stretch: add a benefit blurb about category organization(also mention on home page demo)
export const CreateCategory = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1, padding: "4%" }}>
        <Paper
          elevation="6"
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "space-evenly",
            height: "60vh",
            marginTop: 12,
            // marginBottom: 2,
            mx: 12,
            paddingLeft: "3%",
            paddingRight: "3%",
            paddingBottom: "2%",
            paddingTop: "1.8%",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              color: "var(--blue)",
              fontFamily: "Noto sans",
              fontWeight: 400,
              letterSpacing: ".3rem",
              paddingBottom: "1%",
            }}
          >
            Add a Category
          </Typography>
          <Grid container>
            <Grid item xs={12} sm={6} md={6}>
              <Box
                component="form"
                sx={{
                  "& .MuiTextField-root": { m: 1, width: "45ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <FormControl
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "space-evenly",
                  }}
                >
                  <TextField
                    id="outlined-basic"
                    label="Category Title"
                    variant="outlined"
                    helperText="Enter title of your category"
                    margin="normal"
                  />
                  <br />

                  <Input
                    type="color"
                    name="color"
                    size="large"
                    sx={{
                      width: "350px",
                    }}
                  />

                  <FormHelperText>
                    Select a color for all priorities of this category.
                  </FormHelperText>
                  <br />
                  <Button
                    variant="outlined"
                    color="success"
                    sx={{
                      my: 2,
                      color: "white",
                      backgroundColor: "var(--blue)",
                      width: "150px",
                      display: "block",
                      alignSelf: "center",
                      fontFamily: "Noto sans",
                    }}
                  >
                    Add Category
                  </Button>
                </FormControl>
              </Box>
            </Grid>
            <Grid item xs={0} sm={6} md={6}>
              <Typography
                variant="h4"
                sx={{
                  color: "var(--blue)",
                  fontFamily: "Noto sans",
                  fontWeight: 300,
                  letterSpacing: ".1rem",
                  paddingBottom: "5%",
                }}
              >
                Why use categories?
              </Typography>
              <Typography
                variant="p"
                sx={{
                  fontFamily: "Noto Serif",
                  fontWeight: 200,
                  fontSize: "large",
                  letterSpacing: ".1rem",
                  paddingBottom: "1%",
                }}
              >
                Giving your priorities a category can help visually group them
                by color and organize them on your matrix by category type.
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </div>
  );
};
