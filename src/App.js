import React, { Component } from 'react';
import StatusBar from './containers/StatusBar'
import BlockView from './containers/BlockView'

class App extends Component {
  render() {
    return (
      <section>
        <StatusBar/>
        <BlockView/>
      </section>
    );
  }
}

export default App;
