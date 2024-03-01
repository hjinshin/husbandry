import React, { useState } from 'react';
import Modal from './Modal';
import { useSelector, useDispatch } from 'react-redux';
import { optionModal, buyModal, matingModal, sellModal, tamerModal, tamerFillOutModal, tamerDrawResultModal, tamerPovertyModal } from '../../slices/settingSlice';
import { bgmRaise, bgmLower, sfxRaise, sfxLower } from '../../slices/settingSlice';
import { updateAnimalValue, updateAnimalInfo, emptyLandByNum, matingAnimal, cancelMatingAnimal } from '../../slices/farmSlice';
import { addMoney, subMoney, getAnimal } from '../../slices/userSlice';
import { animalValueObjMap, animalValueList } from '../../data/animalValueObjMap';
import { animalImageList } from '../../data/animalImgObjMap';
import { animalInfoList } from '../../data/animalInfoObjList';
import './Modal.css';

function ModalManager(props) {
    const dispatch = useDispatch();
    const { bgm, sfx, option_modal, buy_modal, mating_modal, sell_modal } = useSelector(state=>{return state.setting});
    const { tamer_normal_modal, tamer_unnormal_modal, tamer_rare_modal, tamer_legendary_modal, tamer_draw_result_modal, tamer_fillout_modal, tamer_poverty_modal } = useSelector(state=>{return state.setting});
    const { land, mating, landInfo } = useSelector(state=>{return state.farm});
    const { money, owned_animal, animal_list } = useSelector(state=>{return state.user});
    const [drawResultNum, SetDrawResultNum] = useState(0);

    function buy(e) {
        const num = e.target.id;
        if(money >= animalValueObjMap[animal_list[num]].price) {
            dispatch(updateAnimalValue({animalValue:animalValueList[num],index:land}))
            dispatch(updateAnimalInfo({animalInfo:animalInfoList[num],index:land}))
            dispatch(subMoney(animalValueObjMap[animal_list[num]].price))
            dispatch(buyModal());
        }
    };
    function sell() {
        dispatch(addMoney(landInfo[land].info.price));
        dispatch(emptyLandByNum(land));    
        dispatch(sellModal());    
    };
    function animalUnlock(num) {
        if(owned_animal[num]) {
            return (<div style={{width:"100px", height:"150px", margin:"10px"}}>
                        <div style={{width:"100px", height:"115px",justifyContent:"center", alignItems:"center"}}>
                            <img src={animalImageList[num]} alt='animal' width={80} height={90}/>
                            <p>{animalValueObjMap[animal_list[num]].korean_name}</p>
                        </div>
                        <button className={`modalBuyBtn ${(animalValueObjMap[animal_list[num]].price>money) ? 'false':'true'}`} id={num} onClick={buy}>₩{animalValueObjMap[animal_list[num]].price}</button>
                    </div>)
        }
        else {
            return <div style={{backgroundColor:"lightgray", width:"100px", height:"150px", margin:"10px", display:"flex", justifyContent:"center", alignItems:"center", fontSize:"25px", fontWeight:"bold"}}>?</div>
        }            
    };
    function animalDraw(option, amount) {
        dispatch(tamerModal(option));
        if(money < amount) {
            return dispatch(tamerPovertyModal());
        }
        // 서버에 동물 뽑기 요청
        const res = true;
        const res_num = 1;
        SetDrawResultNum(res_num);

        if(res) {
            dispatch(subMoney(amount));
            dispatch(getAnimal(res_num));
            return dispatch(tamerDrawResultModal());
        } else {
            return dispatch(tamerFillOutModal());
        }
    };
    function tamerTemplate() {
        if(tamer_normal_modal) {
            return(
                <Modal style={{width:"440px", height:"200px"}}>
                    <p style={{width:"340px",right:"50px",top:"30px",position:"absolute", fontSize:"26px"}}>₩100으로 일반적인 동물을 무작위로 뽑으시겠습니까?</p>
                    <button className="modalDefaultBtn" onClick={()=>animalDraw(1, 100)}
                            style={{width:"120px",height:"50px",position:"absolute",top:"120px", left:"50px", backgroundColor:"lightgreen"}}>네</button> 
                    <button className="modalDefaultBtn" onClick={()=>dispatch(tamerModal(1))}
                        style={{width:"120px",height:"50px",position:"absolute",top:"120px", right:"50px", backgroundColor:"rgb(242,127,122)"}}>아니오</button>
                </Modal>
            )            
        } else if(tamer_unnormal_modal) {
            return(
                <Modal style={{width:"440px", height:"200px"}}>
                    <p style={{width:"340px",right:"50px",top:"30px",position:"absolute", fontSize:"26px"}}>₩1,000으로 일반적인 동물을 무작위로 뽑으시겠습니까?</p>
                    <button className="modalDefaultBtn" onClick={()=>animalDraw(2, 1000)}
                            style={{width:"120px",height:"50px",position:"absolute",top:"120px", left:"50px", backgroundColor:"lightgreen"}}>네</button> 
                    <button className="modalDefaultBtn" onClick={()=>dispatch(tamerModal(2))}
                        style={{width:"120px",height:"50px",position:"absolute",top:"120px", right:"50px", backgroundColor:"rgb(242,127,122)"}}>아니오</button>
                </Modal>
            )            
        }  else if(tamer_rare_modal) {
            return(
                <Modal style={{width:"440px", height:"200px"}}>
                    <p style={{width:"340px",right:"50px",top:"30px",position:"absolute", fontSize:"26px"}}>₩10,000으로 일반적인 동물을 무작위로 뽑으시겠습니까?</p>
                    <button className="modalDefaultBtn" onClick={()=>animalDraw(3, 10000)}
                            style={{width:"120px",height:"50px",position:"absolute",top:"120px", left:"50px", backgroundColor:"lightgreen"}}>네</button> 
                    <button className="modalDefaultBtn" onClick={()=>dispatch(tamerModal(3))}
                        style={{width:"120px",height:"50px",position:"absolute",top:"120px", right:"50px", backgroundColor:"rgb(242,127,122)"}}>아니오</button>
                </Modal>
            )            
        }  else if(tamer_legendary_modal) {
            return(
                <Modal style={{width:"440px", height:"200px"}}>
                    <p style={{width:"340px",right:"50px",top:"30px",position:"absolute", fontSize:"26px"}}>₩100,000으로 일반적인 동물을 무작위로 뽑으시겠습니까?</p>
                    <button className="modalDefaultBtn" onClick={()=>animalDraw(4, 100000)}
                            style={{width:"120px",height:"50px",position:"absolute",top:"120px", left:"50px", backgroundColor:"lightgreen"}}>네</button> 
                    <button className="modalDefaultBtn" onClick={()=>dispatch(tamerModal(4))}
                        style={{width:"120px",height:"50px",position:"absolute",top:"120px", right:"50px", backgroundColor:"rgb(242,127,122)"}}>아니오</button>
                </Modal>
            )            
        }

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
    );
    const tamerDrawResultTemplate = (
        <Modal style={{width:"400px", height:"310px"}}>
            <div style={{position:"absolute", width:"100px", height:"115px", left:"150px",justifyContent:"center", alignItems:"center"}}>
                            <img src={animalImageList[drawResultNum]} alt='animal' width={80} height={90}/>
                            <p style={{margin:"5px", fontSize:"23px", fontWeight:"bold"}}>{animalValueObjMap[animal_list[drawResultNum]].korean_name}</p>
                        </div>
            <p style={{width:"300px",right:"50px",top:"160px",position:"absolute", fontSize:"25px"}}>이제 목장에서 이 동물을 구입할 수 있습니다.</p>
            <button className="modalDefaultBtn" onClick={()=>{dispatch(tamerDrawResultModal()); }}
                style={{width:"120px",height:"50px",position:"absolute",top:"230px", left:"140px", backgroundColor:"lightgreen"}}>확인</button> 
        </Modal>              
    );
    const tamerFillOutTemplate = (
        <Modal style={{width:"400px", height:"200px"}}>
            <p style={{width:"300px",right:"50px",top:"30px",position:"absolute", fontSize:"25px"}}>모든 동물을 소유하고 있습니다.</p>
            <button className="modalDefaultBtn" onClick={()=>dispatch(tamerFillOutModal())}
                style={{width:"120px",height:"50px",position:"absolute",top:"120px", left:"140px", backgroundColor:"lightgreen"}}>확인</button> 
        </Modal>
    );
    const tamerPovertyTemplate = (
        <Modal style={{width:"400px", height:"200px"}}>
            <p style={{width:"300px",right:"50px",top:"30px",position:"absolute", fontSize:"25px"}}>소지금이 부족합니다.</p>
            <button className="modalDefaultBtn" onClick={()=>dispatch(tamerPovertyModal())}
                style={{width:"120px",height:"50px",position:"absolute",top:"120px", left:"140px", backgroundColor:"lightgreen"}}>확인</button> 
        </Modal>
    );

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
        } else if(tamer_normal_modal || tamer_unnormal_modal || tamer_rare_modal || tamer_legendary_modal) {
            return tamerTemplate();
        } else if(tamer_draw_result_modal) {
            return tamerDrawResultTemplate;
        } else if(tamer_fillout_modal) {
            return tamerFillOutTemplate;
        } else if(tamer_poverty_modal) {
            return tamerPovertyTemplate;
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