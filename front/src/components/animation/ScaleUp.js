import { AnimatePresence, motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { scaleUp } from './scaleEffect';
import './animation.css'

function ScaleUp(props) {
    const navigate = useNavigate();
    return (
        <AnimatePresence>
            <motion.img
            className='gateway-heart-img' 
            src={props.img}
            initial="initial"
            animate="animate"
            transition={{ 
                duration: 1.8,
                onComplete:()=> {
                    navigate(props.redirectTo);
                }
            }}
            variants={scaleUp}
            />          
        </AnimatePresence>

    );
}

export default ScaleUp;