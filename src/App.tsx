import useStyles from "./App.styles";
import "./App.styles.ts";
import bendito_logo from "./assets/BenditodogoLogo.png";
import headerImage from "./assets/image.png";
import testImage from "./assets/test-image.jpeg";
import { Grid } from "@mui/material";
import Platillo, { PlatilloPosition } from "./components/platillo.component";
import menuData from "./platillos.json";

function App() {
  const classes = useStyles({});
  return (
    <>
      <Grid
        container
        rowSpacing={0}
        columnSpacing={0}
        className={classes.headerContainer}
        justifyContent="flex-start"
        alignItems="flex-start">
        <Grid item xs={12} className={classes.header}>
          <img className={classes.img} src={bendito_logo} alt="Bendito dogo" />
        </Grid>
        <Grid item xs={12} className={classes.mainImageContainer}>
          <img className={classes.headerImage} src={headerImage} alt="MENU" />
        </Grid>
      </Grid>
      <Grid container className={classes.menuContainer}>
        <Grid container>
          {menuData.sections.map((section) => (
            <>
              <Grid item xs={12} className={classes.menuHeader}>
                <h1 className={classes.title}>{section.name}</h1>
              </Grid>
              {section.platillos.map((platillo, index) => (
                <Platillo
                  section={section.name}
                  name={platillo.name}
                  imgSrc={platillo.imgSrc}
                  description={platillo.description}
                  descriptionPosition={
                    (index + 1) % 2 == 0
                      ? PlatilloPosition.right
                      : PlatilloPosition.left
                  }
                />
              ))}
            </>
          ))}
          {/* <Grid item xs={12} className={classes.spacer}></Grid>
          <Grid item xs={7}>
            <Grid item xs={12} className={classes.platilloTitleContainer}>
              <h2 className={classes.platilloTitle}> CARNÍVORO </h2>
            </Grid>
            <Grid item xs={12}>
              <p className={classes.descriptionLeft}>
                El emblema de la casa. El waffle más emblemático de Bélgica,
                crujiente por fuera, super suave por dentro y con un
                característico toque dulce
              </p>
            </Grid>
          </Grid>
          <Grid item xs={5}>
            <img
              className={classes.PlatilloImage}
              src={testImage}
              alt="dogo carnívoro"
            />
          </Grid> */}
        </Grid>
      </Grid>
    </>
  );
}

export default App;
