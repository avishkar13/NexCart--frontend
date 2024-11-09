import React from 'react';
import Navbar from '../Utility/Navbar';
import Footer from '../Utility/Footer';
import ProductCard from '../Utility/ProductCard';

function Kids() {
  return (
    <div>
      <Navbar />
      <main className='bg-slate-100 min-h-full py-12'>

        {/* Shirts Collection */}
        <section className="shirts py-8 w-[98vw] md:w-[92vw] mx-auto">
          <h2 className='text-3xl font-semibold font-serif mb-6'>Kid's Shirts</h2>
          <div className='flex flex-wrap gap-3 md:gap-6 lg:gap-3 gap-y-5 justify-center mb-6'>
            <ProductCard src=" /assets/kidsproducts/shirt1.webp" name="Classic Shirt" detail="Cotton, comfortable fit" new_price="₹1,299" old_price="₹1,999" discount='35% off' />
            <ProductCard src=" /assets/kidsproducts/shirt2.webp" name="Printed Shirt" detail="Trendy printed design" new_price="₹1,199" old_price="₹1,799" discount='33% off' />
            <ProductCard src=" /assets/kidsproducts/shirt3.webp" name="Plaid Shirt" detail="Plaid pattern with soft fabric" new_price="₹1,399" old_price="₹2,099" discount='34% off' />
            <ProductCard src=" /assets/kidsproducts/shirt4.webp" name="Denim Shirt" detail="Stylish denim look" new_price="₹1,499" old_price="₹2,299" discount='35% off' />
            <ProductCard src=" /assets/kidsproducts/shirt5.webp" name="Button-Up Shirt" detail="Casual button-up shirt" new_price="₹1,299" old_price="₹1,999" discount='35% off' />
            <ProductCard src=" /assets/kidsproducts/shirt6.webp" name="Linen Shirt" detail="Breathable linen fabric" new_price="₹1,499" old_price="₹2,199" discount='32% off' />
            <ProductCard src=" /assets/kidsproducts/shirt7.webp" name="Striped Shirt" detail="Stylish stripes pattern" new_price="₹1,299" old_price="₹1,899" discount='31% off' />
            <ProductCard src=" /assets/kidsproducts/shirt8.webp" name="Hooded Shirt" detail="Hooded design for extra style" new_price="₹1,599" old_price="₹2,399" discount='33% off' />
          </div>
        </section>

        {/* Jeans Collection */}
        <section className="jeans py-4 w-[98vw] md:w-[92vw] mx-auto">
          <h2 className='text-3xl font-semibold font-serif mb-6'>Kid's Jeans</h2>
          <div className='flex flex-wrap gap-3 md:gap-6 lg:gap-3 gap-y-5 justify-center mb-6'>
            <ProductCard src=" /assets/kidsproducts/jeans1.webp" name="Skinny Jeans" detail="Slim fit with stretch" new_price="₹1,299" old_price="₹1,899" discount='31% off' />
            <ProductCard src=" /assets/kidsproducts/jeans2.webp" name="Straight Jeans" detail="Classic straight fit" new_price="₹1,499" old_price="₹2,199" discount='32% off' />
            <ProductCard src=" /assets/kidsproducts/jeans3.webp" name="Jogger Jeans" detail="Comfortable jogger style" new_price="₹1,399" old_price="₹2,099" discount='33% off' />
            <ProductCard src=" /assets/kidsproducts/jeans4.webp" name="Distressed Jeans" detail="Trendy distressed look" new_price="₹1,599" old_price="₹2,399" discount='34% off' />
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}

export default Kids;
