import React, { Component } from 'react';
import BlockchainInfo from './containers/BlockchainInfo'
import BlockView from './containers/BlockView';
import StatusBar from './containers/StatusBar';
import ShopView from './containers/ShopView';

class App extends Component {

  constructor(props){
    super(props)
    this.logic = this.props.logic;
    this.state = {
      logic: this.logic,
      textData: this.logic.currentTextData,
      user: this.logic.user, 
      block: this.logic.currentBlock,
      isModalOpen: false
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
      //load next information
      this.state.logic.loadNextText()
      this.setState({textData: this.state.logic.currentTextData})
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
    if(userCopy.buy(resource)){
      this.state.logic.processUserTransactions();
      this.setState({user: userCopy})
    }
    
  }

    openModal() {
      this.setState({ isModalOpen: true })
    }

    closeModal() {
      this.setState({ isModalOpen: false })
    }

  render() {

    // window.onclick = (e) =>{
    //  const modal = document.getElementById('shop-list');
    //  console.log(this.state.isModalOpen)
    //  if (this.state.isModalOpen && e.target !== modal) {
    //          this.closeModal()
    //      }
    // }

    return (
      <section id="main-view">
        <section id="block-game">
          <StatusBar user={this.state.user}/>
          <BlockView block={this.state.block}/>
          <ShopView isOpen={this.state.isModalOpen} userBuy={this.buyResource.bind(this)}
            resources={this.state.logic.resources}
            closeModal={this.closeModal.bind(this)} />
          <div id="buttons">
            <button id="mine-btn" onClick={this.startMine.bind(this)}> Mine  </button>
            <button id="shop-btn" onClick={this.openModal.bind(this)}> Shop </button>
          </div>
        </section>
        <BlockchainInfo textData={this.state.textData}/>
      </section>
    );
  }
}

export default App;
