import React from 'react'

const Container = () => {
  return (
    <div className=' h-2/5 w-1/4 rounded-xl shadow-md flex gap-4 flex-col items-center p-10 bg-blue-400'>
      <h1 className='font-semibold text-3xl text-white'>Github Repository Finder</h1>
      <select name="Choose" id="" className='h-10 w-5/6 bg-blue-400 min-w-40  rounded-lg px-5 cursor-pointer border  ' >
        <option value="Java">Java</option>
        <option value="JavaScript">JavaScript</option>
        <option value="PHP">PHP</option>
        <option value="Python">Python</option>
        <option value="C#">C#</option>
        <option value="R">R</option>
        <option value="Ruby">Ruby</option>
        <option value="TypeScript">TypeScript</option>
        <option value="Flutter">Flutter</option>
        <option value="Swift">Swift</option>
      </select>
      
      <div className='w-5/6  h-2/5 rounded-lg flex bg-slate-200 justify-center items-center'>
        <h2 className=' text-xl cursor-default'>Please select a language</h2>
      </div>
    </div>
  )
}

export default Container