import React from "react";

// import { Container } from './styles';

import LOGO_IMG from "../../assets/images/logo.svg";
import HERO_IMG from "../../assets/images/landing.svg";

import STUDY_ICON from "../../assets/images/icons/study.svg";
import GIVE_CLASSES_ICON from "../../assets/images/icons/give-classes.svg";
import PURPLE_HEART from "../../assets/images/icons/purple-heart.svg";

import "./styles.css";
import { Link } from "react-router-dom";

const Landing: React.FC = () => {
  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={LOGO_IMG} alt="Proffy" />
          <h2>Sua plataforma de estudos online.</h2>
        </div>

        <img
          src={HERO_IMG}
          alt="Plataforma de estudos"
          className="hero-image"
        />

        <div className="buttons-container">
          <Link to="/study" className="study">
            <img src={STUDY_ICON} alt="Estudar" />
            Estudar
          </Link>

          <Link to="/give-classes" className="give-classes">
            <img src={GIVE_CLASSES_ICON} alt="Dar aulas" />
            Dar aulas
          </Link>
        </div>

        <span className="total-connections">
          Total de 200 conexões já realizadas{" "}
          <img src={PURPLE_HEART} alt="Coração roxo" />
        </span>
      </div>
    </div>
  );
};

export default Landing;
