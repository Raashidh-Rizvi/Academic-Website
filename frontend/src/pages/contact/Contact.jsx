import React from 'react';
import './Contact.css';

import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import DescCard from '../../components/descCard/DescCard';

import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Contact = () => {
  return (
    <div className='contact-wrapper'>
        <div className="contact-top">
            <div className="contact-top-left">
                <p>Contact Us</p>
                <h2>Feel Free To Connect With Us</h2>
            </div>
            <div className="contact-top-right">
                <p>
                  We value open communication and are eager to assist you with any inquiries.
                  Feel free to reach out to us through any of the following contact methods
                </p>
                <ul>
                  <li><span id='contact-span'><MailIcon /></span>hello@academia.com<p/></li>
                  <li><span id='contact-span'><PhoneIcon /></span>+91 91813 23 2309<p/></li>
                  <li><span id='contact-span'><LocationOnIcon /></span>Somewhere in the World<p/></li>
                  <li><span id='contact-span'><QueryBuilderIcon /></span>Office Hours - 9am - 6 pm<p/></li>
                </ul>
            </div>
        </div>

      {/* contact form */}
        <div className="contact-form">
          <DescCard props={{
            tag:"Contact Form",
            heading:"Student Information",
            desc:"If you have specific questions or wish to request more information about Little Learners Academy, please complete the contact form below. Kindly provide the following details to help us better understand your needs"
          }} />

          <div className="contact-outer">
            <div className="form">
              <div className="form-icons">
                <FacebookIcon className='form-icon'/>
                <XIcon className='form-icon'/>
                <LinkedInIcon className='form-icon'/>
              </div>
              <form action="#">
                <ul>
                  <li>
                    <label htmlFor="parentName">Parent Name : </label>
                    <input type="text" />
                  </li>

                  <li>
                    <label htmlFor="email">Email : </label>
                    <input type="email" />
                  </li>

                  <li>
                    <label htmlFor="phoneNumber">Phone Number : </label>
                    <input type="email" />
                  </li>

                  <li>
                    <label htmlFor="studentName">Student Name : </label>
                    <input type="email" />
                  </li>

                  <li>
                    <label htmlFor="studentAge">Student Age : </label>
                    <input type="email" />
                  </li>

                  <li>
                    <label htmlFor="programOfInterest">Program Of Interest : </label>
                    <input type="email" />
                  </li>
                </ul>

                <div>
                  <label htmlFor="message">Message : </label>
                  <input type="email" /><br/>
                  <button className="form-btn" type='submit'>Submit</button>
                </div>

              </form>
            </div>
          </div>
        </div>

    </div>
  )
}

export default Contact
