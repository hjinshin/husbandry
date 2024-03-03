import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { nextDay } from '../../slices/userSlice';
import './Sleep.css'
import { useDispatch, useSelector } from 'react-redux';

function Sleep(props) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { day } = useSelector(state=>{return state.user});
    useEffect(()=> {
        props.setPrevLoc(false);  
        dispatch(nextDay());
        // 교배 결과 및 동물들 컨디션 결과 서버에서 가져오기
    },[props, dispatch]);

    useEffect(()=> {
        const timer = setTimeout(()=> {
            navigate('..');
        }, 2000);

        return () => clearTimeout(timer);
    }, [navigate]);

    
    return (
        <div className='sleep'>
            <p className='date'>{day}일차</p>
        </div>            
    );
}

export default Sleep;