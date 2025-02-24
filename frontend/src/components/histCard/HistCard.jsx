import React from 'react';
import './HistCard.css';

const HistCard = ({props}) => {
  return (
    <div className='hist-wrapper'>
        <div className="hist-left">
            <p>{props.year}</p>
        </div>
        <div className="hist-right">
            <h4>{props.title}</h4>
            <p>{props.para}</p>
        </div>
    </div>
  )
}

export default HistCard
