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

  if (props.isOpen === false)
   return null
 let modalStyle = {
   position: 'absolute',
   top: '50%',
   left: '50%',
   height: '50%',
   width: '50%',
   transform: 'translate(-50%, -50%)',
   zIndex: '9999',
   background: '#fff'
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

 return(
    <article id="shop-list" className="modal-content" style={modalStyle}>
    <span onClick={props.closeModal} className="close">&times;</span>
    <ul>
    {resourceList}
    </ul>
    </article>
  )
}

export default ShopList;