import logo from '../assets/brandLogo2.svg'

const Footer = () => {
  return (
    <div className="text-white bg-black pt-8 pb-11">
      <div className="px-7 mx-auto  md:px-20 text-left">
        <div className="grid md:grid-cols-5">
          <div className="mb-8">
            <img
              src={logo}
              alt="logo"
              className="cursor-pointer w-[10rem] h-[5rem]"
            />
            <p className="pr-10 mb-8 opacity-50 text-normal">
              The Shortcut to Effective Storyboards
            </p>
            <a className="px-5 rounded-md text-center  py-1.5 font-semibold border-2 lg:border-3 block sm:inline-block text-black bg-white border-white cursor-pointer">
              Try For Free
            </a>
          </div>

          <div className="flex flex-col mt-6 ">
            <h4 className="text-white text-lg md:text-2xl font-semibold mb-6 ">
              Features
            </h4>
            <span className="mb-1.5">Create</span>
            <span className="mb-1.5">Collaborate</span>
            <span className="mb-1.5">Iterate</span>
            <span className="mb-1.5">Export</span>
          </div>

          <div className="flex flex-col mt-6 ">
            <h4 className="text-white text-lg md:text-2xl font-semibold mb-6 ">
              AI Tools
            </h4>
            <span className="mb-1.5">AI Storyboard Generator</span>
            <span className="mb-1.5">AI Script Generator</span>
            <span className="mb-1.5">AI Character Creator</span>
            <span className="mb-1.5">AI Image Variations</span>
          </div>

          <div className="flex flex-col mt-6 ">
            <h4 className="text-white text-lg md:text-2xl font-semibold mb-6 ">
              Templates
            </h4>
            <span className="mb-1.5">Storyboards</span>
            <span className="mb-1.5">Shot Lists</span>
            <span className="mb-1.5">Call Sheets</span>
            <span className="mb-1.5">Filmmaking</span>
          </div>

          <div className="flex flex-col mt-6 ">
            <h4 className="text-white text-lg md:text-2xl font-semibold mb-6 ">
              Company & Legal
            </h4>
            <span className="mb-1.5">
              Affiliates
              <span className="border-[#e37d9b] border text-[#e37d9b] rounded-full text-xs  md:text-sm pb-0 px-2 ml-2 ">
                New
              </span>
            </span>
            <span className="mb-1.5">Climate Contributions</span>
            <span className="mb-1.5">Help Center</span>
            <span className="mb-1.5">Privacy</span>
            <span className="mb-1.5">Terms of Use</span>
            <span className="mb-1.5">Security</span>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Footer
