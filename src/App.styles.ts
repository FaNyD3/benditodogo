import { Theme } from "@mui/material/styles";
import { makeStyles } from "@material-ui/core/styles";
import headerImage from "./assets/Header.png";
import footerImage from "./assets/Footer.png";

const useStyles = makeStyles((theme: Theme) => ({
  mainContainer: {
    height: "100dvh",
    position: "fixed",
  },
  menuContainer: {
    overflow: "scroll",
    overflowX: "hidden",
    height: "100dvh",
  }
}));

export default useStyles;
