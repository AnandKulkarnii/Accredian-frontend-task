function Sidebar() {
  const menuItems = [
    "PRODUCT MANAGEMENT",
    "STRATEGY & LEADERSHIP",
    "BUSINESS MANAGEMENT",
    "FINTECH",
    "SENIOR MANAGEMENT",
    "DATA SCIENCE",
    "DIGITAL TRANSFORMATION",
    "BUSINESS ANALYTICS",
  ];
  return (
    <div className="w-[270px] h-[537px] bg-white shadow-lg rounded-lg mx-auto mt-4">
      <div className="bg-[#1A73E8] text-white text-lg font-semibold py-4 px-6 rounded-t-lg">
        ALL PROGRAMS
        <span className="float-right">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </span>
      </div>
      <div className="divide-y divide-gray-300">
        {menuItems.map((item, index) => (
          <a
            key={index}
            href="#"
            className="flex justify-between items-center py-4 px-6 text-base leading-[27px] font-semibold font-source-sans-pro text-[#3C4852] hover:bg-gray-100"
          >
            {item}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
