import React from 'react'

import { useGlobalContext } from "../context/context";


function Home() {
  const {
    backgroundColor,
    h1Color,
  } = useGlobalContext();
  return (
    <div style={{backgroundColor:backgroundColor}}><h1 style={{color:h1Color}}>The home page</h1></div>
  )
}

export default Home