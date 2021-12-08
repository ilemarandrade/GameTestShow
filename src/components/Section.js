import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    height: "calc(100% - 17vh)",
    background: '#2a2a2a',
    borderRadius: 5,
    overflow: 'auto',
  },
}), {name: 'sectionStyles'});

const Section = (props) => {
    const {children} = props;
  const classes = useStyles();
  return <Grid container className={classes.root} xs={12} sm={8} md={3}>{children}</Grid>;
}; 

export default Section;
