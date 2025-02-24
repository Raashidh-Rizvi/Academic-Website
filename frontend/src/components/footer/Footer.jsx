import React from 'react';
import './Footer.css';

import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';
import PlaceIcon from '@mui/icons-material/Place';

import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import {Link} from 'react-scroll';
import {Link as RouterLink} from 'react-router-dom';

import { useNavigate } from 'react-router-dom';
import { Element, animateScroll as scroll } from 'react-scroll';


const Footer = ({home,features,testimonial,FAQ}) => {

  const navigate = useNavigate();

  const handleScroll = (ref)=>{
    ref.current.scrollIntoView({behavior: 'smooth'});
  }

  return (
    <div className='footer-wrapper'>
        <div className="footer-top">
          <div className="footer-info">
            <h3>Academia</h3>
            <p>We believe in the power of the paly to faster creativity, problem-solving and imagination.</p>
            <ul>
              <li className='info'>
                <MailIcon />
                <h5>academia@gmail.com</h5>
              </li>
              <li className='info'>
                <PhoneIcon />
                <h5>+91 918134 34 6709</h5>
              </li>
              <li className='info'>
                <PlaceIcon />
                <h5>Somewhere in the world</h5>
              </li>
            </ul>
          </div>

          <ul className="footer-home fh">
            <li onClick={()=>{navigate('/home')}}><h4>Home</h4></li>
            <li ><Link to='features' smooth={true} duration={500}>Features</Link></li>
            <li><Link to='testimonial' smooth={true} duration={500}>Our Testimonial</Link></li>
            <li><Link to='FAQ' smooth={true} duration={500}>FAQ</Link></li>
          </ul>

          <ul  className="footer-about fh">
            <li onClick={()=>{navigate('/about')}}><h4>About Us</h4></li>
            <li><Link to='about-mv' smooth={true} duration={500}>Our Mission</Link></li>
            <li><Link to='about-mv' smooth={true} duration={500}>Our Vission</Link></li>
            <li><Link to='about-ach' smooth={true} duration={500}>Awards and Recognitions</Link></li>
            <li><Link to='about-history' smooth={true} duration={500}>History</Link></li>
            <li><Link to='about-members' smooth={true} duration={500}>Teachers</Link></li>
          </ul>

          <ul className="footer-academics fh">
            <li onClick={()=>{navigate('/academics')}}><h4>Academics</h4></li>
            <li><Link to='academics-sf' smooth={true} duration={500}>Special Features</Link> </li>
            <li><Link to='academics-gallery' smooth={true} duration={500}>Gallery</Link></li>
          </ul>

          <ul className="footer-contact fh">
            <li onClick={()=>{ navigate('/contact')}}><h4>Contact Us</h4></li>
            <li>Information</li>
            <li>Map & Direction</li>
          </ul>

        </div>
        <div className="footer-middle">
          <ul className="middle-left">
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
            <li>Cookie Policy</li>
          </ul>
          <ul className='middle-right'>
            <li><FacebookIcon /></li>
            <li><XIcon /></li>
            <li><LinkedInIcon /></li>
          </ul>
        </div>
        <div className="footer-bottum">
          <p>Copyright © [2023] Little Learners Academy. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer
