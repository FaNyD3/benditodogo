import Grid from "@mui/material/Grid";
import useStyles from "./menuMainPage.styles";
import logo from "../../assets/BenditodogoLogo.png";

export default function MenuMainPage() {
  const classes = useStyles({});
  return (
    <div className={classes.container}>
      <img className={classes.logo} src={logo}></img>
      <p className={classes.menuTitle}>"MENU"</p>
    </div>
  );
}
