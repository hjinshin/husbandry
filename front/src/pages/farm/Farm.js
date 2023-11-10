import React from 'react';
import Ground from '../../images/background/ground.png';
import Barn from '../../images/background/barn.png';
import './Farm.css'

function Farm(props) {
    return (
        <div className='farm'>
            <img className="farm-ground-img" src={Ground} alt='ground'/>
            <img className="barn-img" src={Barn} alt='barn'/>
        </div>
    );
}

export default Farm;