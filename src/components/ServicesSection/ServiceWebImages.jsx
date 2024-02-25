import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import {
  daob_web_frame,
  ecommerce_web_frame,
  food_web_frame,
  kapsule_web_frame,
  learning_2_web_frame,
  learning_web_frame,
  server_illustration,
} from "../../assets";

export function ServiceBackendImages(props) {
  return (
    <div className="flex justify-center align-items-center text-center m-auto h-[100%]">
      <img src={server_illustration} alt="server" className="h-auto w-[80%]" />
    </div>
  );
}


function ServiceWebImages(props) {
  const images = {
    row1: [kapsule_web_frame, daob_web_frame],
    row2: [food_web_frame, learning_web_frame],
    row3: [learning_2_web_frame, ecommerce_web_frame],
  };
  return (
    <div className="relative">
      <div className="absolute h-[200%] w-[500px] over">
        <div
          style={{
            // transform: `translate(-${offsetY / 10}px, -${offsetY * 0.5}px) rotate(-10deg)`,
            // transform: `translate(-${translateY / 10}px, -${translateY * 0.5}px) rotate(-10deg)`,
            // transform: `translate(-50px, -500px) rotate(-10deg)`,
            transform: `translate(10%, -10%) rotate(-10deg)`,
            // transform: `translate(0px, -${translateY}px) rotate(-10deg)`,
            // transform: `translate(30px, -${translateY}px) rotate(-10deg)`,
          }}
          className="flex flex-col overflow-hidden relative"
        >
          <div className="flex flex-row">
            {images.row1.map((image, index) => {
              console.log(image);
              return (
                <div key={index} className="m-2">
                  <img src={image} alt="" className={`h-[100%] w-[150%] rounded-md`} />
                </div>
              );
            })}
          </div>
          <div className="flex flex-row">
            {images.row2.map((image, index) => (
              <div key={index} className="m-2">
                <img src={image} alt="" className={`h-[100%] w-[150%] rounded-md`} />
              </div>
            ))}
          </div>
          <div className="flex flex-row">
            {images.row3.map((image, index) => (
              <div key={index} className="m-2">
                <img src={image} alt="" className={`h-[100%] w-[150%] rounded-md`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

ServiceWebImages.propTypes = {};

export default ServiceWebImages;
