const SectionStart = ({ heading, text }) => {
  return (
    <div className="max-w-7xl px-7 mx-auto  md:px-20 sm:text-center text-left font-custom">
      <div className="max-w-3xl sm:mx-auto">
        <h2 className="text-xl md:text-5xl font-bold">{heading}</h2>
        <p className="mt-4 md:text-xl sm:leading-loose">{text}</p>
      </div>
    </div>
  )
}
export default SectionStart
