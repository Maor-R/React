import React from 'react'
import Home from "./components/Home";
import About from "./components/About"
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
            <Route path="about" element={<About />} />

            {/* <Route path="not-found" element={<NotFound />} />
            <Route path="*" element={<NotFound />} /> */}
          </Route>
        </Routes>
    </Router>
    </div>
  )
}

export default App;