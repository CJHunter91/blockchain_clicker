import React, {Component} from 'react';
import BlockAttr from '../components/BlockAttr';
import BlockTransactions from '../components/BlockTransactions';

class BlockView extends Component{

  render(){
    return(
      <article id="block-view">
        <BlockAttr/>
        <BlockTransactions/>
      </article>
      )
  }
}

export default BlockView;