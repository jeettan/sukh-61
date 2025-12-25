import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroInterests from "./components/Interests/HeroInterests";
import InterestsList from "./components/Interests/InterestsList";

function Interests() {
  return (
    <>
      <Navbar />
      <HeroInterests />
      <InterestsList />
      <Footer />
    </>
  );
}

export default Interests;
