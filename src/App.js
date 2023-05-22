import "./App.css";
import Navbar from "./Components/Navbar";
import Intro from "./Components/Intro";
import Technology from "./Components/Technology";
import Education from "./Components/Education";
import Project from "./Components/Project";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Navbar />
    
      <Intro
        name="Nishant Srivastava"
        email="srivastava4nishant@gmail.com"
        occupation="Software Developer"
        image="./Nishant Srivastava.jpg"
      />
<Technology/>
<Project/>
      {/* <Education/> */}
    <Contact/>
    <Footer/>
    </>
  );
}

export default App;
