import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCheckCookie } from '../../slices/validSlice';
import FadeIn from '../../components/animation/FadeIn';
import './MainMenu.css'

function MainMenu(props) {  
    const dispatch = useDispatch();
    dispatch(fetchCheckCookie()); 
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