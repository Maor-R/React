import React from 'react'
import Home from "./components/Home";
import Products from "./components/Products"
import Product from "./components/Product"
import NotFound from './components/NotFound';
import SharedProductLayout from "./components/SharedProductLayout"
import "./index.css"

import SharedLayout from "./components/SharedLayout"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { useGlobalContext } from "./context/context";


function App() {
  const {
    backgroundColor,
  } = useGlobalContext();

  return (
    <div className='container' style={{backgroundColor:backgroundColor}}>
  
    <Router
>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />}/>
            <Route path="product" element={<Products />} />


            <Route path="product" element={<SharedProductLayout />}>
              <Route path=":productId" element={<Product />} />
            </Route>

            <Route path="not-found" element={<NotFound />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
    </Router>
    </div>
  )
}

export default App;