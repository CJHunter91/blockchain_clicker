import React from 'react';
import BlockAttr from '../components/BlockAttr';
import BlockTransactions from '../components/BlockTransactions';

const BlockView = (props) => {

    return(
      <article id="block-view">
        <BlockAttr block={props.block}/>
        <BlockTransactions transactions={props.block.transactions}/>
      </article>
      )
}

export default BlockView;