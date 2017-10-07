import React, {Component} from 'react';
import BlockView from './BlockView';
import StatusBar from './StatusBar';

class BlockStatus extends Component{

  constructor(props){
    super(props);
    this.state = {
      block: props.logic.currentBlock
    }
  }

  render(){
    return(
      <section id="block-game">
       <StatusBar/>
       <BlockView block={this.state.block}/>
       <button> Mine </button>
       <button> Shop </button>
      </section>
      )
  }
}

export default BlockStatus;