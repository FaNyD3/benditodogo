import { Theme } from "@mui/material/styles";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  platilloContainer: {
    justifyContent: "space-between",
    padding: "10px 25px",
  },
  platilloName: {
    fontFamily: "Titles",
    display: "inline-block",
    width: "100%",
    fontSize: "30px",
    color: "#fe5208",
  },
  description: {
    fontWeight: 600,
    fontFamily: "Descriptions",
    textAlign: "justify",
    fontSize: "20px",
  },
}));
export default useStyles;
