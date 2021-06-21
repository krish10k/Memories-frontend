import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Mem1 from "../../assets/mem1.jpg";
import Wave from "../../assets/wave.png";
// import Bg from "./divbg.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    //color: theme.palette.text.secondary,
    //backgroundColor: "red", backgroundSize :"cover",
    backgroundImage: `url(${Wave})`,
    backgroundSize: "cover",
    height: "20rem"
  },
  contain: {
    // backgroundImage: `url(${Wave})`,
    // zIndex: "2",
    // backgroundColor:"blue"
  },
  image: {
    borderRadius: "50%",
    border: "7px solid #fff",
    width: "18rem",
    height: "18rem"
  }
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="xl" className={classes.contain}>
        <Paper className={classes.paper}>
          <Grid container spacing={0}>
            <CssBaseline />
            <Grid item xs={6} sm={6}>
              <Typography>
                <h2>Organise your memories at one place!</h2>
              </Typography>
            </Grid>
            <Grid item xs={6} sm={6}>
              <img src={Mem1} alt="memories" className={classes.image} />{" "}
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </div>
  );
}
