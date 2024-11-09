import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import Navbar from '../Utility/Navbar';
import Footer from '../Utility/Footer';
import { Link } from 'react-router-dom';

function Cart() {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        // Fetch cart data from local storage when component mounts
        const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
        
        // Ensure the new_price is a number and parse it correctly
        const updatedCart = storedCart.map(item => ({
            ...item,
            new_price: typeof item.new_price === 'string' ? parseFloat(item.new_price.replace('₹', '').replace(',', '')) : item.new_price
        }));
        setCart(updatedCart);
    }, []);

    const handleRemove = (productId) => {
        // Filter out the product with the given ID from the cart
        const updatedCart = cart.filter(item => item.id !== productId);

        // Update the localStorage with the new cart
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        setCart(updatedCart);

        // Show removal success notification
        toast.success('Product removed from cart!', {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    };

    const handleIncreaseQuantity = (productId) => {
        // Increase the quantity of the product in the cart
        const updatedCart = cart.map(item => {
            if (item.id === productId) {
                item.quantity += 1;
            }
            return item;
        });

        // Update the localStorage with the new cart
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        setCart(updatedCart);
    };

    const handleDecreaseQuantity = (productId) => {
        // Decrease the quantity of the product in the cart, but not below 1
        const updatedCart = cart.map(item => {
            if (item.id === productId && item.quantity > 1) {
                item.quantity -= 1;
            }
            return item;
        });

        // Update the localStorage with the new cart
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        setCart(updatedCart);
    };

    const calculateTotal = () => {
        // Calculate the total price of all items in the cart
        return cart.reduce((total, item) => total + (item.new_price * item.quantity), 0).toFixed(2);
    };

    const formatCurrency = (amount) => {
        // Format the number to INR currency
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 2,
        }).format(amount);
    };

    const renderProductPrice = (item) => {
        // Calculate and return formatted price for each product
        const totalPrice = item.new_price * item.quantity;
        return formatCurrency(totalPrice);
    };

    if (cart.length === 0) return (
        <>
            <Navbar />
            <main className='bg-slate-100 min-h-screen'>
            <p className='py-24 text-center text-3xl font-mono'>Your cart is empty! <br /> Try adding products to your Cart.</p>
            </main>
        </>
    );

    return (
        <>
            <Navbar />
            <div className="bg-slate-300 py-12">
                <div className="min-h-screen flex flex-col items-center py-8 ">
                    <h2 className="text-3xl font-semibold font-mono mb-4">Your Cart</h2>
                    <div className=" w-[95%] md:w-[80%] lg:w-[60%] bg-slate-50 rounded-md ">
                        <ul>
                            {cart.map(item => (
                                <li key={item.id} className="border-b p-4 flex justify-between items-center">
                                    <div className="flex gap-4">
                                        <img className="w-24 h-24 object-cover rounded-lg" src={item.src} alt={item.name} />
                                        <div>
                                            <h3 className="text-lg font-semibold">{item.name}</h3>
                                            <p className="text-sm text-gray-500 w-[95%] ">{item.detail}</p>
                                            <div className="flex items-center gap-2 mt-2">
                                                <button
                                                    onClick={() => handleDecreaseQuantity(item.id)}
                                                    className="bg-gray-400 px-2 rounded-lg "
                                                >
                                                    -
                                                </button>
                                                <span>{item.quantity}</span>
                                                <button
                                                    onClick={() => handleIncreaseQuantity(item.id)}
                                                    className="bg-gray-400 px-2 rounded-lg"
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        {/* Display formatted price */}
                                        <p className="md:text-xl font-semibold">{renderProductPrice(item)}</p>
                                        <button
                                            onClick={() => handleRemove(item.id)}
                                            className="text-red-600 mt-2"
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div className="flex justify-between mt-4 p-4">
                            <h3 className=" text-xl md:text-2xl font-semibold">Total: {formatCurrency(calculateTotal())}</h3>
                            <Link to="/checkout" >
                            <button className="bg-green-500 p-2 px-4 rounded-full text-white">
                                Checkout
                            </button></Link>
                        </div>
                    </div>
                
                </div>
            </div>
            
            <Footer/>
        </>
    );
}

export default Cart;
