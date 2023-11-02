import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Farm from '../../pages/farm/Farm';
import Land from '../../pages/land/Land';
import './Game.css';

function Game(props) {
    return (
        <div className='game'>
            <Routes>
                <Route path='/' element={<Farm />} />
                <Route path='/land' element={<Land />} />
            </Routes>
        </div>
    );
}

export default Game;