import React from 'react';
import './Header.css';

import MenuIcon from '@mui/icons-material/Menu';
import SideMenu from '../side-menu/SideMenu';

import {useSelector , useDispatch} from 'react-redux';
import {setToggle} from '../../features/menuToggle.jsx';

import { useNavigate } from 'react-router-dom';

const Header = () => {

    const isOpen = useSelector((state)=>state.menuToggle.isOpen);
    const dispatch = useDispatch();

    const navigate = useNavigate();

  return (
    <div className='header-wrapper' >

        <div className={isOpen?"menu-icon hide":"menu-icon"}>
            <MenuIcon onClick={()=>{dispatch(setToggle());console.log(isOpen)}}/>
        </div>

        <div className='nav-logo'>
            <img src="" alt="" />
            <h3>Academia</h3>
        </div>
        <ul className="nav-items">
            <li className="nav-item" onClick={()=>{navigate('/home')}}>Home</li>
            <li className="nav-item" onClick={()=>{navigate('/about')}}>About Us</li>
            <li className="nav-item" onClick={()=>{navigate('/academics')}}>Academics</li>
            <li className="nav-item" onClick={()=>{navigate('/admissions')}}>Admission</li>
            <li className="nav-item" onClick={()=>{navigate('/studentsLife')}}>Student Life</li>
            <li className="nav-item" onClick={()=>{navigate('/contact')}}>Contact</li>
        </ul>
        <div className={isOpen?"side-menu":"hide"}>
            <SideMenu />
        </div>

    </div>
  )
}

export default Header
