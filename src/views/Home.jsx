import "../App.css";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "60%",
  maxHeight: "60%",
});

export const Home = () => {
  return (
    <div id="homeViewDiv">
      <Grid
        container
        spacing={2}
        columns={{ xs: 1, sm: 1, md: 1 }}
        sx={{
          //width: "100%",
          display: "grid",
        }}
      >
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Paper
            elevation="6"
            // sx={{
            //   height: "40%",
            //   width: "60%",
            //   marginTop: "15%",
            //   // marginBottom: "15%",
            //   mx: 12,
            //   display: "flex",
            //   flexDirection: "row",
            //   alignItems: "center",
            //   justifyContent: "space-evenly",
            //   padding: "5%",
            // }}
          >
            <Grid item xs={6} sm={7} md={8} lg={8}>
              <Typography
              // variant="h4"
              // sx={{
              //   fontFamily: "Noto sans",
              //   fontWeight: 400,
              //   letterSpacing: ".3rem",
              // }}
              >
                An easier way <br /> to find focus &
                <Typography
                // variant="h1"
                // sx={{
                //   color: "var(--blue)",
                //   fontFamily: "Noto sans",
                //   fontWeight: 500,
                //   fontStyle: "italic",
                //   letterSpacing: ".3rem",
                // }}
                >
                  Prioritize
                </Typography>
                your day.
              </Typography>
            </Grid>
            <Grid item xs={6} sm={5} md={4} lg={4}>
              <Img
                src="/assets/images/undraw_ideas_flow_fade98.svg"
                alt=""
                className="homeImgPortrait"
              />
            </Grid>
          </Paper>
        </Grid>

        {/* <Paper
          elevation="6"
          // sx={{
          //   height: "40%",
          //   width: "60%",
          //   marginTop: "25%",
          //   // marginBottom: "15%",
          //   mx: 12,
          //   display: "flex",
          //   flexDirection: "row",
          //   alignItems: "center",
          //   justifyContent: "space-evenly",
          //   padding: "5%",
          // }}
        >
          <Grid item xs={6}>
            <img
              src="/assets/images/undraw_key_points_4d9699.svg"
              alt=""
              className="homeImgLandscape"
            />
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="h3"
              // sx={{
              //   fontFamily: "Noto sans",
              //   fontWeight: 300,
              //   letterSpacing: ".3rem",
              // }}
            >
              How we organize first things first.
            </Typography>
            <Typography variant="body1" gutterBottom>
              As you add a priority, be it a doctors appointment, an work responsibility, or simply needing to  Integer
              ultrices augue auctor, maximus diam a, aliquet ex. Mauris eleifend
              lorem quis massa feugiat fringilla. Donec ipsum mi, placerat et
              ligula et, suscipit convallis elit. Suspendisse elementum egestas
              maximus. Donec accumsan, sapien sed tincidunt venenatis, velit
              libero mollis urna, vel condimentum justo velit vitae sem. Nunc
              viverra est a luctus rhoncus. Cras eget felis vitae tellus sodales
              porttitor tempor quis elit.
            </Typography>
          </Grid>
        </Paper> */}

        {/* <Paper
          elevation="6"
          // sx={{
          //   height: "40%",
          //   width: "60%",
          //   marginTop: "25%",
          //   // marginBottom: "15%",
          //   mx: 12,
          //   display: "flex",
          //   flexDirection: "row",
          //   alignItems: "center",
          //   justifyContent: "space-evenly",
          //   padding: "5%",
          // }}
        >
          <Grid item xs={12}>
            <Typography
              variant="h3"
              // sx={{
              //   fontFamily: "Noto sans",
              //   fontWeight: 300,
              //   letterSpacing: ".3rem",
              // }}
            >
              Sample Title for Section
            </Typography>
            <Typography variant="body1" gutterBottom>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              ultrices augue auctor, maximus diam a, aliquet ex. Mauris eleifend
              lorem quis massa feugiat fringilla. Donec ipsum mi, placerat et
              ligula et, suscipit convallis elit. Suspendisse elementum egestas
              maximus. Donec accumsan, sapien sed tincidunt venenatis, velit
              libero mollis urna, vel condimentum justo velit vitae sem. Nunc
              viverra est a luctus rhoncus. Cras eget felis vitae tellus sodales
              porttitor tempor quis elit.
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <img
              src="/assets/images/undraw_work_in_progress_fade98.svg"
              alt=""
              className="homeImgLandscape"
            />
          </Grid>
        </Paper> */}

        {/* <Paper
          elevation="6"
          // sx={{
          //   height: "40%",
          //   width: "60%",
          //   marginTop: "25%",
          //   // marginBottom: "15%",
          //   mx: 12,
          //   display: "flex",
          //   flexDirection: "row",
          //   alignItems: "center",
          //   justifyContent: "space-evenly",
          //   padding: "5%",
          // }}
        >
          <Grid item xs={6} md={4}>
            <img
              src="/assets/images/undraw_conversation_4d9699.svg"
              alt=""
              className="homeImgPortrait"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography
              variant="h3"
              // sx={{
              //   fontFamily: "Noto sans",
              //   fontWeight: 300,
              //   letterSpacing: ".3rem",
              // }}
            >
              Sample Title for Section
            </Typography>
            <Typography variant="body1" gutterBottom>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              ultrices augue auctor, maximus diam a, aliquet ex. Mauris eleifend
              lorem quis massa feugiat fringilla. Donec ipsum mi, placerat et
              ligula et, suscipit convallis elit. Suspendisse elementum egestas
              maximus. Donec accumsan, sapien sed tincidunt venenatis, velit
              libero mollis urna, vel condimentum justo velit vitae sem. Nunc
              viverra est a luctus rhoncus. Cras eget felis vitae tellus sodales
              porttitor tempor quis elit.
            </Typography>
          </Grid>
        </Paper> */}
      </Grid>
    </div>
  );
};
