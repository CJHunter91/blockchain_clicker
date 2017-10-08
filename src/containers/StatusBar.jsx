import React, {Component} from 'react';
import StatusList from '../components/StatusList';

class StatusBar extends Component{

  render(){
    return(
        <article id="status" className="status">
          <StatusList user={this.props.user} />
        </article>
      )
  }
}

export default StatusBar;