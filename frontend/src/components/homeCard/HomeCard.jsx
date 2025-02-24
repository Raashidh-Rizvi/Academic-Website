import React from 'react';
import './HomeCard.css';

import SchoolIcon from '@mui/icons-material/School';


const HomeCard = ({props,children}) => {
  return (
    <div className='home-card-wrapper'>
        <div className="card-logo">
            {children }
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

export default HomeCard;
