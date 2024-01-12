import Grid from "@mui/material/Grid";
import useStyles from "./menuMainPage.styles";
import logo from '../../assets/BenditodogoLogo.png';
import menuImage from "../../assets/menu-big.png";

export default function MenuMainPage() {
  const classes = useStyles({});
  return (
    <>
      <div className={classes.container}>
        <img className={classes.logo} src={logo}></img>
        <img className={classes.menuTitle} src={menuImage}></img>
      </div>
    </>
  );
}
