import React, { useContext, useEffect, memo } from 'react';
import { Container } from 'react-bootstrap';
import { Card, Button } from 'react-bootstrap';
import { AuthContext } from '../components/context/Provider';
import { NavLink, Link } from 'react-router-dom';

const Eshop = props => {
  const { getDataProducts, dataProducts, addMyProducts } = useContext(
    AuthContext
  );

  async function getData() {
    await getDataProducts().then(e => {});
  }

  useEffect(() => {
    getData();
    return () => {};
  }, []);

  const Product = memo(({ item }) => {
    useEffect(() => {});

    return (
      <Card className="m-1 p-2 cardWidth  " key={'c' + item.id}>
        <NavLink to={'/detailproduct/' + item.id} title="ver">
          <Card.Img variant="top" src={item.image} className="imageProduct" />
        </NavLink>

        <Card.Body>
          <Card.Text>{item.title}</Card.Text>
        </Card.Body>
        <Card.Footer className="">
          <div className="d-flex">
            <div className="p-2">
              {'$ '}
              {item.price}
            </div>
            <div className="ml-auto p-2">
              <Button variant="primary" onClick={() => addMyProducts(item)}>
                Add car
              </Button>
            </div>
          </div>
        </Card.Footer>
      </Card>
    );
  });

  return (
    <div className="App p-0">
      <Container className="p-0 pt-4">
        <div className="d-flex align-content-around justify-content-center flex-wrap">
          {Array.isArray(dataProducts) &&
            dataProducts.map((value, key) => {
              return <Product key={key} item={value} />;
            })}
        </div>
      </Container>
    </div>
  );
};

export default Eshop;
