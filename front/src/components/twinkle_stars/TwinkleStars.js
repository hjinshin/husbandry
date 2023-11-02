import React from 'react';
import './TwinkleStars.css'
function TwinkleStars(props) {
    const numStars = 50;

    function createRandomStar(key) {

        const delay = Math.random() * 4.5 + 0.5;     
        const x = Math.random() * 100 + 1 + '%';
        const y = Math.random() * 100 + 1 + '%';
        const size = Math.random() * 3 + 1;
    
        const style = {
            animation: `twinkle 2s infinite ${delay}s`, // 반짝이는 빈도 설정
            position: 'absolute',
        };
    
        return (
          <circle
            key={key}
            cx={x}
            cy={y}
            r={size}
            className='star'
            style={style}
          />
        );
      };
    
    const stars = Array.from({ length: numStars }, (_, i) => createRandomStar(i));

    return (
        <div className='twinkle-stars'>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                className="twinkling-stars" >
                {stars}
            </svg>
        </div>
    );
}

export default TwinkleStars;