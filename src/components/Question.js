import { Grid, makeStyles, Typography } from "@material-ui/core";
import clsx from "clsx";
import { useState } from "react";
import Stepper from "./Stepper";
import Timer from "./Timer";
import Modal from "./Modal";
const useStyles = makeStyles(
  (theme) => ({
    root: {
      padding: 20,
    },
    options: {
      color: "gray",
      marginBottom: "1.5rem",
    },
    answerCorrect: {
      color: theme.palette.success.main,
    },
    answerIncorrect: {
      color: theme.palette.error.main,
    },
  }),
  { name: "QuestionStyles" }
);

const Question = ({ data, goInit }) => {
  const classes = useStyles();
  const [questionCurrent, setQuestionCurrent] = useState(0);
  const [isTimer, setTimer] = useState(true);
  const [showAnswer, setShowAnswer] = useState(false);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [completedGame, setCompletedGame] = useState(false);
  const [answersCorrects, setAnswersCorrects] = useState(0);
  const isNotLastQuestion = questionCurrent < data.questions.length - 1;
  const finishedTime = () => {
    setTimer(false);
    setOpenModal(true);
    setCompletedGame(false);
  };
  const optionSelected = (correct) => {
    setShowAnswer(true);
    setTimer(false);
    setIsAnswerCorrect(correct);
    correct && setAnswersCorrects(answersCorrects + 1);
    if (isNotLastQuestion) {
      setTimeout(() => {
        setQuestionCurrent(questionCurrent + 1);
        setShowAnswer(false);
      }, 2000);
      setTimeout(() => setTimer(true), 2000);
    } else {
      setCompletedGame(true);
      setOpenModal(true);
    }
  };
  const handleCloseModal = () => {
    setOpenModal(false);
    goInit();
  };

  return (
    <Grid
      className={classes.root}
      container
      justify="flex-start"
      direction="column"
      wrap="nowrap"
      xs={12}
    >
      <Grid item className="mb-1">
        <Typography align="center">{`Pregunta N° ${
          questionCurrent + 1
        }`}</Typography>
      </Grid>
      <Grid item container justify="center" className="mb-1">
        <Timer
          time={data.questions[questionCurrent].lifetimeSeconds}
          eventFinishTime={finishedTime}
          isActiveTimer={isTimer}
        />
      </Grid>
      <Grid item>
        <Typography variant="h3" align="center" className="mb-1">
          {data.questions[questionCurrent]?.text}
        </Typography>
      </Grid>
      <Grid item className="mb-1">
        {data.questions[questionCurrent]?.options.map((option) => (
          <Typography
            onClick={() => optionSelected(option.correct)}
            className={clsx(
              classes.options,
              `${showAnswer && option.correct && classes.answerCorrect} cp`
            )}
            align="center"
          >
            {option.text}
          </Typography>
        ))}
      </Grid>
      {showAnswer && (
        <Grid item className="mb-1" align="center">
          <Typography
            className={
              isAnswerCorrect ? classes.answerCorrect : classes.answerIncorrect
            }
          >
            {isAnswerCorrect
              ? "Excelente respuesta felicitaciones!"
              : "Has seleccionado una respuesta incorrecta"}
          </Typography>
        </Grid>
      )}
      <Grid xs={12} item>
        <Stepper
          questionCurrent={questionCurrent}
          questionTotal={data.questions.length}
        />
      </Grid>
      <Modal open={openModal} handleClose={handleCloseModal}>
        <Typography variant="h2" align="center" className="mb-1">
          {completedGame ? "Trivia Finalizada" : "Se ha acabado el tiempo"}
        </Typography>
        <Typography align="center">
          {completedGame
            ? `Obtuviste ${
                answersCorrects * 2
              } puntos, ${answersCorrects} respuestas correctas de ${
                data.questions.length
              } preguntas`
            : "Puedes iniciar de nuevo o puedes elejir otra trivia"}
        </Typography>
      </Modal>
    </Grid>
  );
};
export default Question;
