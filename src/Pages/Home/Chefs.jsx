import React from 'react';
import { Link } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';
import LazyLoad from 'react-lazyload';
import './Chef.css'


const Chefs = ({ chef }) => {
    // console.log(chef);
    return (
        <div className='mx-5'>
            <div className='flex gap-5 shadow-2xl rounded-lg p-3 md:p-8 h-full'>
                <div className='w-[50%]'>
                    <LazyLoad>
                    <img className='w-full h-full rounded-lg' src={chef.chef_img} alt="" />
                    </LazyLoad>
                </div>

                <div className='flex flex-col justify-center'>
                    <h2 className='text-xl md:text-2xl font-semibold pb-3'>{chef.chef_name}</h2>
                    <p className='text-lg md:pb-3'>Experience: {chef.experience}</p>
                    <p className='text-lg pb-3 md:pb-3'>Total Recipes: {chef.total_recipe}</p>
                    <div className='flex items-center justify-between md:grid'>
                        <Link to={`/chef/${chef.id}`} className='bg-red-600 py-1 px-3 text-white md:font-bold rounded'>View Recipe</Link>
                        <p className='text-lg md:my-3 flex gap-2 md:gap-4 items-center'><FaHeart /> {chef.likes}</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Chefs;