import { Button, Grid, makeStyles, Modal as ModalMui } from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  paper: {
    background: '#2a2a2a',
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(3, 3),
  },
  button: {
    background: "#3f51b5",
    padding: "8px",
    fontSize: "1.2rem",
    marginTop: '1rem',
    fontWeight: 700,
  },
}));

const Modal = ({ open, handleClose, children }) => {
  const classes = useStyles();
  return (
    <ModalMui
      open={open}
      onClose={handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      className="perfectCentered"
    >
      <Grid xs={11} sm={6} md={4} direction="column" className={clsx('perfectCentered', classes.paper)}>
        {children}
        <Button className={classes.button} onClick={handleClose}>Continuar</Button>
      </Grid>
    </ModalMui>
  );
};

export default Modal;
