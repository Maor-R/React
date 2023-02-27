import {React, useEffect} from 'react'

import { useGlobalContext } from '../context/gifts_context';

function Grandson() {
    const { updateGifts, gifts } = useGlobalContext();

    useEffect(() => {
 
        updateGifts(['shirt', 'pants', 'shoes']);

    }, [])
    
  return (
    <div>{gifts.map((gift)=> <p key={gift}>{gift}</p>)}</div>
  )
}

export default Grandson