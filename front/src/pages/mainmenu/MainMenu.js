import React from 'react';
import { Link } from 'react-router-dom';
import FadeIn from '../../components/animation/FadeIn';
import './MainMenu.css'

function MainMenu(props) {  
    return (
        <div>
            <FadeIn transition={{ duration: 0.8 }}>
                <p className='title'>축산</p>
                <div className='main-menu-button-container'>
                    <Link className='newgame' to={'/signup'}>
                        <button className='newgame-button'>처음부터</button>            
                    </Link>
                    <Link className='continue' to={'/login'}>
                        <button className={'continue-button'}>이어하기</button>            
                    </Link>                
                </div>
            </FadeIn>
        </div>
    );
}

export default MainMenu;