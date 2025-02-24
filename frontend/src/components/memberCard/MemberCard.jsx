import React from 'react';
import './MemberCard.css';

import EmailIcon from '@mui/icons-material/Email';

const MemberCard = ({props}) => {
  return (
    <div className='member-wrapper'>
        <div className="member-top">
            <div className="member-top-left">
                <img src={props.img} alt="" />
                <h3>{props.name}</h3>
            </div>

            <div className="member-btn">
                <EmailIcon />
            </div>

        </div>

        <div className="member-bottom">
            <h5>{props.title}</h5>
            <p>{props.para}</p>
        </div>
    </div>
  )
}

export default MemberCard
