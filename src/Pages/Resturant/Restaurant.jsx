import React from 'react';

const Restaurant = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 w-9/12 mx-auto'>
            
            <div className='grid grid-cols-2 gap-3'>
                <img className='w-full h-full rounded-lg' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFqnnWMR__HRNF2TSMm4t0KtBaswg7zU-LPw&usqp=CAU' alt="" />
                <img className='w-full h-full rounded-lg' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDkoO6lIStxHjyiUR0EeVbOcEQaSW47oYz_w&usqp=CAU' alt="" />
                <img className='w-full h-full rounded-lg' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeMwjqsUEhQrnWs3lxMrOfpExlddA4d5DLeA&usqp=CAU' alt="" />
                <img className='w-full h-full rounded-lg' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_FUFcnQJYO5a1bsOl5ehwz-dAYRle-n1raw&usqp=CAU' alt="" />
            </div>
            <div>
                <p className='text-lg'>
                <span className='text-2xl font-semibold text-red-600'>Flavor Fiesta</span> in a dining experience like no other at our restaurant. Our menu features carefully crafted dishes, made with the freshest ingredients, bursting with flavors and served by our attentive staff. Whether you're in the mood for a juicy steak, succulent seafood, or a vegetarian delight, we've got you covered.<br></br><br></br> The warm, welcoming ambiance and cozy atmosphere provide the perfect setting for a romantic dinner or a night out with friends. With an extensive wine list, signature cocktails, and decadent desserts, our restaurant offers a complete culinary experience that will leave you feeling satisfied and eager to return.
                </p>
            </div>
        </div>
    );
};

export default Restaurant;
