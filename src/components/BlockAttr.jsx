import React from 'react';

const BlockAttr = (props) => {
  return(
    <ul id="block-attr" className="list">
      <li>Prev Hash:  {props.block.attributes[1]}</li>
      <li>Difficulty: {props.block.attributes[2]}</li>
      <li>Hash:       {props.block.attributes[0]}</li>
      <li>Nonce:      {props.block.nonce}</li>
    </ul>
    )
}

export default BlockAttr;