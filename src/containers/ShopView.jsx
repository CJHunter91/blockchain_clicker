import React from 'react';

import Modal from '../components/Modal';
import './ShopView.css'

const ShopView = (props) => {

    const resources = props.resources.map((resource, index) => {
        return (
            <li className="shop-list-item" key={index}>{resource.name} Cost: {resource.cost} Power: {resource.multiplier}
                <button key={index} onClick={() => { props.userBuy(resource) }} className="buttons">
                    Buy
                </button>
            </li>
        )
    })

    if (props.isOpen === false)
        return null

    return (

        <Modal modalId="shop-list" closeModal={props.closeModal}>               
                <h4>Bits and Bytes Computer Shop</h4>
                <ul>
                    {resources}
                </ul>
        </Modal>
    )
}
export default ShopView;