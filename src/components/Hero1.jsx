import CustomButton from './CustomButton'
import underline from '../assets/underline-heavy.svg'

const Hero1 = () => {
  return (
    <div className="bg-gradient-to-b from-white to-[#ffeacd] ">
      <div className="max-w-7xl mx-auto px-7 md:px-20 text-center md:pt-10">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold !leading-[1.1]">
          <span className="block whitespace-nowrap"> The Shortcut to</span>
          <span className="relative">
            <span className="text-[#e37d9b]"> Effective </span>
            <span className="absolute left-0 right-0 top-[4.25rem] opacity-0 md:opacity-30 ">
              <img src={underline} alt="underline" className="w-full" />
            </span>
          </span>
          Storyboards
        </h1>
        <p className="max-w-xl mx-auto text-base md:text-2xl !leading-[1.5] mt-4 md:mt-8 mb-8">
          Boords is the modern storyboarding tool that helps video professionals
          create client-ready storyboards 10x faster.
        </p>
        <CustomButton text="Get started for Free" />
      </div>
    </div>
  )
}
export default Hero1
