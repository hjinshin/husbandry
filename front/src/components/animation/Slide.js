import React from 'react';
import { AnimatePresence, motion } from "framer-motion";

const variants = {
    initial: (direction) => ({
        x: direction > 0 ? 1280 : -1280,
    }),
    animate: {
        x: 0,
    },
    exit: (direction) => ({
        x: direction > 0 ? -1280 : 1280,
    }),
};

function Slide(props) {
    const components = props.components;
    return (
        <div>
            <AnimatePresence initial={false} custom={props.direction}>
                <motion.div
                    key={props.land}
                    custom={props.direction}
                    variants={variants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{
                        x: { stiffness: 0, damping: 30 },
                    }}
                    >
                    {components[props.land]}
                </motion.div>
            </AnimatePresence>            
        </div>
    );
}

export default Slide;