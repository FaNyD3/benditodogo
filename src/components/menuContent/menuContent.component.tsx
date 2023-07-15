import Grid from "@mui/material/Grid";
import useStyles from "./menuContent.styles";
import menuData from "../../platillos.json";
import Platillo from "../Platillo/platillo.component";
import menuImage from "../../assets/Menu_small.png";
import { useCallback, useEffect, useRef, useState } from "react";
import Carnivoro from "../../assets/hotdogs/carnivoro.png";
import Kansas from "../../assets/hotdogs/kansas.png";
import Pizza from "../../assets/hotdogs/pizza.png";
import Texas from "../../assets/hotdogs/texas.png";
import CaliforniaDoble from "../../assets/hamburguesas/californiaDoble.png";
import Honolulu from "../../assets/hamburguesas/honolulu.png";
import Texana from "../../assets/hamburguesas/texana.png";
import ClassicFries from "../../assets/slides/classicFries.png";
import Dogocoreano from "../../assets/slides/dogocoreano.png";
import MunchiesFries from "../../assets/slides/munchiesFries.png";

export default function MenuContent({
  handleSetSection,
  handleFooterText,
}: any) {
  const classes = useStyles({});
  const SectionRefList: any = useRef([]);
  const loadedImages: any = {
    Carnivoro: Carnivoro,
    Kansas: Kansas,
    Pizza: Pizza,
    Texas: Texas,
    CaliforniaDoble: CaliforniaDoble,
    Honolulu: Honolulu,
    Texana: Texana,
    ClassicFries: ClassicFries,
    Dogocoreano: Dogocoreano,
    MunchiesFries: MunchiesFries,
  };

  const updateRefList = useCallback((index: any, ref: any) => {
    SectionRefList.current[index] = ref;
  }, []);
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.7,
    };

    const callback = (entries: any) => {
      entries.forEach((entry: any, index: any) => {
        if (entry.isIntersecting) {
          handleSetSection(entry.target.innerText);
          const footerText = menuData.sections.find(
            (s: any) => s.name == entry.target.innerText
          )?.footerConfig?.text;
          handleFooterText(footerText);
        }
      });
    };

    const observer = new IntersectionObserver(callback, observerOptions);

    if (SectionRefList.current.length > 0) {
      SectionRefList.current.forEach((ref: any, index: any) => {
        if (ref) {
          observer.observe(ref);
        }
      });
    }

    return () => {
      SectionRefList.current.forEach((ref: any) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);

  return (
    <Grid xs={12} className={classes.container}>
      {menuData.sections.map((section, index) => (
        <>
          <h2
            ref={(ref: any) => updateRefList(index, ref)}
            className={classes.title}>
            {section.name}
          </h2>
          <img className={classes.menuImage} src={menuImage}></img>
          {section.platillos.map((platillo: any) => (
            <Platillo {...platillo} />
          ))}
<<<<<<< HEAD
          {section.footerConfig.images.map((image) => {
            // const src = `../../assets/${image}`;
            const src = '../../assets/hamburguesas/Honolulu.png';
            console.log(src);
            return <img src={src} alt="src" />;
=======
          {section.footerConfig.images.map((image: string) => {
            return <img src={loadedImages[image]} alt="src" />;
>>>>>>> 26eac9fb41f9c7674d5728f2fa656f60801431d6
          })}
        </>
      ))}
    </Grid>
  );
}
