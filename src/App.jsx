import React from 'react'
import Newdetails from './Component/Newdetails'
import Leftright from './Component/Leftright'
import Search from './Component/Search'
import Footer from './Component/Footer'
// import { useGlobalContext } from './context'

const App = () => {
  return (
   <>
   <div className='logoimg'><img src='./Tech_News_logo.png'/></div>
   <h1 className='heading'>The Top Tech News </h1>
   <Search/>
   <Leftright/>
   <Newdetails/>
   <Footer/>
   </>
  )
}

export default App
