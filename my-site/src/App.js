import React from 'react';
import { Routes, Route } from "react-router-dom";

import NavBar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import './App.css';

function App() {
  return (
    <>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="about" element={ <About/> } />
          <Route path="contact" element={ <Contact/> } />
          <Route path="portfolio" element={ <Portfolio/> } />
        </Routes>
      </div> 
    </>
  );
}

export default App;



// import React from 'react';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// import { Navbar, Nav } from 'react-bootstrap';

// import Home from './components/Home';
// import About from './components/About';
// import Contact from './components/Contact';
// import Portfolio from './components/Portfolio';

// function App() {
//   return (
//     <Router>
// 			<Navbar bg="transparent" expand="lg" className="navbar-dark">
// 				<Navbar.Brand href="#">My Website</Navbar.Brand>
// 				<Navbar.Toggle aria-controls="basic-navbar-nav" />
// 				<Navbar.Collapse id="basic-navbar-nav">
// 					<Nav className="me-auto">
// 						<Link to="/home" className="nav-link">Home</Link>
// 						<Link to="/about" className="nav-link">About</Link>
// 						<Link to="/portfolio" className="nav-link">Portfolio</Link>
// 						<Link to="/contact" className="nav-link">Contact</Link>
// 					</Nav>
// 				</Navbar.Collapse>
// 			</Navbar>

//       <Switch>
//         <Route exact path="./components/pages/home">
//           <Home />
//         </Route>
//         <Route path="./components/pages/about">
//           <About />
//         </Route>
//         <Route path="./components/pages/contact">
//           <Portfolio />
//         </Route>
//         <Route path="./components/pages/contact">
//           <Contact />
//         </Route>
//       </Switch>
//     </Router>
//   );
// }

// export default App;

