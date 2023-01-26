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
  },
  PlatilloImage: {
    width: "100%",
    height: "321px",
    objectFit: 'cover',
    objectPosition: '0 -126px'
  },
  descriptionRight: {
    fontFamily: "serif",
    textAlign: "justify",
    marginLeft: "10px",
  },
  descriptionLeft: {
    fontFamily: "serif",
    textAlign: "justify",
    marginRight: "10px",
  },
}));
export default useStyles;
