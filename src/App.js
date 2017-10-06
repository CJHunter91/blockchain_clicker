import React, { Component } from 'react';
import StatusBar from './containers/StatusBar'
import BlockView from './containers/BlockView'
import BlockchainInfo from './containers/BlockchainInfo'

class App extends Component {
  render() {
    return (
      <section>
        <StatusBar/>
        <BlockView/>
        <BlockchainInfo/>
      </section>
    );
  }
}

export default App;
