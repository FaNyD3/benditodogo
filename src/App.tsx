import React from 'react';
import useStyles from './App.styles';
import './App.styles.ts';
import bendito_logo from "./assets/BenditodogoLogo.png";
import headerImage from "./assets/image.png";

function App() {
  const classes = useStyles({});

  return (
    <div className={classes.headerContainer}>
      <nav className={classes.header}>
        <img className={classes.img} 
        src={bendito_logo} 
        alt="Bendito dogo" 
        />
      </nav>
      <div className={classes.mainImageContainer}>
          <img 
          className={classes.headerImage}
          src={headerImage}
          alt="MENU" 
        />
      </div>
    </div>
  );
}

export default App;
