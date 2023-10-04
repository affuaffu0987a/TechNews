import React from 'react'
import { useGlobalContext } from '../context'

const Leftright = () => {
  const{Privious,page,Next,nbPages}=useGlobalContext();

  return (
    <div className='pagination'>
      <button disabled={page<1} onClick={()=>Privious()} className='btn'>Privious</button>
      <p style={{color:"white"}}>{page} of {nbPages}</p>
      <button disabled={page>49} onClick={()=>Next()} className='btn2'>Next</button>
    </div>
  )
}

export default Leftright