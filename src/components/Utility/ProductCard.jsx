// src/components/ProductCard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

function ProductCard({ src, name, detail, new_price, old_price, discount }) {
  const navigate = useNavigate();

  const handleProductClick = () => {
    // Save product data to local storage
    const selectedProduct = { src, name, detail, new_price, old_price, discount };
    localStorage.setItem('selectedProduct', JSON.stringify(selectedProduct));

    // Navigate to the static product detail page
    navigate('/product-details');
  };

  return (
    <div
      className='w-[45vw] md:w-[40vw] lg:w-[22vw] xl:w-[20vw] h-[45vh] md:h-[60vh] lg:h-[40vh] xl:h-[53vh] border border-gray-600 shadow-lg rounded-lg cursor-pointer bg-white hover:scale-105 hover:transition-all hover:duration-200 hover:ease-in-out'
      onClick={handleProductClick}
    >
      <img className='w-full h-[25vh] md:h-[45vh] lg:h-[25vh] xl:h-[35vh] rounded-lg mb-1' src={src} alt="Product" />
      <p className='px-2 font-semibold text-gray-500'>{name}</p>
      <p className='px-2 text-md overflow-hidden max-h-[5rem] truncate'>{detail}</p>
      <div className='flex gap-2 px-2'>
        <p className='font-semibold'>{new_price}</p>
        <p className='line-through text-gray-500'>{old_price}</p>
      </div>
      <p className='text-green-600 px-2'>{discount}</p>
      <p className='px-2'>Free delivery</p>
    </div>
  );
}

export default ProductCard;
