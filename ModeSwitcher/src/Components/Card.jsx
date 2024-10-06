import React from 'react'


function Card (){
    
    return(
        <div className='flex flex-col justify-center'>
            <div 
            className="bg-[url('https://img.freepik.com/free-photo/close-up-kitten-by-window_23-2150782379.jpg?t=st=1728226286~exp=1728229886~hmac=01cdc2a5e1e2ea5d5596d38c5d1fba7c730136de4376f495df59d71be8283486&w=1380')] 
                        h-64 w-1/2 bg-no-repeat bg-cover" />
            <div 
            className='bg-gray-900 w-1/2 
                    dark:bg-red-600'>
                <h3 
                    className='text-white dark:text-yellow-500' >
                        My name is Khadeer, we are studying today about context API
                </h3>
                <h5 
                    className='text-blue-500 dark:text-gold-700' >
                        Welcome to my card section
                </h5>
            </div>
            <div 
                    className='bg-gray-900 dark:bg-red-600 w-1/2 flex justify-end'>
                        <button 
                            className='bg-green-400 px-2 py-1 m-3 font-bold rounded hover:scale-110 dark:bg-white'>
                                Open
                        </button>
            </div>
        </div>
    )
}


export default Card;