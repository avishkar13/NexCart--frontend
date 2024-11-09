import React from 'react'
import Navbar from '../Utility/Navbar'
import HomeCard from '../Utility/HomeCard'
import Footer from '../Utility/Footer'
import ProductCard from '../Utility/ProductCard'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <Navbar />
      <main className=" h-fit flex flex-col gap-16 bg-slate-100">
        <div className="relative w-full h-[55vh] bg-center bg-cover" style={{ backgroundImage: "url(' /assets/bg-home.jpeg')" }}>
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <p className="text-3xl md:text-5xl lg:text-6xl text-amber-600 font-serif font-extrabold absolute top-1/3 left-1/2 transform -translate-x-1/2 w-full text-center">
            Discover, Shop, Repeat
          </p>
          <p className="text-md md:text-3xl lg:text-4xl text-amber-600 font-serif font-semibold absolute top-1/2 left-1/2 transform -translate-x-1/2 w-full text-center">
            – The NexCart Way.
          </p>
        </div>
        <div className='md:h-[50vh] w-[90vw] mx-auto  mb-6 md:mb-0 lg:mb-12 '>
        <h2 className='text-center text-3xl font-semibold font-serif '>Catagories</h2>
        <hr className='mb-6 w-[25vw] md:w-[15vw] bg-black mx-auto' />
          <div className='flex flex-col md:flex-row gap-4 lg:gap-6 justify-center items-center'>
          <HomeCard src=" /assets/mencatalog.jpg" alt="Men" link="/men" name="Men's clothing Catalog" />
          <HomeCard src=" /assets/kidcatalog.jpg" alt="Kids" link="/kids" name="Kids's clothing Catalog" />
          <HomeCard src=" /assets/womencatalog.jpg" alt="Women" link="/women" name="Women's clothing Catalog" />
          </div>
        </div> 
        <div className="women-product  w-[100vw] xl:w-[90vw] mx-auto mb-8  ">
          <h2 className='text-center text-3xl font-semibold font-serif '>Women's Collection</h2>
          <hr className='mb-6 w-[45vw] md:w-[30vw] lg:w-[15vw] bg-black mx-auto' />
          <div className='flex justify-center gap-y-4 gap-4 md:gap-6 flex-wrap'>
            <ProductCard src=" /assets/products/product1.webp" name="Laxmipati Sarees " detail="Printed Bollywood Chiffon Saree " new_price="₹2,268" old_price="₹4,535" discount='49% off' />
            <ProductCard src=" /assets/products/product2.webp" name=" SIRIL  " detail="Woven, Embellished, Self Design Banarasi Silk Saree " new_price="₹719" old_price="₹5,019" discount='85% off' />

            <ProductCard src=" /assets/products/product3.webp" name=" Tibra Attire" detail="Women Cotton Blend Kurti Pant Dupatta Set" new_price="₹479" old_price="₹1,499" discount='68% off' />

            <ProductCard src=" /assets/products/product4.webp" name=" riddhisa fashion" detail="Embroidered Bollywood Net Saree  (Black)" new_price="₹500" old_price="₹2,999" discount='88% off' />
            
          </div>
          <Link className='flex justify-center py-6 w-fit mx-auto' to="/women">
          <button className='bg-slate-700 text-white text-center w-fit p-3 rounded-full hover:bg-slate-800 hover:scale-110 hover:ease-in-out hover:transition' >Explore more</button>
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Home
