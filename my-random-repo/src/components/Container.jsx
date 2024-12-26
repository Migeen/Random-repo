import React from 'react'
import Dropdown from './Dropdown'
import Repo from './Repo'

const Container = () => {
  return (
    <div className=' h-2/5 w-1/4 rounded-xl shadow-md flex gap-4 flex-col items-center p-10 bg-blue-400'>
      <h1 className='font-medium text-3xl'>Github Repository Finder</h1>
      <Dropdown />
      <Repo/>   
    </div>
  )
}

export default Container