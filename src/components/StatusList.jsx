import React from 'react';

const StatusList = (props) => {
  return(
    <ul id="status-list" className="list">
      <li>Coin:<span id="coin"> {props.user.coin}</span></li>
      <li>Power: {props.user.power}</li>
    </ul>
    )
}

export default StatusList;