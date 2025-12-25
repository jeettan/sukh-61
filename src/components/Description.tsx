import IMG from "../images/img-display.png";

function Description() {
  return (
    <div className="h-full">
      <section className="min-h-screen grid grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col items-start justify-start bg-gray-900 text-white p-16">
          <h2 className="text-4xl font-bold mb-5">
            In the Heart of Bangkok, discover one of the most indi sois to live.
          </h2>
          <h3 className="text-3xl mb-5">
            This is sukhumvit 61, a blend of luxury and chill vibe. Accessible
            from just 5-minutes from BTS Ekkamai.
          </h3>
          <p className="text-md">
            Down a narrow soi in Bangkok, the noise of the main road fades into
            a low hum—motorbikes idling, a radio playing luk thung from
            somewhere unseen. Power lines crisscross overhead like hand-drawn
            lines in a sketchbook.
          </p>
          <br />
          <p>
            A coffee shop the size of a living room sits between a motorcycle
            repair stall and a house with peeling turquoise paint. Someone’s
            watering plants in mismatched pots; the smell of wet concrete mixes
            with grilled pork and old incense.
          </p>
          <br />
          <p>
            Cats sleep wherever the shade lands. Nothing here is polished, but
            everything feels lived-in—quiet, imperfect, and stubbornly itself,
            like the city breathing when no one’s trying to watch. All in
            Sukhumvit 61.
          </p>
        </div>

        <div className="flex items-center justify-center bg-white">
          <img src={IMG}></img>
        </div>
      </section>
    </div>
  );
}

export default Description;
