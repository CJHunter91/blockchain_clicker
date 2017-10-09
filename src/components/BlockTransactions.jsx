import React from 'react';

const BlockTransactions = (props) => {



  return(
      <ul id="block-transactions" className="list">
        <li>{props.transactions[0]}</li>
      </ul>
    )
}

export default BlockTransactions;