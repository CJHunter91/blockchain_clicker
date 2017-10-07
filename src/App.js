import React, { Component } from 'react';
import BlockStatus from './containers/BlockStatus'
import BlockchainInfo from './containers/BlockchainInfo'
import MiningLogic from './models/MiningLogic'

class App extends Component {

  constructor(){
    super()
    this.logic = new MiningLogic();
    this.state = {
    }
  }
  render() {
    return (
      <section id="main-view">
        <BlockStatus/>
        <BlockchainInfo/>
      </section>
    );
  }
}

export default App;
