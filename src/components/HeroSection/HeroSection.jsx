import React from "react";
import { ProfileAvatar } from "./components/ProfieAvatar";
import MainTitle from "./components/MainTitle";
// import umarpp from "../../assets/umarpp.JPG";
import {
  profile_picture_3x,
  ahsanprofile,
  ahsan_pic,
  // ahsan_profile1,
  ahsan_profile2,
  ahsan_profile3x,
  // ahsan_profile3,
  // ahsan_profile4,
  ahsan_profile5,
  Profile,
} from "../../assets";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    // rotate: 0,
    transition: {
      staggerChildren: 0.5,
      delayChildren: 0.1,
    },
  },
};

const item = {
  // hidden: { opacity: 0, scale: 0, y:275 },
  hidden: { opacity: 0, y: 75 },
  show: {
    opacity: 1,
    // scale: 1,
    y: 0,
    // top: 30,
    transition: {
      duration: 0.5,
    },
  },
  // show: {
  //   opacity: 1,
  //   scale: 1,
  //   y:0,
  //   // top: 30,
  //   transition: {
  //     duration: 0.5,
  //   },
  // },
};
export default function HeroSection() {
  return (
    <>
      <motion.div
        // variants={container}
        variants={container}
        style={{}}
        initial="hidden"
        animate="show"
        className="flex flex-col items-center my-3"
      >
        <motion.h1
          variants={item}
          className="text-white text-center text-xl md:text-2xl xl:text-3xl margin-bottom:50px"
        >
          Hi👋, I'm Muhammad Noman Akhtar
        </motion.h1>
        <motion.img
          variants={item}
          src={Profile}
          // className="h-42 sm:h-40 md:h-52 w-42 sm:w-40 md:w-52 rounded-full"
          // className="h-42 w-42 sm:h-40 sm:w-40 md:h-52 md:w-52 rounded-full"
          className="h-40 w-40 sm:h-40 sm:w-40 md:h-52 md:w-52 rounded-full"
          alt="Profile Picture"
        />
        {/* <motion.div variants={item}> */}
        <MainTitle variants={item} />
        {/* </motion.div> */}
        <motion.h1
          variants={item}
          className="text-white text-center mt-10 mx-10 text-base"
        >
          React Native mastery for seamless mobile brilliance.
        </motion.h1>
      </motion.div>
    </>
  );
}
