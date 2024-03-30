import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
export default function NavBar() {
  const [active, setActive] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onSrcoll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

    }

  }, []);
  return (
    <Navbar expand="lg" >
      <Container>
        <Navbar.Brand href="#home">
          <img src='' alt='logo' />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" >
          <span className='navbar-toggler-icon'></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Skills</Nav.Link>
            <Nav.Link href="#link">Projects</Nav.Link>
            <Nav.Link href="#link">Resume</Nav.Link>
          </Nav>
          <span className='navbar-text'>
            <div className='social-icon'>
              <a href="#"><img src='' alt='' /></a>
              <a href="#"><img src='' alt='' /></a>
              <a href="#"><img src='' alt='' /></a>
            </div>
            <button className='vvd' onClick={() => console.log("connected")}><span>Let's Connect</span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
