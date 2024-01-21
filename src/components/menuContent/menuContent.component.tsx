import Grid from "@mui/material/Grid";
import useStyles from "./menuContent.styles";
import menuData from "../../platillos.json";
import Platillo from "../Platillo/platillo.component";
import menuImage from "../../assets/Menu_small.png";
import { useCallback, useRef } from "react";
import Admiracion from "../../assets/admiracion.png";

export default function MenuContent() {
  const classes = useStyles({});
  const SectionRefList: any = useRef([]);

  const updateRefList = useCallback((index: any, ref: any) => {
    SectionRefList.current[index] = ref;
  }, []);

  const FooterComp = (footerText: string) => {
    const parrafos = footerText.split("\n");
    return parrafos.map((t, index) =>
      <p className={classes.footerTex} key={index}>{t}</p>
    )
  }

  return (
    <Grid xs={12} className={classes.container} >
      {menuData.sections.map((section, index) => (
        <>
          <h2
            ref={(ref: any) => updateRefList(index, ref)}
            className={classes.title}>
            {section.name}
          </h2>
          <img className={classes.menuImageSection} src={menuImage}></img>
          <br />
          <br />
          <br />
          {section.platillos.map((platillo: any) => (
            <Platillo {...platillo} />
          ))}
          {(section.name !== "Salchichas" && section.name !== "Bebidas") && (
            <div>
              {section.footerConfig.images.map((image, imgIndex) => {
                const src = `../../${image}`;
                return <img key={imgIndex} src={src} className={classes.menuImage} alt={src} />;
              })}
            </div>
          )}
          <br />
          <br />
          {!!section.footerConfig.text.length && <footer>
            <Grid container className={classes.footerContainer}>
              <Grid item xs={1}>
                <img className={classes.admiracionOpen} src={Admiracion} alt=''></img>
              </Grid>
              <Grid item xs={10}>
                {FooterComp(section.footerConfig.text)}
              </Grid>
              <Grid item xs={1}>
                <img className={classes.admiracionclose} src={Admiracion} alt=''></img>
              </Grid>
            </Grid>
          </footer>}
          <br />
        </>
      ))}
    </Grid>
  );
}
