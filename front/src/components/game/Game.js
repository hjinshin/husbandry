import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { right, left, optionModal } from '../../slices/farmSlice';
import ScaleDown from '../animation/ScaleDown';
import Slide from '../animation/Slide';
import Heart from '../../images/heart.png';
import {landlist} from './landList'
import './Game.css';
import ModalManager from '../modal/ModalManager';

function Game(props) {
    const dispatch = useDispatch();
    const {land, total_land } = useSelector(state=>{
        return state.farm;
    });

    function temp() {
        console.log("temp");
    }

    function selectButton() {
        if(land === 0) {
            return (
                <>
                <button className='tamer-button' onClick={temp}>조련사</button>
                <button className='breeder-button' onClick={temp}>사육사</button>
                <button className='sleep-button' onClick={temp}>잠자기</button>  
                <button className='option-button' onClick={()=>dispatch(optionModal(true))}>옵션</button> 
                </>
            );
        } else {
            return (
                <>
                <button className='buy-button' onClick={temp}>구입</button> 
                <button className='bring-button' onClick={temp}>가져오기</button> 
                </>
            )
        }
    }
     
    return (
        <div className='game'>
            <ScaleDown img={Heart} />
            <Slide components={landlist} />
            <ModalManager />
            <div className='balance-land-container'>
                <p className='balance'>₩500</p>
                <p className='land-num'>{land}/{total_land}</p>
            </div>
            <button className='prev-button' onClick={()=>dispatch(left())}>&lt;</button>  
            <button className='next-button' onClick={()=>dispatch(right())}>&gt;</button> 
            {selectButton()}
        </div>
    );
}

export default Game;