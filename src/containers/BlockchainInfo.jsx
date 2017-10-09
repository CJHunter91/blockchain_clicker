import React, {Component} from 'react';
import BlockchainText from '../components/BlockchainText'

class BlockchainInfo extends Component{

  render(){
    return(
      <article id="blockchain-info">
        <BlockchainText textData={this.props.textData}/>
      </article>
      )
  }
}

export default BlockchainInfo;