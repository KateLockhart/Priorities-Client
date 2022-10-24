import "../App.css";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

export const Home = () => {
  return (
    <div>
      <Grid
        container
        sx={{
          height: "80vh",
          width: "100vw",
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
            my: 15,
            mx: 10,
          }}
        >
          <Box
            sx={{
              my: 12,
              mx: 10,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-evenly",
              padding: "2%",
            }}
          >
            <Grid item xs={6}>
              <h2>
                Let us know your
                <br />
                <b>Priorities</b>
                <br />
                and we'll do the all sorting for you.
              </h2>
            </Grid>
            <Grid
              item
              xs={4}
              // sx={{
              //     backgroundImage: 'url(../../public/assets/undraw_ideas_flow_re_bmea.svg)',
              //     backgroundRepeat: 'no-repeat',
              //     backgroundSize: 'cover',
              //     backgroundPosition: 'center',
              // }}
            >
              <img
                src="/assets/undraw_ideas_flow_re_bmea.svg"
                alt=""
                className="homeImg"
                // sx={{ height: "5em", width: "30em" }}
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
                src="/assets/undraw_key_points_re_u903.svg"
                alt=""
                className="homeImg"
              />
            </Grid>
            <Grid item xs={6}>
              <h3>Title text for section</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                ultrices augue auctor, maximus diam a, aliquet ex. Mauris
                eleifend lorem quis massa feugiat fringilla. Donec ipsum mi,
                placerat et ligula et, suscipit convallis elit. Suspendisse
                elementum egestas maximus. Donec accumsan, sapien sed tincidunt
                venenatis, velit libero mollis urna, vel condimentum justo velit
                vitae sem. Nunc viverra est a luctus rhoncus. Cras eget felis
                vitae tellus sodales porttitor tempor quis elit.
              </p>
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
              <h3>Title text for section</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                ultrices augue auctor, maximus diam a, aliquet ex. Mauris
                eleifend lorem quis massa feugiat fringilla. Donec ipsum mi,
                placerat et ligula et, suscipit convallis elit. Suspendisse
                elementum egestas maximus. Donec accumsan, sapien sed tincidunt
                venenatis, velit libero mollis urna, vel condimentum justo velit
                vitae sem. Nunc viverra est a luctus rhoncus. Cras eget felis
                vitae tellus sodales porttitor tempor quis elit.
              </p>
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
              <h3>Title text for section</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                ultrices augue auctor, maximus diam a, aliquet ex. Mauris
                eleifend lorem quis massa feugiat fringilla. Donec ipsum mi,
                placerat et ligula et, suscipit convallis elit. Suspendisse
                elementum egestas maximus. Donec accumsan, sapien sed tincidunt
                venenatis, velit libero mollis urna, vel condimentum justo velit
                vitae sem. Nunc viverra est a luctus rhoncus. Cras eget felis
                vitae tellus sodales porttitor tempor quis elit.
              </p>
            </Grid>
          </Box>
        </Paper>
      </Grid>
    </div>
  );
};
