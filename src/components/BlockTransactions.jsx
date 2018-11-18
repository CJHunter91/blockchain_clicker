import React from 'react';

const BlockTransactions = (props) => {

  const transactions = () => {
    return (
      <ul className="list">
        {props.transactions.map((transaction, index) => {
          return (
            <li key={index}>{transaction}</li>
          )
        })
        }
      </ul>
    )
  }

  return (
    <article id="block-transactions">
      <h4>Transactions</h4>
      {props.transactions.length > 0 ? transactions() : <p>No previous transactions</p>}
    </article>
  )
}

export default BlockTransactions;