import img from '../assets/profilePic2.svg'

const TestimonialComponent = ({ text, name, occupation }) => {
  return (
    <div className="max-w-7xl px-7 mx-auto  md:px-20 text-center ">
      <div className="max-w-2xl mx-auto md:text-xl mb-8 text-left md:text-center">
        <span>{text}</span>
      </div>

      <div className="flex md:justify-center space-x-4 md:items-center">
        <div className="w-12 h-12">
          <img src={img} alt="profile-pic" className="w-full" />
        </div>
        <div className="flex flex-col md:flex-row md:gap-2 items-start justify-center">
          <p className="font-semibold">{name}</p>
          <p className="opacity-50">{occupation}</p>
        </div>
      </div>
    </div>
  )
}
export default TestimonialComponent
