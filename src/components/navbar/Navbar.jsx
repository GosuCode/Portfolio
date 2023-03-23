import React, { useState } from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const links = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Blog",
      path: "/blog",
    },
    {
      name: "Contact",
      path: "/contact",
    },

  ]

  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div>

    <div className='hidden justify-between bg-[#9b51e0] text-white pt-6 pb-6 pl-10 pr-20 md:flex'>
        <div>
          <span className='text-black text-2xl font-bold'>SHeeSH </span>
        </div>
        <div className='flex font-serif gap-20'>
          {links.map((value, key) => {
            return <div key={key} className='border-solid hover:border-b-2'><Link to={value.path}>{value.name}</Link></div>
          }
        )}
        </div>
    </div>

        {/* For mobile */}
    <div className='block md:hidden bg-[#9b51e0] p-6'>
        <div>
          <span className='text-black font-bold'>SHeeSH</span>
        </div>
      <div className='absolute top-6 right-6 text-white' onClick={handleNav}>
        {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
      </div>
      <div
      className= {nav ? 'fixed text-white top-0 left-0 h-full w-[35%] border-r border-r-gray-900 bg-[#0e0e10] ease-in-out duration-500' : 'fixed left-[-100%]'}>
        <div className='text-center pt-14'>
        {links.map((value, key) => {
            return <div className='p-4' key={key}><Link to={value.path}>{value.name}</Link></div>
          }
        )}
        </div>
      </div>
    </div>
    </div>
  )
}

export default Navbar
