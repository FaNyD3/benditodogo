import useStyles from "./App.styles";
import { Grid } from "@mui/material";
import MenuMainPage from "./components/menuMainPage/menuMainPage.component";
import MenuContent from "./components/menuContent/menuContent.component";
import logo from './assets/BenditodogoLogo.png';
import facebookLogo from './assets/icons/facebook.svg';
import instagramLogo from './assets/icons/instagram.svg';
import whatsappLogo from './assets/icons/whatsapp.svg';
import mapPin from './assets/icons/map-pin.svg';


function App() {
  const classes = useStyles({});
  return (
    <>
      <Grid container className={classes.mainContainer}>
        <Grid container className={classes.menuContainer}>
          <MenuMainPage></MenuMainPage>
          <MenuContent></MenuContent>
          <div className={classes.container}>
            <div className={classes.Void}></div>
            <div className={classes.Redes}>NUESTRAS REDES</div>
            <div className={classes.Contacto}>CONTACTO</div>
            <div className={classes.Logo}>
              <img className={classes.footerLogo} src={logo}></img>
            </div>
            <div className={classes.Face}>
              <img src={facebookLogo} alt="facebook" /> bendito_dogo
            </div>
            <div className={classes.Insta}>
              <img src={instagramLogo} alt="instagram" /> bendito_dogo
            </div>
            <div className={classes.Whatsapp}>
              <img src={whatsappLogo} alt="whatsapp" /> (33)14479481
            </div>
            <div className={classes.Domicilio}>
            <img src={mapPin} alt="mapPin" /> Avenida Patria 3586 Fracc. Revolucion Tlaquepaque, Jalisco
            </div>
          </div>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
