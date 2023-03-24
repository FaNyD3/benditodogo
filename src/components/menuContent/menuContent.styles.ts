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
    fontFamily: "titles",
    fontSize: "50px",
    textAlign: "center",
    margin: "20px auto 10px auto",
  },
}));
export default useStyles;
