import Grid from "@mui/material/Grid";
import useStyles from "./menuMainPage.styles";
import logo from "../../assets/BenditoDogoLogo.png";
import menuImage from "../../assets/image.png";

export default function MenuMainPage() {
  const classes = useStyles({});
  return (
    <>
      <div className={classes.container}>
        <img className={classes.logo} src={logo}></img>
        <p className={classes.bienvenidosText}>!Bienvenidos!</p>
        <img className={classes.menuTitle} src={menuImage}></img>
      </div>
    </>
  );
}
