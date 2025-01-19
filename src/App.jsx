import NavBar from "./components/NavBar";
import Home from "./components/Home";
import SocialMedia from "./components/SocialMedia";
import Projects from "./components/Projects";
import ProjectCard from "./components/ProjectCard";
import Contact from "./components/Contact";
import Orbit from "./components/Orbit";
import Services from "./components/Services";

// import Tp from "./components/Tp";
function App() {
  return (
    <>
      <NavBar />
      <Home />
      <Projects />
      <Services />
      <Orbit />
      {/* <Tp /> */}
      <ProjectCard />
      <Contact />

      <SocialMedia />
    </>
  );
}

export default App;
