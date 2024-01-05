import { makeStyles, Theme } from '@material-ui/core/styles';

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
    width: "40vw",
    position: "relative",
    top: "0vh",
    left: "0vw",
  },
  menuImageSection: {
    width: "40vw",
    float: "left",
  }
}));
export default useStyles;
