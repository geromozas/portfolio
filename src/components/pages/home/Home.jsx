import { Button, Link } from "@mui/material";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div id="boxHome">
        <div className="boxHomeText">
          <h1>Geronimo Mozas</h1>
          <h3 className="profession">Programador Full Stack</h3>
          <p className="homeText">
            Soy un desarrollador apasionado por crear soluciones web innovadoras
            y eficientes, especializado en frontend. Tengo experiencia en
            tecnologías de frontend y backend, me enfoco en construir
            aplicaciones web robustas y escalables. Aunque mi especialidad es el
            desarrollo frontend, estoy abierto a explorar nuevas oportunidades y
            desafíos en distintas áreas del desarrollo web.
          </p>
          <div className="buttonsHome">
            <a
              href="https://www.linkedin.com/in/geronimo-mozas-559207254/"
              target="_blank"
            >
              <Button>Linkedin</Button>
            </a>
            <a
              href="/cv-GeronimoMozas-FullStackDeveloper-2024.pdf"
              download="cv-GeronimoMozas-FullStackDeveloper-2024.pdf"
            >
              <Button>CV</Button>
            </a>
          </div>
        </div>
        <div className="boxHomePhoto">
          <Link to="/">
            <img
              className="profilePhoto"
              src="https://res.cloudinary.com/ddmvo0ert/image/upload/v1730749619/portfolio/gero3_e1pzgk.png"
              alt="foto-cv"
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
