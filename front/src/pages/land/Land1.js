import React, { useEffect } from 'react';
import Ground from '../../images/background/ground.png';
import Canvas from '../../components/canvas/Canvas';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { updateAnimalValue, updateAnimalInfo } from '../../slices/farmSlice';
import Heart from '../../images/heart.svg';
import './Land.css'
import { useDispatch } from 'react-redux';

function Land1(props) {
    const dispatch = useDispatch();
    const { info, value, img } = useSelector(state=>{
        return state.farm.landInfo[1];
    });

    useEffect(()=> {
        const animalValue = {
            w: 0.8,
            height: 50,
            width: 215,       
            color: "worm",
            h_head: "worm",
            w_head: "worm",
            h_body: "worm",
            w_body: "worm",
            h_tail: "worm",
            w_tail: "worm",
            h_f_leg: "worm",
            w_f_leg: "worm",
            h_b_leg: "worm",
            w_b_leg: "worm",
            h_wing: "worm",
            w_wing: "worm",
            r: "worm",
        };
        const animalInfo = {price:20, name:"말랑이", state: "exist", health:5, enjoy:4, feed:4, clean:4};
        dispatch(updateAnimalValue({animalValue:animalValue, index:1}));
        dispatch(updateAnimalInfo({animalInfo:animalInfo, index:1}));

    }, [dispatch]);
    
    function animalExist() {
        //console.log(info)
        //console.log(value)
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

export default Land1;