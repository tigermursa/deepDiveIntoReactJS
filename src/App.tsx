import React from "react";
import { motion } from "framer-motion";
import { easeIn } from "framer-motion/dom";

const App = () => {
  const parent = {
    hidden: { x: 0, y: 0 },
    visible: {
      x: [-100, 100],
      scale: 1,
      transition: {
        ease: "linear",
        duration: 1,
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  };

  return (
    <div className="flex justify-center items-center h-screen cursor-grabbing ">
      <div className="border border-blue-800">
        <motion.div
          className="h-20 w-20 bg-red-600 rounded-md  "
          variants={parent}
          initial={"hidden"}
          animate={"visible"}
          whileHover={{
            scale: 1.1,
          }}
          whileTap={{ rotate: -40 }}
          drag
          dragConstraints={{ left: 50, right: 50, top: -150, bottom: 150 }}
          dragSnapToOrigin
        ></motion.div>
      </div>
    </div>
  );
};

export default App;
