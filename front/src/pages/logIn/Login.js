import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { postLogin } from '../../APIs/postApi';
import ScaleUp from '../../components/animation/ScaleUp';
import FadeIn from '../../components/animation/FadeIn';
import'./LogIn.css';

function LogIn(props) {
    const navigate = useNavigate();
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const [valid, setValid] = useState(false);

    function handleIDChange(e) {
        setId(e.target.value);
    }
    function handlePWChange(e) {
        setPw(e.target.value);
    }
    async function handleSubmit(e) {
        e.preventDefault();
        const res = await postLogin(id, pw);
        if(res.success) {
            setValid(true);
            // 쿠키 저장
        } else {
            alert("잘못된 사용자명 및 비밀번호입니다.");
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
        <div className='login'>
            <button
                    className='back-button-login'
                    onClick={()=>{navigate('../');}}>                 
                </button>
            <FadeIn transition={{ duration: 0.8 }}>
                <p className='login-descript'>사업자명과 비밀번호를 입력해주세요.</p>
                <form className='login-box' onSubmit={handleSubmit}>
                    <label className='login-label'>사업자명</label>
                    <input
                        className='IDinputField'
                        type='text'
                        placeholder=''
                        spellCheck='false'
                        maxLength='20'
                        value={id} 
                        onChange={handleIDChange}/>
                    <label className='login-label'>비밀번호</label>
                    <input
                        className='PWinputField'
                        type='password'
                        placeholder=''
                        spellCheck='false'
                        maxLength='20'
                        value={pw} 
                        onChange={handlePWChange}/>
                        <button className='login-button'>
                            로그인
                        </button>
                </form>
            </FadeIn>

            {heartAnimation()}
        </div>
    );
}

export default LogIn;