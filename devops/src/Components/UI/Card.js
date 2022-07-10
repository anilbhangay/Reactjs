import React from 'react';

import './Card.css';

const Card = (props) => {
  const purchase = 'card' + props.className;

    return <div className={purchase}>{props.children} </div> 

}

export default Card;