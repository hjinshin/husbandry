import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Heart from '../../images/heart.png'
import { scaleUp } from '../../components/animation/scaleEffect';
import './GateWay.css'

function GateWay(props) {
    const navigate = useNavigate();
    return (
        <div className='gateway'>
            <motion.img
            className='heart-img' 
            src={Heart}
            initial="initial"
            animate="animate"
            transition={{ 
                duration: 1.8,
                onComplete:()=> {
                    navigate('/game');
                }
            }}
            variants={scaleUp}
            />
        </div>
    );
}

export default GateWay;