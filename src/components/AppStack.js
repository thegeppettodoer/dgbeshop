import React, { Fragment, useState } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Eshop from '../screens/Eshop';
import Products from '../screens/Products';
import '../assets/css/App.css';
import Header from '../components/Header';
import { AuthProvider } from './context/Provider';

export default function AppStack() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <div className="container-fluid p-0 m-0">
          <Header />
          <Switch>
            <Route path="/" exact component={Eshop} />
            <Route path="/products" component={Eshop} />
            <Route path="/detailproduct/:id" component={Products} />
          </Switch>

          <div className="container footer text-center p-4">
            {'David Garcia Balarezo  tlf. 939 259 868'}
          </div>
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
}
