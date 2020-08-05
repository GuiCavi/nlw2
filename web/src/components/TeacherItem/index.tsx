import React from "react";
import WHATSAPP_ICON from "../../assets/images/icons/whatsapp.svg";
import "./styles.css";

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://lorempixel.com/480/480/people"
          alt="Nome do Professor"
        />
        <div>
          <strong>Nome do Professor</strong>
          <span>Química</span>
        </div>
      </header>

      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. At provident
        id, aspernatur quo velit labore ut neque numquam culpa voluptates amet
        vero laboriosam possimus, dolor assumenda, quae commodi vel molestias!
        <br />
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid numquam
        laboriosam dicta magnam facere consequatur ad earum voluptatibus quaerat
        corporis sapiente, ex nulla rerum aspernatur labore. Officia excepturi
        quis deleniti?
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button>
          <img src={WHATSAPP_ICON} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;
