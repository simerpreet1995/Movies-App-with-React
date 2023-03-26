import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Link } from 'react-router-dom';

function Header() {

    const navData = [
        {name: 'Home', link: '/'},
        {name: 'Movies', link: '/movies'},
        {name: 'Tv Series', link: '/series'},
        {name: 'Search', link: '/search'},
        {name: 'Contact US', link: '/contact'},
        {name: 'About', link: '/about'}

    ]
  return (
    <>
    <header className='header'>
        <Navbar bg="dark">
        <Container>
            <Navbar.Brand>
                MY Entertainment
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='navbarScroll' />
            <Navbar.Collapse id="navbarScroll">
                <Nav className='me-auto my-2 my-lg-0'
                style={{maxHeight: "100px"}}
                >
                    {
                        navData.map((item) =>(
                                
                                <Nav key={item.name}>
                                    <Link to={item.link}>
                                    {item.name}
                                    </Link>
                                </Nav>
                            
                        ))
                    }
                </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    </header>
    </>
  )
}

export default Header
