import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from "framer-motion";
import MainMenu from '../../pages/mainmenu/MainMenu';
import SignUp from '../../pages/signUp/SignUp';
import TwinkleStars from '../twinkle_stars/TwinkleStars';
import './Lobby.css'



function Lobby(props) {
    return (
        <div className='lobby'>
            <TwinkleStars/>
            <AnimatePresence mode='wait'>
                <Routes>
                    <Route path='/*' element={<MainMenu />} />   
                    <Route path='/signup' element={<SignUp/>} />
                </Routes>    
            </AnimatePresence>
        </div>

    );
}

export default Lobby;