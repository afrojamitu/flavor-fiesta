import React from 'react';
import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className='w-9/12 mx-auto flex flex-col items-center justify-center my-36'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxyQ0BqStBvRyWA88WppSeEmwJoJ2S_xNv5A&usqp=CAU" alt="" />
            <h1 className='text-5xl font-semibold'>Oops! You seem to be lost!</h1>

            <Link to='/'><button className='bg-red-600 hover:bg-red-500 py-1 px-3 my-5 md:py-2 md:px-6 rounded text-white font-bold hover:scale-105' style={{transition: '.5s'}}>Go Back</button></Link>
            
        </div>
    );
};

export default Error;