import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import Chefs from './Chefs';
import Restaurant from '../Resturant/Restaurant';
import DietPlan from '../DietPlan/DietPlan';


const Home = () => {
    const [chefs, setChefs] = useState([])

    useEffect(() => {
        fetch('https://flavor-fiesta-server.vercel.app/chefs')
            .then(res => res.json())
            .then(data => setChefs(data))
    }, [])

    return (
        <div>
            <Banner></Banner>

            <h1 className='text-center text-3xl md:text-5xl font-bold my-8'>Meet Our <span className='text-red-600'>Chefs</span></h1>
            <div className='grid md:grid-cols-2 md:w-9/12 mx-auto gap-5 md:gap-12 my-8'>

                {
                    chefs.map(chef => {
                        return <Chefs key={chef.id} chef={chef}></Chefs>
                    })
                }
            </div>

            <div className='mb-12'>
                <h1 className='text-2xl md:text-4xl text-center font-semibold pb-8'>Inside of Our Restaurant</h1>
                <Restaurant></Restaurant>
            </div>

            <div className='mb-12 w-9/12 mx-auto'>
                <h1 className='text-3xl text-center font-semibold pb-8'>A Diet Plan you must follow</h1>
                <DietPlan></DietPlan>
            </div>

        </div>
    );
};

export default Home;