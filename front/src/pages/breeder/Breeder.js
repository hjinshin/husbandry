import React, { useEffect, useState } from 'react';
import ScaleDown from '../../components/animation/ScaleDown';
import ScaleUp from '../../components/animation/ScaleUp';
import Heart from '../../images/heart.svg';

function Breeder(props) {
    const [goToFarm, setGoToFarm] = useState(false);

    useEffect(()=> {
        props.setPrevLoc("breeder");
    },[props]);
    function setPrevLoc() {
        setGoToFarm(true);
    }

    function heartAnimation() {
        if(goToFarm) {
            return (<ScaleUp img={Heart} redirectTo={'..'}/>)
        }
    }
    return (
        <div>
            <ScaleDown img={Heart} />
            육종가
            <button onClick={setPrevLoc} >farm</button>   
            {heartAnimation()}
        </div>
    );
}

export default Breeder;