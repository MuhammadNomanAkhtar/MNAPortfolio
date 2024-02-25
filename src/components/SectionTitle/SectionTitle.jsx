import React from "react";
import GradientTitle from "./GradientTitle";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

export default function SectionTitle({ mainTitle, title, subtitle }) {
  return (
    <motion.div
      style={{
        // translateY: "100%",
      }}
      initial={{ opacity: 0, y: 75 }}
      whileInView={{ opacity: 1, y:0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
      }}
    >
      <motion.div className="pt-8">
        <GradientTitle title={mainTitle.toUpperCase()} />
      </motion.div>
      {title && (
        <motion.p className="text-white text-center mt-2 text">
          {title}
        </motion.p>
      )}
      {subtitle && (
        <motion.p className="text-center text-slate-500 text-sm md:text-base">
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}

SectionTitle.propTypes = {
  mainTitle: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
};
