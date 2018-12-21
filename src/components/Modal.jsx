import React from 'react';
import './Modal.css'

const Modal = (props) => {
 return (
    <React.Fragment>
        <section id={props.modalId} className="modal-content">
            <span id="close" onClick={props.closeModal} className="close">&times;</span>
            {props.children}
        </section>
            <div className="backdrop" onClick={e => props.closeModal(e)} />
    </React.Fragment>
 )   
}

export default Modal;