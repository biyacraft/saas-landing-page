
import Image from 'next/image';
import MenuIcon from '../assets/icons/menu.svg';
import LogoImage from '../assets/images/logo.png'


export const Navbar = () => {
  return (
    <div className="bg-black">
      <div className="px-4">
    <div className="container bg-black">
      <div className="py-4 flex items-center justify-between">

      <div className="relative">
<a href="/">
      <Image alt='logo' src={LogoImage} className="h-20 w-20 relative mt-1"/></a>
      </div>
      <div className='border border-white border-opacity-30 h-10 w-10 inline-flex justify-center items-center rounded-lg sm:hidden'>

      <MenuIcon className="text-white" />
      </div>
      <nav className='text-white gap-6 items-center hidden sm:flex'>
        
        <a href="#" className='text-opacity-60 text-white hover:text-opacity-100 transition' >About</a>
        <a href="#" className='text-opacity-60 text-white hover:text-opacity-100 transition'>Features</a>
        <a href="#" className='text-opacity-60 text-white hover:text-opacity-100 transition'>Updates</a>
        <a href="#" className='text-opacity-60 text-white hover:text-opacity-100 transition'>Help</a>
        <a href="#" className='text-opacity-60 text-white hover:text-opacity-100 transition'>Customers</a>
        <button className='bg-white py-2 px-4 rounded-lg text-black'>Get for free</button>
      </nav>

      </div>




    </div>
    </div>
    </div>
  )
};
