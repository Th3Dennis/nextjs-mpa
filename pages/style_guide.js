import { Box } from "@mui/system";
import { Typography, Grid, Paper, Button, Divider } from "@mui/material";

export default function StyleGuide() {
  return (
    <>
      <Grid container spacing={3} sx={{ mt: 3, mx: 5 }}>
        <Grid item md={7}>
          <Box sx={{ mt: 0 }}>
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              Font: Roboto
            </Typography>
          </Box>

          <Box sx={{ width: "100%" }}>
            <Typography variant="h1" component="div" gutterBottom>
              h1. Heading
            </Typography>
            <Typography variant="h2" gutterBottom component="div">
              h2. Heading
            </Typography>
            <Typography variant="h3" gutterBottom component="div">
              h3. Heading
            </Typography>
            <Typography variant="h4" gutterBottom component="div">
              h4. Heading
            </Typography>
            <Typography variant="h5" gutterBottom component="div">
              h5. Heading
            </Typography>
            <Typography variant="h6" gutterBottom component="div">
              h6. Heading
            </Typography>
            <Typography variant="subtitle1" gutterBottom component="div">
              subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Quos blanditiis tenetur
            </Typography>
            <Typography variant="subtitle2" gutterBottom component="div">
              subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Quos blanditiis tenetur
            </Typography>
            <Typography variant="body1" gutterBottom>
              body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore
              consectetur, neque doloribus, cupiditate numquam dignissimos
              laborum fugiat deleniti? Eum quasi quidem quibusdam.
            </Typography>
            <Typography variant="body2" gutterBottom>
              body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore
              consectetur, neque doloribus, cupiditate numquam dignissimos
              laborum fugiat deleniti? Eum quasi quidem quibusdam.
            </Typography>
            <Typography variant="button" display="block" gutterBottom>
              button text
            </Typography>
            <Typography variant="caption" display="block" gutterBottom>
              caption text
            </Typography>
            <Typography variant="overline" display="block" gutterBottom>
              overline text
            </Typography>
          </Box>
        </Grid>
        <Grid item md={1}>
          <Divider orientation="vertical" flexItem />
        </Grid>
        <Grid item md={4}>
          <Grid container spacing={3}>
            <Grid item>
              <Paper
                sx={{
                  height: 100,
                  width: 180,
                  backgroundColor: "primary.main",
                }}
              />
              <Box sx={{ color: "text.primary" }}>
                Primary Color:{" "}
                <Typography
                  sx={{ display: "inline" }}
                  variant="inherit"
                  color="primary"
                >
                  #28b5f4
                </Typography>
              </Box>
            </Grid>

            <Grid item>
              <Paper
                sx={{
                  height: 100,
                  width: 180,
                  backgroundColor: "secondary.main",
                }}
              />
              <Box sx={{ color: "text.secondary" }}>
                Secondary Color:{" "}
                <Typography
                  sx={{ display: "inline" }}
                  variant="inherit"
                  color="secondary"
                >
                  #fa8072
                </Typography>
              </Box>
            </Grid>
          </Grid>

          <Grid container spacing={3} sx={{ mt: 4 }}>
            <Grid item>
              <Button variant="contained" color="primary">
                Primary Button
              </Button>
            </Grid>

            <Grid item>
              <Button variant="contained" color="secondary">
                Secondary Button
              </Button>
            </Grid>
          </Grid>
          <Grid container spacing={3} sx={{ mt: 1 }}>
            <Grid item>
              <Button variant="contained" color="success">
                Success Button
              </Button>
            </Grid>

            <Grid item>
              <Button variant="contained" color="error">
                Error Button
              </Button>
            </Grid>
          </Grid>
          <Grid container spacing={3} sx={{ mt: 4 }}>
            <Grid item>
              <Button variant="outlined" color="primary">
                Primary Button
              </Button>
            </Grid>

            <Grid item>
              <Button variant="outlined" color="secondary">
                Secondary Button
              </Button>
            </Grid>
          </Grid>
          <Grid container spacing={3} sx={{ mt: 1 }}>
            <Grid item>
              <Button variant="outlined" color="success">
                Success Button
              </Button>
            </Grid>

            <Grid item>
              <Button variant="outlined" color="error">
                Error Button
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
