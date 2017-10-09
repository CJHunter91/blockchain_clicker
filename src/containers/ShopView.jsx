import React from 'react';
import ShopList from '../components/ShopList';

const ShopView = (props) => {

    return(
          <ShopList isOpen={props.isOpen} closeModal={props.closeModal} userBuy={props.userBuy} resources={props.resources}/>
      )
}

export default ShopView;