import React, { useEffect, useState } from 'react';
import ScaleDown from '../../components/animation/ScaleDown';
import ScaleUp from '../../components/animation/ScaleUp';
import Heart from '../../images/heart.svg';

function Breeder(props) {
    const [goToFarm, setGoToFarm] = useState(false);

    useEffect(()=> {
        props.setPrevLoc(true);
    },[props]);

    return (
        <div>
            <ScaleDown img={Heart} />
            육종가
            <button onClick={()=>setGoToFarm(true)} >farm</button>   
            {goToFarm && <ScaleUp img={Heart} redirectTo={'..'}/>}
        </div>
    );
}

export default Breeder;