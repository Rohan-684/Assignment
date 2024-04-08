import img1 from '../assets/logo1.svg'
import img2 from '../assets/logo2.svg'
import img3 from '../assets/logo3.png'
import img4 from '../assets/logo4.svg'
import img5 from '../assets/logo5.png'
import img6 from '../assets/logo6.png'
import img7 from '../assets/logo7.png'
import img8 from '../assets/logo8.png'

const Hero2 = () => {
  return (
    <div className="bg-[#ffeacd] pt-20">
      <div className="max-w-7xl px-7 mx-auto  md:px-20 text-center pb-24">
        <p className="text-xs font-semibold tracking-widest mb-14 opacity-50">
          BOORDS IS TRUSTED BY THE WORLD&apos;S LEADING VIDEO AGENCIES.
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-8 gap-10">
          <div className="w-full">
            <img src={img1} className="grayscale opacity-80" />
          </div>
          <div className="w-full">
            <img src={img2} className="grayscale opacity-80" />
          </div>
          <div className="w-full">
            <img src={img3} className="grayscale opacity-80" />
          </div>
          <div className="w-full">
            <img src={img4} className="grayscale opacity-80" />
          </div>
          <div className="w-full">
            <img src={img5} className="grayscale opacity-80" />
          </div>
          <div className="w-full">
            <img src={img6} className="grayscale opacity-80" />
          </div>
          <div className="w-full">
            <img src={img7} className="grayscale opacity-80" />
          </div>
          <div className="w-full">
            <img src={img8} className="grayscale opacity-80" />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Hero2
