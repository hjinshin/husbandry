import React, { useEffect, useState } from 'react';
import ScaleDown from '../../components/animation/ScaleDown';
import ScaleUp from '../../components/animation/ScaleUp';

function Tamer(props) {
    const [goToFarm, setGoToFarm] = useState(false);

    useEffect(()=> {
        props.setPrevLoc(true);
    },[props]);

    return (
        <div>
            <ScaleDown img={'/images/heart.svg'} />
            조련사
            <button onClick={()=>setGoToFarm(true)} >farm</button>   
            {goToFarm && <ScaleUp img={'/images/heart.svg'} redirectTo={'..'}/>}
        </div>
    );
}

export default Tamer;