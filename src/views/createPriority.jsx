import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
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
// TODO: Make custom MUI styling for form and button color themes

export const CreatePriority = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1, padding: "4%" }}>
        <Paper
          elevation="6"
          // sx={{
          //   display: "flex",
          //   alignItems: "center",
          //   flexDirection: "column",
          //   justifyContent: "space-evenly",
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
            variant="h3"
            // sx={{
            //   color: "var(--blue)",
            //   fontFamily: "Noto sans",
            //   fontWeight: 400,
            //   letterSpacing: ".3rem",
            //   paddingBottom: "1%",
            // }}
          >
            Add a Priority
          </Typography>
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
              <Button
                variant="outlined"
                color="success"
                sx={{
                  my: 2,
                  color: "white",
                  // backgroundColor: "var(--blue)",
                  // width: "200px",
                  // display: "block",
                  // alignSelf: "center",
                  // fontFamily: "Noto sans",
                }}
              >
                Add Priority
              </Button>
            </FormControl>
          </Box>
        </Paper>
      </Box>
    </div>
  );
};
