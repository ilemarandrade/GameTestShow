import { ButtonBase, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import clsx from "clsx";

const useStyles = makeStyles(
  (theme) => ({
    root: {
      height: "10vh",
      borderBottom: "1px solid gray",
    },
    title: {
      whiteSpace: "nowrap",
      textOverflow: "ellipsis",
      overflow: "hidden",
      width: "80vw",
    },
    arrowIcon: {
      [theme.breakpoints.up("md")]: {
        fontSize: '3rem',
      },
    },
  }),
  { name: "HeaderStyles" }
);
const Header = ({ goBack, showArrow, title }) => {
  const classes = useStyles();
  return (
    <Grid
      container
      alignItems="center"
      justify="flex-start"
      className={clsx("mb-1", classes.root)}
    >
      {showArrow && (
        <Grid>
          <ButtonBase onClick={goBack}>
            <ArrowBackIcon className={classes.arrowIcon} fontSize="large" />
          </ButtonBase>
        </Grid>
      )}
      <Grid item>
        <Typography variant="h1" className={classes.title}>
          {title}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Header;
