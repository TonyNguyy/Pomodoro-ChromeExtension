import React from 'react'

function PauseButton(props) {
  return (
   
        <button {...props}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-20 transparent text-white ml-5 hover:scale-[1.1] cursor-pointer">
         <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9v6m-4.5 0V9M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>

        </button>

  )
}

export default PauseButton;