import React from 'react'

function Header() {
  return (
    <nav className='bg-black font-sans'>
      <div className='px-10 py-5'>
        <div className='flex flex-row justify-between align-center'>
          <div className='text-white my-auto'>
            <h1>Project Management App</h1>
          </div>
          <div className='w-40'>
            <div className='text-white flex flex-row justify-around'>
              {/* SHOW ALL ICON */}
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-10 w-10 p-2 cursor-pointer border-2 rounded-full hover:border-yellow-300'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path d='M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z' />
              </svg>
              {/* CREATE NEW ICON */}
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-10 w-10 p-1 cursor-pointer border-2 rounded-full hover:border-yellow-300'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M12 6v6m0 0v6m0-6h6m-6 0H6'
                />
              </svg>
              {/* SEARCH BY NAME ICON */}
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-10 w-10 p-2 cursor-pointer border-2 rounded-full hover:border-yellow-300'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z'
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header
