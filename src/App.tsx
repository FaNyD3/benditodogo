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
            <a className={classes.text} href="https://www.facebook.com/profile.php?id=100063644673026&mibextid=LQQJ4d">
              <img src={facebookLogo} alt="facebook" /> bendito_dogo
            </a>
            </div>
            <div className={classes.Insta}>
            <a className={classes.text} href="https://www.instagram.com/bendito_dogo?igsh=MWJlemUzZDloZGN2cA==">
              <img src={instagramLogo} alt="instagram" /> bendito_dogo
            </a>
            </div>
            <div className={classes.Whatsapp}>
              <a className={classes.text} href="https://wa.me/message/ROHILSIU5KKIN1">
                <img src={whatsappLogo} alt="whatsapp" /> Ordena aquí
              </a>
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
