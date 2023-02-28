import React from 'react'

import { useGlobalContext } from "../context/context";


function About() {
  const {
    backgroundColor,
    h1Color,
  } = useGlobalContext();
  return (
    <div style={{backgroundColor:backgroundColor}}><h1 style={{color:h1Color}}>The about page</h1></div>
  )
}

export default About