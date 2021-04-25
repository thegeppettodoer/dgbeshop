import React, { useContext, useEffect, useState } from 'react';
import { Container, Card, Button, Image } from 'react-bootstrap';
import { AuthContext } from '../components/context/Provider';
import { useParams } from 'react-router-dom';

function Products({}) {
  const { getMyProducts, addMyProducts } = useContext(AuthContext);
  const [myDetProd, setMyDetProd] = useState({});

  const { id } = useParams();

  async function getData(id) {
    await getMyProducts(id).then(e => {
      setMyDetProd(e);
    });
  }

  useEffect(() => {
    getData(id);
    return () => {};
  }, [id]);

  return myDetProd.id ? (
    <div className="App ">
      <Container className="mt-4 vh-100  ">
        <div className="row col-12  p-0">
          <div className="col-12 col-md-6 col-lg-6">
            <Image
              src={myDetProd.image}
              className="imageDetProduct "
              alt={myDetProd.title}
            />
          </div>
          <div className="col-12 col-md-6 col-lg-6  p-0 d-flex align-items-center">
            <Card className="m-0 p-2  " key={'c' + myDetProd.id}>
              <Card.Header className="text-left">{myDetProd.title}</Card.Header>

              <Card.Body>
                <Card.Text className="text-left">
                  {myDetProd.description} <br></br>
                </Card.Text>
                <Card.Text className="text-left mt-3 font-weight-bold">
                  {myDetProd.category}
                </Card.Text>
              </Card.Body>
              <Card.Footer className="">
                <div className="d-flex">
                  <div className="p-2">
                    {'Price: '}
                    {myDetProd.price}
                  </div>
                  <div className="ml-auto p-2">
                    <Button
                      variant="primary"
                      onClick={() => addMyProducts(myDetProd)}
                    >
                      Add car
                    </Button>
                  </div>
                </div>
              </Card.Footer>
            </Card>
          </div>
        </div>
      </Container>
    </div>
  ) : (
    <div className="App ">
      <Container className="mt-4 vh-100 p-4 ">
        <div className="row col-12  p-0">
          <div>{'Loading...'}</div>
        </div>
      </Container>
    </div>
  );
}

export default Products;
