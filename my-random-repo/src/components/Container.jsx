import React from 'react'

const Container = () => {
  return (
    <div className='w-full h-3/4 flex items-center justify-center'>
      <div className='border border-secondaryWhite h-4/5 w-3/5 rounded-md shadow-xl flex justify-center p-10'>
        <input type="text" className='placeholder:text-primaryWhite w-2/4 h-12 bg-secondaryBlack border-primaryWhite border rounded-md p-5' placeholder='Select a Language'/>
      </div>
    </div>
  )
}

export default Container