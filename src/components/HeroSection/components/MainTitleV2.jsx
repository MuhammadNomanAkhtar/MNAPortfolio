import React from "react";
import bgEllipse from "../../../assets/Gradient Ellipse 3.svg";
import bgAnimation from "../../../assets/lottie/animation-lottie.lottie";
import "./MainTitleV2.css";
import "@dotlottie/player-component";
import "@dotlottie/player-component";

function MainTitle() {
  return (
    <>
      <div className="relative w-full">
      {/* <div className="relative px-60 pt-2 pb-10 min-w-max"> */}
      {/* <div className="relative px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 pt-2 pb-10 min-w-max"> */}
        <div className="absolute inset-0">
          {/* <div className="gradientRadial h-full"></div> */}
          <div className="flex h-full w-full">
            <div className="titleGradient mx-52 blur-[90px] rounded-t-[2000px] rounded-b-[300px] h-[90%] w-[80%] mt-8 -z-10"></div>
            {/* <div className="gradientRadial grow h-full blur-2xl"></div> */}
            {/* <div className="gradientRadial2 grow h-full blur-2xl"></div> */}
          </div>

          {/* <img
            src={bgEllipse}
            alt="Gradient"
            // blur-3xl
            // w-full h-full  
            className="w-full h-full bg-center self-center items-center object-fill sm:object-fill filter opacity-90 blur-md"
          /> */}
        </div>
        <div className="mix-blend-overlay text-white text-4xl sm:text-6xl lg:text-8xl text-center font-black shadow-inner sm:drop-shadow-lg">
          FULLSTACK <br /> MOBILE & WEB <br /> DEVELOPER
        </div>
        {/* <div className="mix-blend-overlay text-white text-8xl text-center font-black shadow-inner drop-shadow-lg">
          FULLSTACK <br /> MOBILE & WEB <br /> DEVELOPER
        </div> */}
      </div>
      <div className="absolute -bottom-10 left-0 w-full -z-[10] sm:hidden lg:block">
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
