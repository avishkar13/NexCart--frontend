import React from 'react'
import { Link } from 'react-router-dom'

function HomeCard(props) {
    return (
        <>
            <Link to={props.link}>
                <div className="card h-[40vh] md:h-[40vh] lg:h-[50vh] w-[80vw] md:w-[30vw] lg:w-[28vw] border-4 border-gray-300 rounded-xl shadow-lg relative hover:scale-105 hover:transition hover:duration-300 hover:ease-out ">
                    <img className='h-full w-full rounded-lg ' src={props.src} alt={props.alt} />
                   <div className='bg-orange-300 flex flex-col items-center w-full absolute bottom-0 p-2 rounded-md'>
                    <p><i> {props.name} </i></p>
                    <p><b>Shop Now!!</b></p>
                   </div>
                </div>
            </Link>
        </>
    )
}

export default HomeCard
