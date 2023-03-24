import useStyles from "./App.styles";
import { Grid } from "@mui/material";
import Platillo, {
  PlatilloPosition,
} from "./components/Platillo/platillo.component";
import menuData from "./platillos.json";
import MenuMainPage from "./components/menuMainPage/menuMainPage.component";
import MenuContent from "./components/menuContent/menuContent.component";

function App() {
  const classes = useStyles({});
  return (
    <>
      <Grid container className={classes.mainContainer}>
        <header className={classes.header}></header>
        <Grid container className={classes.menuContainer}>
          <MenuMainPage></MenuMainPage>
          <MenuContent></MenuContent>
        </Grid>
        <footer className={classes.footer}></footer>
      </Grid>
    </>
  );
}

export default App;
