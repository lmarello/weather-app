import { AnimatePresence, motion } from "framer-motion";
import React from "react";

const Loading = () => {
  const containerVariants = {
    initial: {
      transition: {
        staggerChildren: 0.2,
      },
    },
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const dotVariants = {
    initial: {
      y: "0%",
    },
    animate: {
      y: "100%",
    },
  };

  const dotTransition = {
    duration: 0.5,
    yoyo: Infinity,
    ease: "easeInOut",
  };

  return (
    <AnimatePresence>
      <motion.ul
        variants={containerVariants}
        initial="initial"
        animate="animate"
        className="flex gap-3 justify-center items-center h-[100%]"
      >
        {[1, 2, 3].map((element, index) => {
          return (
            <motion.li
              key={index}
              variants={dotVariants}
              transition={dotTransition}
              className="dot bg-white h-[15px] w-[15px] rounded-xl"
            ></motion.li>
          );
        })}
      </motion.ul>
    </AnimatePresence>
  );
};

export default Loading;
