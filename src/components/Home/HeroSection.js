import React from "react";
import classes from "./HeroSection.module.css";
import offImage1 from "../../assets/Home Page/promotion_1.jpeg";
import offImage2 from "../../assets/Home Page/promotion_2.jpeg";
import Slider from "../Slider/Slider";

function HeroSection() {
  return (
    <div dir="" className={`${classes.slider} dark:bg-slate-900 `}>
      <div className={`${classes.banner} dark:bg-slate-800`}>
        <Slider />
      </div>
      <div className={classes["right-side"]}>
        <img src={offImage1} alt="" />
        <img src={offImage2} alt="" />
      </div>
    </div>
  );
}

export default HeroSection;
