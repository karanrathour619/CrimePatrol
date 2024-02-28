import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <nav className="bg-gray-800 p-4 flex justify-between items-center w-full fixed z-10">
            <div className="text-white text-xl font-semibold"><Link to="/">Crime Patrol</Link></div>
            <ul className="flex space-x-4">
                <li className="text-white hover:text-gray-300 text-lg gap-2 mt-2">
                    <Link to="/">Home</Link>
                </li>
                <li className="text-white hover:text-gray-300 text-lg mt-2">
                <Link to="https://www.indiatoday.in/crime">News</Link>
                </li>
                <li className="text-white hover:text-gray-300 text-lg mt-2">
                <Link to="/map">Map</Link>
                </li>
                <li className="text-white hover:text-gray-300 text-lg mt-2">
                <Link to="/submit">Submit</Link>
                </li>
                <li className="text-white hover:text-gray-300 text-lg mt-2">
                    <Link to="/login">Login/Register</Link>
                </li>
                <li className="text-white hover:text-gray-300 text-lg">
                    <Link to="/user">
                        <img src={require('./images/userlogo.png')} className='h-10' alt="" />
                    </Link>
                </li>
            </ul>
            
        </nav>
    </div>
  )
}

export default Navbar
