import { useState } from 'react'
import React from 'react'
import Dropdown from './Dropdown'
import Repo from './Repo'

const Container = () => {
  const [language , setLanguage] = useState('');
  const [refreshTrigger, setRefreshTrigger ] = useState(0);

  return (
    <div className=' h-3/5 w-1/4 rounded-xl shadow-md flex gap-4 flex-col items-center p-10 bg-blue-400'>
      <h1 className='font-bold text-3xl'>Github Repository Finder</h1>
      <Dropdown selectedLanguage={language} setLanguage={setLanguage} />
      <Repo language={language} refreshTrigger={refreshTrigger} /> 
      <button className='h-10 w-5/6 border-2 border-black rounded-lg font-bold hover:bg-black hover:text-sky-400 duration-300'
      onClick={()=> setRefreshTrigger((prev) => prev + 1)}
      >Refresh</button>  
    </div>
  )
}

export default Container