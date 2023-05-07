import React from 'react'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
  return (
	<Navbar bg="light" expand="lg" variant='info-subtle'>
      <Container className=''>

        <Navbar.Brand href="#home">
			<span className='fw-bold'>Hooked For Books</span>
			<img src="./images/book.png" alt="asd" className='nav-book-icon' />
		</Navbar.Brand>
        
		<Navbar.Toggle aria-controls="basic-navbar-nav" />
        
		<Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
            <Nav.Link href="/signup">Signup</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/collections">Catalgoue</Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar