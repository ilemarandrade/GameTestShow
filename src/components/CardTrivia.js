import { Button, Grid, makeStyles, Typography } from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles(
  () => ({
    root: {
      padding: 30,
    },
    img: {
      width: "calc(100%)",
    },
    button: {
      background: "#3f51b5",
      padding: "8px",
      fontSize: "1.5rem",
      fontWeight: 700,
    },
  }),
  { name: "SelectTriviaStyles" }
);
const CardTrivia = ({ trivia, onClick }) => {
  const classes = useStyles();
  return (
    <Grid container item direction="column" className="mb-3" xs={12} sm={10}>
      <Typography variant="h2" align="center" className="mb-1">
        {trivia.title}
      </Typography>
      <img
        src={trivia.image}
        alt={trivia.title}
        className={clsx(classes.img, "mb-1")}
      />
      <Button className={classes.button} onClick={() => onClick(trivia.id)}>Jugar</Button>
    </Grid>
  );
};

export default CardTrivia;
