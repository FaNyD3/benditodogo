import { Theme } from "@mui/material/styles";
import { makeStyles } from "@material-ui/core/styles";
import headerImage from "./assets/Header.png";
import footerImage from "./assets/Footer.png";

const useStyles = makeStyles((theme: Theme) => ({
  mainContainer: {
    maxHeight: "100vh",
    position: "fixed",
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
    width: "101%",
    height: "10vh",
  },
  header: {
    width: "100%",
    position: "sticky",
    top: "0",
    height: "10vh",
    backgroundImage: `url(${headerImage})`,
    backgroundSize: "100%",
  },
  footer: {
    width: "100%",
    position: "sticky",
    bottom: "0",
    height: "10vh",
    backgroundImage: `url(${footerImage})`,
    backgroundSize: "100%",
  },
  menuContainer: {
    maxHeight: "70vh",
    minHeight: "70vh",
    overflow: "scroll",
    height: "3000px",
  },
  testContent: {
    height: "3000px",
  },
}));

export default useStyles;
