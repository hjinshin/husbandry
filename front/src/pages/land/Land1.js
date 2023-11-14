import React from 'react';
import Ground from '../../images/background/ground.png';
import Canvas from '../../components/canvas/Canvas';
import './Land.css'

import Body from '../../images/body.png';
import Head from '../../images/head.png';
import Tail from '../../images/tail.png';
import Bleg from '../../images/b_leg.png';
import Wing from '../../images/wing.png';

import Body_border from '../../images/body_border.png';
import Head_border from '../../images/head_border.png';
import Tail_border from '../../images/tail_border.png';
import Bleg_border from '../../images/b_leg_border.png';
import Wing_border from '../../images/wing_border.png';


function Land1(props) {
    const w = 1.5;
    const chicken = {
        height: 119*w,
        width: 100*w,
        h_head: -94*w,
        w_head: 50*w,
        h_body: 50*w,
        w_body: 50*w,
        h_tail: -82*w,
        w_tail: 50*w,
        h_f_leg: 0*w,
        w_f_leg: 0*w,
        h_b_leg: 50*w,
        w_b_leg: 20*w,
        h_wing: 40*w,
        w_wing: 64*w,
        r: 25*w,
        color: "invert(38%) sepia(70%) saturate(2034%) hue-rotate(166deg) brightness(102%) contrast(103%)",
    };
    const worm = {
        height: 50*w,
        width: 215*w,
        h_head: 50*w,
        w_head: 70*w,
        h_body: 50*w,
        w_body: 125*w,
        h_tail: 50*w,
        w_tail: 70*w,
        h_f_leg: 0*w,
        w_f_leg: 0*w,
        h_b_leg: 0*w,
        w_b_leg: 0*w,
        h_wing: 0*w,
        w_wing: 4*w,
        r: 25*w,
        color: "invert(38%) sepia(70%) saturate(2034%) hue-rotate(166deg) brightness(102%) contrast(103%)",
    };
    
    const images = [new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), 
                    new Image(), new Image(), new Image(), new Image(), new Image(), new Image()];
    images[0].src = Body;
    images[1].src = Head;
    images[2].src = Tail;
    images[3].src = '';
    images[4].src = Bleg;
    images[5].src = Wing;
    images[6].src = Body_border;
    images[7].src = Head_border;
    images[8].src = Tail_border;
    images[9].src = '';
    images[10].src = Bleg_border;
    images[11].src = Wing_border;


    return (
        <div className='land'>
            <img className="land-ground-img" src={Ground} alt='ground'/>
            <Canvas animal={chicken} images={images} width={1280} height={720}/>
            
        </div>
    );
}

export default Land1;