import logo from '../assets/img/logo.svg';
import '../assets/css/App.css';
import React, { useContext, useEffect, useState, useCallback } from 'react';
import {
  Nav,
  Navbar,
  Form,
  Button,
  OverlayTrigger,
  Popover,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { AuthContext } from '../components/context/Provider';

function Header() {
  const { myProducts, clearMyProducts } = useContext(AuthContext);
  const [y, setY] = useState(window.scrollY);
  const [topFixed, setTopFixed] = useState('');

  const handleNavigation = useCallback(
    e => {
      const window = e.currentTarget;
      if (y > window.scrollY) {
        // console.log('scrolling up', y);
      } else if (y < window.scrollY) {
        // console.log('scrolling down', y);
      }

      setY(window.scrollY);
      if (y > 110) {
        // console.log('scrolling up', y);
        setTopFixed('fixed-top bg-warning');
      } else {
        setTopFixed('');
      }
    },
    [y]
  );

  useEffect(() => {
    setY(window.scrollY);
    window.addEventListener('scroll', handleNavigation);

    return () => {
      window.removeEventListener('scroll', handleNavigation);
    };
  }, [handleNavigation]);

  return (
    <div>
      <header className="App-header banner">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>EShop DGB</h1>
      </header>

      <Navbar bg={''} expand="md" className={'container' + ' ' + topFixed}>
        <Navbar.Brand as={Link} to="/">
          DGB
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/products">
              Products
            </Nav.Link>
          </Nav>
          <Form inline>
            <OverlayTrigger
              trigger="click"
              key={'carrito'}
              placement={'bottom'}
              overlay={
                <Popover id="popover-positioned-bottom" className="widthCar">
                  <Popover.Title as="h3">{'Shop Car List'}</Popover.Title>
                  <Popover.Content>
                    {myProducts.map((value, key) => {
                      return (
                        <div
                          className="d-flex border rounded m-1 p-1"
                          key={key}
                        >
                          <div className="p-2">{value.title}</div>
                          <div className="ml-auto p-2">
                            {JSON.stringify(value.price)}
                          </div>
                        </div>
                      );
                    })}
                  </Popover.Content>
                  <div
                    className="d-flex border rounded ml-3 mr-3 p-1 "
                    key={'foo'}
                  >
                    <div className="mr-auto p-2">
                      <Button
                        onClick={() => clearMyProducts()}
                        variant="warning"
                        className="d-flex align-items-center justify-content-center"
                      >
                        {'Clear'}
                      </Button>
                    </div>
                    <div className="p-2">{'Total:'}</div>
                    <div className="p-2">
                      {'$ '}{' '}
                      {parseFloat(
                        myProducts.reduce(function (a, b) {
                          // console.log('reduce: ', a, '-', b.price);
                          return a + b.price;
                        }, 0)
                      ).toFixed(2)}
                    </div>
                  </div>
                </Popover>
              }
            >
              <Button variant="secondary" className=" bg-warning p-1">
                <div className="d-flex align-items-center">
                  <div className="p-1">
                    <div className="d-flex align-items-start flex-column">
                      <div className="p-0 ">{'Mis shop'}</div>
                    </div>
                  </div>

                  <div className="">
                    <div className="circleCount d-flex align-items-center justify-content-center">
                      {myProducts.length}
                    </div>
                  </div>
                </div>
              </Button>

              {/* */}
            </OverlayTrigger>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
