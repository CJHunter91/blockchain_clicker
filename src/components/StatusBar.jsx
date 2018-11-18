import React from 'react';

const StatusBar = (props) => {
  return (
    <article id="status" className="status">
      <ul id="status-list" className="list">
        <li>Coin:<span id="coin"> {props.user.coin}</span></li>
        <li>Power: {props.user.power}</li>
      </ul>
    </article>
  )
}

export default StatusBar;