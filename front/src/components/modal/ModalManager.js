import React from 'react';
import ModalX from './ModalX';
import { useSelector } from 'react-redux';
import { optionModal } from '../../slices/farmSlice';

function ModalManager(props) {
    const { option } = useSelector(state=>{
        return state.farm;
    });

    function showModal() {
        if(option) {
            return( <ModalX setModal={optionModal}  />);
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