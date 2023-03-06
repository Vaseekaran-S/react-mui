import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './views/Home';
import Profile from './views/Profile';
import Dashboard from './views/Dashboard';
import Accounts from './layouts/dashboard/Accounts';
import Portfolio from './layouts/dashboard/Portfolio';
import { createContext, useEffect } from 'react';
import Products from './views/Products';
import ProductDetails from './layouts/products/productDetails';
import OrderItem from './component/order';
import Login from './views/Login';
import SignIn from './component/signIn/signIn';
import Admin from './views/Admin';

export const Context = createContext()

const Router = () => {

  const [users, setUsers] = useState({
    cart: [],
    products: [],
    price : 0
  });

  console.log("CART : ",users.cart);

  function api() {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => {
        console.log(json);
        setUsers({ ...users, products: json })
      })
  }

  useEffect(() => {
    api()
  }, [])


  const dispatchUserEvent = (actionType, payload) => {
    switch (actionType) {

      case 'ADD_CART':

        const cartItems = users.cart
        const checkCart = cartItems.includes(payload)
        setUsers(users.price += payload.price)

        if (!checkCart) {
          setUsers({ ...users, cart: [...users.cart, payload] });
        } else {
          setUsers({ ...users });
        }
        return;

      case 'REMOVE_CART':

        const value = users.cart
        setUsers((users.price -= payload.price).toFixed(2))
        const final = value.filter(product => (payload.id !== product.id))
        setUsers({ ...users, cart: final });
        return;

      default:
        return;
    }
  };

  return (
    <Context.Provider value={{ users, dispatchUserEvent }}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='profile' element={<Profile />} />
          <Route path='login' element={<Login />} />
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='dashboard/account' element={<Accounts />} />
          <Route path='dashboard/portfolio' element={<Portfolio />} />
          <Route path='components' element={<Products />} />
          <Route path='components/products/:id' element={<ProductDetails />} />
          <Route path='components/products/order/:id' element={<OrderItem />} />
          <Route path='signin' element={<SignIn />} />
          <Route path='admin' element={<Admin />} />


        </Routes>
      </BrowserRouter>
    </Context.Provider>

  )
}

export default Router