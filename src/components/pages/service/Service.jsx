import { Button } from "@mui/material";
import "./Service.css";

const Service = () => {
  return (
    <>
      <div id="containerService">
        <h2 className="titleService">Servicio</h2>
        <div className="containerText">
          <p className="textService">
            <h3 className="serviceFreelance">Freelance</h3>
            Si eres un profesional o emprendedor y quieres mejorar tu presencia
            online con una página web moderna y profesional, o necesitas apoyo
            en un proyecto específico de desarrollo, estoy aquí para ayudarte.
            Como desarrollador full stack, puedo crear soluciones a medida que
            potencien tu visibilidad en el entorno digital.
          </p>
          <p className="textService">
            <h3 className="serviceCompany">Empresa</h3>
            Si tu empresa necesita un desarrollador para llevar adelante
            proyectos de desarrollo web efectivos y personalizados, puedo ayudar
            a crear soluciones que impulsen el crecimiento y optimicen la
            experiencia de los clientes en el mundo digital.
          </p>
        </div>
      </div>
      <div className="boxContact">
        <a href="mailto:mozasgeronimo@gmail.com">
          <Button className="contact" variant="contained">
            NO DUDES EN CONTACTARME
          </Button>
        </a>
      </div>
    </>
  );
};

export default Service;
