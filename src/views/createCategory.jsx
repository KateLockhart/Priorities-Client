import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import InputLabel from "@mui/material/InputLabel";
import FormHelperText from "@mui/material/FormHelperText";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

// TODO: add tooltips for buttons; stretch: add a benefit blurb about category organization(also mention on home page demo)
export const CreateCategory = () => {
  return (
    <div>
      <Typography variant="h2">Add a Category</Typography>
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
    </div>
  );
};
