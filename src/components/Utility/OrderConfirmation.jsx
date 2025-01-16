import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid"; // Import UUID
import Navbar from "../Utility/Navbar";
import Footer from "../Utility/Footer";

function OrderConfirmation() {
  const [orderId] = useState(uuidv4()); // Generate order ID using uuid
  const [cart, setCart] = useState([]);

  useEffect(() => {
  const storedCart = JSON.parse(sessionStorage.getItem("cart")) || [];
  const sanitizedCart = storedCart.map(item => ({
    ...item,
    new_price: typeof item.new_price === "string"
      ? parseFloat(item.new_price.replace("₹", "").replace(",", ""))
      : item.new_price || 0, // Fallback to 0
    quantity: item.quantity || 1, // Default quantity to 1
  }));
  setCart(sanitizedCart);
}, []);

  // Calculate total with proper validation for new_price and quantity
  const calculateTotal = () => {
    return cart
      .reduce((total, item) => {
        const itemPrice = parseFloat(item.new_price) || 0; // Ensure price is a valid number
        const itemQuantity = parseInt(item.quantity, 10) || 1; // Ensure quantity is a valid number
        return total + itemPrice * itemQuantity;
      }, 0)
      .toFixed(2); // Keep two decimal points
      
  };

  return (
    <>
      <Navbar />
      <div className="bg-slate-100 py-12">
        <div className="min-h-screen flex flex-col items-center py-8">
          <h2 className="text-3xl font-semibold font-mono mb-4">Order Confirmed!</h2>
          <p className="text-lg mb-6">Thank you for shopping with us!</p>

          <div className="w-[95%] md:w-[80%] lg:w-[60%] bg-white rounded-md p-6 shadow-md">
            {/* Order ID */}
            <div className="mb-4">
              <h3 className="text-xl font-semibold">Order ID:</h3>
              <p className="text-lg text-gray-700">{orderId}</p>
            </div>

            {/* Ordered Items */}
            <h3 className="text-xl font-semibold mb-4">Your Order</h3>
            <ul>
              {cart.map((item) => (
                <li key={item.id} className="flex items-center justify-between py-2 border-b">
                  <div className="flex items-center gap-10">
                    <img className="w-20 h-20 object-cover rounded-lg" src={item.src} alt={item.name} />
                    <span>{item.name} x {item.quantity}</span>
                  </div>
                  <span>₹{((parseFloat(item.new_price) || 0) * (parseInt(item.quantity, 10) || 1)).toFixed(2)}</span>
                </li>
              ))}
            </ul>

            {/* Total Price */}
            <h3 className="text-xl font-bold mt-4">
              Total: ₹{calculateTotal()}
            </h3>

            {/* Back to Home Button */}
            <Link to="/home" className="text-blue-500 underline mt-6 inline-block">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default OrderConfirmation;
