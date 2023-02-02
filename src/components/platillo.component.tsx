import Grid from "@mui/material/Grid";
import useStyles from "./platillo.styles";

export const PlatilloPosition = {
  left: "left",
  right: "right",
};

interface Props {
  section: string;
  name: string;
  imgSrc: string;
  description: string;
}

export default function Platillo({
  section,
  name,
  imgSrc,
  description,
}: Props) {
  const classes = useStyles({});
  return (
    <>
      <Grid item xs={12}>
        <Grid item xs={12} className={classes.platilloTitleContainer}>
          <h2 className={classes.platilloTitle}> {name} </h2>
        </Grid>
        <Grid item xs={12}>
          <img
            className={classes.PlatilloImage}
            src={require(`../assets/${imgSrc}`)}
            alt={`${section || "platillo"} ${name}`}
          />
        </Grid>
        <Grid item xs={12}>
          <p className={classes.description}>{`${description}`}</p>
        </Grid>
      </Grid>
    </>
  );
}
