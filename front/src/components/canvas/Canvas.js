import React, { useState, useEffect, useRef } from 'react';
import draw from './draw';

function Canvas(props) {
    const { animal, images, ...rest } = props;
    const [isAnimationRunning, setIsAnimationRunning] = useState(true);
    const canvasRef = useRef(null);
    const startTimeRef = useRef(null);

    // 애니메이션
    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let x = 1280/2;
        let y = 640 - animal.h_body - ((animal.h_f_leg) > 0 || (animal.h_b_leg > 0) ? (Math.max(animal.h_f_leg, animal.h_b_leg) - animal.h_body/2) : 0);
        let angle = 0;
        let animationId;
        let x_direction = 1;
        let y_direction = -1;
        let angleCycle = 1;

        function animate(timestamp) {
            if (!startTimeRef.current) {
                startTimeRef.current = timestamp;
            }
            const progress = timestamp - startTimeRef.current;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            const canvasWidth = canvas.width;

            if(x + animal.width/2 > canvasWidth)   x_direction = -1;
            if(x - animal.width/2  < 0)            x_direction = 1;   
            if(angle > 5)                          angleCycle = -1;
            if(angle < -5)                         angleCycle = 1;   
            if(y < 640 - animal.height*2)          y_direction = 1; 
            if(y > 640 - animal.height)            y_direction = -1; 

            // 애니메이션
            x += (2 * progress) / 100 * x_direction; // 0.1초에 2 이동     
            if(true) {
                // strolling
                angle += (5 * progress) / 1000 * angleCycle;
            } else {
                // flying
                y += (5 * progress) / 100 * y_direction;
            }

            if (progress >= 100) {
                startTimeRef.current = timestamp;
            }                

            draw(ctx, animal, images, x, y, x_direction, angle);
            animationId = requestAnimationFrame(animate);
        };
        if (isAnimationRunning) {
            animationId = requestAnimationFrame(animate);
        }


        return () => {
            startTimeRef.current = null;
            cancelAnimationFrame(animationId);
          };
    }, [animal, images, isAnimationRunning]);

    useEffect(() => {
        const handleVisibilityChange = () => {
          // 브라우저가 활성화되었을 때(isAnimationRunning이 true)만 스크롤 이벤트를 감지
          if (document.visibilityState === 'visible') {
            setIsAnimationRunning(true);
          } else {
            setIsAnimationRunning(false);
          }
        };
    
        // visibilitychange 이벤트 리스너 등록
        document.addEventListener('visibilitychange', handleVisibilityChange);
    
        // 컴포넌트 언마운트 시 이벤트 리스너 제거
        return () => {
          document.removeEventListener('visibilitychange', handleVisibilityChange);
        };
      }, []);

    return (
    <div style={{position:'absolute'}}>    
            <canvas ref={canvasRef} {...rest} />
    </div>
    );
}

export default Canvas;