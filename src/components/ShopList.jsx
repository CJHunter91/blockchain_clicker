import React from 'react';

const ShopList = (props) => {

  const resourceList= props.resources.map((resource) => {
    return(
      <li>{resource.name} Cost: {resource.cost}
      <button onClick={() => { props.userBuy(resource) } } className="buttons">
        Buy
      </button>
      </li>
      )
  })

    return(
        <div id="shop-list" class="modal-content">
          <span class="close">&times;</span>
          <ul>
          {resourceList}
          </ul>
        </div>
      )
}

export default ShopList;