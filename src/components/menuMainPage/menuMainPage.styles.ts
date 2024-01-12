import { Theme } from "@mui/material/styles";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    marginTop: "6vh",
    justifyContent: "center",
    alignContent: "center",
    textAlign: "center",
    width: "100%",
    height: "100vh",
    background: `linear-gradient(${calculateSkewAngle()}deg, rgba(252,80,4,1)  50%, rgba(255,255,255,1) 50%)`,
  },
  logo: {
    marginTop: "0",
    width: "30%",
    marginBottom: "5vh",
  },
  bienvenidosText: {
    fontFamily: "Titles",
    fontSize: "calc(1em + 7vw)",
  },
  menuTitle: {
    width: "85%",
  },
}));
export default useStyles;

const calculateSkewAngle = () => {
  const radians = Math.atan2(window.innerHeight, window.innerWidth);
  const degrees = (radians * 180) / Math.PI;
  return -degrees.toFixed(2);
};
