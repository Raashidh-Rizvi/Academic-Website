import React, { useState } from 'react';
import './FaqCard.css';

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const FaqCard = ({props}) => {

    const [open, setOpen] = useState(false);
    const handleClick = ()=>{
        setOpen(!open);
    }
  return (
    <div className={`faq-card ${open?"expose":""}`}>
        <div className='qns'>
            <h5>{props.question}</h5>
            <div  onClick={()=>{handleClick()}}>
                {open?<RemoveIcon /> :<AddIcon /> }
            </div>
        </div>
        <div className={`answer ${open?'showing':''}`}>
            <hr className={open?"show hl":"hide"}></hr>
            <p className={open?"show":"hide"}>{props.answer}</p>
        </div>
    </div>
  )
}

export default FaqCard
