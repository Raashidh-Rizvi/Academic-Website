import React from 'react';
import './LearnCard.css';

const LearnCard = ({props}) => {
  return (
    <div className='learn-card-wrapper'>
        <div className="learn-img">
            <img src={props.img} alt="" />
        </div>
        <div className='learn-div-1'>
            <p className="learn-card-style"></p>
        </div>

        <div className="learn-card-info">
            <h3>{props.title}</h3>
            <p>{props.desc}</p>
        </div>

    </div>
  )
}

export default LearnCard

