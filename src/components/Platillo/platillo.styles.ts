import { Theme } from "@mui/material/styles";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  platilloContainer: {
    justifyContent: "space-between",
    padding: "10px 25px",
  },
  platilloName: {
    display: "inline-block",
    width: "100%",
    fontSize: "25px",
    color: "#fe5208",
  },
  description: {
    fontFamily: "serif",
    textAlign: "justify",
    fontSize: "20px",
  },
}));
export default useStyles;
