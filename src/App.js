import React, { Component } from 'react';
import BlockView from './containers/BlockView';
import ShopView from './containers/ShopView';
import BlockchainInfo from './components/BlockchainInfo'
import StatusBar from './components/StatusBar';

class App extends Component {

  constructor(props){
    super(props)
    this.logic = this.props.logic;
    this.state = {
      logic: this.logic,
      textData: this.logic.currentTextData,
      user: this.logic.user, 
      block: this.logic.currentBlock,
      isModalOpen: true,
    }
  }

  startMine(){
    const block = document.querySelector('#block-view');
    const btn = document.querySelector('#mine-btn')
    const stateCallback = () => {
      this.setState({block: this.state.logic.currentBlock});
      this.setState({textData: this.state.logic.currentTextData})
    }
    this.state.logic.mineBlock(btn, stateCallback);
    block.classList.add('block-animation');
    setTimeout(()=>{block.classList.remove('block-animation')}, 500);
    
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

    return (
      <section id="main-view">
        <section id="block-game">
          <StatusBar user={this.state.user}/>
          <BlockView block={this.state.block}/>
          <ShopView isOpen={this.state.isModalOpen} userBuy={this.buyResource.bind(this)}
            resources={this.state.logic.resources}
            closeModal={this.closeModal.bind(this)}/>
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
