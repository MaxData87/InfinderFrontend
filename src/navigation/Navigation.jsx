import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import * as Pages from './index';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../../globalcss.css'

const Navigation = () => {

  const routes = [
    { path: '/', component: Pages.Home },
  ];

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {routes.map(({ path, component }) => (
          <Route key={path} path={path} element={React.createElement(component)} />
        ))}
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default Navigation