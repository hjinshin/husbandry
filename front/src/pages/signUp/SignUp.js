import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { postID, postpassWd } from '../../APIs/postApi';
import FadeIn from '../../components/animation/FadeIn';
import ScaleUp from '../../components/animation/ScaleUp';
import './SignUp.css';

function SignUp(props) {
    const navigate = useNavigate();
    const [id, setId] = useState('');
    const [passwd, setPasswd] = useState('');
    const [valid, setValid] = useState(false);
    const [passwdvalid, setPasswdValid] = useState(false);

    async function handleNickNameSubmit(e) {
        e.preventDefault();
        const res = await postID(id);
        checkNiickNmAvail(res.success);
        
    }
    async function handlePassWdSubmit(e) {
        e.preventDefault();
        // console.log(id, passwd);
        const res = await postpassWd(id, passwd);
        if(res.success) {
            setValid(true);
            // 쿠키 저장
        }
    }

    function handleInputChange(e) {
        const value = e.target.value;
        const filteredValue = value.replace(/[^0-9a-zA-Zㄱ-힣]/g, '');

        setId(filteredValue);
    }
    function handlePassWdChange(e) {
        setPasswd(e.target.value);
    }

    function checkNiickNmAvail(avail) {
        if(avail) {
            setPasswdValid(true);
            console.log("사용 가능한 사업자명입니다.")
        } else {
            alert("이미 사용중인 사업자명입니다.")
        }
    }

    function showPasswdBox() {
        if(passwdvalid) {
            return(
                <>
                    <p className='input-descript'>비밀번호 입력해주세요.</p>
                    <form onSubmit={handlePassWdSubmit}>
                        <input
                            className='inputField'
                            type="text"
                            placeholder=''
                            spellCheck='false'
                            maxLength='20'
                            value={passwd}
                            onChange={handlePassWdChange}
                        />  
                    </form>                 
                </>
 )
        } else {
            return( 
                <>
                    <p className='input-descript'>사업을 시작하려면 사업자명을 입력해주세요.</p>
                    <form onSubmit={handleNickNameSubmit}>
                        <input
                            className='inputField'
                            type="text"
                            placeholder=''
                            spellCheck='false'
                            maxLength='20'
                            value={id}
                            onChange={handleInputChange}
                        />  
                    </form>                 
                </>
            )
        }
    }

    function heartAnimation() {
        if(valid) {
            return(<ScaleUp img={'/images/heart.svg'} redirectTo={'/game'}/>
            );
        } else {
            return(<></>);
        }
    }
    return (
        <div>
            <FadeIn transition={{ duration: 0.8 }}>
                <button
                    className='back-button-signup'
                    onClick={()=>{navigate('../');}}>                      
                </button>
                <div className='descript-container'>
                    <p className='descript'>지구에 살고 있는 생명체들은 비싼 가격에 거래됩니다.<br/><br/>
                                            지구 생명체들로 농장을 운영하여 큰 돈을 벌어보세요!
                    </p>                
                </div>
                <div className='input-layout'>  
                    {showPasswdBox()}     
                </div>
            </FadeIn>

            {heartAnimation()}
        </div>
    );
}

export default SignUp;