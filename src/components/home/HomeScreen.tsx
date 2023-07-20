import React from "react";
import "./homeScreen.scss";
// @ts-ignore
import mapa from "../../images/mapa.png";
// @ts-ignore
import collage1 from "../../images/1.jpg";
// @ts-ignore
import collage2 from "../../images/2.jpg";
// @ts-ignore
import collage3 from "../../images/3.jpg";
import { SocialMedia } from '../SocialMedia/SocialMedia';

export const HomeScreen = () => {
  return (
    <div className="home">
      <div className="home__container">
        <div className="home__container__item">
          <img src={mapa} alt="" />
        </div>
        <div className="home__container__collage">
          <img src={collage1} alt="" />
          <div className="home__container__collage__double">
            <img src={collage2} alt="" />
            <img src={collage3} alt="" />
          </div>
            <SocialMedia/>
        </div>
      </div>
    </div>
  );
};
