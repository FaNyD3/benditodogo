import { Theme } from "@mui/material/styles";
import { makeStyles } from "@material-ui/core/styles";
import headerImage from "./assets/Header.png";
import footerImage from "./assets/Footer.png";

const useStyles = makeStyles((theme: Theme) => ({
  mainContainer: {
    height: "100vh",
    position: "fixed",
  },
  header: {
    top: "0",
    width: "100%",
    height: "8vh",
    display: "flex",
    position: "sticky",
    textAlign: "center",
    backgroundColor: "#fff",
    backgroundSize: "100vw 10vh",
  },
  menuContainer: {
    overflow: "scroll",
    overflowX: "hidden",
    height: "83vh",
  },
  testContent: {
    height: "3000px",
  },
  title: {
    fontSize: "62px",
    marginTop: "0",
    marginBottom: "0",
  },
  headerImage: {
    width: "100vw",
    height: "10vh",
  },
  footer: {
    bottom: "0",
    height: "10vh",
    width: "100vw",
    display: "flex",
    fontSize: "25px",
    position: "sticky",
    backgroundSize: "100vw 10vh",
    backgroundColor: "#fff",
  },
  footerContainer: {
    textAlign: "center",

    alignItems: "center",
    justifyContent: "center",
  },
  admiracionOpen: {
    margin: "0, 20px, 0, 20px",
    height: "8vh",
  },
  admiracionclose: {
    margin: "0, 20px, 0, 20px",
    height: "8vh",
  },
  footerText: {
    margin: 0,
    display: "flex",
    fontFamily: "Titles",
  },
  menuImage: {
    width: "30vw",
    position: "relative",
    height: "10vw",
    top: "26px",
  },
  sectionName: {
    display: "flex",
    fontSize: "40px",
    fontFamily: "Titles",
    margin: "0",
    marginLeft: "27px"
  },
}));

export default useStyles;
