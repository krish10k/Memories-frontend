import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { Height } from "@material-ui/icons";
import Smile from "../../assets/smile.png";
import Plane from "../../assets/plane.png";
// import LAngle from "../..assets/angle-left.png";
// import RAngle from "../../assets/angle-right.png";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: "20rem",
    marginTop: "3rem",
    marginBottom: "40px",
    paddingBottom: "0px"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    height: " 10rem"
  },
  emoji: {
    width: "5rem",
    height: "5rem",
    marginTop: "20px"
  },
  larrow: {
    width: "2rem",
    height: "2rem",
    marginTop: "60px"
  },
  rarrow: {
    width: "2rem",
    height: "2rem",
    marginTop: "60px",
    marginLeft: "90px"
  }
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="xl">
        <Grid container spacing={0}>
          <CssBaseline />
          <Grid item xs={12} sm={1}>
            {/* <img src={LAngle} alt="Arrow" className={classes.larrow} /> */}
          </Grid>
          <Grid item xs={12} sm={1}>
            <Paper className={classes.paper}>
              <img src={Smile} alt="Smiley" className={classes.emoji} />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper className={classes.paper}>
              <Typography>
                <ul>
                  <li>Holidays</li>
                  <li>Events</li>
                  <li>College/School Fests</li>
                </ul>
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={1}>
            <Paper className={classes.paper}>
              <img src={Plane} alt="Plane" className={classes.emoji} />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper className={classes.paper}>
              <Typography>
                <ul>
                  <li>Personal</li>
                  <li>Favorites</li>
                  <li>Day of the Week</li>
                </ul>
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={1}>
            {/* <img src={RAngle} alt="Arrow" className={classes.rarrow} /> */}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
