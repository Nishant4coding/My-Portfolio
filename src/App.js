import "./App.css";
import Navbar from "./Components/Navbar";
import Intro from "./Components/Intro";
import Technology from "./Components/Technology";
import Education from "./Components/Education";
import Project from "./Components/Project";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Experience from "./Components/Experience";
import Like from "./Components/Like";

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
      <Technology />
      <Experience />
      <Project />

      <Contact />
      <Footer />
{/* <Like/> */}
      
    </>
  );
}

export default App;
