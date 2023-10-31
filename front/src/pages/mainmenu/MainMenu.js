import { React, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import './MainMenu.css'
import TwinkleStars from '../../services/twinkle_stars/TwinkleStars';

const SERVER_SEARCH_URL = 'http://localhost:8080';

function MainMenu(props) {   
    const [exist, setExist] = useState(false);

    useEffect(() => {
        setExist(props.exist);
    }, [props]);

    async function loadMyGame() {
        await axios({
            method: "GET",
            url: SERVER_SEARCH_URL + `/api/test`,
            params: {
                "message": "hello back",
            },
        }).then((res) => {
            console.log(res);
        });
    }
    async function startNewGame() {
        await axios({
            method: "GET",
            url: SERVER_SEARCH_URL + `/api/test`,
            params: {
                "message": "hello back",
            },
        }).then((res) => {
            console.log(res);
        });
    }

    return (
        <div className='main-menu'>
            <TwinkleStars/>
            <p className='title'>축산</p>
            <div className='main-menu-button-container'>
                <Link className='newgame' to={'/tutorial'}>
                    <button className='newgame-button' onClick={startNewGame}>처음부터</button>            
                </Link>
                <Link className='continue' to={'/farm'}>
                    <button className={`continue-button ${exist ? 'true' : 'false'}`} onClick={loadMyGame}>이어하기</button>            
                </Link>                
            </div>
        </div>
    );
}

export default MainMenu;