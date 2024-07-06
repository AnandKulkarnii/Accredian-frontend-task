import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="bg-[#282828] w-full text-white py-12 mt-[100px]">
      <div className="flex items-center justify-between px-40">
        <img
          className="h-[38.33px] w-[144px]"
          src="/public/assets/footerLogo.png"
          alt="Accredian Logo"
        />
        <div className="text-center">
          <button className="w-[250px] h-[39px] bg-[#007BFF] text-white font-roboto text-[14px] font-medium leading-6 rounded-md border-slate-200">
            Schedule 1-on-1 Call Now
          </button>
          <p className="text-white font-roboto text-[14px] font-normal leading-5 mt-2">
            Speak with our Learning Advisor
          </p>
        </div>
      </div>
      <div className="my-5">
        <hr className="w-[1152px] mx-auto border-t border-gray-500" />
      </div>
      <div className="flex px-40 space-x-8">
        {/* Programs Section */}
        <div className="flex-1 mt-5">
          <h3 className="font-normal font-roboto text-[20px] leading-[30px] mb-4">
            Programs
          </h3>
          <ul>
            {[
              "Data Science & AI",
              "Product Management",
              "Business Analytics",
              "Digital Transformation",
              "Business Management",
              "Project Management",
              "Strategy & Leadership",
              "Senior Management",
              "Fintech",
            ].map((program, index) => (
              <li key={index} className="mb-2 flex w-[380px] h-[52.44px]">
                <div className="w-[324px] h-[52.4] font-roboto font-bold text-[17px] leading[25.5px]">
                  {program}
                </div>
                <div className="h-[24px] w-[24px]">
                  <span className="h-[14px] w-[14px]">+</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex-1">
          <h3 className="font-roboto text-[20px] leading-9 mt-5">Contact Us</h3>
          <ul className="mt-5 space-y-2">
            <li>
              Email us (For Data Science Queries): admissions@accredian.com
            </li>
            <li>Email us (For Product Management Queries): pm@accredian.com</li>
            <li>
              Data Science Admission Helpline: +91 9079653292 (9 AM - 7 PM)
            </li>
            <li>Product Management Admission Helpline: +91 9625811095</li>
            <li>Enrolled Student Helpline: +91 7969322507</li>
            <li>
              Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18,
              Gurugram, Haryana 122015
            </li>
          </ul>
        </div>

        <div className="flex-1">
          <h3 className="font-roboto text-[20px] leading-9 mt-5">Follow Us</h3>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="text-white hover:text-gray-400">
              <FontAwesomeIcon
                className="h-[20px] w-[20px]"
                icon={faFacebook}
              />
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <FontAwesomeIcon
                className="h-[20px] w-[20px]"
                icon={faLinkedin}
              />
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <FontAwesomeIcon className="h-[20px] w-[20px]" icon={faTwitter} />
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <FontAwesomeIcon
                className="h-[20px] w-[20px]"
                icon={faInstagram}
              />
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <FontAwesomeIcon className="h-[20px] w-[20px]" icon={faYoutube} />
            </a>
          </div>
        </div>

        <div className="flex-1">
          <h3 className="font-roboto text-[20px] leading-9 mt-5">Accredian</h3>
          <ul className="mt-5 space-y-2">
            <li>About</li>
            <li>Career</li>
            <li>Blog</li>
            <li>Admission Policy</li>
            <li>Referral Policy</li>
            <li>Privacy Policy</li>
            <li>Terms Of Service</li>
            <li>Master FAQs</li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto text-center mt-8">
        <p>
          © 2024 Accredian A Brand of FullStack Education Pvt Ltd. All Rights
          Reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
