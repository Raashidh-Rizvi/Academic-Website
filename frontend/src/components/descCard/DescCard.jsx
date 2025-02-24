import React from 'react';
import './DescCard.css';

const DescCard = ({props}) => {
  return (
    <div className='desc-wrapper'>
        <div className='top'>
          <h5>{props.tag}</h5>
        </div>
        <h3>{props.heading}</h3>
        <p>{props.desc}</p>
    </div>
  )
}

export default DescCard
