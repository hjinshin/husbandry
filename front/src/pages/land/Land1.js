import React from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import Canvas from '../../components/canvas/Canvas';
import './Land.css';

function Land1(props) {
    const { info, value, img } = useSelector(state=>{
        return state.farm.landInfo[props.landKey];
    });
    
    function animalExist() {
        if(value && info) {
            if(info.state === "exist")
                return (<Canvas animal={value} images={img} width={1280} height={720}/>);
            else if(info.state === "mating")
                return(<img src={'/images/heart.svg'} alt='mating' style={{position:"absolute", width:"150px", left:"565px", bottom:"110px"}}/>)
        } else
            return (<></>);
        
    }
    


    return (
        <div className='land'>
            <img className="land-ground-img" src={'/images/background/ground.png'} alt='ground'/>
            {animalExist()}           
        </div>
    );
}

export default Land1;