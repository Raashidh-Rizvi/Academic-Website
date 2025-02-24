import React from 'react';
import './AdmissionCard.css';

const AdmissionCard = ({props}) => {
  return (
    <div className='admission-card-wrapper'>
      <div className="admission-card-top">
        <h2>{props.no}</h2>
      </div>

      <div class="vl"></div>

      <div className="admission-card-bottom">
        <h3>{props.title}</h3>
        <p>{props.desc}</p>
      </div>
    </div>
  )
}

export default AdmissionCard
