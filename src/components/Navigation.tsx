import React from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";

const Navigation = () => {
  const { scrollY } = useViewportScroll();
  const background = useTransform(
    scrollY,
    [0, 100],
    ["rgba(0, 183, 255, 0)", "rgba(0, 183, 255, 1)"]
  );
  const height = useTransform(scrollY, [0, 100], [120, 60]);

  return (
    <motion.div
      id="navigation"
      style={{
        background,
        height
      }}
    >
      <div id="logo" />
      <ul>
        <li />
        <li />
        <li />
      </ul>
    </motion.div>
  );
};

export default Navigation;