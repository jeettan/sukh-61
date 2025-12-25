import front from "../../images/unionspace.avif";

function HeroInterests() {
  return (
    <div className="relative">
      <img src={front} className="w-full h-[100vh] object-cover" />
      <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center">
        <h1 className="text-white text-5xl font-bold text-center">
          Interests of Sukhumvit 61
        </h1>
      </div>
    </div>
  );
}

export default HeroInterests;
