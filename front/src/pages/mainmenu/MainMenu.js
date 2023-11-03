import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import FadeIn from '../../components/animation/FadeIn';
import './MainMenu.css'

function MainMenu(props) {   
    const avail = useSelector(state => {
        //console.log(state.valid.avail);
        return state.valid.cookie;
    }); 

    return (
        <div className='main-menu'>
            <FadeIn>
                <p className='title'>축산</p>
                <div className='main-menu-button-container'>
                    <Link className='newgame' to={'/signup'}>
                        <button className='newgame-button'>처음부터</button>            
                    </Link>
                    <Link className='continue' to={'/game'}>
                        <button className={`continue-button ${ avail ? 'true' : 'false'}`}>이어하기</button>            
                    </Link>                
                </div>
            </FadeIn>
        </div>
    );
}

export default MainMenu;