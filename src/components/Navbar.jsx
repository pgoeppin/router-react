import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'

export default function Navigation() {
  return (
    <>
      <Navbar bg='danger' variant='dark'>
        <Container fluid>
        <Container className='justify-contend-start'>
          <Link to='/' className='text-white ms-3 text-decoration-none'>
          🏠 Home
          </Link>
          <Link to="/contact" className="text-white ms-3 text-decoration-none">
          📔 Contacto
          </Link>
          </Container>
          <Navbar.Collapse className='justify-content-end'>
          <Navbar.Brand>Happy Cake 🍰</Navbar.Brand>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}