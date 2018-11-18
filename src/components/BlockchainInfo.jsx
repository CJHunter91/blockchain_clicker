import React from 'react';
import './BlockchainInfo.css';

const BlockchainInfo = (props) => {

    return(
      <article id="blockchain-info">
        <h4>Information</h4>
        <p id="blockchain-text"> {props.textData.text}</p>
      </article>
      )
  }

export default BlockchainInfo;