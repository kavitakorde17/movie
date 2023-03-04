import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {BrowserRouter as Router, Routes, Route,Link,  } from "react-router-dom"
import Home from '../../pages/Home';
import Popular from '../../pages/Popular';
import TopRated from '../../pages/TopRated';
import Upcoming from '../../pages/Upcoming';
// import Popular from 'src/pages/Popular';
// import TopRated from "src/pages/TopRated";
// import Upcoming from "src/pages/Upcoming"
function Header() {
  return (
    <Router>
    <Navbar   collapseOnSelect expand="lg" bg="dark" variant="dark" >
      <Container fluid>
        <Navbar.Brand href="#">Movie App</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to={"/Home"}>Home</Nav.Link>
            <Nav.Link as={Link} to={"/Popular"}>Popular</Nav.Link>
            <Nav.Link as={Link} to={"/Upcoming"}>Upcoming</Nav.Link>
            <Nav.Link as={Link} to={"/TopRated"}>TopRated</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
   
    
    </Navbar>
    <div>
      <Routes>
    <Route exact path="/Home"  element={<Home/>}/>
     
    <Route path="/Popular"  element={<Popular/>}/>
     
    <Route path="/Upcoming"  element={<Upcoming/>}/>
    <Route path="/TopRated"  element={<TopRated/>}/>  
    </Routes>
  </div>
    </Router>
    
  );
}

export default Header;