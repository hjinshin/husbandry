import React from 'react';
import Modal from './Modal';
import { useSelector, useDispatch } from 'react-redux';
import { optionModal, buyModal, matingModal, sellModal } from '../../slices/settingSlice';
import { bgmRaise, bgmLower, sfxRaise, sfxLower } from '../../slices/settingSlice';
import { updateAnimalValue, updateAnimalInfo, emptyLandByNum, matingAnimal, cancelMatingAnimal } from '../../slices/farmSlice';
import { addMoney, subMoney } from '../../slices/userSlice';
import { animalValueObjMap, animalValueList } from '../../data/animalValueObjMap';
import { animalImageList } from '../../data/animalImgObjMap';
import { animalInfoList } from '../../data/animalInfoObjList';
import './Modal.css';

function ModalManager(props) {
    const dispatch = useDispatch();
    const { bgm, sfx, option_modal, buy_modal, mating_modal, sell_modal } = useSelector(state=>{return state.setting});
    const { land, mating, landInfo } = useSelector(state=>{return state.farm});
    const { owned_animal, animal_list } = useSelector(state=>{return state.user});

    function animalUnlock(num) {
        if(owned_animal[num]) {
            return (<div style={{width:"100px", height:"150px", margin:"10px"}}>
                        <div style={{width:"100px", height:"115px", display:"flex", justifyContent:"center", alignItems:"center"}}>
                            <img src={animalImageList[num]} alt='worm' width={80}/>
                        </div>
                        <button className='modalBuyBtn' id={num} onClick={buy}>₩{animalValueObjMap[animal_list[num]].price}</button>
                    </div>)
        }
        else {
            return <div style={{backgroundColor:"lightgray", width:"100px", height:"150px", margin:"10px", display:"flex", justifyContent:"center", alignItems:"center", fontSize:"25px", fontWeight:"bold"}}>?</div>
        }            
    }
    function buy(e) {
        dispatch(updateAnimalValue({animalValue:animalValueList[e.target.id],index:land}))
        dispatch(updateAnimalInfo({animalInfo:animalInfoList[e.target.id],index:land}))
        dispatch(subMoney(animalValueObjMap[animal_list[e.target.id]].price))
        dispatch(buyModal());
    }
    function sell() {
        dispatch(addMoney(landInfo[land].info.price));
        dispatch(emptyLandByNum(land));    
        dispatch(sellModal());    
    }

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
        <Modal style={{top:"120px", width:"550px", height:"500px"}}>
            <button className="modalCloseBtn" onClick={()=>dispatch(buyModal())}>✖</button>
            <div>
                <p style={{marginTop:"20px",fontSize:"20px"}}>일반적인 동물</p>
                <div style={{display:"flex", margin:"10px"}}>
                    {animalUnlock(0)}
                    {animalUnlock(1)}
                    {animalUnlock(2)}
                    {animalUnlock(3)}
                </div>
                <div style={{display:"flex", margin:"10px"}}>
                    {animalUnlock(4)}
                    {animalUnlock(5)}
                    {animalUnlock(6)}
                    {animalUnlock(7)}
                </div>                
            </div>

        </Modal>
    );
    const cancelMatingTemplate = (
        <Modal style={{width:"400px", height:"200px"}}>
            <p style={{width:"300px",right:"50px",top:"30px",position:"absolute", fontSize:"28px"}}>이 동물의 교배를 취소하시겠습니까?</p>
            <div>
                <button className="modalDefaultBtn" onClick={()=>{dispatch(cancelMatingAnimal(land));dispatch(matingModal());}}
                    style={{width:"120px",height:"50px",position:"absolute",top:"120px", left:"50px", backgroundColor:"lightgreen"}}>네</button> 
                <button className="modalDefaultBtn" onClick={()=>dispatch(matingModal())}
                    style={{width:"120px",height:"50px",position:"absolute",top:"120px", right:"50px", backgroundColor:"rgb(242,127,122)"}}>아니오</button>
            </div>
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
        </Modal>
    );
    const sellTemplate = (
        <Modal style={{width:"400px", height:"200px"}}>
            {(landInfo[land]?.info?.state === "exist") ? <>            
            <p style={{width:"300px",right:"50px",top:"30px",position:"absolute", fontSize:"30px"}}>이 동물을 판매하시겠습니까?</p>
            <div>
                <button className="modalDefaultBtn" onClick={()=>sell()}
                    style={{width:"120px",height:"50px",position:"absolute",top:"120px", left:"50px", backgroundColor:"lightgreen"}}>네</button> 
                <button className="modalDefaultBtn" onClick={()=>dispatch(sellModal())}
                    style={{width:"120px",height:"50px",position:"absolute",top:"120px", right:"50px", backgroundColor:"rgb(242,127,122)"}}>아니오</button>
            </div></> :
            <><p style={{width:"300px",right:"50px",top:"30px",position:"absolute", fontSize:"28px"}}>교배 중인 동물은 판매할 수 없습니다.</p>
            <button className="modalDefaultBtn" onClick={()=>dispatch(sellModal())}
                    style={{width:"180px",height:"50px",position:"absolute",top:"120px", left:"110px", backgroundColor:"rgb(242,127,122)"}}>확인</button>
                    </>
            }

        </Modal>
    )

    function showModal() {
        // 옵션 모달
        if(option_modal) {
            return optionTemplate;
        } else if(buy_modal) {
            return buyTemplate;
        } else if(mating_modal) {
            if(landInfo[land].info.state === "mating")      return cancelMatingTemplate;
            else                                            return matingTemplate;
        } else if(sell_modal) {
            return sellTemplate;
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