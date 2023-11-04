import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from "framer-motion";
import { useDispatch } from 'react-redux';
import { fetchCheckCookie } from '../../slices/validSlice';
import MainMenu from '../../pages/mainmenu/MainMenu';
import SignUp from '../../pages/signUp/SignUp';
import TwinkleStars from '../twinkle_stars/TwinkleStars';
import GateWay from '../../pages/gateway/GateWay';
import './Lobby.css'



function Lobby(props) {
    const dispatch = useDispatch();
    dispatch(fetchCheckCookie());
    return (
        <div className='lobby'>
            <TwinkleStars/>
            <AnimatePresence mode='wait'>
                <Routes>
                    <Route path='/*' element={<MainMenu />} />   
                    <Route path='/signup' element={<SignUp/>} />
                    <Route path='/gateway' element={<GateWay/>} />
                </Routes>    
            </AnimatePresence>
        </div>

    );
}

export default Lobby;