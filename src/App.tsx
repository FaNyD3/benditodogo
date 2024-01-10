import useStyles from "./App.styles";
import { Grid } from "@mui/material";
import MenuMainPage from "./components/menuMainPage/menuMainPage.component";
import MenuContent from "./components/menuContent/menuContent.component";
import { useState } from "react";
import Admiracion from "./assets/admiracion.png";

function App() {
  const classes = useStyles({});
  return (
    <>
      <Grid container className={classes.mainContainer}>
        <Grid container className={classes.menuContainer}>
          <MenuMainPage></MenuMainPage>
          <MenuContent></MenuContent>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
