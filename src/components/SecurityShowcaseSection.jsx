import SectionStart from './SectionStart'
import img1 from '../assets/security1.png'
import img2 from '../assets/security2.png'
const SecurityShowcaseSection = () => {
  return (
    <div className="mt-12 md:mt-24">
      <SectionStart
        heading="Secure, Private, Professional"
        text="We know controlling who sees what - be it teammates or clients - is crucial. Boords   helps you keep storyboards private with password protection, project-level access control, and custom workspace URLs."
      />

      <div className="my-12 md:my-24">
        <div className=" mx-auto px-7 md:px-20 text-center ">
          <div className="flex flex-col sm:flex-row-reverse border-2 border-black lg:border-3 rounded-md mb-12 md:mb-24">
            <div className="flex-1">
              <img src={img1} alt="security-feature" className="w-full" />
            </div>
            <div className="flex flex-col justify-center sm:text-center text-left lg:text-left p-7 lg:px-14 flex-1">
              <h2 className="mb-5 text-lg lg:text-xl xl:text-4xl font-bold ">
                Share with Confidence
              </h2>
              <p className="text-lg sm:hidden lg:block lg:text-2xl ">
                Never share something you don&apos;t want clients to see. Share
                links to specific storyboard versions, with or without comments.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row border-2 border-black lg:border-3 rounded-md">
            <div className="flex-1">
              <img src={img2} alt="security-feature" className="w-full" />
            </div>
            <div className="flex flex-col justify-center sm:text-center text-left lg:text-left p-7 lg:px-14 flex-1">
              <h2 className="mb-5 text-lg lg:text-xl xl:text-4xl font-bold ">
                Completely Confidential
              </h2>
              <p className="text-lg sm:hidden lg:block lg:text-2xl ">
                All content you upload to or create within Boords is completely
                hidden from everyone, including the Boords team, unless you
                choose to share it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default SecurityShowcaseSection
