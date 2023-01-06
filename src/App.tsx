import React from 'react';
import useStyles from './App.styles';
import './App.styles.ts';
import bendito_logo from "./assets/BenditodogoLogo.png";
import headerImage from "./assets/image.png";
import { Grid } from '@mui/material';

function App() {
  const classes = useStyles({});
  return (
    <>
      <Grid container rowSpacing={0} columnSpacing={0} className={classes.headerContainer} justifyContent="flex-start" alignItems="flex-start"> 
        <Grid item xs={12} className={classes.header}>
            <img className={classes.img} 
            src={bendito_logo} 
            alt="Bendito dogo" 
            />
        </Grid>
        <Grid item xs={12} className={classes.mainImageContainer}>
          <img 
            className={classes.headerImage}
            src={headerImage}
            alt="MENU" 
          />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
