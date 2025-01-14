import { Button, useMediaQuery } from "@mui/material";
import "./Navbar.css";

const Navbar = () => {
  const isSmallScreen = useMediaQuery("(max-width:800px)");
  return (
    <>
      <div className="navbar">
        <div className="sections">
          <a href="#boxAboutMe">
            <Button
              className="buttonNav"
              color="primary"
              variant="outlined"
              size={isSmallScreen ? "small" : "large"}
              sx={{ marginBottom: "20px" }}
            >
              Sobre Mí
            </Button>
          </a>
          <a href="#boxSkills">
            <Button
              className="buttonNav"
              color="primary"
              variant="outlined"
              size={isSmallScreen ? "small" : "large"}
            >
              Habilidades
            </Button>
          </a>
          <a href="#boxProjects">
            <Button
              className="buttonNav"
              color="primary"
              variant="outlined"
              size={isSmallScreen ? "small" : "large"}
            >
              Proyectos
            </Button>
          </a>
          <a href="#containerService">
            <Button
              className="buttonNav"
              color="primary"
              variant="outlined"
              size={isSmallScreen ? "small" : "large"}
            >
              Servicio
            </Button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
