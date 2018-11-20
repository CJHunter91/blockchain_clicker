import React from 'react';
import './ShopView.css'

const ShopView = (props) => {

    const resources = props.resources.map((resource, index) => {
        return (
            <li key={index}>{resource.name} Cost: {resource.cost}
                <button key={index} onClick={() => { props.userBuy(resource) }} className="buttons">
                    Buy
    </button>
            </li>
        )
    })

    if (props.isOpen === false)
        return null

    let modalStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        height: '80%',
        width: '80%',
        transform: 'translate(-50%, -50%)',
        zIndex: '9999',
        background: '#9ad3de',
        borderRadius: '10px',
        border: 'solid white 2px'
    }

    if (props.style) {
        for (let key in props.style) {
            modalStyle[key] = props.style[key]
        }
    }

    let backdropStyle = {
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: '0px',
        left: '0px',
        zIndex: '9998',
        background: 'rgba(0, 0, 0, 0.3)'
    }

    if (props.backdropStyle) {
        for (let key in props.backdropStyle) {
            backdropStyle[key] = props.backdropStyle[key]
        }
    }

    return (

        <article >
            <section id="shop-list" className="modal-content" style={modalStyle}>
                <span id="close" onClick={props.closeModal} className="close">&times;</span>
                <h4>Bits and Bytes Computer Shop</h4>
                <ul>
                    {resources}
                </ul>
            </section>
            <div style={backdropStyle} onClick={e => props.closeModal(e)} />
        </article>
    )
}
export default ShopView;