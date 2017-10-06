import React, {Component} from 'react';
import StatusList from '../components/StatusList';

class StatusBar extends Component{

  render(){
    return(
        <section id="status-section" className="status">
          <StatusList />
        </section>
      )
  }
}

export default StatusBar;