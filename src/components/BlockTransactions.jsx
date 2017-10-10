import React from 'react';

const BlockTransactions = (props) => {

  var transactions = () => {
    return(
      <p>No Transactions</p>
      )
  }
  if(props.transactions.length >= 0){
    transactions = props.transactions.map((trans, index) => {
      return(
        <li key={index}>{trans}</li>
        )
    })
  }


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