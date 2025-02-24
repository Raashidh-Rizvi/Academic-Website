import React from 'react';
import './GalleryCard.css';

export default function GalleryCard({props}) {
  return (
    <div className='gallery-card-wrapper'>
        <ul className="gallery-img">
            <li><img src={props.img1} alt="" /></li>
            <li><img src={props.img2} alt="" /></li>
            <li><img src={props.img3} alt="" /></li>
            <li><img src={props.img4} alt="" /></li>
        </ul>
        <div className="gallery-desc">
            <h4>{props.title}</h4>
            <p>{props.desc}</p>
        </div>
    </div>
  )
}
