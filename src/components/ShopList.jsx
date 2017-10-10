import React, {Component} from 'react';

class ShopList extends Component{

render(){

  const resources = this.props.resources.map((resource, index) => {
  return(
    <li key={index}>{resource.name} Cost: {resource.cost}
    <button key={index} onClick={() => { this.props.userBuy(resource) } } className="buttons">
    Buy
    </button>
    </li>
    )})

  if (this.props.isOpen === false)
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

 if (this.props.style) {
   for (let key in this.props.style) {
     modalStyle[key] = this.props.style[key]
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

 if (this.props.backdropStyle) {
   for (let key in this.props.backdropStyle) {
     backdropStyle[key] = this.props.backdropStyle[key]
   }
 }

 return(

  <article >
    <section id="shop-list" className="modal-content" style={modalStyle}>
    <span onClick={this.props.closeModal} className="close">&times;</span>
    <h4>Bits and Bytes Computer Shop</h4>
      <ul>
      {resources}
      </ul>
    </section>
    <div style={backdropStyle} onClick={e => this.close(e)}/>
  </article>
  )
}
close(e) {
 e.preventDefault()

 if (this.props.closeModal) {
   this.props.closeModal()
 }
}
}

export default ShopList;

