import "../App.css";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

export const Home = () => {
  return (
    <div>
      <Grid
        container
        sx={{
          height: "85vh",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <Paper
          elevation="6"
          sx={{
            height: "60vh",
            width: "80vw",
            my: 12,
            mx: 10,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly",
            padding: "5%",
          }}
        >
          <Grid item xs={5} md={6}>
            <Typography
              variant="h4"
              sx={{
                fontFamily: "Noto sans",
                fontWeight: 400,
                letterSpacing: ".3rem",
              }}
            >
              An easier way <br /> to find focus &
              <Typography
                variant="h1"
                sx={{
                  color: "var(--blue)",
                  fontFamily: "Noto sans",
                  fontWeight: 500,
                  fontStyle: "italic",
                  letterSpacing: ".3rem",
                }}
              >
                Prioritize
              </Typography>
              your day.
            </Typography>
          </Grid>
          <Grid item xs={4} md={5}>
            <img
              src="/assets/images/undraw_ideas_flow_fade98.svg"
              alt=""
              className="homeImg"
              id="firstHomeImg"
            />
          </Grid>
        </Paper>

        <Paper
          elevation="6"
          sx={{ height: "60vh", width: "80vw", my: 15, mx: 10 }}
        >
          <Box
            sx={{
              my: 12,
              mx: 12,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            <Grid item xs={4}>
              <img
                src="/assets/undraw_key_points_re_u903.svg"
                alt=""
                className="homeImg"
              />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h3">Sample Title for Section</Typography>
              <Typography variant="body1" gutterBottom>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                ultrices augue auctor, maximus diam a, aliquet ex. Mauris
                eleifend lorem quis massa feugiat fringilla. Donec ipsum mi,
                placerat et ligula et, suscipit convallis elit. Suspendisse
                elementum egestas maximus. Donec accumsan, sapien sed tincidunt
                venenatis, velit libero mollis urna, vel condimentum justo velit
                vitae sem. Nunc viverra est a luctus rhoncus. Cras eget felis
                vitae tellus sodales porttitor tempor quis elit.
              </Typography>
            </Grid>
          </Box>
        </Paper>

        <Paper
          elevation="6"
          sx={{ height: "60vh", width: "80vw", my: 15, mx: 10 }}
        >
          <Box
            sx={{
              my: 12,
              mx: 12,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            <Grid item xs={6}>
              <Typography variant="h3">Sample Title for Section</Typography>
              <Typography variant="body1" gutterBottom>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                ultrices augue auctor, maximus diam a, aliquet ex. Mauris
                eleifend lorem quis massa feugiat fringilla. Donec ipsum mi,
                placerat et ligula et, suscipit convallis elit. Suspendisse
                elementum egestas maximus. Donec accumsan, sapien sed tincidunt
                venenatis, velit libero mollis urna, vel condimentum justo velit
                vitae sem. Nunc viverra est a luctus rhoncus. Cras eget felis
                vitae tellus sodales porttitor tempor quis elit.
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <img
                src="/assets/undraw_work_in_progress_re_byic.svg"
                alt=""
                className="homeImg"
              />
            </Grid>
          </Box>
        </Paper>

        <Paper
          elevation="6"
          sx={{ height: "60vh", width: "80vw", my: 15, mx: 10 }}
        >
          <Box
            sx={{
              my: 12,
              mx: 12,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            <Grid item xs={4}>
              <img
                src="/assets/undraw_conversation_re_c26v.svg"
                alt=""
                className="homeImg"
              />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h3">Sample Title for Section</Typography>
              <Typography variant="body1" gutterBottom>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                ultrices augue auctor, maximus diam a, aliquet ex. Mauris
                eleifend lorem quis massa feugiat fringilla. Donec ipsum mi,
                placerat et ligula et, suscipit convallis elit. Suspendisse
                elementum egestas maximus. Donec accumsan, sapien sed tincidunt
                venenatis, velit libero mollis urna, vel condimentum justo velit
                vitae sem. Nunc viverra est a luctus rhoncus. Cras eget felis
                vitae tellus sodales porttitor tempor quis elit.
              </Typography>
            </Grid>
          </Box>
        </Paper>
      </Grid>
    </div>
  );
};
