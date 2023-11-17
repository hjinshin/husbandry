import React from 'react';
import { motion } from 'framer-motion';
import { fadeInOut } from './scaleEffect';

function FadeIn({ children, ...rest }) {
    return (
        <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={fadeInOut}
            {...rest}
            >
            {children}
        </motion.div>
      );
}

export default FadeIn;