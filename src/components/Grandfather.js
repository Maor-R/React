import React from 'react'
import Home from "./Home";
import About from "./About"

import SharedLayout from "./SharedLayout"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function Grandfather() {
  return (
    <>
  
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
    </>
  )
}

export default Grandfather