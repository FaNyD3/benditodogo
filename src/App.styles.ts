import { Theme } from "@mui/material/styles";
import { makeStyles } from "@material-ui/core/styles";

// .header {
//   display: flex;
//   align-items: center;
//   justify-content: center;
// }

// .header img {
//   height: 100px;
// }

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    boxSizing: "border-box",
  },
  headerContainer: {
    background:
      "linear-gradient(to right top, #38438b, #944b94, #d75a88, #ff7e71, #ffb25f, #ffeb68);",
    width: "100vw",
    height: "100vh",
    [theme.breakpoints.down("sm")]: {
      height: "65vh",
    },
  },
  header: {
    height: "10vh",
    display: "flex",
    justifyContent: "center",
    paddingTop: "10px",
  },
  menuHeader: {
    display: "flex",
    justifyContent: "center",
    paddingTop: "10px",
    paddingBottom: "20px",
  },
  img: {
    height: "7vh",
  },
  mainImageContainer: {
    display: "flex",
    justifyContent: "center",
    paddingTop: "6%",
  },
  headerImage: {
    height: "30vh",
    [theme.breakpoints.down("sm")]: {
      height: "25vh",
    },
  },
  title: {
    fontSize: "68px",
    marginTop: "0",
    marginBottom: "0",
  },
  platillo: {
    marginBottom: "10px",
    marginTop: "10px",
  },
  description: {
    fontFamily: "serif",
  },
}));

export default useStyles;
