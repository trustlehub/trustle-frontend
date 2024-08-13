import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import two from "../../assets/mainLogo/2-3-con.svg";

function Hero() {
  return (
    <div className="max-w-[1512px] m-auto bg-white relative overflow-hidden after:absolute after:w-full after:h-full after:bg-[url('../src/assets/twotothree/hero.webp')] after:top-0 after:left-0 after:opacity-[12%] after:z-[2] after:bg-[center_bottom] after:bg-no-repeat after:bg-cover shadow-[0_0_0_1px_inset_#EAECF0] max-sm:rounded-none pt-[96px]">
      <div className="flex items-center relative z-10 pl-20 pr-10 max-md:px-10 max-sm:px-4 max-md:flex-col max-md:gap-12">
        <div className="flex flex-col gap-6">
          <div className="flex max-md:justify-center">
            <div className="border comming relative after:absolute after:content-[' '] after:top-0 after:left-0 after:bottom-0 after:right-0 after:bg-gradient-to-r after:from-[#8DB8625C] after:to-[#F7CE285C] after:border after:border-white py-4 px-14">
              <h1 className="font-primary font-medium leading-3 text-[#587136] text-center relative z-10">
                Coming soon in 2024
              </h1>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <h1 className="font-primary font-medium text-[56px] max-xl:text-[40px] max-lg:text-[56px] max-sm:text-[40px] max-xm:text-[32px] leading-[64px] max-xl:leading-[48px] max-lg:leading-[56px] max-sm:leading-[45px] text-transparent bg-clip-text bg-gradient-to-b from-[#1D2939] to-[#1D2939AB] max-md:text-center">
                Migrate Your Digital Footprint
              </h1>
              <h1 className="font-secondary text-grey-700 leading-6 text-left max-sm:text-sm pr-60 max-xl:pr-20 max-md:pr-0 max-md:text-center">
                Seamlessly migrate data to your preferred blockchain network. Be
                in control of your privacy and information.
              </h1>
            </div>
            <div className="flex gap-3 max-md:flex-col">
              <div className="px-8 py-4 flex hover:gap-2 rounded-lg bg-gradient-to-r from-[#1B253C] to-[#101828] items-center justify-center cursor-pointer border border-grey-800 duration-500 hover:shadow-[0_0_0_0_rgba(21,30,48,0.10),0_3px_8px_0_rgba(21,30,48,0.10),0_14px_14px_0_rgba(21,30,48,0.09),0_31px_19px_0_rgba(21,30,48,0.05),0_55px_22px_0_rgba(21,30,48,0.01),0_87px_24px_0_rgba(21,30,48,0.0)] group">
                <h1 className="text-sm text-white font-secondary whitespace-nowrap">
                  Get started
                </h1>
                <div className="w-0 duration-300 group-hover:w-3 h-[18px] flex items-center">
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="text-white duration-200 opacity-0 group-hover:opacity-100"
                  />
                </div>
              </div>
              <div className="bg-white rounded-lg px-8 py-4 border border-grey-400 font-secondary font-semibold text-grey-700 text-sm cursor-pointer text-center">
                How it works
              </div>
            </div>
          </div>
        </div>
        <div className="pb-24 flex items-center min-w-[486px] min-h-[486px] max-lg:min-w-[360px] max-lg:min-h-[360px] max-md:min-w-[200px] max-md:min-h-[200px]">
          <img src={two} alt="" className="w-full h-full" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
