import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Utility/Navbar";
import Footer from "../Utility/Footer";
import { toast } from "react-toastify";

function Checkout() {
  const [cart, setCart] = useState([]);
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    address: "",
  });
  const [paymentMethod, setPaymentMethod] = useState(""); // For payment method selection
  const [isProcessing, setIsProcessing] = useState(false); // For loading spinner
  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const sanitizedCart = storedCart.map(item => ({
      ...item,
      new_price: typeof item.new_price === "string"
        ? parseFloat(item.new_price.replace("₹", "").replace(",", ""))
        : item.new_price || 0, // Fallback to 0
      quantity: item.quantity || 1, // Default quantity to 1
    }));
    setCart(sanitizedCart);
  }, []);

  const calculateTotal = () => {
    return cart.reduce((total, item) => {
      const itemPrice = item.new_price || 0;
      const itemQuantity = item.quantity || 1;
      return total + itemPrice * itemQuantity;
    }, 0).toFixed(2);
  };

  const handleInputChange = (e) => {
    setUserDetails({
      ...userDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handlePaymentChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handlePlaceOrder = () => {
    if (!userDetails.name || !userDetails.email || !userDetails.address) {
      toast.error("Please fill out all details before placing the order.");
      return;
    }

    if (!paymentMethod) {
      toast.error("Please select a payment method.");
      return;
    }

     // Save cart data temporarily before proceeding
  sessionStorage.setItem("cart", JSON.stringify(cart));

    // Simulate order processing with a loading spinner
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      toast.success("Order placed successfully!");
      localStorage.removeItem("cart");
      navigate("/order-confirmation");
    }, 3000);
  };

  return (
    <>
      <Navbar />
      <div className="bg-slate-100 py-10">
        <div className="min-h-screen flex flex-col items-center py-8">
          <h2 className="text-3xl font-semibold font-mono mb-4">
            Checkout
          </h2>
          <div className="w-[95%] md:w-[80%] lg:w-[60%] bg-white rounded-md p-6 shadow-md">
            {/* User Details */}
            <h3 className="text-xl font-semibold mb-4">Customer Details</h3>
            <form className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={userDetails.name}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-md"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={userDetails.email}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-md"
                required
              />
              <textarea
                name="address"
                placeholder="Shipping Address"
                value={userDetails.address}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-md"
                required
              />
            </form>

            {/* Payment Method Dropdown */}
            <h3 className="text-xl font-semibold mt-6 mb-4">Payment Method</h3>
            <select
              value={paymentMethod}
              onChange={handlePaymentChange}
              className="w-full p-2 border rounded-md"
            >
              <option value="">Select Payment Method</option>
              <option value="COD">Cash on Delivery</option>
              <option value="Card">Credit/Debit Card</option>
              <option value="UPI">UPI Payment</option>
            </select>

            {/* Order Summary */}
            <h3 className="text-xl font-semibold mt-6 mb-4">Order Summary</h3>
            <ul>
              {cart.map((item) => (
                <li key={item.id} className="flex justify-between py-2 border-b">
                  <span>{item.name} x {item.quantity || 1}</span>
                  <span>₹{((item.new_price || 0) * (item.quantity || 1)).toFixed(2)}</span>
                </li>
              ))}
            </ul>
            <h3 className="text-xl font-bold mt-4">
              Total: ₹{calculateTotal()}
            </h3>

            {/* Loading Spinner */}
            {isProcessing && (
              <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
                <div className="spinner-border animate-spin inline-block w-12 h-12 border-4 rounded-full border-t-green-500"></div>
                <p className="text-white text-center ml-5 ">Processing your order...</p>
              </div>
            )}

            {/* Place Order */}
            <button
              onClick={handlePlaceOrder}
              disabled={isProcessing}
              className={`mt-6 w-full text-white p-2 rounded-md ${
                isProcessing ? "bg-gray-400" : "bg-green-500"
              }`}
            >
              {isProcessing ? "Placing Order..." : "Place Order"}
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Checkout;
