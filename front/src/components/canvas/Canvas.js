import React, { useEffect, useRef } from 'react';
import draw from './draw';

function Canvas(props) {
    const { animal, images, ...rest } = props;
    const canvasRef = useRef(null);
    const startTimeRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let x = (1280 - animal.width)/2;
        let y = 640-animal.height;
        let angle = 0;
        let animationId;
        let x_direction = 1;
        let y_direction = -1;
        let angleCycle = 1;
        let cnt = 0;

        function animate(timestamp) {
            if (!startTimeRef.current) {
                startTimeRef.current = timestamp;
            }
            const progress = timestamp - startTimeRef.current;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            const canvasWidth = canvas.width;

            if(x + animal.width > canvasWidth)     x_direction = -1;
            if(x  < 0)                             x_direction = 1;   
            if(angle > 5)                          angleCycle = -1;
            if(angle < -5)                         angleCycle = 1;   
            if(y < 640 - animal.height*2)          y_direction = 1; 
            if(y > 640 - animal.height)            y_direction = -1; 

            x += (2 * progress) / 100 * x_direction; // 0.1초에 2 이동     

            if(true) {
                // strolling
                angle += (5 * progress) / 1000 * angleCycle;
            } else {
                // flying
                y += (5 * progress) / 100 * y_direction;
            }

            if (progress >= 100) {
                cnt ++;
                startTimeRef.current = timestamp;
            }
            draw(ctx, animal, images, x, y, x_direction, angle);
            animationId = requestAnimationFrame(animate);
        };

        animationId = requestAnimationFrame(animate);
        return () => {
            startTimeRef.current = null;
            cancelAnimationFrame(animationId);
          };
    }, [animal, images]);

    return (
    <div style={{position:'absolute'}}>    
            <canvas ref={canvasRef} {...rest} />
    </div>
    );
}

export default Canvas;