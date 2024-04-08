import { FaStar } from 'react-icons/fa'
const Reviews = () => {
  return (
    <div className="flex justify-center mb-20">
      <div className="text-xs sm:text-sm flex items-center border rounded-full bg-[#f6f6f0] shadow-sm border-[#f6f6f0] px-4 py-2 sm:py-4 sm:pl-6">
        <div className="flex">
          <span className="text-[#f4bd64]">
            <FaStar />
          </span>
          <span className="text-[#f4bd64]">
            <FaStar />
          </span>
          <span className="text-[#f4bd64]">
            <FaStar />
          </span>
          <span className="text-[#f4bd64]">
            <FaStar />
          </span>
          <span className="text-[#f4bd64]">
            <FaStar />
          </span>
        </div>
        <div className="ml-3 mr-6 font-medium">
          <span>Rated 4.9/5</span>
          <span className="hidden sm:inline"> by video professionals</span>
        </div>
      </div>
    </div>
  )
}
export default Reviews
