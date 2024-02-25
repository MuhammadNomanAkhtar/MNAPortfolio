import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import {
  delivery_frame,
  kugali_frame,
  lengo,
  lengo_frame,
  qreview_frame,
  qzee_analytics_frame,
  qzee_grid_frame,
  tout_frame,
  writehook_dashboard_frame,
  writehook_home_frame,
} from "../../assets";
import useOnScreen from "../../hooks/useOnScreenHook";
import "./ServiceImages.css";
function ServiceImages(props) {
  // console.log("window.pageYOffset", window.pageYOffset);
  // const [offsetY, setOffsetY] = useState(0);
  // eslint-disable-next-line
  // const [offsetY2, setOffsetY2] = useState(0);
  // const [offsetYCheker, setOffsetYCheker] = useState(0);
  // useEffect(() => {
  //   console.log("window.pageYOffset", window.pageYOffset);
  //   setOffsetY(window.pageYOffset);
  //   if (isVisible) {
  //     setOffsetY2(window.pageYOffset - offsetYCheker);
  //   } else {
  //     setOffsetYCheker(window.pageYOffset);
  //   }
  //   setOffsetY2(window.pageYOffset);
  //   // eslint-disable-next-line
  // }, [window.pageYOffset]);
  // const ref = useRef(null);
  // const isVisible = useOnScreen(ref);

  // const [translateY, setTranslateY] = useState(0);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollY = window.pageYOffset;
  //     const maxTranslation = 500; // Adjust the maximum allowed translation here

  //     // const originalValue = scrollY;
  //     // const newMinValue = 1; // Replace with the minimum value in the new range
  //     // const newMaxValue = 500; // Replace with the maximum value in the new range
      
  //     // const newValue = (originalValue / newMaxValue) * newMaxValue;

  //     // console.log('newValue', newValue);
  //       // setTranslateY(newValue);
  //     // let newTranslateY = (scrollY * 0.5) / (500 / maxTranslation); // Adjust the factor to control the speed of translation

  //     // console.log(
  //     //   `Math.min(${maxTranslation}, ${newTranslateY}) == `,
  //     //   Math.min(maxTranslation, newTranslateY)
  //     // );

  //     let newTranslateY = scrollY/10 + (50);
  //     console.log(`Math.min(${maxTranslation}, ${newTranslateY})==`,Math.min(maxTranslation, newTranslateY));
  //     newTranslateY = Math.min(maxTranslation, newTranslateY);

  //     console.log();
  //     setTranslateY(newTranslateY);
  //   };

  //   // Trigger the scroll event initially to update the initial translateY value
  //   handleScroll();

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [ref]); // Include the 'ref' as a dependency in the useEffect to ensure proper handling

  const images = {
    row1: [kugali_frame, writehook_home_frame, writehook_dashboard_frame],
    row2: [delivery_frame, qzee_analytics_frame, qreview_frame],
    row3: [lengo_frame, tout_frame, qzee_grid_frame],
  };
  return (
    <div className="relative">
      <div
        style={{
          // transform: `translate(-${offsetY / 10}px, -${offsetY * 0.5}px) rotate(-10deg)`,
          // transform: `translate(-${translateY / 10}px, -${translateY * 0.5}px) rotate(-10deg)`,
          // transform: `translate(-50px, -500px) rotate(-10deg)`,
          transform: `translate(-15%, -64%) rotate(-10deg)`,
          // transform: `translate(0px, -${translateY}px) rotate(-10deg)`,
          // transform: `translate(30px, -${translateY}px) rotate(-10deg)`,
        }}
        className="flex overflow-hidden relative top-[30vh] right-[-90px]"
      >
        <div className="flex-row">
          {images.row1.map((image, index) => (
            <div key={index} className="m-2">
              <img
                src={image}
                alt=""
                className="h-auto w-[100%] object-cover"
              />
            </div>
          ))}
        </div>
        <div className="flex-row">
          {images.row2.map((image, index) => (
            <div key={index} className="m-2">
              <img
                src={image}
                alt=""
                className="h-auto w-[100%] object-cover"
              />
            </div>
          ))}
        </div>
        <div className="flex-row">
          {images.row3.map((image, index) => (
            <div key={index} className="m-2">
              <img
                src={image}
                alt=""
                className="h-auto w-[100%] object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

ServiceImages.propTypes = {};

export default ServiceImages;
