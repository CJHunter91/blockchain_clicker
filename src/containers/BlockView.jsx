import React from 'react';
import BlockAttr from '../components/BlockAttr';
import BlockTransactions from '../components/BlockTransactions';
import './BlockView.css';

const BlockView = (props) => {

    return(
      <article id="block-view">
        <h4>Block# {props.block.number}</h4>
        <BlockAttr block={props.block}/>
        <BlockTransactions transactions={props.block.transactions}/>
      </article>
      )
}

export default BlockView;