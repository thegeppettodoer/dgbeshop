import React, { createContext, useState } from 'react';
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [dataProducts, setDataProducts] = useState([]);
  const [myProducts, setMyProducts] = useState([]);

  return (
    <AuthContext.Provider
      value={{
        dataProducts,
        setDataProducts,
        myProducts,
        setMyProducts,
        addMyProducts: async item => {
          try {
            setMyProducts([...myProducts, item]);
          } catch (e) {
            console.log('>addMyProducts>error>', e);
          }
        },
        getMyProducts: async id => {
          try {
            return await fetch('https://fakestoreapi.com/products/' + id, {
              method: 'GET',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
              redirect: 'follow',
            })
              .then(response => response.text())
              .then(result => {
                return JSON.parse(result);
              })
              .catch(error => console.log('error', error));
          } catch (e) {
            console.log('>AuthProvider>error>', e);
          }
        },
        clearMyProducts: async => {
          setMyProducts([]);
        },
        getDataProducts: async () => {
          try {
            return await fetch('https://fakestoreapi.com/products', {
              method: 'GET',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
              redirect: 'follow',
            })
              .then(response => response.text())
              .then(result => {
                setDataProducts(null);
                setDataProducts(JSON.parse(result));
                return JSON.parse(result);
              })
              .catch(error => console.log('error', error));
          } catch (e) {
            console.log('>AuthProvider>error>', e);
          }
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
