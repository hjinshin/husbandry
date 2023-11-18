import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Sleep.css'

function Sleep(props) {
    const navigate = useNavigate();
    useEffect(()=> {
        props.setPrevLoc(false);        
    },[props]);


    // 글씨 popUp하고 transition={{ duration: 0.5, onComplete:() => { navigate("../farm") } }} 
    return (
        <div className='sleep'>
            <p className='date'>1일차</p>
            <button onClick={()=>navigate('..')} >farm</button>                    
        </div>            
    );
}

export default Sleep;