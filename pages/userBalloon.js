import React from "react";
import SvgBalloon from "./icons/Ballon";
import { motion } from "framer-motion";

export default function UserBalloon() {
  return (
    <div
      style={{
        position: "absolute",
      }}
    >
      <motion.button
        animate={{
          backgroundColor: "rgba(0, 0, 0, 0)",
          y: -120,
          border: "none",
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9, y: -90 }}
      >
          <SvgBalloon style={{ transform: "scale(0.6)" }} />
      </motion.button>
    </div>
  );
}
