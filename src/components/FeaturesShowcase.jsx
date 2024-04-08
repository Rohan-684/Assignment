import { FaArrowRight } from 'react-icons/fa'

const FeaturesShowcase = ({
  img,
  btnIcon,
  btnText,
  heading,
  text,
  order = '',
}) => {
  let style = ''
  if (order) {
    style = 'sm:order-last'
  }
  return (
    <div className="my-12 md:my-24 max-w-7xl px-7 mx-auto text-left">
      <div className="grid sm:grid-cols-2 space-y-10 sm:space-y-0 sm:gap-10 xl:gap-20">
        <img src={img} alt="feature" className={`w-full ${style}`} />
        <div className="mt-12 sm:px-12 sm:flex sm:flex-col sm:justify-center w-full">
          <button className="flex gap-2 border border-black/10 rounded-md py-2 px-4 items-center mb-10 self-start">
            <span className="text-pink-400">{btnIcon}</span>
            <span className="font-semibold text-xs lg:text-base">
              {btnText}
            </span>
          </button>
          <h2 className="text-lg lg:text-4xl mb-5 font-semibold">{heading}</h2>
          <p className="text-base lg:text-xl md:leading-loose mb-4">{text}</p>
          <a href="#" className="mt-8 text-base lg:text-xl flex items-center">
            <span className="font-semibold underline">Learn More</span>
            <span className="ml-2 text-base">
              <FaArrowRight />
            </span>
          </a>
        </div>
      </div>
    </div>
  )
}
export default FeaturesShowcase
