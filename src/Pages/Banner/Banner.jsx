import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner-bg-img flex flex-col justify-center items-center'>
            <div className='text-center flex flex-col gap-5 '>
                <h1 className='text-4xl md:text-8xl'>Get More Than <span className='text-5xl md:text-9xl text-red-700 italic'>100</span><br></br> Italian Recipe's</h1>
                <p className='text-lg md:text-4xl'>And become a Master Chef on Italian Cuisine!</p>
            </div>

        </div>
    );
};

export default Banner;