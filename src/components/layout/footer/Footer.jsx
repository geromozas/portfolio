import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="containerFooter">
        <div className="redes">
          <a href="https://github.com/geromozas">
            <img
              className="gitHubFooter"
              src="https://res.cloudinary.com/ddmvo0ert/image/upload/v1730400321/portfolio/githubFooter2_sw7kne.png"
              alt=""
            />
          </a>
          <a href="https://www.linkedin.com/in/mozas-geronimo/">
            <img
              className="linkedinFooter"
              src="https://res.cloudinary.com/ddmvo0ert/image/upload/v1730400569/portfolio/linkedinFooter_ayoa62.png"
              alt=""
            />
          </a>
          <a href="mailto:mozasgeronimo@gmail.com">
            <img
              className="mailFooter"
              src="https://res.cloudinary.com/ddmvo0ert/image/upload/v1730400838/portfolio/mailLogo_gozp6n.png"
              alt=""
            />
          </a>
        </div>
        <p className="myDesign">DESIGNED BY GERONIMO MOZAS</p>
      </div>
    </>
  );
};

export default Footer;
