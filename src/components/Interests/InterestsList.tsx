import Ayasan from "../../images/interest_images/ayasan.webp";
import UnionSpace from "../../images/interest_images/unionspace.jpg";
import CountingSheep from "../../images/interest_images/counting_sheep.webp";
import Avenue61 from "../../images/interest_images/avenue-61.jpg";
import RegentPark from "../../images/interest_images/regent-on-the-park.jpg";
import MaxValu from "../../images/interest_images/park_lane.jpg";

function InterestsList() {
  return (
    <div className="">
      <section className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col gap-5 order-1 items-start justify-center bg-gray-900 text-white p-16">
          <h2 className="text-3xl">Ayasan</h2>
          <p>
            Award winning maid delivery agency founded by Kotaro Ise. Ayasan
            provides service for house cleaning, driver and utilities.
          </p>
          <button
            type="button"
            className="!text-white !bg-blue-500 !box-border !border !border-transparent !hover:bg-brand-strong !focus:ring-4 !focus:ring-brand-medium !shadow-xs !font-medium !leading-5 !rounded-base !text-sm !px-4 !py-2.5 !focus:outline-none"
          >
            Learn More
          </button>
        </div>
        <div className="flex items-center justify-center bg-white order-2">
          <img src={Ayasan} width={1200} height={800} />
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex items-center justify-center bg-white order-2 md:order-1">
          <img src={UnionSpace} width={1200} height={800} />
        </div>
        <div className="flex flex-col gap-5 items-start justify-center bg-gray-900 text-white p-16 order-1 md:order-2">
          <h2 className="text-3xl">UnionSpace</h2>
          <p>
            Co-working space with multiple branches in Bangkok. Enjoy a quiet
            sip of coffee while working on side projects and networking with
            like-minded individuals.
          </p>
          <button
            type="button"
            className="!text-white !bg-blue-500 !box-border !border !border-transparent !hover:bg-brand-strong !focus:ring-4 !focus:ring-brand-medium !shadow-xs !font-medium !leading-5 !rounded-base !text-sm !px-4 !py-2.5 !focus:outline-none"
          >
            Learn More
          </button>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col gap-5 items-start justify-center bg-gray-900 text-white p-16">
          <h2 className="text-3xl">Counting Sheep</h2>
          <p>
            The Counting Sheep is a restaurant and bar that offers a cozy and
            relax atmosphere to wind down from your busy day of work. Just a few
            hundred meteres into the soi.
          </p>
          <button
            type="button"
            className="!text-white !bg-blue-500 !box-border !border !border-transparent !hover:bg-brand-strong !focus:ring-4 !focus:ring-brand-medium !shadow-xs !font-medium !leading-5 !rounded-base !text-sm !px-4 !py-2.5 !focus:outline-none"
          >
            Learn More
          </button>
        </div>
        <div className="flex items-center justify-center bg-white">
          <img src={CountingSheep} width={1200} height={800} />
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex items-center justify-center bg-white order-2 md:order-1">
          <img src={Avenue61} width={1200} height={800} />
        </div>
        <div className="flex flex-col gap-5 items-start justify-center bg-gray-900 text-white p-16 order-1 md:order-2">
          <h2 className="text-3xl">Avenue61</h2>
          <p>
            Condo located in the middle of sukhumvit 61. Avenue61 offers parking
            space, gym and a swimming pool for residents.
          </p>
          <button
            type="button"
            className="!text-white !bg-blue-500 !box-border !border !border-transparent !hover:bg-brand-strong !focus:ring-4 !focus:ring-brand-medium !shadow-xs !font-medium !leading-5 !rounded-base !text-sm !px-4 !py-2.5 !focus:outline-none"
          >
            Learn More
          </button>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col gap-5 items-start justify-center bg-gray-900 text-white p-16">
          <h2 className="text-3xl">Regent On The Park</h2>
          <p>
            Regent on the Park is a serviced apartment located near BTS Ekkamai.
            Offering fully furnished rooms with amenities such as gym, swimming
            pool and parking space.
          </p>
          <button
            type="button"
            className="!text-white !bg-blue-500 !box-border !border !border-transparent !hover:bg-brand-strong !focus:ring-4 !focus:ring-brand-medium !shadow-xs !font-medium !leading-5 !rounded-base !text-sm !px-4 !py-2.5 !focus:outline-none"
          >
            Learn More
          </button>
        </div>
        <div className="flex items-center justify-center bg-white">
          <img src={RegentPark} width={1200} height={800} />
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex items-center justify-center bg-white order-2 md:order-1">
          <img src={MaxValu} width={1200} height={800} />
        </div>
        <div className="flex flex-col gap-5 items-start justify-center bg-gray-900 text-white p-16 order-1 md:order-2">
          <h2 className="text-3xl">MaxValue</h2>
          <p>
            Department store located in the middle of sukhumvit soi 61. Shop for
            your anemities here.
          </p>
          <button
            type="button"
            className="!text-white !bg-blue-500 !box-border !border !border-transparent !hover:bg-brand-strong !focus:ring-4 !focus:ring-brand-medium !shadow-xs !font-medium !leading-5 !rounded-base !text-sm !px-4 !py-2.5 !focus:outline-none"
          >
            Learn More
          </button>
        </div>
      </section>
    </div>
  );
}

export default InterestsList;
