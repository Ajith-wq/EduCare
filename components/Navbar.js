import React from 'react'
import Image from 'next/image'
import Link from 'next/Link'
const Navbar = () => {
  return ( 
    <div className='flex flex-col md:flex-row md:justify-start justify-center items-center'>
          <div className='logo mx-5'>
            <Image src="/download.png" width ={100} height ={40} alt="" /> 
          </div>
          <div className='nav'>
            <ul className='flex items-center space-x-2 font-bold md:text-md'>
                
                <Link href={'/Categories'}><a><li>Categories</li></a></Link>
                <Link href={'/Register'}><a><li>Register</li></a></Link>
                <Link href={'/Signup'}><a><li>Signup</li></a></Link>
            </ul>
          </div>
          <div>
            <button className='buttonn absolute right-0' >
            <Link href={'/Login'}><a><li>Login</li></a></Link>
            </button>
          </div>
          

        </div>
  
  )
}

export default Navbar