import React from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import Canvas from '../../components/canvas/Canvas';
import Ground from '../../images/background/ground.png';
import Heart from '../../images/heart.svg';
import './Land.css'

function Land3(props) {
    const { info, value, img } = useSelector(state=>{
        return state.farm.landInfo[3];
    });
    
    function animalExist() {
        if(value && info) {
            if(info.state === "exist")
                return (<Canvas animal={value} images={img} width={1280} height={720}/>);
            else if(info.state === "mating")
                return(<img src={Heart} alt='mating' style={{position:"absolute", width:"150px", left:"565px", bottom:"110px"}}/>)
        } else
            return (<></>);
        
    }
    


    return (
        <div className='land'>
            <img className="land-ground-img" src={Ground} alt='ground'/>
            {animalExist()}           
        </div>
    );
}

export default Land3;