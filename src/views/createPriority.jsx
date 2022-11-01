import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import InputLabel from "@mui/material/InputLabel";
import FormHelperText from "@mui/material/FormHelperText";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import CircleIcon from "@mui/icons-material/Circle";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import Button from "@mui/material/Button";

// TODO: Add tooltips for buttons where necessary. Fix text legends.

export const CreatePriority = () => {
  return (
    <div>
      <Typography variant="h2">Add a Priority</Typography>
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
            label="Title"
            variant="outlined"
            helperText="Enter title of your priority"
          />
          <TextField
            id="outlined-basic"
            label="Description"
            variant="outlined"
            helperText="Enter description of your priority"
          />

          <Typography component="legend">Importance</Typography>
          <Rating
            getLabelText={(value) =>
              `${value} Importance${value !== 1 ? "s" : ""}`
            }
            precision={0.5}
            icon={<CircleIcon fontSize="inherit" />}
            emptyIcon={<CircleOutlinedIcon fontSize="inherit" />}
            max={10}
          />

          <Typography component="legend">Urgency</Typography>
          <Rating
            getLabelText={(value) =>
              `${value} Importance${value !== 1 ? "s" : ""}`
            }
            precision={0.5}
            icon={<CircleIcon fontSize="inherit" />}
            emptyIcon={<CircleOutlinedIcon fontSize="inherit" />}
            max={10}
          />
        </FormControl>
        <Button variant="outlined" color="success">
          Add Priority
        </Button>
      </Box>
    </div>
  );
};
