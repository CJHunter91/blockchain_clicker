import React, {Component} from 'react';
import BlockAttr from '../components/BlockAttr';
import BlockTransactions from '../components/BlockTransactions';

class BlockView extends Component{

  constructor(props){
    super(props);
    this.state = {
      block: props.block,
      transactions: props.block.transactions
    }
  }

  render(){
    return(
      <article id="block-view">
        <BlockAttr block={this.state.block}/>
        <BlockTransactions/>
      </article>
      )
  }
}

export default BlockView;