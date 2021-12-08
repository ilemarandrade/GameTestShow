import { Grid, makeStyles } from "@material-ui/core";
import CardTrivia from "./CardTrivia";

const useStyles = makeStyles(
  (theme) => ({
    root: {
      padding: 30,
    },
  }),
  { name: "SelectTriviaStyles" }
);

const SelectTrivia = ({ triviasAvailable, onClickPlay }) => {
  const classes = useStyles();
  return (
    <Grid container justify="center" className={classes.root}>
      {triviasAvailable.map((trivia) => (
        <CardTrivia trivia={trivia} onClick={onClickPlay} />
      ))}
    </Grid>
  );
};

export default SelectTrivia;
