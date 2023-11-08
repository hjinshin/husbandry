import React from 'react';
import Ground from '../../images/ground.png';
import './Land.css'

import DrawAnimal from '../../components/canvasComponents/DrawAnimal';

function Land1(props) {
    const w = 1;
    const worm = {
        h_head: 100*w,
        w_head: 100*w,
        h_body: 100*w,
        w_body: 250*w,
        h_tail: 164*w,
        w_tail: 108*w,
        h_b_leg: 96*w,
        w_b_leg: 42*w,
        h_wing: 78*w,
        w_wing: 114*w,
        r: 50*w,
    };
    
    return (
        <div className='land'>
            <DrawAnimal animal={worm}/>
            <img className="land-ground-img" src={Ground} alt='ground'/>
        </div>
    );
}

export default Land1;