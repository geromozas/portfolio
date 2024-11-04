import "./Skills.css";

const Skills = () => {
  return (
    <>
      <div id="boxSkills">
        <h2 className="section">Habilidades</h2>
        <div className="subBoxSkills">
          <h3 className="seccion">Frontend</h3>
          <div>
            <img
              src="https://res.cloudinary.com/ddmvo0ert/image/upload/v1730213725/portfolio/html5_ux90us.png"
              alt="html"
              className="skill"
            />
            <img
              src="https://res.cloudinary.com/ddmvo0ert/image/upload/v1730213725/portfolio/css_bnt1or.png"
              alt="css"
              className="skill"
            />
            <img
              src="https://res.cloudinary.com/ddmvo0ert/image/upload/v1730213724/portfolio/js_fgs9mw.png"
              alt="js"
              className="skill"
            />
            <img
              src="https://res.cloudinary.com/ddmvo0ert/image/upload/v1730213726/portfolio/react_zbg8ps.png"
              alt="react"
              className="skill"
            />
            <img
              src="https://res.cloudinary.com/ddmvo0ert/image/upload/v1730213725/portfolio/mui_fgkw31.png"
              alt="materialUI"
              className="skill"
            />
            <img
              src="https://res.cloudinary.com/ddmvo0ert/image/upload/v1730213725/portfolio/bootstrap_jxvhqf.png"
              alt="bootstrap"
              className="skill"
            />
          </div>
          <h3 className="seccion">Backend</h3>
          <div>
            <img
              src="https://res.cloudinary.com/ddmvo0ert/image/upload/v1730213726/portfolio/nodejs_wxhmm7.png"
              alt="node"
              className="skill"
            />
            <img
              src="https://res.cloudinary.com/ddmvo0ert/image/upload/v1730213725/portfolio/express-js_e4nqqf.png"
              alt="express"
              className="skill"
            />
          </div>
          <h3 className="seccion">Base de Datos</h3>
          <div>
            <img
              src="https://res.cloudinary.com/ddmvo0ert/image/upload/v1730213725/portfolio/mongodb_vwzcp0.png"
              alt="mongoDB"
              className="skill"
            />
            <img
              src="https://res.cloudinary.com/ddmvo0ert/image/upload/v1730213724/portfolio/firebase_vkpy6l.png"
              alt="firebase"
              className="skill"
            />
          </div>
          <h3 className="seccion">Herramientas y Otros</h3>
          <div>
            <img
              src="https://res.cloudinary.com/ddmvo0ert/image/upload/v1730213725/portfolio/git_baum67.png"
              alt="git"
              className="skill"
            />
            <img
              src="https://res.cloudinary.com/ddmvo0ert/image/upload/v1730213725/portfolio/github_z8yinv.png"
              alt="gitHub"
              className="skill"
            />
            <img
              src="https://res.cloudinary.com/ddmvo0ert/image/upload/v1730213725/portfolio/postman_x2vrjj.png"
              alt="postman"
              className="skill"
            />
          </div>
        </div>
      </div>
      ;
    </>
  );
};

export default Skills;
