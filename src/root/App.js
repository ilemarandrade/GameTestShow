import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";
import Header from "../components/Header";
import Question from "../components/Question";
import Section from "../components/Section";
import Provider from "./Provider";
import data from "../data/data.json";
import SelectTrivia from "../components/SelectTrivia";

const useStyles = makeStyles(
  () => ({
    root: {
      background: "#161616",
      width: "100vw",
      height: "100vh",
      padding: "0px 10px",
    },
  }),
  { name: "AppStyles" }
);

const App = () => {
  const classes = useStyles();
  const [initOrGame, setInitOrGame] = useState("init");
  const [dataTriviaSelected, setDataTriviaSelected] = useState({});
  const startTrivia = (id) => {
    setDataTriviaSelected(data.filter((trivia) => trivia.id === id));
    setInitOrGame("game");
  };
  const goBack = () => setInitOrGame("init");
  const isInit = initOrGame === "init";
  return (
    <Provider>
      <Grid container justify="center" className={classes.root}>
        <Header
          goBack={goBack}
          showArrow={initOrGame === "game"}
          title={isInit ? "SuperTrivias" : dataTriviaSelected[0].title}
        />
        <Section>
          {isInit ? (
            <SelectTrivia triviasAvailable={data} onClickPlay={startTrivia} />
          ) : (
            <Question data={dataTriviaSelected[0]} goInit={()=> setInitOrGame('init')} />
          )}
        </Section>
      </Grid>
    </Provider>
  );
};

export default App;
