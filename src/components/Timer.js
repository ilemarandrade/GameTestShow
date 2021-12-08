import { makeStyles } from "@material-ui/core";
import clsx from "clsx";
import { useEffect, useState } from "react";
const useStyles = makeStyles(
  () => ({
    root: {
      borderRadius: 100,
      border: "4px solid gray",
      width: "4rem",
      height: "4rem",
      color: "#3f51b5",
      fontSize: "1.5rem",
      fontWeight: 700,
    },
  }),
  { name: "TimerStyles" }
);

const Timer = ({ time, eventFinishTime, isActiveTimer}) => {
  const classes = useStyles();
  const [counter, setCounter] = useState(time);
  useEffect(() => {
    if (counter && isActiveTimer) {
      const interval = setInterval(() => setCounter(counter - 1), 1000);
      return () => clearInterval(interval);
    }
    else if(!counter && isActiveTimer) eventFinishTime()
    else if(!counter || !isActiveTimer) setCounter(time);
  }, [counter, isActiveTimer, time, eventFinishTime]);
  return <div className={clsx("perfectCentered", classes.root)}>{counter}</div>;
};

export default Timer;
