import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

//  TODO: Add privacy content and create both a summary and in depth section

export const Privacy = () => {
  return (
    <div>
      <h2>Future Org View privacy page.</h2>
      <Box sx={{ flexGrow: 1, padding: "4%" }}>
        <Grid container>
          <Grid item xs={10} sm={8} md={8}>
            <Paper elevation="6">
              {/* Think about using a complex card for summary https://mui.com/material-ui/react-card/#RecipeReviewCard.js, then drop down accordion (https://mui.com/material-ui/react-accordion/#CustomizedAccordions.js) questions with more complex explications */}
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};
