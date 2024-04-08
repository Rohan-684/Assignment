import CustomButton from './CustomButton'
import TestimonialComponent from './TestimonialComponent'

const Testimonial2 = () => {
  return (
    <>
      <div className="bg-[#ffeacdd9] pb-14 md:pb-20 pt-10 md:pt-20">
        <TestimonialComponent
          text="”Our studio runs on Boords. We can quickly draw up ideas, add in a script, receive real-time feedback and rapidly iterate changes. Everything is one place so there’s no need to email files back and forth. It’s really a game changer."
          name="Kelly Messori"
          occupation="Producer at CatCow"
        />
      </div>
      <div className="bg-gradient-to-b from-[#ffeacd] to-[#daeef8] pb-14 md:pb-20">
        <CustomButton text="Try Boords Free" />
      </div>
    </>
  )
}
export default Testimonial2
