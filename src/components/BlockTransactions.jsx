import React from 'react';

const BlockTransactions = (props) => {

  const transactions = props.transactions.map((trans, index) => {
      return(
          <li key="index">{trans}</li>
        )
  })


  return(
      <article id="block-transactions">
        <ul className="list">
          {transactions}
        </ul>
      </article>
    )
}

export default BlockTransactions;