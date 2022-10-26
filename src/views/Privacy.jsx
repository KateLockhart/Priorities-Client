import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

export const Privacy = () => {
  return (
    <div>
      <h2>Future Org View privacy page.</h2>
      <Box sx={{ flexGrow: 1, padding: "4%" }}>
        <Grid container>
          <Grid item xs={10} sm={8} md={8}>
            <Paper elevation="6"></Paper>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};
