import useStyles from "./App.styles";
import "./App.styles.ts";

import { Grid } from "@mui/material";
import Platillo, { PlatilloPosition } from "./components/platillo.component";
import menuData from "./platillos.json";

function App() {
  const classes = useStyles({});
  return (
    <>
      <Grid container className={classes.mainContainer}>
        <header className={classes.header}></header>
        <Grid container className={classes.menuContainer}>
          <div className={classes.testContent}></div>
          {menuData.sections.map((section) => (
            <>
              <Grid item xs={12} className={classes.menuHeader}>
                <h1 className={classes.title}>{section.name}</h1>
              </Grid>
              {/* {section.platillos.map((platillo, index) => (
                <Platillo
                  section={section.name}
                  name={platillo.name}
                  imgSrc={platillo.imgSrc}
                  description={platillo.description}
                />
              ))} */}
            </>
          ))}
        </Grid>
        <footer className={classes.footer}></footer>
      </Grid>
    </>
  );
}

export default App;
