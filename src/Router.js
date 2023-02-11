import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './views/Home';
import Profile from './views/Profile';
import Dashboard from './views/Dashboard';
import Accounts from './layouts/dashboard/Accounts';
import Portfolio from './layouts/dashboard/Portfolio';
import { createContext } from 'react';
import Products from './views/Products';
import image from './assests/boat.jpg'

export const Context = createContext()

const Router = () => {

  const [users, setUsers] = useState({
    cart :[],
    products : [
      {
        id: 1,
        title: "Boat Head Phones",
        price: 1999,
        img : image
      },
      {
        id: 2,
        title: "USB WIRES",
        price: 99,
        img : image
      },
      {
        id: 3,
        title: "Phones",
        price: 19999,
        img : image
      },
      {
        id: 4,
        title: "Head Phones",
        price: 999,
        img : image
      },
      {
        id: 5,
        title: "SD Cards",
        price: 999,
        img : image
      },
      {
        id: 6,
        title: "SIM",
        price: 1999,
        img : image
      }
    ]
  });


  const dispatchUserEvent = (actionType, payload) => {
    switch (actionType) {
      case 'ADD_CART':
        console.log(payload);
        setUsers({ ...users,cart: [...users.cart, payload] });
        return;
      case 'REMOVE_CART':
        setUsers(...users,users.cart.filter(product => users.cart.id !== product.id  ));
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