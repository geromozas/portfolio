import { Button } from "@mui/material";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="secciones">
          <a href="#boxAboutMe">
            <Button
              className="buttonNav"
              color="primary"
              variant="outlined"
              size="large"
            >
              Sobre Mí
            </Button>
          </a>
          <a href="#boxSkills">
            <Button className="buttonNav" color="primary" variant="outlined">
              Habilidades
            </Button>
          </a>
          <a href="#boxProjects">
            <Button className="buttonNav" color="primary" variant="outlined">
              Proyectos
            </Button>
          </a>
          <a href="#containerService">
            <Button className="buttonNav" color="primary" variant="outlined">
              Servicio
            </Button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
