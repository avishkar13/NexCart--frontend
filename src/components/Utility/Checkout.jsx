import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

function Checkout() {
    return (
        <>
            <Navbar />
            <main className='bg-slate-100 min-h-screen flex flex-col items-center'>
                <div className=' w-[90%] md:w-[75%] lg:w-[55%] p-2  py-24 '> <p className='text-center'>Checkout button is not functional as this site is made for Educational Purposes. Rest assured I can provide you with proper payment method if you want it.😁</p></div>
                <Link className='' to="/cart" >
                    <button className="bg-green-500 p-2 px-4 rounded-full text-white ">
                        Return to Cart
                    </button></Link>
            </main>
        </>
    )
}

export default Checkout
