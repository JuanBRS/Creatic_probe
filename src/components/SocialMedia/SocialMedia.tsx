import React from "react";
import './socialMedia.scss'
// @ts-ignore
import {SocialMediaEnum, UrlsEnum} from  './socialMediaEnum'


export const SocialMedia = () => {
  
    const handleClick = (red:SocialMediaEnum) => {
        if(red === SocialMediaEnum.Facebook ) return window.open(UrlsEnum.Facebook)
        if(red === SocialMediaEnum.Instagram ) return window.open(UrlsEnum.Instagram)
        return window.open(UrlsEnum.Tiktok)
    }
  
    return (
    <div className="socialMedia">
      <div className="socialMedia__container">
        <p>siguemos en: </p>
        <i onClick={() => handleClick(SocialMediaEnum.Facebook)} className="fab fa-facebook"></i>
        <i onClick={() => handleClick(SocialMediaEnum.Instagram)}className="fab fa-instagram-square"></i>
        <i onClick={() => handleClick(SocialMediaEnum.Tiktok)}className="fab fa-tiktok"></i>
      </div>
    </div>
  );
};
