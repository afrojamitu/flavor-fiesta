import React from 'react';

const DietPlan = () => {
    return (
        <div className='grid md:grid-cols-12 gap-8 justify-center items-center'>
            <div className='md:col-start-1 md:col-end-8 gap-5'>
                <div className='grid md:grid-cols-2'>
                    <div className='border-r-2 border-b p-3'>
                        <span className='text-xl font-bold'>Breakfast:</span>
                        <ul className='list-disc'>
                            <li>Whole grain toast with avocado and tomato</li>
                            <li>Greek yogurt with berries and nuts</li>
                            <li>Oatmeal with banana and almond butter</li>
                            <li>Veggie omelette with whole grain toast</li>
                        </ul>
                    </div>

                    <div className='border-l md:border-b ps-8 p-3'>
                        <span className='text-xl font-bold'>Snack:</span>
                        <ul className='list-disc'>
                            <li>Apple slices with almond butter</li>
                            <li>Carrots and hummus</li>
                            <li>Trail mix with nuts and dried fruit</li>
                            <li>Greek yogurt with honey and granola</li>
                        </ul>
                    </div>

                    <div className='border-r-2 border-t p-3'>
                        <span className='text-xl font-bold'>Lunch:</span>
                        <ul className='list-disc'>
                            <li>Grilled chicken salad with mixed greens and balsamic dressing</li>
                            <li>Turkey and veggie wrap with whole grain tortilla</li>
                            <li>Lentil soup with whole grain bread</li>
                            <li>Tuna salad with mixed greens</li>
                        </ul>
                    </div>

                    <div className=' border-t border-l ps-8 p-3'>
                        <span className='text-xl font-bold'> Dinner:</span>
                        <ul className='list-disc'>
                            <li>Grilled salmon with roasted vegetables</li>
                            <li>Quinoa bowl with roasted veggies and tofu</li>
                            <li>Grilled chicken with sweet potato and broccoli</li>
                            <li>Grilled shrimp with brown rice</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='md:col-start-8 md:col-end-13'>
                <img className='w-full h-full' src="https://www.australianfinefoods.com/wp-content/uploads/2020/09/Australian-fine-food-food-pyramid-turn-into-pie-chart-against-white-background.jpg" alt="" />
            </div>
        </div>
    );
};

export default DietPlan;