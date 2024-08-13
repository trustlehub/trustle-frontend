import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import uniment from "../../assets/mainLogo/uni_white.svg";
import mobile from "../../assets/landing/mobile.png";
import { Link } from "react-router-dom";

function MobileView() {
  return (
    <div className="max-w-[1512px] m-auto">
      <div className="bg-[#6F99FF] relative overflow-hidden after:content-[url(../src/assets/landing/back_4.webp)] after:absolute after:top-0 after:left-0 after:opacity-[0.26] after:z-[2] pt-28 max-md:pt-12">
        <div className="flex flex-col gap-8 z-10 relative items-center pb-[350px] max-md:pb-[240px]">
          <div className="flex flex-col items-center gap-4">
            <div className="flex">
              <div className="flex gap-1 px-3 py-[6.5px] text-white shadow-[0_0_0_1px_inset_white,0_4px_8px_0_#0000000d] rounded-[100px] bg-[rgba(255,255,255,0.17)] max-md:bg-transparent">
                <h1 className="font-secondary font-medium text-sm leading-[18px] select-none">
                  USER OWNED NETWORK
                </h1>
                <img src={uniment} alt="" className="w-5 h-5" />
              </div>
            </div>
            <div className="flex flex-col items-center gap-3">
              <h1 className=" font-primary font-medium text-[32px] max-md:text-[28px] leading-[38px] text-white">
                Trustle’s Uniment
              </h1>
              <h1 className="font-secondary font-medium leading-6 max-lg:leading-5 max-md:leading-6 text-white max-md:text-[14px] px-[450px] max-2xl:px-[340px] text-center max-xl:px-[220px] max-lg:px-[140px] max-md:px-4">
                Trustle’s super-dApp is designed to offer you complete ownership
                of your data while fostering meaningful connections in the
                emerging web3 landscape.
              </h1>
            </div>
          </div>
          <div className="flex">
            <Link to="/uniment">
              <div className="rounded-lg px-6 py-3 flex gap-0 hover:gap-2 bg-[#FFFFFFF0] items-center cursor-pointer group duration-500 hover:shadow-[0_0_0_0_rgba(21,30,48,0.10),0_3px_8px_0_rgba(21,30,48,0.10),0_14px_14px_0_rgba(21,30,48,0.09),0_31px_19px_0_rgba(21,30,48,0.05),0_55px_22px_0_rgba(21,30,48,0.01),0_87px_24px_0_rgba(21,30,48,0.0)]">
                <h1 className="text-sm font-semibold font-secondary text-grey-700">
                  Comming Soon
                </h1>
                <div className="max-w-0 duration-500 group-hover:max-w-[20px]">
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="duration-500 opacity-0 text-grey-700 group-hover:opacity-100"
                  />
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="absolute max-w-[calc(100%-327px)] max-xl:max-w-[calc(100%-260px)] max-lg:max-w-[calc(100%-200px)] max-md:max-w-[calc(100%-120px)] max-sm:max-w-[calc(100%-48px)] w-full h-[437px] bg-white rounded-[30px] z-20 border-[12px] border-black top-[457px] max-md:top-[380px] left-1/2 -translate-x-1/2">
          <img src={mobile} alt="" className="rounded-[30px]" />
        </div>
      </div>
    </div>
  );
}

export default MobileView;
