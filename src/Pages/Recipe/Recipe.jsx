import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaHeart, FaThumbsUp } from 'react-icons/fa';
import Recipe1 from './Recipe1';
import Recipe2 from './Recipe2';
import Recipe3 from './Recipe3';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Recipe = () => {
    const recipies = useLoaderData()
    const { chef_name, chef_bio, banner, likes, total_recipe, experience, recipe } = recipies;

    const [fav1, setFav1] = useState(false)
    const [fav2, setFav2] = useState(false)
    const [fav3, setFav3] = useState(false)

    const handleToast = () =>{
        toast.success('Recipe Added to Favorite!')
    }

    return (
        <div className='md:w-9/12 mx-auto gap-5 overflow-hidden'>
            <div className='my-10 mx-5 rounded flex flex-col gap-4'>
                <img className='rounded' src={banner} alt="" />
                <h1 className='text-3xl font-semibold'>{chef_name}</h1>
                <p className='text-lg'><span className='font-bold'>About the Chef:</span> {chef_bio}</p>
                <div className='flex justify-between md:text-lg font-semibold'>
                    <p>Number of Recipe: {total_recipe}</p>
                    <p>Experience: {experience}</p>
                </div>
                <div className='text-2xl'>
                    <p className='flex items-center gap-2'><FaThumbsUp className='text-blue-600' />{likes}</p>
                </div>
            </div>

            <div className='my-10'>
                <h1 className='text-2xl text-center font-semibold'>Recipe's by this Chef</h1>
                {/* recipe 1 */}

                <div className='my-8 shadow-xl'>
                    <h2 className='text-xl border-y rounded text-center font-semibold p-3'>{recipe.recipe_1.name}</h2>

                    <div className='grid md:grid-cols-12 gap-5 m-5 pb-5 rounded-xl'>
                        <div className='md:col-start-1 md:col-end-5'>
                            <img className='h-full w-full rounded-lg' src={recipe.recipe_1.food_img} alt="" />
                        </div>

                        <div className='md:col-start-5 md:col-end-10'>
                            <h2 className='text-lg font-semibold'>Cooking Method</h2>
                            <p>{recipe.recipe_1.method}</p>
                        </div>

                        <div className='md:col-start-10 md:col-end-13'>
                            <h2 className='text-lg font-semibold'>Ingredients</h2>
                            {
                                recipe.recipe_1.ingredients.map(ingredient => {
                                    return <div><Recipe1 key={recipe.recipe_1.id} ingredient={ingredient}></Recipe1>
                                    <ToastContainer /></div>
                                })
                            }
                        </div>
                    </div>

                    <div onClick={() => setFav1(true)} className='flex justify-center'>
                        <button onClick={handleToast} disabled={fav1} className='flex items-center gap-2 mb-10 border py-2 px-3 rounded'><FaHeart className='text-2xl' />Add to Favorite</button>
                    </div>
                </div>


                {/* recipe 2 */}
                <div className='my-8 shadow-xl'>
                    <h2 className='text-xl border-y rounded text-center font-semibold p-3'>{recipe.recipe_2.name}</h2>

                    <div className='grid md:grid-cols-12 md:gap-5 m-5 pb-5 rounded-xl'>
                        <div className='md:col-start-1 md:col-end-5'>
                            <img className='h-full w-full rounded-lg' src={recipe.recipe_2.food_img} alt="" />
                        </div>

                        <div className='md:col-start-5 md:col-end-10'>
                            <h2 className='text-lg font-semibold'>Cooking Method</h2>
                            <p>{recipe.recipe_2.method}</p>
                        </div>

                        <div className='md:col-start-10 md:col-end-13'>
                            <h2 className='text-lg font-semibold'>Ingredients</h2>
                            {
                                recipe.recipe_2.ingredients.map(ingredient => {
                                    return <div><Recipe2 key={recipe.recipe_1.id} ingredient={ingredient}></Recipe2>
                                    <ToastContainer /></div>
                                })
                            }
                        </div>
                    </div>

                    <div onClick={() => setFav2(true)}  className='flex justify-center'>
                        <button onClick={handleToast} disabled={fav2} className='flex items-center gap-2 mb-10 border py-2 px-3 rounded'><FaHeart className='text-2xl' />Add to Favorite</button>
                    </div>
                </div>

                {/* recipe 3 */}
                <div className='my-8 shadow-xl'>
                    <h2 className='text-xl border-y rounded text-center font-semibold p-3'>{recipe.recipe_3.name}</h2>

                    <div className='grid md:grid-cols-12 gap-5 m-5 pb-5 rounded-xl'>
                        <div className='md:col-start-1 md:col-end-5'>
                            <img className='h-full w-full rounded-lg' src={recipe.recipe_3.food_img} alt="" />
                        </div>

                        <div className='md:col-start-5 md:col-end-10'>
                            <h2 className='text-lg font-semibold'>Cooking Method</h2>
                            <p>{recipe.recipe_3.method}</p>
                        </div>

                        <div className='md:col-start-10 md:col-end-13'>
                            <h2 className='text-lg font-semibold'>Ingredients</h2>
                            {
                                recipe.recipe_3.ingredients.map(ingredient => {
                                    return <div><Recipe3 key={recipe.recipe_1.id} ingredient={ingredient}></Recipe3>
                                    <ToastContainer /></div>
                                })
                            }
                        </div>
                    </div>

                    <div onClick={() => setFav3(true)} className='flex justify-center'>
                        <button onClick={handleToast} disabled={fav3} className='flex items-center gap-2 mb-10 border py-2 px-3 rounded'><FaHeart className='text-2xl' />Add to Favorite</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recipe;