import React from 'react';
import './Modal.css';


function Modal(props) {

    return (
        <div className="modal">
            <div className="modalBody" style={props.style} onClick={(e) => e.stopPropagation()}>
                {props.children}
            </div>
        </div>
    );
}

export default Modal;