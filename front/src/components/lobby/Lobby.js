import React from 'react';
import { Routes, Route  } from 'react-router-dom';
import MainMenu from '../../pages/mainmenu/MainMenu';
import Farm from '../../pages/farm/Farm';
import './Lobby.css'
function Lobby(props) {
    return (
        <div className='lobby'>
            <Routes>
                <Route path='/*' element={<MainMenu />} />   
                <Route path='/farm' element={<Farm />} />
            </Routes>    
        </div>

    );
}

export default Lobby;