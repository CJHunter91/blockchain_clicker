import React, { Component } from 'react';
import BlockStatus from './containers/BlockStatus'
import BlockchainInfo from './containers/BlockchainInfo'

class App extends Component {

  constructor(){
    super()
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
