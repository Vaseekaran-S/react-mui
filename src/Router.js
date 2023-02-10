import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './views/Home';
import Profile from './views/Profile';
import Dashboard from './views/Dashboard';
import Accounts from './layouts/dashboard/Accounts';
import Portfolio from './layouts/dashboard/Portfolio';


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='profile' element={<Profile />} />
        <Route path='dashboard' element={<Dashboard />} />
        <Route path='dashboard/account' element={<Accounts />} />
        <Route path='dashboard/portfolio' element={<Portfolio />} />

      </Routes>
    </BrowserRouter>
  )
}

export default Router