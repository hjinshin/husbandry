import React , {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { right, left, teleport, playWithAnimal, feedAnimal, cleanAnimal, updateNickName } from '../../slices/farmSlice';
import { optionModal, buyModal, matingModal, sellModal } from '../../slices/settingSlice';
import ScaleDown from '../animation/ScaleDown';
import ScaleUp from '../animation/ScaleUp';
import Slide from '../animation/Slide';
import Heart from '../../images/heart.svg';
import Pen from '../../images/pen.png';
import Lock from '../../images/lock.png';
import Health from '../../images/info/health.png';
import Enjoy from '../../images/info/enjoy.png';
import Feed from '../../images/info/feed.png';
import Clean from '../../images/info/clean.png';
import {landlist} from '../../pages/land/landList'
import ModalManager from '../modal/ModalManager';
import './Farm.css';

function Farm(props) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [dest, setDest] = useState("farm");
    const [valid, setValid] = useState(false);
    const {land, total_land, landInfo, owned_land } = useSelector(state=>{return state.farm});
    const { money } = useSelector(state=>{return state.user}); 

    useEffect(()=>{
        if(props.prevLoc) {
            setValid(true);
        }
        props.setPrevLoc(false);
    }, [props]);
    useEffect(()=>{
        if(dest === "sleep") {
            navigate("./sleep");
        }
    }, [dest, navigate]);

    function temp() {
        console.log("temp");
    }
    function goTo(dur, des) {
        props.setDuration(dur);
        setDest(des);
    }    
    function scaleUpAnimation() {
        if(dest === "tamer") {
            return(<ScaleUp img={Heart} redirectTo={'./tamer'}/>
            );
        } else if(dest === "breeder") {
            return(<ScaleUp img={Heart} redirectTo={'./breeder'}/>
            );
        }else {
            return(<></>);
        }
    }    
    function scaleDwAnimation() {
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
                <button className='tamer-button' onClick={()=>goTo(0, 'tamer')}>조련사</button>
                <button className='breeder-button' onClick={()=>goTo(0, 'breeder')}>육종가</button>
                <button className='sleep-button' onClick={()=>goTo(1, 'sleep')}>잠자기</button>  
                <button className='option-button' onClick={()=>dispatch(optionModal())}>옵션</button> 
                </>
            );
        } else if(land > owned_land) {
            return (
                <></>
            )
        } else if(landInfo[land]?.value === null) {
            return (
                <>
                <button className='buy-button' onClick={()=>dispatch(buyModal())}>구입</button> 
                <button className='bring-button' onClick={temp}>가져오기</button> 
                </>
            )
        } else {
            return (
                <>
                <input className='input-name' type='text' value={landInfo[land]?.info?.nickname} 
                        onChange={(e)=>dispatch(updateNickName({index:land, nickname:e.target.value}))} />
                <img src={Pen} alt='pen' style={{position:"absolute",height:"15px", right:"50px", top:"104px"}}/>
                <button className='farmDefaultBtn' style={{left:"50px"}} onClick={()=>dispatch(playWithAnimal(land))}>놀이</button>
                <button className='farmDefaultBtn' style={{left:"200px"}} onClick={()=>dispatch(feedAnimal(land))}>먹이</button>
                <button className='farmDefaultBtn' style={{left:"350px"}} onClick={()=>dispatch(cleanAnimal(land))}>정리</button>
                <button className='farmDefaultBtn' style={{right:"350px"}} onClick={()=>dispatch(sellModal())}>판매</button>
                <button className='farmDefaultBtn' style={{right:"200px"}} onClick={()=>dispatch(matingModal())}>교배</button>
                <button className='farmDefaultBtn' style={{right:"50px"}}>정보</button>
                </>
            )
        }
    }
    function animal_info(info) {
        console.log(info);
        return (
            <>
            {info ? 
            (<><div style={{position:"absolute", top:"100px", left:"50px", backgroundColor:"white", width:"250px", height:"153px", border:"2px solid"}}>
                <div style={{height:"30px", display:"flex", width:"230px", marginLeft:"10px", marginTop:"5px", alignItems:"center"}}>
                    <img src={Health} alt='health' style={{width:"23px", height:"23px"}}/>
                    <div style={{width:`${info.health*38}px`, height:"15px", backgroundColor:`${info.health === 5 ? 'lightgreen':'rgb(241,207,109)'}`, border:"2px solid", marginLeft:"10px"}}/>                   
                    <div style={{width:`${(5-info.health)*38}px`, height:"15px", backgroundColor:"lightgray", borderTop:`${info.health === 5 ? 0:2}px solid`, borderBottom:`${info.health === 5 ? 0:2}px solid`, borderRight:`${info.health === 5 ? 0:2}px solid`}}/>                   
                </div>
                <div style={{height:"30px", display:"flex", width:"230px", marginLeft:"10px", marginTop:"5px", alignItems:"center"}}>
                    <img src={Enjoy} alt='enjoy' style={{width:"23px", height:"23px"}}/>
                    <div style={{width:`${info.enjoy*38}px`, height:"15px", backgroundColor:`${info.enjoy === 5 ? 'lightgreen':'rgb(241,207,109)'}`, border:"2px solid", marginLeft:"10px"}}/>                   
                    <div style={{width:`${(5-info.enjoy)*38}px`, height:"15px", backgroundColor:"lightgray", borderTop:`${info.enjoy === 5 ? 0:2}px solid`, borderBottom:`${info.enjoy === 5 ? '0':'2'}px solid`, borderRight:`${info.enjoy === 5 ? 0:2}px solid`}}/>   
                </div>
                <div style={{height:"30px", display:"flex", width:"230px", marginLeft:"10px", marginTop:"5px", alignItems:"center"}}>
                    <img src={Feed} alt='feed' style={{width:"23px", height:"23px"}}/>
                    <div style={{width:`${info.feed*38}px`, height:"15px", backgroundColor:`${info.feed === 5 ? 'lightgreen':'rgb(241,207,109)'}`, border:"2px solid", marginLeft:"10px"}}/>                   
                    <div style={{width:`${(5-info.feed)*38}px`, height:"15px", backgroundColor:"lightgray", borderTop:`${info.feed === 5 ? 0:2}px solid`, borderBottom:`${info.feed === 5 ? 0:2}px solid`, borderRight:`${info.feed === 5 ? 0:2}px solid`}}/>   
                </div>
                <div style={{height:"30px", display:"flex", width:"230px", marginLeft:"10px", marginTop:"5px", alignItems:"center"}}>
                    <img src={Clean} alt='clean' style={{width:"23px", height:"23px"}}/>
                    <div style={{width:`${info.clean*38}px`, height:"15px", backgroundColor:`${info.clean === 5 ? 'lightgreen':'rgb(241,207,109)'}`, border:"2px solid", marginLeft:"10px"}}/>                   
                    <div style={{width:`${(5-info.clean)*38}px`, height:"15px", backgroundColor:"lightgray", borderTop:`${info.clean === 5 ? 0:2}px solid`, borderBottom:`${info.clean === 5 ? 0:2}px solid`, borderRight:`${info.clean === 5 ? 0:2}px solid`}}/>   
                </div>
            </div>
            <div style={{position:"absolute", top:"270px", left:"50px", backgroundColor:"white", width:"250px", height:"60px", border:"2px solid", fontSize:"15px", fontWeight:"bold"}}>
                <div style={{position:"relative", display:"flex", top:"8px", left:"10px", width:"230px"}}><div style={{position:"relative", width:"30px"}}>나이</div><div style={{position:"relative", width:"100px", textAlign:"right", marginLeft:"90px"}}>{info.age}</div></div>
                <div style={{position:"relative", display:"flex", top:"15px", left:"10px", width:"230px"}}><div style={{position:"relative", width:"30px"}}>가치</div><div style={{position:"relative", width:"100px", textAlign:"right", marginLeft:"90px"}}>₩{info.price}</div></div>
                </div></>)
            :   <></>}       
            </>
        )
    }
    function landNav() {
        const landNavBtn = Array.from({length:20}, (_, index) => index+1);
        const btnRows = [];
        for(let i=0; i < landNavBtn.length; i += 5) {
            btnRows.push(landNavBtn.slice(i, i+5));
        }
        return(
            <>
            {btnRows.map((row, rowIndex) => (
                <div key={rowIndex}>
                    {row.map((num) => (
                        (owned_land < num) ?
                           (<button className='land-list-nav-btn' id={num} key={num}><img src={Lock} style={{width:"12px", height:"12px"}} alt='lock'/></button>)
                        : (<button className='land-list-nav-btn' id={num}  key={num}
                                    onClick={(e)=>dispatch(teleport(parseInt(e.target.id)))}>{num}</button>)
                    ))}                    
                </div>
            ))}

            </>
        )
    }
     
    return (
        <div className='farm'>
            {scaleDwAnimation()}
            {scaleUpAnimation()}
            <Slide components={landlist} />
            <ModalManager />
            <div className='balance-land-container'>
                <p className='balance'>₩{money}</p>
                <p className='land-num'>{land}/{total_land}</p>
            </div>
            <button className='prev-button' onClick={()=>dispatch(left())}>&lt;</button>  
            <button className='next-button' onClick={()=>dispatch(right())}>&gt;</button> 
            {animal_info(landInfo[land]?.info)}
            <div className='land-list-nav'>
                <div className='land-list-nav-title'>토지</div>
                {landNav()}
            </div>
            {selectButton()}
        </div>
    );
}

export default Farm;