import React, { useState } from "react";
import "./registerScreen.scss";
import { SocialMedia } from "../SocialMedia/SocialMedia";
//@ts-ignore
import Tech from "../../images/tech-devices.jpg";

export const RegisterScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event: any) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: any) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    // Aquí puedes agregar la lógica para el inicio de sesión
    console.log("Iniciar sesión:", email, password);
  };

  const handleRegister = () => {
    // Aquí puedes agregar la lógica para el registro
    console.log("Registrarse:", email, password);
  };

  return (
    <div className="register">
      <div className="register__container">
        <form className="register__form">
          <div>
            <input
              className="register__form__input"
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="correo"
            />
          </div>
          <div>
            <input
              className="register__form__input"
              type="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="contraseña"
            />
          </div>
          <p>Iniciar sesión</p>

          <button
            className="register__form__button"
            type="button"
            onClick={handleLogin}
          >
            Iniciar sesión
          </button>

          <p>¿Olvido la contraseña?</p>
          <button
            className="register__form__button"
            type="button"
            onClick={handleRegister}
          >
            Registrarse
          </button>
        </form>
        <div className="register__media">
          <div className="register__media__img">
            <img src={Tech} alt="" />
          </div>
          <SocialMedia />
        </div>
      </div>
    </div>
  );
};
