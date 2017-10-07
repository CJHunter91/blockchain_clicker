import React, { Component } from 'react';
import BlockStatus from './containers/BlockStatus'
import BlockchainInfo from './containers/BlockchainInfo'
import MiningLogic from './models/MiningLogic'

class App extends Component {

  constructor(){
    super()
    this.logic = new MiningLogic();
    this.state = {
      logic: this.logic
    }
  }
  render() {
    return (
      <section id="main-view">
        <BlockStatus logic={this.state.logic}/>
        <BlockchainInfo/>
      </section>
    );
  }
}

export default App;
