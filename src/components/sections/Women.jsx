import React, { useState } from 'react';
import Navbar from '../Utility/Navbar';
import Footer from '../Utility/Footer';
import ProductCard from '../Utility/ProductCard';

function Women() {
  const [showMoreSarees, setShowMoreSarees] = useState(false);
  const [showMoreKurtis, setShowMoreKurtis] = useState(false);
  const [showMoreDresses, setShowMoreDresses] = useState(false);
  const [showMoreSunglasses, setShowMoreSunglasses] = useState(false);

  const toggleSarees = () => setShowMoreSarees(prev => !prev);
  const toggleKurtis = () => setShowMoreKurtis(prev => !prev);
  const toggleDresses = () => setShowMoreDresses(prev => !prev);
  const toggleSunglasses = () => setShowMoreSunglasses(prev => !prev);

  return (
    <>
      <Navbar />
      <main className="bg-slate-100 min-h-full py-12">

        {/* Saree section */}
        <section className="sarees py-8 w-[98vw] md:w-[92vw] mx-auto">
          <h2 className="text-3xl font-semibold font-serif mb-6">Saree Collection</h2>
          <div className="flex flex-wrap gap-3 md:gap-6 lg:gap-3 gap-y-5 justify-center mb-6">
            <ProductCard src="/assets/womenproducts/saree1.webp" name=" Silk Saree" detail="Elegant  silk saree with intricate gold embroidery" new_price="₹4,999" old_price="₹6,999" discount="30% off" />
            <ProductCard src="/assets/womenproducts/saree2.webp" name="Blue Satin Saree" detail="Luxurious blue satin saree with silver accents" new_price="₹3,499" old_price="₹4,999" discount="40% off" />
            <ProductCard src="/assets/womenproducts/saree3.webp" name=" Floral Saree" detail="White saree with beautiful floral designs" new_price="₹2,999" old_price="₹4,299" discount="30% off" />
            <ProductCard src="/assets/womenproducts/saree4.webp" name="Red Chiffon Saree" detail="Lightweight red chiffon saree with a modern touch" new_price="₹3,299" old_price="₹4,599" discount="28% off" />
            {showMoreSarees && (
              <>

                <ProductCard src="/assets/womenproducts/saree5.webp" name=" Saree" detail="Rich black saree with designed borders" new_price="₹5,499" old_price="₹7,499" discount="27% off" />
                <ProductCard src="/assets/womenproducts/saree6.webp" name="Black Saree" detail="Modern black  saree with intricate patterns" new_price="₹6,499" old_price="₹8,499" discount="24% off" />
                <ProductCard src="/assets/womenproducts/saree7.webp" name="Brown Saree" detail="Delicate brown saree with a modern twist" new_price="₹4,199" old_price="₹5,799" discount="30% off" />
                <ProductCard src="/assets/womenproducts/saree8.webp" name="white Silk Saree" detail="Gorgeous white silk saree with golden floral design" new_price="₹4,999" old_price="₹6,499" discount="23% off" />
              </>
            )}
          </div>
          <div className="flex justify-center py-6">
            <button
              onClick={toggleSarees}
              className="bg-slate-400 text-gray-800 text-center w-fit p-2 rounded-full hover:bg-slate-500 hover:scale-110 transition">
              {showMoreSarees ? 'See less' : 'See more'}
            </button>
          </div>
        </section>

        {/* Kurti Collection */}
        <section className="kurti py-4 w-[98vw] md:w-[92vw] mx-auto">
          <h2 className="text-3xl font-semibold font-serif mb-6">Kurti Collection</h2>
          <div className="flex flex-wrap gap-3 md:gap-6 lg:gap-3 gap-y-5 justify-center mb-6">
            <ProductCard src="/assets/womenproducts/kurti1.webp" name="Cotton Floral Kurti" detail="Light cotton kurti with beautiful floral prints" new_price="₹899" old_price="₹1,299" discount="30% off" />
            <ProductCard src="/assets/womenproducts/kurti2.webp" name="Georgette Long Kurti" detail="Elegant georgette long kurti with intricate lacework" new_price="₹1,299" old_price="₹1,799" discount="28% off" />
            <ProductCard src="/assets/womenproducts/kurti3.webp" name="Silk Embroidered Kurti" detail="Silk kurti with hand-embroidered details" new_price="₹1,999" old_price="₹2,599" discount="23% off" />
            <ProductCard src="/assets/womenproducts/kurti4.webp" name="Cotton A-line Kurti" detail="Casual cotton A-line kurti with a chic design" new_price="₹1,099" old_price="₹1,599" discount="31% off" />
            {showMoreKurtis && (
              <>

                <ProductCard src="/assets/womenproducts/kurti5.webp" name="Chikan Work Kurti" detail="Traditional chikan work kurti with delicate patterns" new_price="₹1,799" old_price="₹2,299" discount="22% off" />
                <ProductCard src="/assets/womenproducts/kurti6.webp" name="Linen Kurti with Pockets" detail="Comfortable linen kurti with functional pockets" new_price="₹1,499" old_price="₹2,099" discount="28% off" />
                <ProductCard src="/assets/womenproducts/kurti7.webp" name="Rayon Printed Kurti" detail="Stylish rayon kurti with modern geometric prints" new_price="₹999" old_price="₹1,499" discount="33% off" />
                <ProductCard src="/assets/womenproducts/kurti8.webp" name="Embroidered Cotton Kurti" detail="Classic embroidered cotton kurti with elegant design" new_price="₹1,199" old_price="₹1,799" discount="33% off" />
              </>
            )}
          </div>
          <div className="flex justify-center py-6">
            <button
              onClick={toggleKurtis}
              className="bg-slate-400 text-gray-800 text-center w-fit p-2 rounded-full hover:bg-slate-500 hover:scale-110 transition">
              {showMoreKurtis ? 'See less' : 'See more'}
            </button>
          </div>
        </section>

        {/* Dress Collection */}
        <section className="dress py-4 w-[98vw] md:w-[92vw] mx-auto">
          <h2 className="text-3xl font-semibold font-serif mb-6">Dresses Collection</h2>
          <div className="flex flex-wrap gap-3 md:gap-6 lg:gap-3 gap-y-5 justify-center mb-6">
            <ProductCard src="/assets/womenproducts/dress1.webp" name="Black Dress" detail="Flowing Black dress perfect for party wear" new_price="₹2,499" old_price="₹3,499" discount="28% off" />
            <ProductCard src="/assets/womenproducts/dress2.webp" name="violet Cocktail Dress" detail="Sophisticated violet cocktail dress with a sleek fit" new_price="₹3,499" old_price="₹4,499" discount="22% off" />
            <ProductCard src="/assets/womenproducts/dress3.webp" name="Black Summer Dress" detail="Bright black print summer dress for sunny days" new_price="₹1,799" old_price="₹2,599" discount="31% off" />
            <ProductCard src="/assets/womenproducts/dress4.webp" name="Blue Shift Dress" detail="Comfortable blue shift dress for casual outings" new_price="₹1,799" old_price="₹2,499" discount="28% off" />
            {showMoreDresses && (
              <>

                <ProductCard src="/assets/womenproducts/dress5.webp" name="Floral printed Dress" detail="Elegant floral printed dress for formal occasions" new_price="₹2,999" old_price="₹3,999" discount="25% off" />
                <ProductCard src="/assets/womenproducts/dress6.webp" name="white Dress" detail="Stylish white printed dress for night outs" new_price="₹2,199" old_price="₹2,899" discount="24% off" />
                <ProductCard src="/assets/womenproducts/dress7.webp" name="Brown Pleated Dress" detail="Charming brown pleated dress for casual or semi-formal events" new_price="₹2,499" old_price="₹3,299" discount="24% off" />
                <ProductCard src="/assets/womenproducts/dress8.webp" name="Pink Bodycon Dress" detail="Stylish pink bodycon dress for night outs" new_price="₹1,799" old_price="₹2,299" discount="22% off" />
              </>
            )}
          </div>
          <div className="flex justify-center py-6">
            <button
              onClick={toggleDresses}
              className="bg-slate-400 text-gray-800 text-center w-fit p-2 rounded-full hover:bg-slate-500 hover:scale-110 transition">
              {showMoreDresses ? 'See less' : 'See more'}
            </button>
          </div>
        </section>

        {/* Handbag section */}
        <section className="handbag py-4 w-[98vw] md:w-[92vw] mx-auto">
          <h2 className="text-3xl font-semibold font-serif mb-6">Women's Handbags</h2>
          <div className="flex flex-wrap gap-3 md:gap-6 lg:gap-3 gap-y-5 justify-center mb-6">
            <ProductCard
              src="/assets/womenproducts/hb1.webp"
              name="Elegant Brown Handbag"
              detail="Premium quality leather handbag with a spacious interior."
              new_price="₹2,999"
              old_price="₹4,499"
              discount="33% off"
            />
            <ProductCard
              src="/assets/womenproducts/hb2.webp"
              name="Chic Black Tote"
              detail="Stylish black tote bag  perfect for any occasion."
              new_price="₹2,199"
              old_price="₹3,499"
              discount="37% off"
            />
            <ProductCard
              src="/assets/womenproducts/hb3.webp"
              name="Red Velvet Clutch"
              detail="Elegant red velvet clutch, ideal for evening events and parties."
              new_price="₹1,799"
              old_price="₹2,799"
              discount="36% off"
            />
            <ProductCard
              src="/assets/womenproducts/hb4.webp"
              name="Beige Leather Satchel"
              detail="Classic beige satchel with premium leather and stylish detailing."
              new_price="₹3,499"
              old_price="₹5,499"
              discount="36% off"
            />
          </div>
        </section>


        {/* Sunglasses Collection */}
        <section className="sunglasses py-4 w-[98vw] md:w-[92vw] mx-auto">
          <h2 className="text-3xl font-semibold font-serif mb-6">Sunglasses Collection</h2>
          <div className="flex flex-wrap gap-3 md:gap-6 lg:gap-3 gap-y-5 justify-center mb-6">
            <ProductCard src="/assets/womenproducts/sgw1.webp" name="Aviator Sunglasses" detail="Classic aviator sunglasses with gold frame" new_price="₹999" old_price="₹1,399" discount="29% off" />
            <ProductCard src="/assets/womenproducts/sgw2.webp" name="Cat-eye Sunglasses" detail="Fashionable desinged sunglasses in black" new_price="₹1,299" old_price="₹1,799" discount="28% off" />
            <ProductCard src="/assets/womenproducts/sgw3.webp" name="Round Frame Sunglasses" detail="Trendy round frame sunglasses with UV protection" new_price="₹799" old_price="₹1,199" discount="33% off" />
            <ProductCard src="/assets/womenproducts/sgw4.webp" name="Square Frame Sunglasses" detail="Modern round frame sunglasses for a chic look" new_price="₹1,099" old_price="₹1,499" discount="27% off" />
            {showMoreSunglasses && (
              <>

                <ProductCard src="/assets/womenproducts/sgw5.webp" name="Polarized Sunglasses" detail="Polarized sunglasses with sleek black frame" new_price="₹1,499" old_price="₹2,099" discount="28% off" />
                <ProductCard src="/assets/womenproducts/sgw6.webp" name="Gradient Lens Sunglasses" detail="Sunglasses with gradient lenses for a stylish look" new_price="₹1,199" old_price="₹1,799" discount="33% off" />
                <ProductCard src="/assets/womenproducts/sgw7.webp" name="Oversized Sunglasses" detail="Oversized sunglasses with bold design" new_price="₹1,499" old_price="₹2,099" discount="28% off" />
                <ProductCard src="/assets/womenproducts/sgw8.webp" name="Vintage Round Sunglasses" detail="Retro vintage round sunglasses with a classic style" new_price="₹899" old_price="₹1,299" discount="31% off" />
              </>
            )}
          </div>
          <div className="flex justify-center py-6">
            <button
              onClick={toggleSunglasses}
              className="bg-slate-400 text-gray-800 text-center w-fit p-2 rounded-full hover:bg-slate-500 hover:scale-110 transition">
              {showMoreSunglasses ? 'See less' : 'See more'}
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Women;
