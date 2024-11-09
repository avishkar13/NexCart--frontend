import React, { useState } from 'react';
import Navbar from '../Utility/Navbar';
import Footer from '../Utility/Footer';
import ProductCard from '../Utility/ProductCard';

const Men = () => {
  const [showMoreShirts, setShowMoreShirts] = useState(false);
  const [showMoreTshirts, setShowMoreTshirts] = useState(false);
  const [showMoreShoes, setShowMoreShoes] = useState(false);

  const toggleShirts = () => setShowMoreShirts(!showMoreShirts);
  const toggleTshirts = () => setShowMoreTshirts(!showMoreTshirts);
  const toggleShoes = () => setShowMoreShoes(!showMoreShoes);

  return (
    <div>
      <Navbar />
      <main className='bg-slate-100 min-h-full py-12'>

        {/* Shirts Section */}
        <section className="shirts py-8 w-[98vw] md:w-[92vw] mx-auto">
          <h2 className='text-3xl font-semibold font-serif mb-6'>Men's Shirts</h2>
          <div className='flex flex-wrap gap-3 md:gap-6 lg:gap-3 gap-y-5 justify-center'>
            {[
              { src: "/assets/menproducts/men1.webp", name: "Classic White Shirt", detail: "Formal Cotton Shirt", new_price: "₹1,299", old_price: "₹2,199", discount: '41% off' },
              { src: "/assets/menproducts/men2.webp", name: "Casual Blue Denim", detail: "Relaxed Fit Denim Shirt", new_price: "₹999", old_price: "₹1,499", discount: '33% off' },
              { src: "/assets/menproducts/men3.webp", name: "Checked Flannel", detail: "Soft Flannel Shirt", new_price: "₹1,499", old_price: "₹2,199", discount: '32% off' },
              { src: "/assets/menproducts/men4.webp", name: "Linen Blend", detail: "Breathable Summer Shirt", new_price: "₹1,799", old_price: "₹2,799", discount: '36% off' },
              { src: "/assets/menproducts/men5.webp", name: "Mandarin Collar", detail: "Stylish Casual Shirt", new_price: "₹1,099", old_price: "₹1,699", discount: '35% off' },
              { src: "/assets/menproducts/men6.webp", name: "Slim Fit Grey", detail: "Modern Formal Shirt", new_price: "₹1,599", old_price: "₹2,399", discount: '33% off' },
              { src: "/assets/menproducts/men7.webp", name: "Casual Checkered", detail: "Trendy Check Pattern", new_price: "₹1,299", old_price: "₹1,999", discount: '35% off' },
              { src: "/assets/menproducts/men8.webp", name: "Printed Cotton", detail: "Cool Printed Shirt", new_price: "₹899", old_price: "₹1,499", discount: '40% off' },
            ]
              .slice(0, showMoreShirts ? 8 : 4)
              .map((product, index) => (
                <ProductCard key={index} {...product} />
              ))}
          </div>
          <div className='flex justify-center py-6'>
            <button
              onClick={toggleShirts}
              className='bg-slate-400 text-gray-800 text-center w-fit p-2 rounded-full hover:bg-slate-500 hover:scale-110 transition'>
              {showMoreShirts ? 'See less' : 'See more'}
            </button>
          </div>
        </section>

        {/* T-Shirts Section */}
        <section className="tshirts py-4 w-[98vw] md:w-[92vw] mx-auto">
          <h2 className='text-3xl font-semibold font-serif mb-6'>Men's T-Shirts</h2>
          <div className='flex flex-wrap gap-3 md:gap-6 lg:gap-3 gap-y-5 justify-center'>
            {[
              { src: "/assets/menproducts/ment1.webp", name: "Graphic Tee", detail: "Cool Print T-Shirt", new_price: "₹599", old_price: "₹999", discount: '40% off' },
              { src: "/assets/menproducts/ment2.webp", name: "Plain White Tee", detail: "Classic Round Neck", new_price: "₹499", old_price: "₹799", discount: '38% off' },
              { src: "/assets/menproducts/ment3.webp", name: "V-Neck Tee", detail: "Comfortable Everyday Wear", new_price: "₹699", old_price: "₹1,099", discount: '36% off' },
              { src: "/assets/menproducts/ment4.webp", name: "Long Sleeve Tee", detail: "Casual Comfort Fit", new_price: "₹799", old_price: "₹1,299", discount: '39% off' },
              { src: "/assets/menproducts/ment5.webp", name: "Striped Tee", detail: "Stylish Striped Pattern", new_price: "₹649", old_price: "₹1,049", discount: '38% off' },
              { src: "/assets/menproducts/ment6.webp", name: "Henley Neck Tee", detail: "Classic Henley Style", new_price: "₹899", old_price: "₹1,499", discount: '40% off' },
              { src: "/assets/menproducts/ment7.webp", name: "Athletic Tee", detail: "Breathable Sports Tee", new_price: "₹599", old_price: "₹999", discount: '40% off' },
              { src: "/assets/menproducts/ment8.webp", name: "Printed Tee", detail: "Unique Print Design", new_price: "₹699", old_price: "₹1,199", discount: '42% off' },
            ]
              .slice(0, showMoreTshirts ? 8 : 4)
              .map((product, index) => (
                <ProductCard key={index} {...product} />
              ))}
          </div>
          <div className='flex justify-center py-6'>
            <button
              onClick={toggleTshirts}
              className='bg-slate-400 text-gray-800 text-center w-fit p-2 rounded-full hover:bg-slate-500 hover:scale-110 transition'>
              {showMoreTshirts ? 'See less' : 'See more'}
            </button>
          </div>
        </section>

        {/* Sunglass section  */}
        <section className="sunglass py-4  w-[98vw] md:w-[92vw] mx-auto">
          <h2 className=' text-3xl font-semibold font-serif mb-6'>Men's Sunglasses</h2>
          <div className='flex flex-wrap gap-3 md:gap-6 lg:gap-3 gap-y-5 justify-center mb-6'>
            <ProductCard src="/assets/menproducts/sgmen1.webp" name="Aviator Sunglasses" detail="Stylish Aviator Frames" new_price="₹1,499" old_price="₹2,499" discount='40% off' />
            <ProductCard src="/assets/menproducts/sgmen2.webp" name="Wayfarer Sunglasses" detail="Classic Wayfarer Look" new_price="₹1,299" old_price="₹2,099" discount='38% off' />
            <ProductCard src="/assets/menproducts/sgmen3.webp" name="Round Frame Sunglasses" detail="Trendy Round Design" new_price="₹1,099" old_price="₹1,799" discount='39% off' />
            <ProductCard src="/assets/menproducts/sgmen4.webp" name="Sport Sunglasses" detail="Rugged and Durable" new_price="₹1,699" old_price="₹2,799" discount='39% off' />
          </div>
        </section>

        {/* Shoes Section */}
        <section className="shoes py-4 w-[98vw] md:w-[92vw] mx-auto">
          <h2 className='text-3xl font-semibold font-serif mb-6'>Men's Shoes</h2>
          <div className='flex flex-wrap gap-3 md:gap-6 lg:gap-3 gap-y-5 justify-center'>
            {[
              { src: "/assets/menproducts/shoesm1.webp", name: "Running Shoes", detail: "Lightweight Sports Shoes", new_price: "₹1,999", old_price: "₹3,299", discount: '39% off' },
              { src: "/assets/menproducts/shoesm2.webp", name: "Casual Sneakers", detail: "Trendy Casual Wear", new_price: "₹1,499", old_price: "₹2,499", discount: '40% off' },
              { src: "/assets/menproducts/shoesm3.webp", name: "Formal Leather Shoes", detail: "Elegant Leather Design", new_price: "₹2,999", old_price: "₹4,499", discount: '33% off' },
              { src: "/assets/menproducts/shoesm4.webp", name: "High Top Sneakers", detail: "Urban High Top Style", new_price: "₹1,899", old_price: "₹3,199", discount: '41% off' },
              { src: "/assets/menproducts/shoesm5.webp", name: "Loafers", detail: "Comfortable Casual Loafers", new_price: "₹1,399", old_price: "₹2,199", discount: '36% off' },
              { src: "/assets/menproducts/shoesm6.webp", name: "Casual shoes", detail: "Lightweight Casual Sneakers", new_price: "₹599", old_price: "₹999", discount: '40% off' },
              { src: "/assets/menproducts/shoesm7.webp", name: "Casual Shoes", detail: "Stylish Shoes", new_price: "₹3,199", old_price: "₹4,999", discount: '40% off' },
              { src: "/assets/menproducts/shoesm8.webp", name: "Formal Shoes", detail: "Formal shoes design", new_price: "₹4,199", old_price: "₹5,999", discount: '42% off' },
            ]
              .slice(0, showMoreShoes ? 8 : 4)
              .map((product, index) => (
                <ProductCard key={index} {...product} />
              ))}
          </div>
          <div className='flex justify-center py-6'>
            <button
              onClick={toggleShoes}
              className='bg-slate-400 text-gray-800 text-center w-fit p-2 rounded-full hover:bg-slate-500 hover:scale-110 transition'>
              {showMoreShoes ? 'See less' : 'See more'}
            </button>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default Men;
