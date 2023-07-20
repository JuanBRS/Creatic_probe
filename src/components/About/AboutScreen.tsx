import React from "react";
import "./aboutScreen.scss";
import { SocialMedia } from '../SocialMedia/SocialMedia';

export const AboutScreen = () => {
  return (
    <div className="about">
      <div className="about__container">
        <div>
          <h2>Misión</h2>
          <p>
          La misión define el propósito de la existencia de la empresa y lo que la diferencia de las demás. En otras palabras, tiene que ver con la propuesta de valor de un negocio.
          </p>
        </div>
        <div>
          <h2>Visión</h2>
          <p>
          La visión es el destino al que una empresa quiere llegar. En este sentido, establece los parámetros para la toma de decisiones de una empresa, las inversiones necesarias y la forma de definir estrategias
          </p>
        </div>
      </div>
      <SocialMedia/>
    </div>
  );
};

