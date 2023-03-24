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
    width: "100%",
    position: "sticky",
    top: "0",
    height: "10vh",
    backgroundImage: `url(${headerImage})`,
    backgroundSize: "100vw 10vh",
  },
  menuContainer: {
    maxHeight: "89vh",
    minHeight: "80vh",
    overflow: "scroll",
    overflowX: "hidden",
    marginTop: "-6vh",
    height: "3000px",
  },
  testContent: {
    height: "3000px",
  },
  footer: {
    width: "100vw",
    position: "sticky",
    bottom: "0",
    height: "10vh",
    backgroundImage: `url(${footerImage})`,
    backgroundSize: "100vw 10vh",
  },
  menuHeader: {
    display: "flex",
    justifyContent: "center",
    paddingTop: "10px",
    paddingBottom: "20px",
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
}));

export default useStyles;
