import { Theme } from "@mui/material/styles";
import { makeStyles } from "@material-ui/core/styles";
import planet from "../../assets/planeta.png";

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    justifyContent: "center",
    alignContent: "center",
    textAlign: "center",
    width: "100%",
    height: "100vh",
    backgroundImage: `url(${planet})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "-340px 450px",
    overflow: "visible",
  },
  logo: {
    marginTop: "6vh",
    width: "60%",
    marginBottom: "7vh",
  },
  menuTitle: {
    marginTop: "7vh",
    width: "90%",
    position: "relative",
    zIndex: 3,
  },
  planet: {
    position: "relative",
    width: "100%",
    left: "-50%",
    top: "-8%",
    zIndex: 2,
  }
}));
export default useStyles;

const calculateSkewAngle = () => {
  const radians = Math.atan2(window.innerHeight, window.innerWidth);
  const degrees = (radians * 180) / Math.PI;
  return -degrees.toFixed(2);
};
