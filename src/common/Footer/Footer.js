import React from "react";
import classes from "./Footer.module.css";
import logo from "../../assets/julia.png";
import { BsFacebook } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";

function Footer() {
  return (
    <div className={classes.footer}>
      <div className={classes.content}>
        <div className={classes["company-info"]}>
          <a href="/">
            <img src={logo} alt="" className="my-10" />
          </a>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            voluptatem quibusdam consequatur ad quod tenetur? Placeat molestiae
            quae perferendis repudiandae, eius illo maiores illum soluta
            obcaecati a, eaque quis eum! Lorem ipsum dolor sit amet consectetur
            adipisicing elit.
          </p>
        
        </div>
        <div className={classes["links-box"]}>
          <h3 className={classes.title}>About Us</h3>
          <ul>
            <li>
              <a href="/">Careers</a>{" "}
            </li>
            <li>
              <a href="/">Our Store</a>
            </li>
            <li>
              <a href="/">Our Cares</a>{" "}
            </li>
            <li>
              <a href="/">Team & Conditions</a>
            </li>
            <li>
              <a href="/">privacy Policy</a>
            </li>
          </ul>
        </div>
        <div className={classes["links-box"]}>
          <h3 className={classes.title}>Customer Care</h3>
          <ul>
            <li>
              <a href="/"> Careers</a>
            </li>
            <li>
              <a href="/">Our Store</a>
            </li>
            <li>
              <a href="/">Our Cares</a>
            </li>
            <li>
              <a href="/">Team & Conditions</a>
            </li>
            <li>
              <a href="/">privacy Policy</a>
            </li>
          </ul>
        </div>
        <div className={classes["contact-us"]}>
          <h3 className={classes.title}>Contact Us</h3>
          <p>70 Washington Square South, New York, NY 10012, United States</p>
          <p>
            Email:<a href="/">mohamed.salah6486@gmail.com</a>
          </p>
          <div className={classes.media}>
            <ul>
              <li>
                <BsFacebook />
              </li>
              <li>
                <BsLinkedin />
              </li>
              <li>
                <BsGithub />
              </li>
              <li>
                <BsTwitter />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
