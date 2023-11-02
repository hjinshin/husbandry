import React from 'react';
import { Routes, Route  } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchCheckCookie } from '../../slices/validSlice';
import MainMenu from '../../pages/mainmenu/MainMenu';
import SignUp from '../../pages/signUp/SignUp';
import TwinkleStars from '../twinkle_stars/TwinkleStars';
import './Lobby.css'

function Lobby(props) {
    const dispatch = useDispatch();
    dispatch(fetchCheckCookie());
    
    return (
        <div className='lobby'>
            <TwinkleStars/>
            <Routes>
                <Route path='/*' element={<MainMenu />} />   
                <Route path='/signup' element={<SignUp/>} />
            </Routes>    
        </div>

    );
}

export default Lobby;