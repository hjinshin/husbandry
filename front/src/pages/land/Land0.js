import React from 'react';
import Ground from '../../images/background/ground.png';
import Barn from '../../images/background/barn.png';
import './Land.css'

function Land0(props) {
    return (
        <div className='land'>
            <img className="land-ground-img" src={Ground} alt='ground'/>
            <img className="barn-img" src={Barn} alt='barn'/>
        </div>
    );
}

export default Land0;