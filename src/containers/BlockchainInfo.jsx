import React, {Component} from 'react';
import BlockchainText from '../components/BlockchainText'

class BlockchainInfo extends Component{

  render(){
    return(
      <article id="blockchain-info">
        <h4>Information</h4>
        <BlockchainText textData={this.props.textData}/>
      </article>
      )
  }
}

export default BlockchainInfo;