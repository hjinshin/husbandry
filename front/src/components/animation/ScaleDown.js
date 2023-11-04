import React from 'react';
import { AnimatePresence, motion } from "framer-motion";
import { scaleDown } from './scaleEffect';

function ScaleDown(props) {
    return (
        <AnimatePresence>
            <motion.img
            className='heart-img' 
            src={props.img}
            initial="initial"
            animate="animate"
            transition={{ 
                duration: 1.8
            }}
            variants={scaleDown}
            />            
        </AnimatePresence>

    );
}

export default ScaleDown;