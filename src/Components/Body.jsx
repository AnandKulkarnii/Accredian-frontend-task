import FreqAskQue from "./FreqAskQue";
import Sidebar from "./Sidebar";
import Table from "./Table";
import Modal from "./Modal";
import { useState } from "react";

function Body() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="relative">
      <div className="w-[797px] h-[63px] bg-[rgba(26,115,235,0.15)] flex items-center justify-evenly rounded-full gap-4 mx-auto mt-5 ">
        <button className="font-roboto text-[#1A202C] text-[25px] font-normal leading-[22px] text-center">
          Refer
        </button>
        <button className="font-roboto text-[#1A202C] text-[25px] font-normal leading-[22px] text-center">
          Benefits
        </button>
        <button className="font-roboto text-[#1A202C] text-[25px] font-normal leading-[22px] text-center">
          FAQs
        </button>
        <button className="font-roboto text-[#1A202C] text-[25px] font-normal leading-[22px] text-center">
          Support
        </button>
      </div>

      <div className="h-[692px] w-[1360px] mt-4 bg-[#EEF5FF] mx-auto rounded-[29px] flex relative">
        <div>
          <div className="w-[502px] h-[190px] font-roboto font-bold text-[88px] leading-[88px] px-8 ml-4 mt-36">
            Let&#39;s Learn & Earn
          </div>
          <div className="h-[140px] w-[415px] font-roboto font-normal text-[40px] leading-[65px] px-4 ml-8 mt-10">
            Get a chance to win up-to{" "}
            <span className="text-[#1A73E8] font-roboto font-bold text-[54px] leading-[65px]">
              Rs. 15,000
            </span>
            <button
              onClick={openModal}
              className="w-[236px] h-[64px] bg-[#1A73E8] font-source-sans-pro text-[20px] font-normal leading-[24px] text-white mx-auto rounded-md text-center mt-12"
            >
              Refer Now
            </button>
          </div>
          <img
            className="absolute top-0 left-0"
            src="/assets/cash.png"
            alt=""
          />
          <img
            className="absolute left-[540px] bottom-10"
            src="/assets/fullcash.png"
            alt=""
          />
          <img
            className="absolute right-0 bottom-[250px]"
            src="/assets/haircash.png"
            alt=""
          />
          <img
            className="absolute top-0 right-0"
            src="/assets/rightcash.png"
            alt=""
          />
          <img
            className="absolute top-0 left-[730px]"
            src="/assets/topmiddlecash.png"
            alt=""
          />
        </div>
        <div>
          <img className="w-[814px] h-[725px]" src="/assets/image.png" alt="" />
        </div>
      </div>

      <div className="w-full h-[785px] mt-14 bg-[#EEF5FF] flex flex-col relative">
        <div className="font-roboto font-semibold mx-auto text-[27.66px] mt-8 mb-8">
          <span className="text-[#1A202C]">How do I </span>
          <span className="text-[#1A73E8]">Refer?</span>
        </div>
        <img className="mx-auto" src="/assets/circles.png" alt="" />
        <img
          className="w-[88px] h-[67px] left-[340px] top-[260px] absolute"
          src="/assets/plus.png"
          alt=""
        />
        <img
          className="w-[58px] h-[61px] left-[735px] top-[260px] absolute"
          src="/assets/notepad.png"
          alt=""
        />
        <img
          className="w-[58px] h-[51px] absolute left-[1120px] top-[260px]"
          src="/assets/wallet.png"
          alt=""
        />
        <div className="w-[193px] h-[88px] font-roboto text-[16px] font-normal leading-[22px] text-center absolute top-[360px] left-[280px]">
          Submit referrals easily via our website’s referral section.
        </div>
        <div className="w-[193px] h-[88px] font-roboto text-[16px] font-normal leading-[22px] text-center absolute top-[360px] left-[655px]">
          Earn rewards once your referral joins an Accredian program.
        </div>
        <div className="w-[193px] h-[88px] font-roboto text-[16px] font-normal leading-[22px] text-center absolute top-[360px] left-[1050px]">
          Both parties receive a bonus 30 days after program enrollment.
        </div>
        <button
          onClick={openModal}
          className="w-[236px] h-[64px] bg-[#1A73E8] font-source-sans-pro text-[20px] font-normal leading-[24px] text-white mx-auto rounded-md text-center mt-24"
        >
          Refer Now
        </button>
      </div>

      <div className="h-[59px] w-[584px] font-roboto text-[27.66px] font-semibold leading-[43px] text-center mx-auto mt-28">
        What Are The{" "}
        <span className="text-[#1A73E8] font-roboto text-[27.66px] font-semibold leading-[43px] text-center">
          Referral Benefits?
        </span>
      </div>

      <div className="flex items-center justify-center h-full w-full relative">
        <Sidebar />
        <Table />
        <select
          className="w-[174px] h-[41px] text-[#B6B6B6] border-[1px] rounded-md text-center bg-white text-base px-2 absolute top-[510px] right-20 "
          name="Courses"
          id=""
        >
          <option
            className="font-inter text-[14.75px] font-medium leading-[24px] absolute"
            value=""
          >
            Show More
          </option>
        </select>
      </div>

      <button
        onClick={openModal}
        className="w-[236px] h-[64px] bg-[#1A73E8] font-source-sans-pro text-[20px] font-normal leading-[24px] text-white rounded-md text-center mx-auto absolute left-1/2 mt-8"
      >
        Refer Now
      </button>

      <div className="mt-[200px]">
        <FreqAskQue />
      </div>

      <div className="h-[210px] w-[1360px] bg-[#1A73E8] mx-auto rounded-[29px] mt-[100px] py-6 px-12 flex items-center justify-between">
        <div className="flex items-center gap-10">
          <img
            src="/assets/headphone.png"
            alt="Icon"
            className="h-[72px] w-[72px] mr-4"
          />
          <div>
            <h2 className="text-white font-inter text-[28px] font-semibold leading-9">
              Want to delve deeper into the program?
            </h2>
            <p className=" font-inter text-[16.73px] leading-7 font-medium text-[#F5F5F5]">
              Share your details to receive expert insights from our program
              team!
            </p>
          </div>
        </div>
        <button className="bg-white w-[200px] h-[52px] text-center font-inter text-[18.75px] text-[#3B82F6] font-semibold py-2 px-4 rounded">
          Get in touch &rarr;
        </button>
      </div>
      <Modal isOpen={isModalOpen} closeModal={closeModal} />
    </div>
  );
}

export default Body;
