import { Theme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

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
    boxSizing: 'border-box',
  },
  headerContainer: {
    background: 'linear-gradient(to right top, #38438b, #944b94, #d75a88, #ff7e71, #ffb25f, #ffeb68);',
  },
  header: {
    height: '10vh',
    display: "flex",
    justifyContent: "center",
    paddingTop: '10px'
    
  },
  img: {
    height: "100px",
  },
  mainImageContainer: {
    width: "100vw",
    height: "75vh",
    display: "flex",
    justifyContent: "center",
    paddingTop: '100px',
  },
  headerImage: {
    height: "400px",
  }
}));

export default useStyles;
