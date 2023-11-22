import React from 'react'
import './Navigationbar.css'
import {NavLink} from 'react-router-dom'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function NavigationBar() {

  return (


    <div className='navi'>
      <Navbar expand="lg" className='navvv'>
        <Navbar.Brand ><img src='https://cdn-icons-png.flaticon.com/512/6959/6959474.png' width={"50px"} height={"50px"} className="img" />MY PLANT</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto ">
        <ul className="navbar-nav  p3 ">
         <li className="nav-item main">
          <NavLink className="nav-link main-link" 
           to='/'
           >Home</NavLink>
         </li> 
         <li className="nav-item today">
          <NavLink className="nav-link today-link" 
           to='/fruit'>
            Fruits</NavLink>
         </li> 
         <li className="nav-item analytics">
          <NavLink className="nav-link analytics-link" 
           to='/vegetable'
           >Vegetables</NavLink>
         </li> 
         <li className="nav-item analytics">
          <NavLink className="nav-link analytics-link" 
           to='/flower'>Flowers</NavLink>
         </li>
         <li className="nav-item analytics">
          <NavLink className="nav-link analytics-link" 
           to='/bot'>Queries</NavLink>
         </li>   
      </ul>
          </Nav>
        </Navbar.Collapse>
      
    </Navbar>
      
</div>
  )
}

export default NavigationBar;