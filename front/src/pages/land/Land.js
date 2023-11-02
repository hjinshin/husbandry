import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { right, left } from '../../slices/farmSlice';
import Ground from '../../images/ground.png';
import './Land.css'

function Land(props) {
    const dispatch = useDispatch();
    const {land, total_land} = useSelector(state=>{
        return state.farm;
    })

    return (
        <div className='land'>
            <p>land</p>
            <p>{land}/{total_land}</p>
            <button onClick={()=>{dispatch(left());}}>&lt;</button>  
            <button onClick={()=>{dispatch(right());}}>&gt;</button>  
            <img className="ground-img" src={Ground} alt='ground'/>
        </div>
    );
}

export default Land;