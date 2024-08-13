import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import left_1 from "../../assets/landing/left_1.webp";
import left_2 from "../../assets/landing/left_2.webp";
import left_3 from "../../assets/landing/left_3.webp";
import search from "../../assets/mainLogo/search.svg";
import two from "../../assets/mainLogo/2-3-con.svg";
import killswitch from "../../assets/mainLogo/killswitch.svg";
import { Link } from "react-router-dom";

function Feature() {
  return (
    <div className="max-w-[1512px] m-auto">
      <div className="px-20 max-lg:px-10 max-xm:px-4 pt-28 max-md:pt-12 pb-[95px] max-md:pb-10 max-sm:py-16 flex flex-col gap-[72px] max-sm:gap-8 items-center">
        <h1 className="font-primary font-medium text-[40px] max-sm:text-[28px] leading-[49px] max-md:leading-[40px] text-transparent bg-clip-text bg-gradient-to-b from-[#1D2939] to-[#1D2939AB] text-center px-72 max-xl:px-20 max-lg:px-10 max-md:px-0">
          Discover, Control, and Liberate Your Digital Identity with Trustle
        </h1>
        <div className="grid gap-24">
          <div className="flex max-md:flex-col-reverse feature">
            <img
              src={left_1}
              alt=""
              className="max-w-[606px] max-lg:w-[400px] max-md:w-full opacity-80 cursor-pointer duration-500 left"
            />
            <div className="bg-[#F2DDFB] relative overflow-hidden after:absolute after:content-[' '] after:w-full after:h-full after:bg-[url(../src/assets/landing/back_1.webp)] after:top-0 after:left-0 after:opacity-[0.12] after:z-[2] after:bg-[center_bottom] after:bg-no-repeat after:bg-cover flex items-center pl-20 pr-[124px] max-xl:px-6 rounded-r-[28px] max-md:rounded-[16px_16px_0_0] max-md:px-4 max-md:py-8 after:duration-500 right">
              <div className="z-10 flex flex-col gap-8">
                <div className="flex flex-col gap-4">
                  <div className="flex">
                    <div className="flex gap-2 px-3 max-md:px-2 py-[6px] max-md:py-[2.5px] text-[#775585] shadow-[0_4px_8px_0_#0000000d] border border-[rgba(119,85,133,0.35)] max-md:border-white rounded-[100px] bg-[rgba(255,255,255,0.3)] max-md:bg-transparent">
                      <h1 className="font-secondary font-medium text-sm leading-[18px] select-none">
                        THOROUGH SEARCHING
                      </h1>
                      <img src={search} alt="" className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-3">
                    <h1 className=" font-primary font-medium text-[32px] max-md:text-[24px] leading-[28px] text-[#583368]">
                      Trustle’s Search
                    </h1>
                    <h1 className="font-secondary font-medium leading-6 max-lg:leading-5 max-md:leading-6 text-[#583368CC] max-md:text-[14px]">
                      Explore the digital footprints of individuals across
                      various online platforms, gathering comprehensive
                      information in one place.
                    </h1>
                  </div>
                </div>
                <div className="flex">
                  <Link to="/search">
                    <div className="rounded-lg px-6 py-3 flex gap-0 hover:gap-2 bg-[#FFFFFFF0] items-center cursor-pointer group duration-500 hover:shadow-[0_0_0_0_rgba(21,30,48,0.10),0_3px_8px_0_rgba(21,30,48,0.10),0_14px_14px_0_rgba(21,30,48,0.09),0_31px_19px_0_rgba(21,30,48,0.05),0_55px_22px_0_rgba(21,30,48,0.01),0_87px_24px_0_rgba(21,30,48,0.0)]">
                      <h1 className="font-secondary font-semibold text-sm text-grey-700">
                        Go to Search
                      </h1>
                      <div className="max-w-0 duration-500 group-hover:max-w-[20px] overflow-hidden">
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className="text-grey-700 opacity-0 group-hover:opacity-100 duration-500"
                        />
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="flex max-md:flex-col-reverse feature">
            <div className="bg-[#D4E2FA] relative overflow-hidden after:content-[url(../src/assets/landing/back_3.webp)] after:absolute after:top-0 after:left-0 after:opacity-[0.18] after:z-[2] flex items-center pl-16 pr-[120px] max-xl:px-6 rounded-l-[28px] max-md:rounded-[16px_16px_0_0] max-md:px-4 max-md:py-8 after:duration-500 right">
              <div className="z-10 flex flex-col gap-8">
                <div className="flex flex-col gap-4">
                  <div className="flex">
                    <div className="flex gap-1 px-3 py-[6px] max-md:py-[3px] text-[#5C6D88] shadow-[0_4px_8px_0_#0000000d] rounded-[100px] border border-[rgba(92,109,136,0.41)] max-md:border-white bg-[rgba(255,255,255,0.33)] max-md:bg-transparent">
                      <h1 className="font-secondary font-medium text-sm leading-[18px] select-none">
                        WIPE YOUR TRACKS
                      </h1>
                      <img src={killswitch} alt="" className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-3">
                    <h1 className=" font-primary font-medium text-[32px] max-md:text-[24px] leading-[28px] text-[#3F4E6B]">
                      Trustle’s Killswitch
                    </h1>
                    <h1 className="font-secondary font-medium leading-6 max-lg:leading-5 max-md:leading-6 text-[#3F4E6BC9] max-md:text-[14px]">
                      Empower users to swiftly and securely remove their entire
                      online presence with a single click, ensuring data
                      privacy.
                    </h1>
                  </div>
                </div>
                <div className="flex">
                  <Link to="/killswitch">
                    <div className="rounded-lg px-6 py-3 flex gap-0 hover:gap-2 bg-[#FFFFFFF0] items-center cursor-pointer group duration-500 hover:shadow-[0_0_0_0_rgba(21,30,48,0.10),0_3px_8px_0_rgba(21,30,48,0.10),0_14px_14px_0_rgba(21,30,48,0.09),0_31px_19px_0_rgba(21,30,48,0.05),0_55px_22px_0_rgba(21,30,48,0.01),0_87px_24px_0_rgba(21,30,48,0.0)]">
                      <h1 className="font-secondary font-semibold text-sm text-grey-700">
                        Go to Killswitch
                      </h1>
                      <div className="max-w-0 duration-500 group-hover:max-w-[20px]">
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className="text-grey-700 opacity-0 group-hover:opacity-100 duration-500"
                        />
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <img
              src={left_3}
              alt=""
              className="max-w-[606px] max-lg:w-[400px] max-md:w-full opacity-80 cursor-pointer duration-500 left rounded-r-[28px]"
            />
          </div>
          <div className="flex max-md:flex-col feature">
            <img
              src={left_2}
              alt=""
              className="max-w-[606px] max-lg:w-[400px] max-md:w-full opacity-80 cursor-pointer duration-500 left"
            />
            <div className="bg-[#DCF2D7] relative overflow-hidden after:content-[url(../src/assets/landing/back_2.webp)] after:absolute after:top-0 after:left-0 after:opacity-[0.18] after:z-[2] flex items-center pl-20 pr-[84px] max-xl:px-6 rounded-r-[28px] max-md:rounded-[16px_16px_0_0] max-md:px-4 max-md:py-8 after:duration-500 right">
              <div className="z-10 flex flex-col gap-8">
                <div className="flex flex-col gap-4">
                  <div className="flex">
                    <div className="flex gap-1 px-3 py-[6px] max-md:py-[3px] text-[#56794F] shadow-[0_4px_8px_0_#0000000d] rounded-[100px] border border-[rgba(86,121,79,0.35)] max-md:border-white bg-[rgba(255,255,255,0.29)] max-md:bg-transparent items-center">
                      <h1 className="font-secondary font-medium text-sm leading-[18px] select-none">
                        MIGRATE YOUR DATA
                      </h1>
                      <img src={two} alt="" className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-3">
                    <h1 className="font-primary font-medium text-[32px] max-md:text-[24px] leading-[28px] text-[#3B5F32]">
                      Trustle’s 2-to-3
                    </h1>
                    <h1 className="font-secondary font-medium leading-6 max-lg:leading-5 max-md:leading-6 text-[#3B5F32CC] max-md:text-[14px]">
                      Seamlessly transfer your online presence to your preferred
                      blockchain network, preserving your digital identity in a
                      decentralised realm.
                    </h1>
                  </div>
                </div>
                <div className="flex">
                  <Link to="/2-to-3">
                    <div className="rounded-lg px-6 py-3 flex gap-0 hover:gap-2 bg-[#FFFFFFF0] items-center cursor-pointer group duration-500 hover:shadow-[0_0_0_0_rgba(21,30,48,0.10),0_3px_8px_0_rgba(21,30,48,0.10),0_14px_14px_0_rgba(21,30,48,0.09),0_31px_19px_0_rgba(21,30,48,0.05),0_55px_22px_0_rgba(21,30,48,0.01),0_87px_24px_0_rgba(21,30,48,0.0)]">
                      <h1 className="font-secondary font-semibold text-sm text-grey-700">
                        Comming Soon
                      </h1>
                      <div className="max-w-0 duration-500 group-hover:max-w-[20px]">
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className="text-grey-700 opacity-0 group-hover:opacity-100 duration-500"
                        />
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feature;
