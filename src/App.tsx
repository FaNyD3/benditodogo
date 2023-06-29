import useStyles from "./App.styles";
import { Grid } from "@mui/material";
import MenuMainPage from "./components/menuMainPage/menuMainPage.component";
import MenuContent from "./components/menuContent/menuContent.component";
import { useState } from "react";

function App() {
  const [section, setSection] = useState("");
  const classes = useStyles({});
  return (
    <>
      <Grid container className={classes.mainContainer}>
        <header className={classes.header} style={{ display: 'none'}}>{section}</header>
        <Grid container className={classes.menuContainer}>
          <MenuMainPage></MenuMainPage>
          <MenuContent></MenuContent>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
