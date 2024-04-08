import FeaturesShowcase from './FeaturesShowcase'
import SectionStart from './SectionStart'
import img1 from '../assets/AiFeature1.png'
import { BsStars } from 'react-icons/bs'
import img2 from '../assets/AiFeature2.png'
import { AiOutlineMessage } from 'react-icons/ai'

const FeaturesShowcaseSection1 = () => {
  return (
    <div className="pb-4">
      <SectionStart
        heading="10x Your Pre-Production Pipeline"
        text="Boords helps you achieve a fast, hassle-free pre-production process so you can spend more time being creative. You'll wonder how you lived without it..."
      />
      <FeaturesShowcase
        img={img1}
        btnIcon={<BsStars />}
        btnText="Create"
        heading="Easy-to-Use, Professional Power..."
        text="Boords makes it easy for anyone in your organization to create client-ready storyboards with a simple drag-and-drop interface, image &amp; script generation, and a vast stock illustration and photo library."
        order="last"
      />
      <FeaturesShowcase
        img={img2}
        btnIcon={<AiOutlineMessage />}
        btnText="Collaborate"
        heading="Centralize Team Communication..."
        text="Boords helps you establish clear communication between creatives and clients with commenting, approvals, real-time updates, and more. Say goodbye to confusing email threads and missing feedback."
      />
    </div>
  )
}
export default FeaturesShowcaseSection1
