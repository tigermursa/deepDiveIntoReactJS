import { useScroll, motion, useTransform } from "framer-motion";
import { useRef } from "react";
import useScrollGrow from "../hooks/useScrollGrow";

const Service1 = () => {
  const { componentRef, style } = useScrollGrow();

  return (
    <motion.div
      style={style}
      ref={componentRef}
      className="bg-red-500 h-[415px] rounded-2xl col-span-12"
    ></motion.div>
  );
};

export default Service1;
