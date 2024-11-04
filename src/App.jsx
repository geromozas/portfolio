import Navbar from "./components/layout/navbar/Navbar.jsx";
import "./App.css";
import Home from "./components/pages/home/Home.jsx";
import AboutMe from "./components/pages/aboutMe/AboutMe.jsx";
import Projects from "./components/pages/projects/Projects.jsx";
import Skills from "./components/pages/skills/Skills.jsx";
import Service from "./components/pages/service/Service.jsx";
import Footer from "./components/layout/footer/Footer.jsx";
// import Experience from "./components/pages/experience/Experience.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <AboutMe />
      <Skills />
      <Projects />
      {/* <Experience /> */}
      <Service />
      <Footer />
    </div>
  );
}

export default App;
