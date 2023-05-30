import React from "react";
import classes from "./InfiniteSlider.module.css";

function InfiniteSlider() {
  const images = [
    `logos/business-insider.png`,
    `logos/forbes.png`,
    `logos/techcrunch.png`,
    `logos/the-new-york-times.png`,
    `logos/usa-today.png`,
  ];

  return (
    <div className={`${classes["infinity-slider"]} dark:bg-slate-900`}>
      <div className={classes["slider-container"]}>
        <div className={classes["inner-container"]}>
          {images.map((i, index) => {
            return (
              <div className={classes.content} key={index}>
                <img alt={`${"infinity Slider"} ${index}`} src={i} className="dark:invert" />
              </div>
            );
          })}
          {images.map((i, index) => {
            return (
              <div className={classes.content} key={index}>
                <img alt={`${"infinity Slider"} ${index}`} src={i}  className="dark:invert" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default InfiniteSlider;
