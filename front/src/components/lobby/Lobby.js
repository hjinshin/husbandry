import React, { useEffect, useState } from 'react';
import { Routes, Route  } from 'react-router-dom';
import axios from "axios";
import MainMenu from '../../pages/mainmenu/MainMenu';
import Farm from '../../pages/farm/Farm';
import './Lobby.css'

const SERVER_SEARCH_URL = 'http://localhost:8080';
function Lobby(props) {
    const [exist, setExist] = useState(false);
    useEffect(()=> {
        async function configClient() {
            await axios({
                method: "GET",
                url: SERVER_SEARCH_URL + '/api/exist'
            }).then((res) => {
                console.log(res.data);
            })
        };
        configClient();
    },[]);
    return (
        <div className='lobby'>
            <Routes>
                <Route path='/*' element={<MainMenu exist={exist}/>} />   
                <Route path='/farm' element={<Farm />} />
            </Routes>    
        </div>

    );
}

export default Lobby;