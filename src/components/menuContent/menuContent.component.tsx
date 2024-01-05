import Grid from "@mui/material/Grid";
import useStyles from "./menuContent.styles";
import menuData from "../../platillos.json";
import Platillo from "../Platillo/platillo.component";
import menuImage from "../../assets/Menu_small.png";
import { useCallback, useEffect, useRef, useState } from "react";

export default function MenuContent({
  handleSetSection,
  handleFooterText,
}: any) {
  const classes = useStyles({});
  const SectionRefList: any = useRef([]);
  const sectionTitleList: any = useRef(["DOGOS", "BURGERS", "SIDES"]);

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
            (s: any) => s.name === entry.target.innerText
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
          <img className={classes.menuImageSection} src={menuImage}></img>
          <br />
          <br />
          <br />
          {section.platillos.map((platillo: any) => (
            <Platillo {...platillo} />
          ))}
          {section.footerConfig.images.map((image, imgIndex) => {
            const src = `../../${image}`;
            console.log(src);
            return <img key={imgIndex} src={src} className={classes.menuImage} alt="src" />;
          })}
          <br />
          <br />
        </>
      ))}
    </Grid>
  );
}
