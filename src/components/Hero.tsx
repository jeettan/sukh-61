import front from "../images/front.jpg";
import HeroLogo from "../assets/zero.png";

function Hero() {
  return (
    <div className="relative">
      <img src={front} className="w-full h-[100vh] object-cover" />
      <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center">
        <img
          src={HeroLogo}
          className="h-15 lg:h-28 object-contain mx-auto"
        ></img>
        <div className="w-40 sm:w-50 md:w-150 lg:w-250 font-semibold">
          <h1 className="text-white text-2xl lg:text-5xl text-center">
            Bringing you one of Bangkok's Best Neighbourhoods to Live.
          </h1>
        </div>
        <div className="flex flex-row gap-6 p-5">
          <button>BROWSE INTERESTS</button>
          <button>CONTACT US</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
