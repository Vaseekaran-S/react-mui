import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './views/Home';
import Profile from './views/Profile';
import Dashboard from './views/Dashboard';
import Accounts from './layouts/dashboard/Accounts';
import Portfolio from './layouts/dashboard/Portfolio';
import { createContext, useEffect } from 'react';
import Products from './views/Products';
import image from './assests/boat.jpg'

export const Context = createContext()

const Router = () => {

  const [users, setUsers] = useState({
    cart: [],
    products: []
  });

  function api() {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => {
        console.log(json);
        setUsers({...users,products: json})
      })
  }

  useEffect(() => {
    console.log("hello");
    api()
    console.log("Data",users);
  },[])


  const dispatchUserEvent = (actionType, payload) => {
    switch (actionType) {
      case 'ADD_CART':
        setUsers({ ...users, cart: [...users.cart, payload] });
        return;
      case 'REMOVE_CART':
        const value = users.cart
        console.log(value);
        const final = value.filter(product => (payload.id !== product.id))
        console.log(final);
        setUsers({ ...users, cart: final });
        console.log(users);
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
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='dashboard/account' element={<Accounts />} />
          <Route path='dashboard/portfolio' element={<Portfolio />} />
          <Route path='components' element={<Products />} />

        </Routes>
      </BrowserRouter>
    </Context.Provider>

  )
}

export default Router