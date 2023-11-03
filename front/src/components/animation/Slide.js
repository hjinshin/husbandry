import React from 'react';
import { AnimatePresence, motion } from "framer-motion";
import { useSelector } from 'react-redux';

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
    const {land, direction} = useSelector(state=>{
        return state.farm;
    })
    const components = props.components;
    return (
        <div>
            <AnimatePresence initial={false} custom={direction}>
                <motion.div
                    key={land}
                    custom={direction}
                    variants={variants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{
                        x: { stiffness: 0, damping: 30 },
                    }}
                    >
                    {components[land]}
                </motion.div>
            </AnimatePresence>            
        </div>
    );
}

export default Slide;