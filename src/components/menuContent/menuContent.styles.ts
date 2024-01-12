import { makeStyles, Theme } from '@material-ui/core/styles';
import backgroundImage from '../../assets/background.jpg';

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    justifyContent: "center",
    alignContent: "center",
    textAlign: "center",
    width: "100%",
    backgroundImage: `url(${backgroundImage})`
  },
  title: {
    fontFamily: "Titles",
    fontSize: "calc(1em + 8vw)",
    textAlign: "center",
    margin: "20px auto 10px 15px",
  },
  menuImageSection: {
    width: "40vw",
    float: "left",
  },
  menuImage: {
    width: "40vw",
    position: "relative",
    top: "0vh",
    left: "0vw",
  },
  footerContainer: {
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    margin: "auto",
    maxWidth: "410px"
  },
  admiracionOpen: {
    margin: "0, 20px, 0, 20px",
    height: "8dvh",
  },
  footerTex: {
    margin: 0,
    fontSize: "1.1rem",
    fontWeight: 600
  },
  admiracionclose: {
    margin: "0, 20px, 0, 20px",
    height: "8dvh",
  },
}));
export default useStyles;
