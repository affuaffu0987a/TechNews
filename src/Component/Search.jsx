import React from 'react'
import { useGlobalContext } from '../context';

const Search= () => {
    const{query,SearchNews}=useGlobalContext()

  return (
    <div className='search'>
    <form onSubmit={(e)=>e.preventDefault()}>
        <input value={query} onChange={(e)=>SearchNews(e.target.value)} type='text' placeholder='Search Here...'/>
    </form>
    </div>
  )
}

export default Search;
