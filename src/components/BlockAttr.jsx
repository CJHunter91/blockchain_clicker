import React from 'react';

const BlockAttr = (props) => {
  return(
    <ul id="block-attr" className="list">
      <li></li>
      <li>Hash: {props.block.hash}</li>
      <li>Prev Hash: {props.block.prevHash}</li>
      <li>Nonce: {props.block.nonce}</li>
    </ul>
    )
}

export default BlockAttr;