import React from 'react';

const BlockTransactions = (props) => {

  const transactions = props.transactions.map((trans, index) => {
      return(
          <li key={index}>{trans}</li>
        )
  })


  return(
      <article id="block-transactions">
      <h4>Transactions</h4>
        <ul className="list">
          {transactions}
        </ul>
      </article>
    )
}

export default BlockTransactions;