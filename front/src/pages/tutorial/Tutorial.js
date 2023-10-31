import React from 'react';
import './Tutorial.css'
import TwinkleStars from '../../services/twinkle_stars/TwinkleStars';
import InputNickName from './inputNickName/InputNickName';
function Tutorial(props) {
    return (
        <div className='tutorial'>
            <TwinkleStars/>
            <p className='descript'>지구에 살고 있는 생명체는 비싼 가격에 거래됩니다.<br/><br/>
                                    지구 생명체들로 농장을 운영하여 큰 돈을 벌어보세요!
            </p>
            <InputNickName/>
        </div>
    );
}

export default Tutorial;