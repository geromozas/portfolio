import "./Projects.css";

const Projects = () => {
  return (
    <>
      <div id="boxProjects">
        <h2 className="titleProjects">Proyectos</h2>
        <div className="projects">
          <div className="project-container">
            <a
              href="https://gm-motos-b84myz2t7-geromozas.vercel.app/"
              target="_blank"
            >
              <img
                className="projectImg"
                src="https://res.cloudinary.com/ddmvo0ert/image/upload/v1730130989/portfolio/gmmotos-dw_h0ncog.png"
                alt=""
              />
              <div className="project-info">
                <p>
                  Pagina web con 5 secciones realizado para el proyecto final
                  del curso Desarrollo web de Coderhouse.
                </p>
              </div>
            </a>
          </div>
          <div className="project-container">
            <a
              href="https://gm-motos-js.vercel.app/pages/kawasaki.html"
              target="_blank"
            >
              <img
                className="projectImg"
                src="https://res.cloudinary.com/ddmvo0ert/image/upload/v1730130987/portfolio/gmMotos-js_oogen5.png"
                alt=""
              />
              <div className="project-info">
                <p>
                  Pagina web estilo ecommerce realizado para el proyecto final
                  del curso Javascript de Coderhouse.
                </p>
              </div>
            </a>
          </div>
          <div className="project-container">
            <a href="https://gm-motors-react.vercel.app/" target="_blank">
              <img
                className="projectImg"
                src="https://res.cloudinary.com/ddmvo0ert/image/upload/v1736867813/portfolio/Captura_de_pantalla_2025-01-14_121602_syixxz.png"
                alt=""
              />
              <div className="project-info">
                <p>
                  Ecommerce realizado para el proyecto final del curso React de
                  Coderhouse.
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
      ;
    </>
  );
};

export default Projects;
