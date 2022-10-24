import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import InputLabel from "@mui/material/InputLabel";
import FormHelperText from "@mui/material/FormHelperText";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export const CreateCategory = () => {
  return (
    <div>
      <h2>Add a Category</h2>
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
        </FormControl>
      </Box>
    </div>
  );
};
