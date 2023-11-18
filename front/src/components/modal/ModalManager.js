import React from 'react';
import Modal from './Modal';
import { useSelector, useDispatch } from 'react-redux';
import { optionModal, buyModal, matingModal } from '../../slices/settingSlice';
import { matingAnimal} from '../../slices/farmSlice';
import { bgmRaise, bgmLower, sfxRaise, sfxLower } from '../../slices/settingSlice';
import './Modal.css';

function ModalManager(props) {
    const dispatch = useDispatch();
    const { bgm, sfx, option_modal, buy_modal, mating_modal } = useSelector(state=>{return state.setting});
    const { land, mating } = useSelector(state=>{return state.farm});

    const optionTemplate = (
        <Modal style={{width: "400px", height: "300px"}}>
            <button className="modalCloseBtn" onClick={()=>dispatch(optionModal())}>✖</button>
            <p style={{fontSize:"30px"}}>옵션</p>
            <div>
                <button className="modalDefaultBtn" onClick={()=>dispatch(bgmRaise())}
                    style={{ top:"100px", left:"30px", width:"30px", height:"30px", fontSize:"20px", backgroundColor:"lightgreen"}}>&lt;</button>
                <p style={{position:"absolute", top:"106px", left:"75px", fontSize:"18px", fontWeight:"bold"}}>배경음</p>
                <p style={{position:"absolute", top:"106px", right:"75px", fontSize:"18px", fontWeight:"bold"}}>{bgm}%</p>
                <button className="modalDefaultBtn" onClick={()=>dispatch(bgmLower())}
                    style={{ top:"100px", right:"30px", width:"30px", height:"30px", fontSize:"20px", backgroundColor:"lightgreen"}}>&gt;</button>                    
            </div>
            <div>
                <button className="modalDefaultBtn" onClick={()=>dispatch(sfxRaise())}
                    style={{ top:"160px", left:"30px", width:"30px", height:"30px", fontSize:"20px", backgroundColor:"lightgreen"}}>&lt;</button>
                <p style={{position:"absolute", top:"166px", left:"75px", fontSize:"18px", fontWeight:"bold"}}>효과음</p>
                <p style={{position:"absolute", top:"166px", right:"75px", fontSize:"18px", fontWeight:"bold"}}>{sfx}%</p>
                <button className="modalDefaultBtn" onClick={()=>dispatch(sfxLower())}
                    style={{ top:"160px", right:"30px", width:"30px", height:"30px", fontSize:"20px", backgroundColor:"lightgreen"}}>&gt;</button>                     
            </div>
            <button className="modalDefaultBtn" onClick={()=>{dispatch(optionModal())}}
                style={{top:"220px", height:"40px", left:"125px", width:"150px", fontSize:"18px", fontWeight:"bold", backgroundColor:"lightgray"}}>저장</button>
        </Modal>
    );
    const buyTemplate = (
        <Modal style={{top:"120px", width:"800px", height:"500px"}}>
            <button className="modalCloseBtn" onClick={()=>dispatch(buyModal())}>✖</button>
        </Modal>
    );

    const matingTemplate = (
        <Modal style={{width:"400px", height:"200px"}}>
            <p style={{width:"300px",right:"50px",top:"30px",position:"absolute", fontSize:"30px"}}>이 동물을 육종가에게 보내시겠습니까?</p>
            {(mating.length < 2) && 
                <><button className="modalDefaultBtn" onClick={()=>{dispatch(matingAnimal(land));dispatch(matingModal());}}
                    style={{width:"120px",height:"50px",position:"absolute",top:"120px", left:"50px", backgroundColor:"lightgreen"}}>네</button> 
                <button className="modalDefaultBtn" onClick={()=>dispatch(matingModal())}
                    style={{width:"120px",height:"50px",position:"absolute",top:"120px", right:"50px", backgroundColor:"rgb(242,127,122)"}}>아니오</button></>}
            {(mating.length >= 2) && 
            <button className="modalDefaultBtn" onClick={()=>dispatch(matingModal())}
                    style={{width:"180px",height:"50px",position:"absolute",top:"120px", left:"110px", backgroundColor:"rgb(242,127,122)"}}>아니오</button>}        
            
            <button className="modalCloseBtn" onClick={()=>dispatch(matingModal())}>✖</button>
             
        </Modal>
    );

    function showModal() {
        // 옵션 모달
        if(option_modal) {
            return optionTemplate;
        } else if(buy_modal) {
            return buyTemplate;
        } else if(mating_modal) {
            return matingTemplate;
        }
        return <></>;
    }
    return (
        <div>
            {showModal()}
        </div>
    );
}

export default ModalManager;