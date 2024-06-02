
const Navbar = () => {
  return (
    <div className="px-20 py-4 flex justify-between items-center bg-[#010103] text-white">
      <h2 className="font-peg font-extralight text-[40px]">Vriksh Software</h2>
      <div >
        <ul className="flex items-center gap-10 font-sen cursor-pointer">
          <li>Home</li>
          <li>Services</li>
          <li>Our Portfolio</li>
          <li>About Us</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar