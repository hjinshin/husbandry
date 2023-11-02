import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { postNickNm } from '../../APIs/postApi';
import './SignUp.css'
function SignUp(props) {
    const [nickNm, setNickNm] = useState('');
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        const res = await postNickNm(nickNm);
        //console.log(res.data);
        checkNiickNmAvail(res.data);
        
    }

    function handleInputChange(e) {
        const value = e.target.value;
        const filteredValue = value.replace(/[^0-9a-zA-Zㄱ-힣]/g, '');

        setNickNm(filteredValue);
    }

    function checkNiickNmAvail(avail) {
        if(avail) {
            const redirectTo = '/game';
            navigate(redirectTo);
        } else {
            alert("유효하지 않은 이름입니다.")
        }
    }
    return (
        <div className='tutorial'>
            <div className='descript-container'>
                <p className='descript'>지구에 살고 있는 생명체들은 비싼 가격에 거래됩니다.<br/><br/>
                                        지구 생명체들로 농장을 운영하여 큰 돈을 벌어보세요!
                </p>                
            </div>
            <div className='input-layout'>
                <p className='input-descript'>사업을 시작하려면 사업자명을 적어주세요.</p>  
                <form onSubmit={handleSubmit}>
                    <input
                        className='inputField'
                        type="text"
                        placeholder=''
                        spellCheck='false'
                        maxLength='20'
                        value={nickNm}
                        onChange={handleInputChange}
                        onSubmit={handleSubmit}
                    />      
                </form>      
            </div>
        </div>
    );
}

export default SignUp;