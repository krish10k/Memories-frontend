import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Mem2 from "../../assets/mem2.jpg";
import Wave from "../../assets/wavee.png";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: "10px"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    //color: theme.palette.text.secondary,
    height: "20rem",
    backgroundImage: `url(${Wave})`,
    backgroundSize :"cover"
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
      <Container maxWidth="xl">
        <Paper className={classes.paper}>
          <Grid container spacing={0}>
            <CssBaseline />
            <Grid item xs={6}>
              <img src={Mem2} alt="memories" className={classes.image} />
            </Grid>
            <Grid item xs={6}>
              <Typography>
                <h2>Store your memories at one place altogether!</h2>
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </div>
  );
}
