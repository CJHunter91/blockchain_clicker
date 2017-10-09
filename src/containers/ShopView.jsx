import React from 'react';
import ShopList from '../components/ShopList';

const ShopView = (props) => {

    return(
        <article id="shop-view" className="shop">
          <ShopList userBuy={props.userBuy} resources={props.resources}/>
        </article>
      )
}

export default ShopView;