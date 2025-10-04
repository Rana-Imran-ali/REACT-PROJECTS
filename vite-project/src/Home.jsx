import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div>
      <motion.h1
      initial={{opacity:0, y:50}}
      animate={{opacity:1, y:0}}
      transition={{ duration:1}}
      className=" border-2"
      >Hello World</motion.h1>
    </div>
  );
};

export default Home;
