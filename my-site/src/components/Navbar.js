// import React from "react";
// import { NavLink } from "react-router-dom";
// import { useGlobalState } from "../context.js";

// function NavBar() {
//   //const [ state, dispatch ] = useGlobalState();
//   const [ state ] = useGlobalState();

//   return (
//     <nav>
//       <ul style={{ display: "flex", flexFlow: "row nowrap", justifyContent: "space-evenly", listStyle: 'none', color: "white" }}>
//         <li>
//           <NavLink to="/">Home</NavLink>
//         </li>
//         {
//           !state.currentUser && (
//             <li>
//               <NavLink to="/About">About Me</NavLink>
//             </li>
//           )
//         }
//         {
//           !state.currentUser && (
//             <li>
//               <NavLink to="/Contact">Contact</NavLink>
//             </li>
//           )
//         }
//         {
//           !state.currentUser && (
//             <li>
//               <NavLink to="/Portfolio">Portfolio</NavLink>
//             </li>
//           )
//         }
        
//       </ul>
//     </nav>
//   );
// }

// export default NavBar;




import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../img/logo/Kelle_White.png';
import { NavLink } from "react-router-dom";


function NavMenu() {
  const [isExpand, setIsExpand] = useState(false)

  return (
    <>
      <Navbar className="nav-header fixed-top" bg="dark" variant="dark" expand="md" expanded={isExpand}>
        <Container className="header-container">

          <Navbar.Brand >
            <NavLink to="/">
            <img
              alt="logo"
              src={logo}
              height="40"
              className="d-inline-block align-middle"/>
            </NavLink>  
          </Navbar.Brand>

          <Nav className="me-auto header-hr">
            <NavLink to="/About">About Me</NavLink>
            <NavLink to="/Contact">Contact</NavLink>
            <NavLink to="/Portfolio">Portfolio</NavLink>
          </Nav>
        </Container>
      </Navbar>     
    </>  
  );
}

export default NavMenu;
