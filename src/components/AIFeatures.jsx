import img1 from '../assets/ai1.png'
import img2 from '../assets/ai2.png'
import img3 from '../assets/ai3.png'
import { BsStars } from 'react-icons/bs'
import { CiCircleList } from 'react-icons/ci'
import { FaWrench } from 'react-icons/fa'
const AIFeatures = () => {
  return (
    <>
      <div className="bg-[#daeef8] pt-12 md:pt-24">
        <div className="px-7 md:px-20 text-center">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="w-full ">
              <img src={img1} alt="ai-feature" className="w-full" />

              <div className="mt-10 text-left ">
                <p className="text-blue-400 text-2xl mb-5">
                  <CiCircleList />
                </p>
                <h2 className="font-semibold text-base lg:text-2xl mb-4 lg:mb-6">
                  Build Characters
                </h2>
                <p className="text-base lg:text-xl mb-4">
                  Create custom AI-generated characters to use across multiple
                  storyboard frames.
                </p>
              </div>
            </div>
            <div className="w-full ">
              <img src={img2} alt="ai-feature" className="w-full" />
              <div className="mt-10 text-left ">
                <p className="text-blue-400 text-2xl mb-5">
                  <BsStars />
                </p>
                <h2 className="font-semibold text-base lg:text-2xl mb-4 lg:mb-6">
                  Plan Your Video
                </h2>
                <p className="text-base lg:text-xl mb-4">
                  Describe storyboard scenes to quickly generate expressive,
                  character-driven images.
                </p>
              </div>
            </div>
            <div className="w-full ">
              <img src={img3} alt="ai-feature" className="w-full" />
              <div className="mt-10 text-left ">
                <p className="text-blue-400 text-2xl mb-5">
                  <FaWrench />
                </p>
                <h2 className="font-semibold text-base lg:text-2xl mb-4 lg:mb-6 ">
                  Create Variations
                </h2>
                <p className="text-base lg:text-xl mb-4">
                  Create subtle variations of existing images to build out
                  storyboard sequences fast.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-b from-[#daeef8] to-white h-40"></div>
    </>
  )
}
export default AIFeatures
