import React from 'react';
import { useDispatch } from 'react-redux';
import './Modal.css';


function ModalX(props) {
    const dispatch = useDispatch();

    return (
        <div className="modal">
            <div className="modalBody" onClick={(e) => e.stopPropagation()}>
                <button id="modalCloseBtn" onClick={()=>dispatch(props.setModal(false))}>
                ✖
                </button>
                {props.children}
            </div>
        </div>
    );
}

export default ModalX;