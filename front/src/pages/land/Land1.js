import React, { useEffect } from 'react';
import Ground from '../../images/background/ground.png';
import Canvas from '../../components/canvas/Canvas';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { updateLand1 } from '../../slices/farmSlice';
import './Land.css'
import { useDispatch } from 'react-redux';

function Land1(props) {
    const dispatch = useDispatch();
    const { value, img } = useSelector(state=>{
        return state.farm.land1;
    });

    useEffect(()=> {
        dispatch(updateLand1({
            w: 0.8,
            height: 50,
            width: 215,
            price: 20,            
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
        }));
    }, []);
    
    function animalExist() {
        if(value) 
            return (<Canvas animal={value} images={img} width={1280} height={720}/>);
        else
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