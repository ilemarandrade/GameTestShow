import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import { Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    background: "transparent",
  },
});

export default function Stepper({questionTotal, questionCurrent}) {
  const classes = useStyles();
  return (
    <Grid>
      <Grid>
          <Typography align="center">{`${questionCurrent+1} de ${questionTotal} preguntas`}</Typography>
      </Grid>
      <Grid>
        <MobileStepper
          variant="progress"
          steps={questionTotal+1}
          position="static"
          activeStep={questionCurrent+1}
          className={classes.root}
        />
      </Grid>
    </Grid>
  );
}
