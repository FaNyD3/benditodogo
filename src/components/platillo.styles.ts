import { Theme } from "@mui/material/styles";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  platilloTitleContainer: {
    display: "flex",
    justifyContent: "center",
  },
  platilloTitle: {
    marginBottom: "10px",
    marginTop: "10px",
    fontSize: "32px",
  },
  PlatilloImage: {
    width: "100%",
    height: "321px",
    //objectFit: "cover",
    //objectPosition: "0 -126px",
  },
  description: {
    fontFamily: "serif",
    textAlign: "justify",
    fontSize: "20px",
  },
}));
export default useStyles;
