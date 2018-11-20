import React from 'react';
import './ShopView.css'

const ShopView = (props) => {

    const resources = props.resources.map((resource, index) => {
        return (
            <li key={index}>{resource.name} Cost: {resource.cost} Power: {resource.multiplier}
                <button key={index} onClick={() => { props.userBuy(resource) }} className="buttons">
                    Buy
                </button>
            </li>
        )
    })

    if (props.isOpen === false)
        return null

    return (

        <article >
            <section id="shop-list" className="modal-content">
                <span id="close" onClick={props.closeModal} className="close">&times;</span>
                <h4>Bits and Bytes Computer Shop</h4>
                <ul>
                    {resources}
                </ul>
            </section>
            <div className="backdrop" onClick={e => props.closeModal(e)} />
        </article>
    )
}
export default ShopView;