import React from 'react';

const BlockTransactions = (props) => {

  const transactions = props.transactions.map((trans, index) => {
      return(
          <li key="index">{trans}</li>
        )
  })


  return(
      <ul id="block-transactions" className="list">
        {transactions}
      </ul>
    )
}

export default BlockTransactions;