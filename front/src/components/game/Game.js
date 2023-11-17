import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Farm from '../farm/Farm';
import Sleep from '../../pages/sleep/Sleep';
import './Game.css';
import FadeIn from '../animation/FadeIn';
import Tamer from '../../pages/tamer/Tamer';
import Breeder from '../../pages/breeder/Breeder';


function Game(props) {
    const [duration, setDuration] = useState(0);
    const [prevLoc, setPrevLoc] = useState("signup");
    const location = useLocation();

    return (
        <div className='game'>
            <AnimatePresence>
                <Routes location={location} key={location.key}>
                    <Route path='/' element={<FadeIn transition={{ duration: duration }}><Farm setDuration={setDuration} prevLoc={prevLoc} setPrevLoc={setPrevLoc} /></FadeIn>} />
                    <Route path='/tamer' element={<Tamer setPrevLoc={setPrevLoc} />} />
                    <Route path='/breeder' element={<Breeder setPrevLoc={setPrevLoc} />} />
                    <Route path='/sleep' element={<Sleep setPrevLoc={setPrevLoc} />} />
                </Routes>                
            </AnimatePresence>
        </div>
    );
}

export default Game;