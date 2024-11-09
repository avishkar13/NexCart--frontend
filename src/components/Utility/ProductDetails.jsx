import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';  // Import uuid library
import Navbar from './Navbar';

function ProductDetails() {
    const [product, setProduct] = useState(null);

    useEffect(() => {
        // Get product details from local storage
        const storedProduct = localStorage.getItem('selectedProduct');
        if (storedProduct) {
            setProduct(JSON.parse(storedProduct));
        }
    }, []);

    const addToCart = () => {
        // Fetch current cart from local storage
        const cart = JSON.parse(localStorage.getItem('cart')) || [];

        // Check if the product is already in the cart by matching `name` or `src`
        const existingProductIndex = cart.findIndex(item => item.name === product.name && item.src === product.src);
        
        if (existingProductIndex !== -1) {
            // If product exists, increment the quantity by 1
            cart[existingProductIndex].quantity += 1;
        } else {
            // If product doesn't exist, add it to the cart with a unique id and quantity 1
            const productWithId = { ...product, id: uuidv4(), quantity: 1 };  // Add unique id and set quantity to 1
            cart.push(productWithId);
        }

        // Show success message
        toast.success('Added to Cart!!', {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });

        // Save updated cart to local storage
        localStorage.setItem('cart', JSON.stringify(cart));
    };

    if (!product) return <p>Loading product details...</p>;

    return (
        <>
        <Navbar/>
            <div className="bg-slate-300">
                <div className="min-h-screen flex md:items-center justify-center py-8 md:py-8">
                    <div className="md:w-[90vw] lg:w-[80vw] h-[90vh] shadow-slate-700 md:h-[80vh] border-2 border-slate-300 shadow-2xl flex flex-col md:flex-row md:gap-6 justify-center md:justify-evenly p-4 rounded-3xl">
                        <div className="flex items-center justify-center md:w-[50%] h-[60%] md:h-[100%]">
                            <img className="w-full h-[90%] md:h-[68vh] rounded-lg mb-4" src={product.src} alt="Product" />
                        </div>
                        <div className="flex flex-col justify-center md:w-[50%]">
                            <h2 className="text-3xl font-semibold mb-2">{product.name}</h2>
                            <p className="text-slate-500 mb-4">{product.detail}</p>
                            <div className="flex gap-2">
                                <p className="text-xl font-semibold">{product.new_price}</p>
                                <p className="line-through text-red-700">{product.old_price}</p>
                            </div>
                            <p className="text-green-500 mt-2">{product.discount}</p>
                            <p className="text-gray-600 mt-2">Free delivery</p>
                            <button 
                                onClick={addToCart} 
                                className="bg-green-500 p-2 px-3 my-4 w-fit rounded-full hover:bg-green-600 transition"
                            >
                                Add to cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductDetails;
