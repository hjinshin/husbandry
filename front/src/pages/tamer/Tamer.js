import React, { useEffect, useState } from 'react';
import { tamerModal } from '../../slices/settingSlice';
import { useDispatch, useSelector } from 'react-redux';
import ModalManager from '../../components/modal/ModalManager';
import ScaleDown from '../../components/animation/ScaleDown';
import ScaleUp from '../../components/animation/ScaleUp';
import './Tamer.css';

function Tamer(props) {
    const dispatch = useDispatch();
    const [goToFarm, setGoToFarm] = useState(false);
    const { money } = useSelector(state=>{return state.user});

    useEffect(()=> {
        props.setPrevLoc(true);
    },[props]);

    return (
        <div className='tamer'>
            <ModalManager/>
             <button
                className='back-button-tamer'
                onClick={()=>{setGoToFarm(true);}}>                      
            </button>
            <ScaleDown img={'/images/heart.svg'} />
            <p style={{position:"absolute", top:"30px" , left:"140px", width:"1000px",fontSize:"35px", fontWeight:"bold", userSelect:"none"}}>₩{money}</p>

            조련사
            <div className='tamer-container'>
                <p className='tamer-descript'>어서오세요!<br/><br/> 여기에서 지구의 모든 동물을 찾을 수 있습니다.<br/><br/><br/>무엇을 가져올까요?</p>
            </div>
            <button className='normal-animal-btn'
                onClick={()=>{dispatch(tamerModal(1));}}>일반적인 동물</button>
            <button className='unnormal-animal-btn'
                onClick={()=>{dispatch(tamerModal(2));}}>평범하지 않은 동물 (준비중)</button>
            <button className='rare-animal-btn'
                onClick={()=>{dispatch(tamerModal(3));}}>희귀한 동물 (준비중)</button>
            <button className='legendary-animal-btn'
                onClick={()=>{dispatch(tamerModal(4));}}>전설적인 동물 (준비중)</button>
            {goToFarm && <ScaleUp img={'/images/heart.svg'} redirectTo={'..'}/>}
        </div>
    );
}

export default Tamer;