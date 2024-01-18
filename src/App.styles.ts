import { Theme } from "@mui/material/styles";
import { makeStyles } from "@material-ui/core/styles";
import backgroundImage from './assets/background.jpg';

const useStyles = makeStyles((theme: Theme) => ({
  mainContainer: {
    backgroundImage: `url(${backgroundImage})`,
    height: "100dvh",
    position: "fixed",
  },
  menuContainer: {
    overflow: "scroll",
    overflowX: "hidden",
    height: "100dvh",
  },
  footer: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
  },
  container: {
    fontFamily: "Titles",
    width: "100%",
    display: "grid",
    gap: 0,
    maxHeight: "200px",
    gridTemplateColumns: "33% 34% 33%",
    gridTemplateRows: "1fr 1fr 1fr",
    '@media(max-width: 373px)' : {
      gridTemplateColumns: "40% 60%",
      gridTemplateRows: "1fr 1fr 1fr 1fr 1fr",
      gridTemplateAreas: `
      'Void Redes'
      'Logo Whatsapp'
      'Logo Insta  '
      'Logo Face '
      'Logo Domicilio'`,
    },
    gridTemplateAreas: `
    'Void Redes Contacto'
    'Logo Face Whatsapp'
    'Logo Insta Domicilio'`,
  },
  Void: { 
    gridArea: "Void"
  },
  Redes: {
    gridArea: "Redes",
    fontFamily: "Titles",
    fontSize: "1.5rem",
    textAlign: "center"
  },
  Contacto: {
    gridArea: "Contacto",
    fontFamily: "Titles",
    fontSize: "1.5rem",
    textAlign: "left"
  },
  Logo: {
    gridArea: "Logo",
    paddingLeft: "1rem",
    paddingBottom: "1rem",
    paddingTop: "1.5rem",
    backgroundColor: "#ddd9d1"
  },
  Face: {
    fontFamily: 'arial',
    gridArea: "Face",
    backgroundColor: "#ddd9d1",
    padding: "1rem 0",
  },
  Insta: {
    fontFamily: 'arial',
    gridArea: "Insta",
    backgroundColor: "#ddd9d1"
  },
  Whatsapp: {
    gridArea: "Whatsapp",
    backgroundColor: "#ddd9d1",
    padding: "1rem 0",
    fontFamily: 'arial',
  },
  Domicilio: {
    fontSize: '0.75rem',
    fontFamily: 'arial',
    gridArea: "Domicilio",
    backgroundColor: "#ddd9d1"
  },
  footerLogo: {
    width: "100px",
  }
}));

export default useStyles;
