import React from 'react';
import './TestimonialCard.css';

import StarIcon from '@mui/icons-material/Star';

const TestimonialCard = ({props}) => {
  return (
    <div className='testimonial-wrapper'>
        <div className="test-top">
            <img src={props.img} alt="" />
            <h4>{props.name}</h4>
            <p><StarIcon className='star-icon'/><StarIcon className='star-icon'/><StarIcon className='star-icon'/><StarIcon className='star-icon'/><StarIcon className='star-icon'/></p>
        </div>
        <p>{props.desc}</p>
    </div>
  )
}

export default TestimonialCard

