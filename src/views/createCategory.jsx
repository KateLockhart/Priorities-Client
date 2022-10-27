import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import InputLabel from "@mui/material/InputLabel";
import FormHelperText from "@mui/material/FormHelperText";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

// TODO: add tooltips for buttons
export const CreateCategory = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1, padding: "4%" }}>
        <h2>Add a Category</h2>
        <Grid container>
          <Grid item xs={10} sm={5} md={5}>
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
                    label=" Category Title"
                    variant="outlined"
                    helperText="Enter title of your category"
                  />
                  <FormControlLabel>Color for Category</FormControlLabel>
                  <input type="color" name="color" />
                  <Button variant="outlined" color="success">
                    Add Category
                  </Button>
                </FormControl>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={10} sm={5} md={5}>
            <Paper elevation="6">
              {/* Explanation of benefit of category sorting */}
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};
