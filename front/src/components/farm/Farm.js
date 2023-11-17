import React , {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { right, left } from '../../slices/farmSlice';
import { optionModal, buyModal } from '../../slices/settingSlice';
import ScaleDown from '../animation/ScaleDown';
import ScaleUp from '../animation/ScaleUp';
import Slide from '../animation/Slide';
import Heart from '../../images/heart.svg';
import {landlist} from './landList'
import ModalManager from '../modal/ModalManager';
import './Farm.css';

function Farm(props) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [dest, setDest] = useState("farm");
    const [valid, setValid] = useState(false);
    const {land, total_land } = useSelector(state=>{
        return state.farm;
    });

    useEffect(()=>{
        if(props.prevLoc === "signup" || props.prevLoc === "tamer" || props.prevLoc === "breeder") {
            setValid(true);
        }
        props.setPrevLoc("farm");
    }, [props]);

    useEffect(()=>{
        if(dest === "./sleep") {
            navigate("./sleep");
        }
    }, [dest, navigate]);

    function temp() {
        console.log("temp");
    }
    function goToTamer() {
        props.setDuration(0);
        setDest("./tamer");
    }    
    function goToBreeder() {
        props.setDuration(0);
        setDest("./breeder");
    }

    function goToSleep() {
        props.setDuration(1);
        setDest("./sleep")
    }

    function ScaleUpAnimation() {
        if(dest === "./tamer") {
            return(<ScaleUp img={Heart} redirectTo={'./tamer'}/>
            );
        } else if(dest === "./breeder") {
            return(<ScaleUp img={Heart} redirectTo={'./breeder'}/>
            );
        }else {
            return(<></>);
        }
    }    
    function ScaleDwAnimation() {
        if(valid) {
            return (<ScaleDown img={Heart} />);
        } else {
            return(<></>);
        }
    }

    function selectButton() {
        if(land === 0) {
            return (
                <>
                <button className='tamer-button' onClick={goToTamer}>조련사</button>
                <button className='breeder-button' onClick={goToBreeder}>육종가</button>
                <button className='sleep-button' onClick={goToSleep}>잠자기</button>  
                <button className='option-button' onClick={()=>dispatch(optionModal(true))}>옵션</button> 
                </>
            );
        } else {
            return (
                <>
                <button className='buy-button' onClick={()=>dispatch(buyModal(true))}>구입</button> 
                <button className='bring-button' onClick={temp}>가져오기</button> 
                </>
            )
        }
    }
     
    return (
        <div className='farm'>
            {ScaleDwAnimation()}
            <Slide components={landlist} />
            {ScaleUpAnimation()}
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

export default Farm;