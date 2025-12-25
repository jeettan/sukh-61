import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";

import Ayasan from "../images/featured_images/ayasan.jpg";
import UnionSpace from "../images/featured_images/unionspace-bkk.jpg";
import CountingSheep from "../images/featured_images/counting-sheep.png";

import Avenue61 from "../images/featured_images/avenue-61.jpg";
import RegentPark from "../images/featured_images/regent-on-park.png";
import MaxValue from "../images/featured_images/maxvalue-ekkamai.jpg";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function Featured() {
  return (
    <div className="h-full">
      <h2 className="text-4xl text-center mt-7">Featured Interests</h2>
      <div className="w-full px-10 py-5">
        <Carousel
          responsive={responsive}
          swipeable={true}
          draggable={true}
          showDots={true}
          autoPlay={true}
          autoPlaySpeed={1500}
          infinite={true}
          itemClass="px-3 mb-10"
        >
          <div className="h-[260px] flex flex-col rounded-xl overflow-hidden bg-white shadow-sm">
            <img src={Ayasan} className="block h-[220px] w-full object-cover" />
            <p className="text-center text-2xl">Ayasan</p>
          </div>

          <div className="h-[260px] flex flex-col rounded-xl overflow-hidden bg-white shadow-sm">
            <img
              src={UnionSpace}
              className="block h-[220px] w-full object-cover"
            />
            <p className="text-center text-2xl">UnionSpace</p>
          </div>

          <div className="h-[260px] flex flex-col rounded-xl overflow-hidden bg-white shadow-sm">
            <img
              src={CountingSheep}
              className="block h-[220px] w-full object-cover"
            />
            <p className="text-center text-2xl">Counting Sheep</p>
          </div>

          <div className="h-[260px] flex flex-col rounded-xl overflow-hidden bg-white shadow-sm">
            <img
              src={Avenue61}
              className="block h-[220px] w-full object-cover"
            />
            <p className="text-center text-2xl">Avenue 61</p>
          </div>

          <div className="h-[260px] flex flex-col rounded-xl overflow-hidden bg-white shadow-sm">
            <img
              src={RegentPark}
              className="block h-[220px] w-full object-cover"
            />
            <p className="text-center text-2xl">Regent on the Park</p>
          </div>

          <div className="h-[260px] flex flex-col rounded-xl overflow-hidden bg-white shadow-sm">
            <img
              src={MaxValue}
              className="block h-[220px] w-full object-cover"
            />
            <p className="text-center text-2xl">MaxValue</p>
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default Featured;
