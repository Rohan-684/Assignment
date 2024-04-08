import SectionStart from './SectionStart'
import { FaToggleOn } from 'react-icons/fa'
import { TiTick } from 'react-icons/ti'
import PricingColStart from './PricingColStart'

const PricingSection = () => {
  return (
    <div className="bg-[#ffeacdd9] py-10 md:py-20">
      <SectionStart
        heading="The Shortcut to Effective Storyboards"
        text="Get the modern storyboarding tool loved by video professionals. All plans come with a risk-free 30-day money-back guarantee."
      />

      <div className="text-black/60 px-7 mx-auto  md:px-20 sm:text-center text-left mt-6 md:mt-12">
        <div className="flex justify-start items-center mb-10">
          <div className="flex justify-center items-center gap-4 sm:ml-auto sm:mr-[-14rem]">
            <span>Monthly</span>
            <span className="text-4xl cursor-pointer">
              <FaToggleOn />
            </span>
            <span>
              Annual
              <span className="text-black/30 ml-2">(save 20%)</span>
            </span>
          </div>
          <div className="sm:flex ml-auto hidden">
            <button className="font-semibold leading-tight px-3  border-[3px] tracking-wider text-xs py-0.5 bg-white border-[#aaaaaa]  rounded-l-md border-l-2 border-x-0">
              EUR
            </button>
            <button className="font-semibold leading-tight px-3 border-[3px] tracking-wider text-xs py-0.5 bg-white border-[#aaaaaa] border-x-0 border-l-2">
              GBP
            </button>
            <button className="font-semibold leading-tight px-3 border-2 tracking-wider text-xs py-0.5 bg-[#eeeeee] text-black border-black !border-l-2 !border-r-2 rounded-r-md ">
              USD
            </button>
          </div>
        </div>

        {/* Pricing Table */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-0 lg:rounded-2xl text-black overflow-hidden">
          {/* Column-1 Agency Plan */}
          <div className="flex flex-col pt-4 xl:pt-8 bg-white z-10 rounded-xl lg:rounded-none">
            <PricingColStart
              plan="Agency"
              price="99"
              period="/ month, billed yearly"
            />
            <div className="px-4 xl:px-6 border-b border-black/5">
              <div className="my-5">
                <div className="font-semibold text-left mb-4">
                  For Video Agencies
                </div>
                <ul className="text-sm">
                  <li className="flex items-center my-3">
                    <span className="text-blue-400">
                      <TiTick />
                    </span>
                    <span className="font-semibold mr-1">10</span>
                    <span> Users</span>
                  </li>
                  <li className="flex items-center my-3">
                    <span className="text-blue-400">
                      <TiTick />
                    </span>
                    <span className="font-semibold mr-1">500</span>
                    <span>Storyboards</span>
                  </li>
                  <li className="flex items-center my-3">
                    <span className="text-blue-400">
                      <TiTick />
                    </span>
                    <span className="font-semibold mr-1">9,600</span>
                    <span>AI Image Credits</span>
                  </li>
                  <li className="flex items-center my-3">
                    <span className="text-blue-400">
                      <TiTick />
                    </span>
                    <span>Project-based access</span>
                  </li>
                  <li className="flex items-center my-3">
                    <span className="text-blue-400">
                      <TiTick />
                    </span>
                    <span>Team invite Link</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Cloumn-2 Group Plan */}
          <div className="flex flex-col pt-4 xl:pt-8 bg-white z-10 rounded-xl lg:rounded-none">
            <PricingColStart
              plan="Group"
              price="39"
              period="/ month, billed yearly"
            />
            <div className="px-4 xl:px-6 border-b border-black/5">
              <div className="my-5">
                <div className="font-semibold text-left mb-4">
                  For Small Teams
                </div>
                <ul className="text-sm">
                  <li className="flex items-center my-3">
                    <span className="text-blue-400">
                      <TiTick />
                    </span>
                    <span className="font-semibold mr-1">5</span>
                    <span> Users</span>
                  </li>
                  <li className="flex items-center my-3">
                    <span className="text-blue-400">
                      <TiTick />
                    </span>
                    <span className="font-semibold mr-1">200</span>
                    <span>Storyboards</span>
                  </li>
                  <li className="flex items-center my-3">
                    <span className="text-blue-400">
                      <TiTick />
                    </span>
                    <span className="font-semibold mr-1">3,000</span>
                    <span>AI Image Credits</span>
                  </li>
                  <li className="flex items-center my-3">
                    <span className="text-blue-400">
                      <TiTick />
                    </span>
                    <span>Team editing</span>
                  </li>
                  <li className="flex items-center my-3">
                    <span className="text-blue-400">
                      <TiTick />
                    </span>
                    <span>Team comments</span>
                  </li>
                  <li className="flex items-center my-3">
                    <span className="text-blue-400">
                      <TiTick />
                    </span>
                    <span>Real Time Updates</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Column 3 Individual Plan */}
          <div className="flex flex-col pt-4 xl:pt-8 z-10 bg-gradient-to-br from-[#f8dfe6] to-[#e37d9b4d] rounded-xl lg:rounded-none">
            <PricingColStart
              plan="Individual"
              price="25"
              period="/ month, billed yearly"
              btn="yes"
            />
            <div className="px-4 xl:px-6 border-b border-black/5">
              <div className="my-5">
                <div className="font-semibold text-left mb-4">
                  Best For Freelancers
                </div>
                <ul className="text-sm">
                  <li className="flex items-center my-3">
                    <span className="text-blue-400">
                      <TiTick />
                    </span>
                    <span> Single User</span>
                  </li>
                  <li className="flex items-center my-3">
                    <span className="text-blue-400">
                      <TiTick />
                    </span>
                    <span className="font-semibold mr-1">100</span>
                    <span>Storyboards</span>
                  </li>
                  <li className="flex items-center my-3">
                    <span className="text-blue-400">
                      <TiTick />
                    </span>
                    <span className="font-semibold mr-1">1,200</span>
                    <span>AI Image Credits</span>
                  </li>
                  <li className="flex items-center my-3">
                    <span className="text-blue-400">
                      <TiTick />
                    </span>
                    <span>Remove Boords branding</span>
                  </li>
                  <li className="flex items-center my-3">
                    <span className="text-blue-400">
                      <TiTick />
                    </span>
                    <span>Custom text fields</span>
                  </li>
                  <li className="flex items-center my-3">
                    <span className="text-blue-400">
                      <TiTick />
                    </span>
                    <span>Version management</span>
                  </li>
                  <li className="flex items-center my-3">
                    <span className="text-blue-400">
                      <TiTick />
                    </span>
                    <span>Multiple export formats</span>
                  </li>
                  <li className="flex items-center my-3">
                    <span className="text-blue-400">
                      <TiTick />
                    </span>
                    <span>Password protection</span>
                  </li>
                  <li className="flex items-center my-3">
                    <span className="text-blue-400">
                      <TiTick />
                    </span>
                    <span>Guest commenting</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Column 4 Free Plan */}
          <div className="flex flex-col pt-4 xl:pt-8 bg-white z-10 rounded-xl lg:rounded-none">
            <PricingColStart
              plan="Free"
              price="0"
              period="No credit card required"
              zero="yes"
            />
            <div className="px-4 xl:px-6 border-b border-black/5">
              <div className="my-5">
                <div className="font-semibold text-left mb-4">
                  Essential Storyboarding
                </div>
                <ul className="text-sm">
                  <li className="flex items-center my-3">
                    <span className="text-blue-400">
                      <TiTick />
                    </span>
                    <span className="font-semibold mr-1">2</span>
                    <span>Storyboards</span>
                  </li>

                  <li className="flex items-center my-3">
                    <span className="text-blue-400">
                      <TiTick />
                    </span>
                    <span>10 frame limit</span>
                  </li>
                  <li className="flex items-center my-3">
                    <span className="text-blue-400">
                      <TiTick />
                    </span>
                    <span>Watermarked images</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* COLUMNS OVER */}
        </div>
      </div>
    </div>
  )
}
export default PricingSection
