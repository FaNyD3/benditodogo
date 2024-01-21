import Grid from "@mui/material/Grid";
import useStyles from "./platillo.styles";

export const PlatilloPosition = {
  left: "left",
  right: "right",
};

interface Props {
  name: string;
  imgSrc?: string;
  description: string;
  price: string;
}

export default function Platillo({ name, description, price }: Props) {
  const classes = useStyles({});
  return (
    <Grid xs={12} className={classes.platilloContainer}>
      <Grid className={classes.platilloName} item xs={6} textAlign={"left"}>
        {name}
      </Grid>
      <Grid className={classes.platilloName} item xs={6} textAlign={"right"}>
        {price}
      </Grid>
      <Grid item xs={12} className={classes.description}>
        {description}
      </Grid>
    </Grid>
  );
}
