const PricingColStart = ({ plan, price, period, btn = '', zero = '' }) => {
  let style = ''
  let space = ''
  if (btn) {
    style = 'bg-gradient-to-r from-[#e37d9b] to-[#f4bd64] !border-0'
  }
  if (zero) {
    style = '!border-1 !border-black/10'
    space = 'mr-2'
  }
  return (
    <>
      <div className="px-4 xl:px-6 border-b border-black/5">
        <div className="text-left mb-3 xl:mb-6">
          <p className="text-lg font-bold xl:text-xl">{plan}</p>
        </div>
      </div>
      <div className="px-4 xl:px-6 border-b border-black/5">
        <div className="flex items-baseline my-4">
          <span className="mr-0.5 text-lg  xl:text-xl">$</span>
          <span className={`text-xl xl:text-4xl ${space}`}>{price}</span>
          <span className="opacity-30 text-sm">{period}</span>
        </div>
      </div>
      <div className="px-4 xl:px-6 border-b border-black/5">
        <div className="my-6">
          <button
            className={`px-5 rounded-md text-center py-1.5 font-semibold border-2 lg:border-3 block w-full text-black bg-transparent border-black ${style}`}
          >
            Get Started
          </button>
        </div>
      </div>
    </>
  )
}
export default PricingColStart
