import React, {Component} from 'react';
import BlockView from './BlockView';
import StatusBar from './StatusBar';

class BlockStatus extends Component{

  constructor(props){
    super(props);
    this.state = {
      logic: props.logic,
      user: props.logic.user, 
      block: props.logic.currentBlock
    }
  }

  startMine(){
    const blockCopy = this.state.block;
    blockCopy.addToNonce();
    this.setState({block: blockCopy});
    console.log(this.state.logic.difficulty);
    console.log(this.state.block.hash)
    console.log(this.state.block.hash < this.state.logic.difficulty)
  }

  render(){
    return(
      <section id="block-game">
       <StatusBar user={this.state.user}/>
       <BlockView block={this.state.block}/>
       <button onClick={this.startMine.bind(this)}> Mine  </button>
       <button> Shop </button>
      </section>
      )
  }
}

export default BlockStatus;