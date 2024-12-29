import list from '../list.json';
import React, { useEffect, useState } from 'react'
import { AiOutlineCaretDown, AiOutlineCaretUp } from 'react-icons/ai';

const Dropdown = ({ selectedLanguage, setLanguage }) => {

    const [isOpen, setIsOpen] = useState(false);


    return (
        <div className='relative flex flex-col items-center w-[335px] h-10 rounded-lg mb-2'>
            <button onClick={() => setIsOpen((prev) => !prev)} className='bg-blue-500 p-2 w-full flex items-center justify-between font-bold text-lg rounded-lg tracking-tighter border-2 
            border-transparent active:border-white duration-300 active:text-white'>
                {selectedLanguage}
                {!isOpen ? (
                    <AiOutlineCaretDown className='h-8' />
                ) : (
                    <AiOutlineCaretUp className='h-8' />
                )}
            </button>
            {isOpen &&
                <div className='bg-blue-500 absolute top-16 max-h-[410px] overflow-y-scroll flex flex-col w-full rounded-lg p-2'>
                    {list.map((item, i) => (
                        <div className='flex flex-col w-full text-start hover:bg-blue-400 cursor-pointer rounded-lg p-4'
                            key={i}
                            onClick={() => {
                                setLanguage(item.Language);
                                setIsOpen(false);
                            }}
                        >
                            <h3 className='font-bold text-black active:text-white duration-300'>{item.Language}</h3>
                        </div>
                    ))}
                </div>
            }
        </div>
    )
}

export default Dropdown