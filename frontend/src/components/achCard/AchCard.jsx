import React from 'react';
import './AchCard.css';

const AchCard = ({props,children}) => {
  return (
    <div className='ach-wrapper'>
        <div className="card-logo">
            {children}
        </div>
        <div className="card-border">
            <div className="card-body">
                <h3>{props.title}</h3>
                <p> {props.para}</p>
            </div>
        </div>
    </div>
  )
}

export default AchCard
