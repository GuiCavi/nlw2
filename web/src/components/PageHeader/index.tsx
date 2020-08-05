import React from "react";
import { Link } from "react-router-dom";
// import { Container } from './styles';
import BACK_ICON from "../../assets/images/icons/back.svg";
import LOGO_IMG from "../../assets/images/logo.svg";
import "./styles.css";

interface Props {
  title: string;
}

const PageHeader: React.FC<Props> = ({ title, children }) => {
  return (
    <header className="page-header">
      <div className="top-bar-container">
        <Link to="/">
          <img src={BACK_ICON} alt="Voltar" />
        </Link>
        <img src={LOGO_IMG} alt="Proffy" />
      </div>

      <div className="header-content">
        <strong>{title}</strong>

        {children}
      </div>
    </header>
  );
};

export default PageHeader;
