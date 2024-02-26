import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { postLogin } from '../../APIs/postApi';
import ScaleUp from '../../components/animation/ScaleUp';
import FadeIn from '../../components/animation/FadeIn';
import Heart from '../../images/heart.svg';
import Back_White from '../../images/back_white.png';
import Back_Gray from '../../images/back_gray.png';
import'./LogIn.css';

function LogIn(props) {
    const navigate = useNavigate();
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const [valid, setValid] = useState(false);
    const [isHover, setIsHover] = useState(false);

    function handleIDChange(e) {
        setId(e.target.value);
    }
    function handlePWChange(e) {
        setPw(e.target.value);
    }
    async function handleSubmit(e) {
        e.preventDefault();
        const res = await postLogin(id, pw);
        if(res.data.success) {
            setValid(true);
        } else {
            alert("잘못된 사용자명 및 비밀번호입니다.");
        }
    }

    function heartAnimation() {
        if(valid) {
            return(<ScaleUp img={Heart} redirectTo={'/game'}/>
            );
        } else {
            return(<></>);
        }
    }
    return (
        <div className='login'>
            <button
                    onMouseOver={()=>{setIsHover(true);}}
                    onMouseOut={()=>{setIsHover(false);}}
                    onClick={()=>{navigate('../');}}>
                    <img 
                        className='back-button' 
                        src={isHover ? Back_Gray:Back_White} alt='back' />                        
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