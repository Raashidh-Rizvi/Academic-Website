import React from 'react';
import './SideMenu.css';
import pic1 from '../../assets/profilePic1.jpg';

import CloseIcon from '@mui/icons-material/Close';

import {useSelector , useDispatch} from 'react-redux';
import {setToggle} from '../../features/menuToggle.jsx';

import { useNavigate } from 'react-router-dom';

const SideMenu = () => {

  const isOpen = useSelector((state)=>state.menuToggle.isOpen);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  return (
    <div className='side-menu-wrapper'>
      <CloseIcon className='close-icon' onClick={()=>{dispatch(setToggle())}}/>

      <div className="menu-profile">
        <img src={pic1} alt="" />
        <h2>Jane Smith</h2>
      </div>

      <ul>
            <li onClick={()=>{navigate('/home');dispatch(setToggle())}}>Home</li>
            <li onClick={()=>{navigate('/about');dispatch(setToggle())}}>About Us</li>
            <li onClick={()=>{navigate('/academics');dispatch(setToggle())}}>Academics</li>
            <li onClick={()=>{navigate('/admissions');dispatch(setToggle())}}>Admission</li>
            <li onClick={()=>{navigate('/studentsLife');dispatch(setToggle())}}>Student Life</li>
            <li onClick={()=>{navigate('/contact');dispatch(setToggle())}}>Contact</li>
      </ul>

    </div>
  )
}

export default SideMenu

