import React, { useState } from 'react';
import './InputNickName.css'

function InputNickName(props) {
    const [inputValue, setInputValue] = useState('');
    function handleInputChange(e) {
        const value = e.target.value;
        const filteredValue = value.replace(/[^0-9a-zA-Zㄱ-힣]/g, '');

        setInputValue(filteredValue);
    }
    return (
        <div className='input-container'>
            <p className='input-label'>사업을 시작하려면 사업자명을 적어주세요.</p>  
            <input
                className='inputField'
                type="text"
                placeholder=''
                spellCheck='false'
                maxLength='8'
                value={inputValue}
                onChange={handleInputChange}
            />            
        </div>
    );
}

export default InputNickName;
