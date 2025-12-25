import Placeholder from "../images/placeholder.png";

function Quotes() {
  return (
    <div className="flex flex-col w-1/2 mx-auto items-center justify-center  py-10 gap-4 px-5">
      <h2 className="text-4xl">Testimonials</h2>
      <img src={Placeholder} width={80} />
      <p className="text-lg">
        "I’ve lived in this neighborhood for years, and it honestly just feels
        right. It’s peaceful, the people look out for each other, and everything
        I need is close by."
      </p>
      <h4 className="text-2xl">-Bob L.</h4>
    </div>
  );
}

export default Quotes;
