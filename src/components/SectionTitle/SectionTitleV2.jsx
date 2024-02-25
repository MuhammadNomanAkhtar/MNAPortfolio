import React from "react";
import GradientTitle from "./GradientTitle";
import PropTypes from "prop-types";
export default function SectionTitleV2({ mainTitle, title, subtitle }) {
  return (
    <>
      <div className="mt-8">
        <div className="relative w-full">
        <div className="absolute inset-0">
          {/* <div className="gradientRadial h-full"></div> */}
          <div className="flex h-full w-full">
            <div className="titleGradient mx-52 blur-[64px] rounded-t-[100px] rounded-b-[300px] h-[90%] w-[80%] mt-8 -z-10"></div>
          </div>
        </div>
          <GradientTitle title={mainTitle.toUpperCase()} />
        </div>
      </div>
      {title && <p className="text-white text-center mt-2 text">{title}</p>}
      {subtitle && <p className="text-center text-slate-500">{subtitle}</p>}
    </>
  );
}

SectionTitleV2.propTypes = {
  mainTitle: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

