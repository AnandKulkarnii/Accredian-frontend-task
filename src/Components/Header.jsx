function Header() {
  return (
    <>
      <div className="w-full h-[60px] px-4 py-4 flex items-center justify-center gap-4 bg-[rgba(26,115,235,0.15)] bg-opacity-60 ">
        <h1 className="font-inter text-[16.88px] font-medium leading-[28px] text-left text-[#262626]">
          Navigate your ideal career path with tailored expert advice!
        </h1>
        <button className="font-inter text-[17.02px] font-medium leading-[28px] text-[#1A73E8]">
          Contact Expert
        </button>
      </div>
      <div className="w-full px-20 flex justify-between h-[60px]">
        <div className="flex justify-center items-center gap-4 p-2">
          <img
            className="w-[125px] h-[36.66px]"
            src="/assets/logo.png"
            alt=""
          />
          <select
            className="w-[116px] h-[40px] bg-[#1A73E8] rounded-md text-white text-base px-2"
            name="Courses"
            id=""
          >
            <option
              className="font-inter text-[14.75px] font-medium leading-[24px]"
              value=""
            >
              Courses
            </option>
          </select>
        </div>
        <div className="flex justify-center items-center gap-4 p-2 ">
          <button className="h-[24px] font-inter text-[14.75px] font-medium leading-[24px] text-left">
            Refer & Earn
          </button>
          <button className="h-[24px] font-inter text-[14.75px] font-medium leading-[24px] text-left">
            Resources
          </button>
          <button className="h-[24px] font-inter text-[14.75px] font-medium leading-[24px] text-left">
            About Us
          </button>
          <button className="h-[40px] w-[77px] font-inter text-[14.75px] font-medium leading-[24px] bg-[rgba(148,163,184,0.2)] rounded-md">
            Login
          </button>
          <button className="h-[40px] bg-[#1A73E8] text-white font-inter text-[14.75px] font-medium leading-[24px] text-left rounded-md p-2">
            Try for free
          </button>
        </div>
      </div>
    </>
  );
}

export default Header;
