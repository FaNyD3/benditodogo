import Grid from "@mui/material/Grid";
import useStyles from "./menuContent.styles";
import menuData from "../../platillos.json";
import Platillo from "../Platillo/platillo.component";

export default function MenuContent() {
  const classes = useStyles({});
  return (
    <Grid xs={12} className={classes.container}>
      {menuData.sections.map((section) => (
        <>
          <h2 className={classes.title}>{section.name}</h2>
          {section.platillos.map((platillo, index) => (
            <Platillo {...platillo} />
          ))}
        </>
      ))}
    </Grid>
  );
}
