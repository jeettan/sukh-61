import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Description from "./components/Description";
import Featured from "./components/Featured";
import Benefits from "./components/Benefits";
import Gallery from "./components/Gallery";
import Quotes from "./components/Quotes";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Description />
      <Featured />
      <Benefits />
      <Gallery />
      <Quotes />
      <Footer />
    </>
  );
}

export default App;
