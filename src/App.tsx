import React from "react";
import { motion } from "framer-motion";

const App = () => {
  const initial = { rotate: 0 };
  const animate = { rotate: 360 };

  return (
    <div>
      <div className="flex justify-center items-center h-screen">
        <motion.div
          className="h-20 w-20 bg-red-600 rounded-md"
          initial={initial}
          animate={animate}
          transition={{ type: "spring", duration: 2 }}
        ></motion.div>
      </div>
    </div>
  );
};

export default App;
