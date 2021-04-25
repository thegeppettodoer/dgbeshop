import logo from './assets/img/logo.svg';
import './assets/css/App.css';
import { Row, Col, Container } from 'react-bootstrap';
import {
  Nav,
  Navbar,
  NavDropdown,
  Form,
  // FormControl,
  Button,
  OverlayTrigger,
  Popover,
} from 'react-bootstrap';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Navbar bg="light" expand="md" className="container">
        {/* <Navbar bg="dark" expand="md" variant="dark"> */}
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            {/* <FormControl type="text" placeholder="Search" className="mr-sm-2" /> */}
            {/* <Button variant="outline-success">Search</Button> */}

            <OverlayTrigger
              trigger="click"
              key={'carrito'}
              placement={'bottom'}
              overlay={
                <Popover id={`popover-positioned-${'bottom'}`}>
                  <Popover.Title as="h3">{`Mi ${'Carrito'}`}</Popover.Title>
                  <Popover.Content>
                    <ul>
                      <li>
                        <strong>Holy guacamole!</strong> Check this info.
                      </li>
                    </ul>
                  </Popover.Content>
                </Popover>
              }
            >
              <Button variant="secondary">{'Tu carrito'}</Button>
            </OverlayTrigger>
          </Form>
        </Navbar.Collapse>
      </Navbar>

      <Container className="bg-warning vh-100 p-4">
        <Row className="justify-content-md-center">
          <Col md="auto">Variable width content</Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
