import React from 'react';
import './EventCard.css';

const EventCard = ({props}) => {
  return (
    <div className='event-card-wrapper'>
        <div className="event-img">
            <img src={props.img} alt="" />
        </div>

        <div className="event-card-info">
            <h3>{props.title}</h3>
            <p>{props.desc}</p>
        </div>

    </div>
  )
}

export default EventCard
