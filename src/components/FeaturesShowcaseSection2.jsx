import FeaturesShowcase from './FeaturesShowcase'
import img1 from '../assets/AiFeature3.png'
import { GrPowerCycle } from 'react-icons/gr'
import img2 from '../assets/AiFeature4.png'
import { FaArrowRight } from 'react-icons/fa6'

const FeaturesShowcaseSection2 = () => {
  return (
    <div>
      <FeaturesShowcase
        img={img1}
        btnIcon={<GrPowerCycle />}
        btnText="Iterate"
        heading="Fewer Client Curveballs..."
        text="Quickly make changes to your storyboards for faster sign-off with animatics, versioning, frame statuses and more. Ensure everyone is on the same page and avoid unexpected (and costly) changes in production."
        order="last"
      />
      <FeaturesShowcase
        img={img2}
        btnIcon={<FaArrowRight />}
        btnText="Export"
        heading="Move Seamlessly Into Production"
        text="Move seamlessly from storyboard to production with multiple export options, including presentation links, customizable PDF, MP4 animatics, and more."
      />
    </div>
  )
}
export default FeaturesShowcaseSection2
