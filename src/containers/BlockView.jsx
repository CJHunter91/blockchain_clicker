import React, {Component} from 'react';

class BlockView extends Component{

  render(){
    return(
        <ul>
          <li>Block#</li>
          <li>Hash:</li>
          <li>Prev Hash:</li>
          <li>Nonce:</li>
        </ul>
      )
  }
}

export default BlockView;