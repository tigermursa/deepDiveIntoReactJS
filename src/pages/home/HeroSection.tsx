import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import tab from "../../assets/Samsung_Galaxy_Tab_S3.png";
import { motion } from "framer-motion";

const intro = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.25,
      delayChildren: 1,
    },
  },
};

const introChildren = {
  hidden: { opacity: 0, y: -200 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      type: "spring",
      bounce: 0.5,
    },
  },
};

const tabAnimation = {
  initial: { y: 0, rotate: 0, scale: 5 },
  animate: {
    y: 30,
    rotate: -30,
    scale: 1,
    transition: {
      duration: 1,
      y: {
        repeat: Infinity,
        duration: 1.5,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  },
};

const HeroSection = () => {
  return (
    <div className="overflow-hidden">
      <Container className="h-screen pt-16 grid grid-cols-1 lg:grid-cols-2 place-content-center ">
        <motion.div variants={intro} initial="hidden" animate="visible">
          <motion.h1
            className="text-6xl font-bold text-nowrap"
            variants={introChildren}
          >
            <span className="text-gray mb-10">Hey Nigga</span>
            <br></br>
            <span className="">Buy Buy TanStack</span>
          </motion.h1>
          <motion.p
            className=" text-dark-gray max-w-[50ch] mt-10 mb-5 text-lg"
            variants={introChildren}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            explicabo quisquam quidem voluptatibus magni ullam nam debitis
            laudantium deleniti doloremque.
          </motion.p>
          <motion.div variants={introChildren}>
            <Button>Book Service Now</Button>
          </motion.div>
        </motion.div>
        <motion.div
          className=" flex justify-center mt-10 w-3/4 lg:w-full mx-auto"
          variants={tabAnimation}
          initial="initial"
          animate="animate"
        >
          <img
            className=" h-[95%] object-contain"
            width={350}
            height={350}
            src={tab}
            alt=""
          />
        </motion.div>
      </Container>
    </div>
  );
};

export default HeroSection;
