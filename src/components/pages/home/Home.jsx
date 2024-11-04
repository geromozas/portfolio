import { Button, Link } from "@mui/material";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="boxHome">
        <div className="presentation">
          <h1>Geronimo Mozas</h1>
          <h3 className="profession">Programador Full Stack</h3>
          <p>
            Soy un desarrollador apasionado por crear soluciones web innovadoras
            y eficientes. Con experiencia en tecnologías frontend y backend, me
            especializo en construir aplicaciones web robustas y escalables.
          </p>
          <div className="botones">
            <div className="linkedin">
              <a
                href="https://www.linkedin.com/in/geronimo-mozas-559207254/"
                target="_blank"
              >
                <Button>Linkedin</Button>
              </a>
            </div>
            <div className="cv">
              <a
                href="/cv-GeronimoMozas-FullStackDeveloper-2024.pdf"
                download="cv-GeronimoMozas-FullStackDeveloper-2024.pdf"
              >
                <Button>CV</Button>
              </a>
            </div>
          </div>
        </div>
        <div className="myPicture">
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
