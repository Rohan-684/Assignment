import CustomButton from './CustomButton'
import TestimonialComponent from './TestimonialComponent'

const Testimonial3 = () => {
  return (
    <>
      <div className="bg-[#ffeacdd9] pb-14 md:pb-20 pt-10 md:pt-20">
        <TestimonialComponent
          text="”Boords helps us create a consistent look and feel for all our boards, and saves our art directors from wasting time futzing with layouts. It helps us spend time on the creative, not the formatting. It's every creative's dream."
          name="Hope Morley"
          occupation="COO at Umault"
        />
      </div>
      <div className="bg-gradient-to-b from-[#ffeacd] to-[#daeef8] pb-14 md:pb-20">
        <CustomButton text="Try Boords Free" />
      </div>
    </>
  )
}
export default Testimonial3
