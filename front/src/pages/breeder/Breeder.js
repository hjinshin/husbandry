import React, { useEffect, useState } from 'react';
import ScaleDown from '../../components/animation/ScaleDown';
import ScaleUp from '../../components/animation/ScaleUp';
import './Breeder.css';
import { useDispatch, useSelector } from 'react-redux';
import { breeding } from '../../slices/userSlice';

function Breeder(props) {
    const dispatch = useDispatch();
    const [goToFarm, setGoToFarm] = useState(false);
    const {mating} = useSelector(state=>{return state.farm});
    const {did_breed} = useSelector(state=>{return state.user});

    useEffect(()=> {
        props.setPrevLoc(true);
    },[props]);

    function sendBreedingInfo() {
        console.log("서버로 교배 정보 보내기");
        dispatch(breeding());
    }

    function checkNumOfAnimal(matingInfo) {
        if(did_breed) {
            return(
            <>
            <div className='breeder-container'>
                <p className='breeder-descript'>축하합니다. 동물들이 아기를 만들었습니다!
                    <br/><br/><br/> 내일부터 새 동물을 가져올 수 있습니다.
                </p>
            </div>
            <button style={{position:"absolute", top:"400px", width:"150px", height:"40px", backgroundColor:"rgb(242,127,122)", fontSize:"25px", cursor:"pointer"}}
                onClick={()=>{setGoToFarm(true);}}>돌아가기</button>  
            </>);
        } 
        else if(matingInfo.length < 2) {
            return(
                <>
                <div className='breeder-container'>
                    <p className='breeder-descript'>2마리의 동물을 보내주세요!</p>
                </div>
                <button style={{position:"absolute", top:"400px", width:"150px", height:"40px", backgroundColor:"rgb(242,127,122)", fontSize:"25px", cursor:"pointer"}}
                onClick={()=>{setGoToFarm(true);}}>돌아가기</button>  
                </>
);
        } else {
            return(
            <>
                <div className='breeder-container'>
                    <p className='breeder-descript'>아기를 보내주셔서 감사합니다! 교배를 시작할 준비가 되었어요.
                        <br/><br/><br/><br/>
                        시작하시겠습니까?
                    </p>
                </div>
                <button style={{position:"absolute", top:"400px", left:"400px", width:"150px", height:"40px", backgroundColor:"lightgreen", fontSize:"25px", cursor:"pointer"}}
                onClick={()=>{sendBreedingInfo();}}>네</button>
                <button style={{position:"absolute", top:"400px", right:"400px", width:"150px", height:"40px", backgroundColor:"rgb(242,127,122)", fontSize:"25px", cursor:"pointer"}}
                onClick={()=>{setGoToFarm(true);}}>아니오</button>            
            </>);
        }
    }

    return (
        <div className='breeder'>
            <button
                className='back-button-breeder'
                onClick={()=>{setGoToFarm(true);}}>                      
            </button>
            <ScaleDown img={'/images/heart.svg'} />
            {checkNumOfAnimal(mating)}
            {goToFarm && <ScaleUp img={'/images/heart.svg'} redirectTo={'..'}/>}
        </div>
    );
}

export default Breeder;