import { MdKeyboardArrowDown } from 'react-icons/md'
import { RxHamburgerMenu } from 'react-icons/rx'
import logo from '../assets/brandLogo.svg'

const Navbar = () => {
  return (
    <nav className="bg-white">
      <div className="px-7 pt-5 pb-12 flex sm:flex-row sm:gap-x-16 sm:items-center md:px-20 max-w-screen-7xl mx-auto">
        <img
          src={logo}
          alt="logo"
          className="cursor-pointer w-[10rem] h-[5rem]"
        />
        <div className="hidden lg:flex gap-x-10 ">
          <a className="capitalize leading-none font-bold flex cursor-pointer">
            solutions
            <span>
              <MdKeyboardArrowDown className="w-5 h-5" />
            </span>
          </a>
          <a className="capitalize leading-none font-bold flex cursor-pointer">
            features
            <span>
              <MdKeyboardArrowDown className="w-5 h-5" />
            </span>
          </a>
          <a className="capitalize leading-none font-bold flex cursor-pointer">
            resources
            <span>
              <MdKeyboardArrowDown className="w-5 h-5" />
            </span>
          </a>
          <a className="capitalize leading-none font-[650] flex cursor-pointer">
            pricing
          </a>
        </div>
        <button className="hidden lg:block ml-auto bg-black text-white px-5 py-2 rounded-md font-semibold ">
          Press
          <span className="border-2 bg-white/20 border-white/30 px-1.5 rounded-md mx-1">
            T
          </span>
          anytime to try
        </button>
        <button className="lg:hidden ml-auto ">
          <RxHamburgerMenu className="w-5 h-5" />
        </button>
      </div>
    </nav>
  )
}
export default Navbar
