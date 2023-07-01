import useStyles from "./App.styles";
import { Grid } from "@mui/material";
import MenuMainPage from "./components/menuMainPage/menuMainPage.component";
import MenuContent from "./components/menuContent/menuContent.component";
import { useState } from "react";
import Admiracion from "./assets/admiracion.png";
import menuImage from "./assets/Menu_small.png";

function App() {
  const classes = useStyles({});
  const [section, setSection] = useState("");
  const [footerText, setFooterText] = useState("");
  return (
    <>
      <Grid container className={classes.mainContainer}>
        <header
          style={
            section.length > 0 ? { display: "inline" } : { display: "none" }
          }
          className={classes.header}>
          <img className={classes.menuImage} src={menuImage}></img>
          <p className={classes.sectionName}>{section}</p>
        </header>
        <Grid container className={classes.menuContainer}>
          <MenuMainPage></MenuMainPage>
          <MenuContent
            handleSetSection={setSection}
            handleFooterText={setFooterText}></MenuContent>
        </Grid>
        <footer
          style={
            section.length > 0 ? { display: "inline" } : { display: "none" }
          }
          className={classes.footer}>
          <Grid container className={classes.footerContainer}>
            <Grid item xs={1}>
              <img className={classes.admiracionOpen} src={Admiracion}></img>
            </Grid>
            <Grid item xs={10}>
              <p className={classes.footerText}>{footerText}</p>
            </Grid>
            <Grid item xs={1}>
              <img className={classes.admiracionclose} src={Admiracion}></img>
            </Grid>
          </Grid>
        </footer>
      </Grid>
    </>
  );
}

export default App;
