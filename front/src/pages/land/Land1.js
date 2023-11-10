import React from 'react';
import Ground from '../../images/background/ground.png';
import './Land.css'

import Canvas from '../../components/canvas/Canvas';

import Body from '../../images/body.svg';
import Head from '../../images/head.svg';
import Tail from '../../images/tail.svg';
import Fleg from '../../images/f_leg.svg';
import Bleg from '../../images/b_leg.svg';
import Wing from '../../images/wing.svg';

function Land1(props) {
    const w = 1;
    const worm = {
        height: 210*w,
        width: 358*w,
        h_head: 100*w,
        w_head: 100*w,
        h_body: 100*w,
        w_body: 250*w,
        h_tail: 164*w,
        w_tail: 108*w,
        h_b_leg: 96*w,
        w_b_leg: 42*w,
        r: 50*w,
    };
    
    const images = [new Image(), new Image(), new Image(), new Image(), new Image(), new Image()];
    images[0].src = Body;
    images[1].src = Head;
    images[2].src = Tail;
    images[3].src = Fleg;
    images[4].src = Bleg;
    images[5].src = Wing;


    return (
        <div className='land'>
            <img className="land-ground-img" src={Ground} alt='ground'/>
            <Canvas animal={worm} images={images} width={1280} height={720}/>
        </div>
    );
}

export default Land1;