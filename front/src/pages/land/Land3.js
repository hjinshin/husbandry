import React from 'react';
import Ground from '../../images/ground.png';
import './Land.css'

function Land3(props) {
    return (
        <div className='land'>
            <img className="land-ground-img" src={Ground} alt='ground'/>
        </div>
    );
}

export default Land3;