import "./AboutMe.css";

const AboutMe = () => {
  return (
    <>
      <div id="boxAboutMe">
        <h2>Sobre mí</h2>
        <div className="boxAboutMe2">
          <p className="textAboutMe">
            Soy Gerónimo Mozas, desarrollador full stack con una sólida
            experiencia en tecnología y entrenamiento físico. Después de años en
            el ámbito del fitness, en 2022 decidí enfocarme en el desarrollo web
            para proyectar un futuro profesional y económico más sólido.
          </p>
          <p className="textAboutMe">
            Desde entonces, me he especializado en aplicaciones web dinámicas,
            tanto en frontend como backend, completando cursos en Coderhouse y
            Oracle Next Education. Mi enfoque se centra en la eficiencia,
            solución de problemas y mejora continua, cualidades que aplico en
            proyectos freelance y colaboraciones, optimizando la experiencia de
            usuario. Busco nuevas oportunidades donde aportar mi dedicación y
            habilidades técnicas.
          </p>
          <h4>Certificaciones</h4>
          <ul className="certificaciones">
            <li>Desarrollo web - Coderhouse</li>
            <li>Javascript - Coderhouse</li>
            <li>React - Coderhouse</li>
            <li>Backend - Coderhouse</li>
            <li>Backend - Oracle Next Education (En curso)</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
