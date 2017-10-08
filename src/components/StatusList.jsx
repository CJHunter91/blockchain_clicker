import React from 'react';

const StatusList = (props) => {
  return(
    <ul id="status-list" className="list">
      <li>Coin: {props.user.coin}</li>
      <li>Power: {props.user.power}</li>
    </ul>
    )
}

export default StatusList;