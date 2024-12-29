import { useState } from 'react'
import React from 'react'
import Dropdown from './Dropdown'
import Repo from './Repo'

const Container = () => {
  const [language, setLanguage] = useState('');

  return (
    <div className=' h-3/5 w-1/4 rounded-xl shadow-md flex gap-4 flex-col items-center p-10 bg-blue-400'>
      <h1 className='font-bold text-3xl'>Github Repository Finder</h1>
      <Dropdown selectedLanguage={language} setLanguage={setLanguage} />
      <Repo language={language} />

    </div>
  )
}

export default Container