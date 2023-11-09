import React, { useRef, useEffect, useState } from 'react';

import WormBody from '../../images/body.svg';
import WormHead from '../../images/head.svg';
import WormTail from '../../images/tail.svg';
import WormFleg from '../../images/f_leg.svg';
import WormBleg from '../../images/b_leg.svg';
import WormWing from '../../images/wing.svg';

function DrawAnimal(props) {
    const [height, setHeight] = useState(400);
    const [width, setWidth] = useState(400);
    const [style, setStyle] = useState({position: "absolute"})
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const animal = props.animal;
        const margin_top = Math.max(animal.h_tail, animal.h_head, animal.h_wing ? animal.h_wing/2 - animal.r:0);
        const margin_bot = Math.max(animal.h_b_leg?animal.h_b_leg:0, animal.h_f_leg?animal.h_f_leg:0);
        
        const height = margin_top + (margin_bot - animal.r > 0 ? margin_bot - animal.r : 0);
        const width = animal.w_tail + animal.w_body + animal.w_head - 2*animal.r;
        const style = {
            bottom: "90px",
            left: width,
            position: "absolute",
        };
        setStyle(style);
        setHeight(height);
        setWidth(width);

        const ctx = canvas.getContext('2d');

        const images = [new Image(), new Image(), new Image(), new Image(), new Image(), new Image()];

        images[0].src = WormBody;
        images[1].src = WormHead;
        images[2].src = WormTail;
        images[3].src = WormFleg;
        images[4].src = WormBleg;
        images[5].src = WormWing;
        // Ensure that all images are loaded
        let loadedImages = 0;
        images.forEach((image) => {
            image.onload = () => {
                loadedImages++;
                if (loadedImages === images.length) {
                    // All images have been loaded
                    // body
                    ctx.drawImage(images[0], animal.w_tail - animal.r,     // x
                                             margin_top - animal.h_body,   // y
                                             animal.w_body,                // width
                                             animal.h_body);               // height
                    // head
                    ctx.drawImage(images[1], animal.w_tail + animal.w_body - 2*animal.r, 
                                             margin_top - animal.h_head, 
                                             animal.w_head, 
                                             animal.h_head);
                    // tail
                    ctx.drawImage(images[2], 0, 
                                             margin_top - animal.h_tail, 
                                             animal.w_tail, 
                                             animal.h_tail);
                    // f_leg
                    ctx.drawImage(images[3], animal.w_tail + animal.w_body - 2*animal.r - animal.w_f_leg/2, 
                                             margin_top - animal.r, 
                                             animal.w_f_leg, 
                                             animal.h_f_leg);
                    // b_leg
                    ctx.drawImage(images[4], animal.w_tail - animal.w_b_leg/2,
                                             margin_top - animal.r, 
                                             animal.w_b_leg,
                                             animal.h_b_leg);
                    // wing
                    ctx.drawImage(images[5], animal.w_tail - animal.r + animal.w_body/2,
                                            margin_top - animal.r - animal.h_wing/2,
                                            animal.w_wing,
                                            animal.h_wing);       
                                                             
                    const combinedImage = canvas.toDataURL('image/png');
                    // console.log(combinedImage); // You can use this data URL as needed
                }
            };
        });
    }, [props.animal]);
  
    return (
        <canvas ref={canvasRef} width={width} height={height} style={style} ></canvas>
    );
}
  
  export default DrawAnimal;