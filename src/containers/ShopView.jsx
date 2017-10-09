import React from 'react';
import ShopList from '../components/ShopList';

const ShopView = (props) => {

    return(
        <article id="shop-view" className="shop-modal">
          <ShopList isOpen={props.isOpen} closeModal={props.closeModal} userBuy={props.userBuy} resources={props.resources}/>
        </article>
      )
}

export default ShopView;