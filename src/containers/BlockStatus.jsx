import React, {Component} from 'react';
import BlockView from './BlockView';
import StatusBar from './StatusBar';

class BlockStatus extends Component{

  render(){
    return(
      <section id="block-game">
       <StatusBar/>
       <BlockView/>
       <button> Mine </button>
       <button> Shop </button>
      </section>
      )
  }
}

export default BlockStatus;