import React, {Component} from 'react';
import BlockView from './BlockView';
import StatusBar from './StatusBar';
import ShopView from './ShopView';

class BlockStatus extends Component{

  constructor(props){
    super(props);
    this.state = {
      logic: props.logic,
      user: props.logic.user, 
      block: props.logic.currentBlock
    }
  }

  startMine(){
    var blockCopy = this.state.block;
    blockCopy.addToNonce();
    if(this.state.logic.rewardUser()){
      this.state.logic.loadNextBlock()
      blockCopy = this.state.logic.currentBlock;
      const btn = document.querySelector('#mine-btn')
      btn.disabled = true;
      setTimeout(() => { btn.disabled = false }, 2000);
    }
    this.setState({block: blockCopy});
    console.log(this.state.logic.difficulty);
    console.log(this.state.block.hash)
    console.log(this.state.block.hash < this.state.logic.difficulty)
  }

  buyResource(resource){
    var userCopy = this.state.user;
    console.log(userCopy, this, resource)
    userCopy.buy(resource);
    this.setState({user: userCopy})
  }

  render(){
    return(
      <section id="block-game">
        <StatusBar user={this.state.user}/>
        <BlockView block={this.state.block}/>
        <ShopView userBuy={this.buyResource.bind(this)} resources={this.state.logic.resources} />
        <div id="buttons">
          <button id="mine-btn" onClick={this.startMine.bind(this)}> Mine  </button>
          <button id="shop-btn"> Shop </button>
        </div>
      </section>
      )
  }
}

export default BlockStatus;