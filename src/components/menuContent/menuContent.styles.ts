import { Theme } from "@mui/material/styles";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    justifyContent: "center",
    alignContent: "center",
    textAlign: "center",
    width: "100%",
  },
  title: {
    fontFamily: "Titles",
    fontSize: "calc(1em + 8vw)",
    textAlign: "center",
    margin: "20px auto 10px 15px",
  },
  menuImage: {
    width: "30vw",
    position: "relative",
    top: "-6vh",
    left: "-34vw",
  },
}));
export default useStyles;
