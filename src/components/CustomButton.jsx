const CustomButton = ({ text }) => {
  return (
    <div className="max-w-7xl mx-auto px-7 md:px-20 text-center">
      <button className="px-5 py-1.5 rounded-md font-semibold border-2 lg:border-3 bg-gradient-to-r from-[#e37d9b] to-[#f4bd64]  md:text-xl md:py-4 md:px-8 md:rounded-lg">
        {text}
      </button>
      <div className="mt-1">
        <span className="text-[#e37d9b] mr-1 font-semibold">4,961</span>
        <span> video professionals</span>
      </div>
      <p className="opacity-50">joined Boords in the last 7 days</p>
    </div>
  )
}
export default CustomButton
