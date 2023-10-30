import { React } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import './MainMenu.css'

const SERVER_SEARCH_URL = 'http://localhost:8080';

function MainMenu(props) {   
    const numStars = 50;

    function createRandomStar(key) {

        const delay = Math.random() * 4.5 + 0.5;     
        const x = Math.random() * 100 + 1 + '%';
        const y = Math.random() * 100 + 1 + '%';
        const size = Math.random() * 3 + 1;
    
        const style = {
            animation: `twinkle 2s infinite ${delay}s`, // 반짝이는 빈도 설정
            position: 'absolute',
        };
    
        return (
          <circle
            key={key}
            cx={x}
            cy={y}
            r={size}
            className='star'
            style={style}
          />
        );
      };
    
    const stars = Array.from({ length: numStars }, (_, i) => createRandomStar(i));

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
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                className="twinkling-stars" >
                {stars}
            </svg>
            <p className='title'>축산</p>
            <div className='main-menu-button-container'>
                <Link className='newgame' to={'/farm'}>
                    <button className='newgame-button' onClick={startNewGame}>처음부터</button>            
                </Link>
                <Link className='continue' to={'/farm'}>
                    <button className='continue-button' onClick={loadMyGame}>이어하기</button>            
                </Link>                
            </div>
        </div>
    );
}

export default MainMenu;