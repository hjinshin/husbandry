import React from 'react';
import { motion } from 'framer-motion';

const variants = {
  initial: {
  opacity: 0
  },
  animate: {
  opacity: 1
  },
  exit: {
  opacity: 0,
  }
};


function FadeIn({ children, ...rest }) {
    return (
        <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.8 }}
            variants={variants}
            {...rest}
            >
            {children}
        </motion.div>
      );
}

export default FadeIn;