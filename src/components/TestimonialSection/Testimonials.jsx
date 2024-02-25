import React from "react";
import PropTypes from "prop-types";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/zoom";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import "./Testimonials.css";
import { ProfileAvatar } from "../HeroSection/components/ProfieAvatar";
import { azima, vectorlines } from "../../assets";

import { Rating } from "flowbite-react";

import RatingBar from "../Ui/RatingBar";
import { testimonials } from "../../constants";
import { useBreakpoint } from "../../hooks/useBreakpoint";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// export default function Testimonials(props) {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 3,
//   };

//   return (
//     <div>
//       <Slider 
//       {...settings} 
//       centerPadding="60px"
//       >
//         {[...testimonials].map((x, i) => {
//           console.log(x);
//           return <TestimonialCard key={i} testimonial={x} />;
//         })}
//       </Slider>
//     </div>
//   );
// }

export default function Testimonials() {
  // const { isSm } = useBreakpoint("sm");
  // const { isMd } = useBreakpoint("md");
  // const { isLg } = useBreakpoint("lg");

  // const slidesPerView = isLg ? 3 : isMd ? 3 : isSm ? 1 : 1;
  const slidesPerView = 1;
  const loop = slidesPerView === 1;
  // console.log(
  //   `isSm: ${isSm}, isMd:${isMd}, isLg: ${isLg} === ${slidesPerView}`
  // );
  return (
    <div className="max-w-5xl mx-auto">
      <div className="m-10">
        <Swiper
          spaceBetween={16}
          slidesPerView={1}
          // slidesPerView={slidesPerView}
          // slidesPerView={3}
          effect="fade"
          // navigation={true}
          // modules={[Navigation]}
          // color="white"[]
          // pagination={{ clickable: true }}
          // scrollbar={{ draggable: true }}
          autoplay={{
            // delay: 1000,
            delay: 4000,
            disableOnInteraction: true,
          }}
          pagination={{
            // enabled: true,
            el: "#pagination-container",
            bulletClass: "swiper-pagination-bullet",
            bulletActiveClass: "swiper-pagination-bullet-active",
            clickable: true,
          }}
          loop={true}
          // loop={true}
          // loopedSlides={10}
          navigation={false}
          modules={[Pagination, Navigation, Autoplay]}
        >
          {[...testimonials].map((x, i) => {
            console.log(x);
            return (
              <SwiperSlide
                className="cursor-pointer bg-fgray-700 rounded-2xl"
                zoom={true}
                key={i}
              >
                <div className="max-w-4xl">
                  {/* <p>{x.review}</p> */}
                  <TestimonialCard testimonial={x} />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

         <div id="pagination-container" className="mt-10 mx-auto text-center" />

        {/* <div className="swipe-fade-left md:w-[12rem] lg:w-[18rem]"></div> */}
        {/* <div className="swipe-fade-right md:w-[12rem] lg:w-[18rem]"></div> */}

        {/* <div className="swiper-fade-left absolute h-[100%] w-[200px] left-0 top-0 z-50 bg-gradient-to-r from-background to-transparent"></div>
        <div classN
        ame="swiper-fade-left absolute h-[100%] w-[200px] left-0 top-0 z-50 bg-gradient-to-r from-background to-transparent"></div>
         */}
        {/* <div className="swiper-fade-right absolute h-[100%] w-[200px] right-0 top-0 z-50 bg-gradient-to-r from-transparent to-background"></div>
        <div className="swiper-fade-right absolute h-[100%] w-[200px] right-0 top-0 z-50 bg-gradient-to-r from-transparent to-background"></div>
        <div className="swiper-fade-right absolute h-[100%] w-[200px] right-0 top-0 z-50 bg-gradient-to-r from-transparent to-background"></div>
        <div className="swiper-fade-right absolute h-[100%] w-[200px] right-0 top-0 z-50 bg-gradient-to-r from-transparent to-background"></div> */}
      </div>
    </div>
  );
}

const TestimonialCard = ({ className, key, testimonial, rounded }) => {
  const size = 5;
  rounded = rounded ?? true;
  return (
    <div className="relative overflow-hidden">
      <div className={`${className} p-8`}>
        <img
          src={testimonial.photo}
          style={{ height: `${size}rem` }}
          className={`text-center mx-auto ${rounded ? "rounded-full" : ""}`}
          alt="Profile Picture"
        />
        <h1 className="mx-auto font-bold text-center mt-4">
          {testimonial.name}
        </h1>
        <p className="text-sm text-trueGray-500 text-center">
          {testimonial.position}{" "}
          <span className="text-blue-500">@{testimonial.company}</span>
        </p>
        <p className="text-sm text-center mt-4 line-clamp-6">
          {`"${testimonial.review}"`}
        </p>

        <div className="mx-auto mt-4 text-center">
          <RatingBar />
        </div>
        {/* <div className={`p-5 z-10`}>
        
      </div> */}

        {/* <div className="font-bold text-center ">{key}</div> */}
        {/* <div className="font-bold text-center">Dan Elkaim</div> */}
        {/* <div className="font-bold text-center">Dan Elkaim</div> */}
        {/* <div className="font-bold text-center">Dan Elkaim</div> */}
        {/* <div className="font-bold text-center">Dan Elkaim</div> */}
      </div>
      {/* <img
        className="absolute top-[-50px] bottom-[10px] left-[100px] object-cover h-[210%] -z-10"
        src={vectorlines}
        alt=""
      /> */}
    </div>
  );
};
TestimonialCard.propTypes = {
  testimonial: PropTypes.object,
  rounded: PropTypes.bool,
};
