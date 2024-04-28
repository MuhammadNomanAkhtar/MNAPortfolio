import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import Testimonials from "./Testimonials";

import {motion} from "framer-motion";

const item = {
    // hidden: { opacity: 0, scale: 0 },
    hidden: {opacity: 0, y: 75},
    show: (index) => ({
        opacity: 1,
        // scale: 1,
        y: 0,
        transition: {
            duration: 0.5,
            delay: index * 0.1
        },
    }),
};

export default function TestimonialSection() {
  return (
    <div id='testimonials'>
      <div className="mx-8"></div>
      <SectionTitle
        mainTitle={"Testimonials"}
        title={"What people say about me"}
        subtitle={
          "See what people have shared about their experiences collaborating with me."
        }
      />
        <motion.div variants={item}
            initial='hidden'
            whileInView='show'
            viewport={{
                once: true
            }}>
        <Testimonials />
        </motion.div>
    </div>
  );
}
