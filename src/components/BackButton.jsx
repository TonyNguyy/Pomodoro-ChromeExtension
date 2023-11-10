import React from 'react'



function BackButton() {
  return (
    <button className=''>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10 text-white mt-10 cursor-pointer">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
    </svg>
        <span className='text-white font-semibold'>Back</span>
    </button>

    
  )
}

export default BackButton;