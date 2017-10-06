import React, { Component } from 'react';
import StatusBar from './containers/StatusBar'
import BlockView from './containers/BlockView'
import BlockchainInfo from './containers/BlockchainInfo'

class App extends Component {
  render() {
    return (
      <section id="main-view">
        <StatusBar/>
        <BlockView/>
        <button> Mine </button>
        <button> Shop </button>
        <BlockchainInfo/>
      </section>
    );
  }
}

export default App;
