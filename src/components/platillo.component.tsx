import Grid from "@mui/material/Grid";
import useStyles from "./platillo.styles";
import testImage from "../assets/test-image.jpeg";

export const PlatilloPosition = {
  left: "left",
  right: "right",
};

interface Props {
  section: string;
  name: string;
  imgSrc: string;
  description: string;
  descriptionPosition: string;
}

export default function Platillo({
  section,
  name,
  imgSrc,
  description,
  descriptionPosition,
}: Props) {
  const classes = useStyles({});
  return (
    <>
      {descriptionPosition === PlatilloPosition.left && (
        <Grid item xs={5}>
          <img
            className={classes.PlatilloImage}
            src={`../assets/test-image.jpeg`}
            alt={`${section || "platillo"} ${name}`}
          />
        </Grid>
      )}
      <Grid item xs={7}>
        <Grid item xs={12} className={classes.platilloTitleContainer}>
          <h2 className={classes.platilloTitle}> {name} </h2>
        </Grid>
        <Grid item xs={12}>
          <p className={classes.descriptionRight}>{description}</p>
        </Grid>
      </Grid>
      {descriptionPosition === PlatilloPosition.right && (
        <Grid item xs={5}>
          <img
            className={classes.PlatilloImage}
            src={imgSrc}
            alt={`${section || "platillo"} ${name}`}
          />
        </Grid>
      )}
    </>
  );
}
