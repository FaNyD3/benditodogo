import useStyles from "./App.styles";
import { Grid } from "@mui/material";
import MenuMainPage from "./components/menuMainPage/menuMainPage.component";
import MenuContent from "./components/menuContent/menuContent.component";
import { useState } from "react";

function App() {
  const classes = useStyles({});
  const [section, setSection] = useState("");
  const [footerText, setFooterText] = useState("");
  return (
    <>
      <Grid container className={classes.mainContainer}>
        <header>{section}</header>
        <Grid container className={classes.menuContainer}>
          <MenuMainPage></MenuMainPage>
          <MenuContent
            handleSetSection={setSection}
            handleFooterText={setFooterText}></MenuContent>
        </Grid>
        <footer>{footerText}</footer>
      </Grid>
    </>
  );
}

export default App;
