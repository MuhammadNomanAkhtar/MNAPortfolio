import React from "react";
import bgEllipse from "../../../assets/Gradient Ellipse 3.svg";
import bgAnimation from "../../../assets/lottie/animation-lottie.lottie";
import "./MainTitle.css";
import "@dotlottie/player-component";
import "@dotlottie/player-component";
import { motion } from "framer-motion";

const scaleVariants = {
  hidden: {
    // scale: 0,
    y: 275,
    opacity: 0,
  },
  visible: {
    // scale: 1,
    // y: '0%',
    y: 0,
    opacity: 1,
  },
};

function MainTitle({ variants, delay }) {
  return (
    <>
      <div className="relative w-full">
        <div className="absolute inset-0">
          <div className="flex h-full w-full">
            {/* <div className="titleGradient mx-52 blur-[90px] rounded-t-[2000px] rounded-b-[300px] h-[90%] w-[80%] mt-8 -z-10"></div> */}
            <div
              className="titleGradient 
              md:mx-12  lg:mx-52 
            blur-[50px] lg:blur-[90px] 
            md:rounded-t-[2000px] 
            md:rounded-b-[300px] 
            h-[100%] md:h-[90%] 
            w-[100%] marker:md:w-[80%] 
            mt-4 
            -z-10"
            ></div>
          </div>
        </div>
        <motion.div
          style={
            {
              // translateY: '100%',
            }
          }
          variants={variants}
          className="mt-8 mix-blend-overlay text-white text-5xl sm:text-6xl lg:text-8xl text-center font-black shadow-inner sm:drop-shadow-lg"
        >
          MERN STACK
          {/* <WordTransition/> */}
          <div> DEVELOPER</div>
          {/* <div className="infinite-slide-container">
            <div className="slide-element">MOBILE</div>
            <div className="slide-element">WEB</div>
          </div> */}
          {/* <AnimatedTexts texts={['MOBILE','WEB']} /> */}
          {/* DEVELOPER */}
        </motion.div>
      </div>
      <div className="absolute -bottom-10 left-0 w-full -z-[10] hidden lg:block">
        <dotlottie-player
          src={bgAnimation}
          autoplay
          loop
          style={{
            opacity: 0.1,
          }}
        />
      </div>
    </>

    // <div className="flex flex-col items-center">
    //   <div className="relative">
    //     <div className="absolute inset-0 gradientRadial opacity-0">
    //       <div className="relative gradientRadial h-16"></div>
    //     </div>

    //     <div className="mainTitleAnimation">
    //       <dotlottie-player
    //         src={bgAnimation}
    //         autoplay
    //         loop
    //         style={{
    //           opacity: 0.1,
    //           // inset: '180px 0 0 0 0'
    //         }}
    //         // className="mainTitleAnimation absolute inset-10 mt-56 h-16 opacity-0 mix-blend-overlay"
    //       />
    //     </div>

    //     <div className="absolute inset-0 text-center flex items-center justify-center">
    //       <div className="mix-blend-overlay text-white text-8xl text-center font-black shadow-inner">
    //         FULLSTACK <br /> MOBILE & WEB <br /> DEVELOPER
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default MainTitle;
