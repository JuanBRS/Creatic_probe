import React from "react";
import "./contactScreen.scss";
//@ts-ignore
import logo from "../../images/logo.png";
import { SocialMedia } from "../SocialMedia/SocialMedia";
export const ContactScreen = () => {
  return (
    <div className="contact">
      <div className="contact__container">
        <div className="contact__container__item">
          <p>
            Vereda el Cofre, Parcelación la Margarita, Finca Santa Maria, Casa
            1, Popayán, Cauca 190002, CO
          </p>
          <a href="http://www.comunicaciones@cdtcreatic.com">
            comunicaciones@cdtcreatic.com
          </a>
        </div>
        <div className="contact__container__item">
          <img src={logo} alt="" />
        </div>
        <div></div>
        <SocialMedia />
      </div>
    </div>
  );
};
