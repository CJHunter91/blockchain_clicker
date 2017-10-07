import React, {Component} from 'react';
import BlockchainText from '../components/BlockchainText'

class BlockchainInfo extends Component{

  render(){
    return(
      <article id="blockchain-info">
        <BlockchainText text={this.props.text}/>
      </article>
      )
  }
}

export default BlockchainInfo;