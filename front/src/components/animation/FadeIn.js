import React from 'react';
import { motion } from 'framer-motion';
import { fadeInEffect } from './pageEffect';

function FadeIn({ children, ...rest }) {
    return (
        <motion.div
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.8 }}
          variants={fadeInEffect}
          {...rest}
        >
          {children}
        </motion.div>
      );
}

export default FadeIn;