import React from 'react'
import {Nav,Bars,NavMenu, NavLink } from './NavbarElements';

const Navbar = () =>{
  return (
      <>
    <Nav>
        <NavLink to="/" activeStyle>
            HOME 
        </NavLink>
         <Bars />
            <NavMenu>
                
                <NavLink to="/login" activeStyle>
                    ADMIN  
                </NavLink>
                <NavLink to="/userlogin" activeStyle>
                    USER
                </NavLink>

                



                <NavLink to="/checkin" activeStyle>
                     CHECKIN  
                </NavLink>

                <NavLink to="/form" activeStyle>
                     CONTACT US  
                </NavLink>
            </NavMenu>
       
        </Nav>
        </>
        
  );
};
export default Navbar;