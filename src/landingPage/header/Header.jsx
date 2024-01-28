import logo from "./HellaBookingApp.jpg";
import bgImg from "./bgImage.jpg";

function Header() {
  return (
    <div className="relative h-[30rem] w-full">
      <div
        className="absolute h-full w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="space-x- flex justify-around px-4 py-2">
          <div className="space-x-4">
            <a className="cursor-pointer px-4 py-2 font-popi text-xl font-medium text-[#FFF] hover:text-[#0150A6]">
              Find Tour
            </a>
            <a className="cursor-pointer px-4 py-2 font-popi text-xl font-medium text-[#FFF] hover:text-[#0150A6]">
              Find Tour Guide
            </a>
          </div>

          <img src={logo} className="w-10" alt="" />

          <div className="space-x-4">
            <a className="cursor-pointer px-4 py-2 font-popi text-xl font-medium text-[#FFF] hover:text-[#0150A6]">
              Login
            </a>
            <a>Register</a>
          </div>
        </div>
        <div className="absolute h-[26.5rem] w-full bg-black bg-opacity-25"></div>
      </div>
    </div>
  );
}

export default Header;
