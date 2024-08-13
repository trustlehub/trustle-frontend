import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="max-w-[1512px] m-auto pt-24">
      <div className="relative bg-[#6F99FF] before:absolute before:content-[' '] before:top-0 before:left-0 before:bottom-0 before:right-0 before:bg-[url(../src/assets/uniment/hero.webp)] before:opacity-[26%] after:absolute after:content-[' '] after:w-[1216px] after:h-[606px] after:bottom-0 after:translate-y-1/2 after:rounded-[1216px] after:blur-[200px] after:bg-[#2F63E2] after:left-1/2 after:-translate-x-1/2 flex flex-col gap-6 items-center pt-[78px] overflow-hidden">
        <div className="py-4 px-[55px] relative z-10 font-primary font-medium text-white bg-[#FFFFFF1A] shadow-[0_0_0_1px_inset_#FFFFFF66]">
          Coming soon in 2024
        </div>
        <div className="flex flex-col gap-16 relative z-10 items-center">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-3 px-[410px] max-2xl:px-80 max-xl:px-48 max-lg:px-20 max-md:px-10 max-sm:px-4">
              <h1 className="font-primary font-medium text-[56px] max-xl:text-[42px] max-md:text-[32px] max-sm:text-[28px] leading-[67px] max-xl:leading-[40px] max-md:leading-[34px] text-white text-center">
                Feel the vibe like never before!
              </h1>
              <h1 className="font-secondary font-medium text-center max-md:font-normal max-md:text-sm max-md:leading-6 text-white">
                Uniment is designed to offer you complete ownership of your data
                while fostering meaningful connections in the evolving Web3
                landscape where your vibes can flow freely.
              </h1>
            </div>
            <div className="flex gap-4 justify-center max-sm:flex-col px-4">
              <Link to="/*">
                <div className="px-4 py-3 flex gap-0 hover:gap-2 rounded-lg bg-gradient-to-r from-[#1B253C] to-[#101828] items-center justify-center cursor-pointer border border-[#475467] duration-300 hover:shadow-[0_0_0_0_rgba(21,30,48,0.10),0_3px_8px_0_rgba(21,30,48,0.10),0_14px_14px_0_rgba(21,30,48,0.09),0_31px_19px_0_rgba(21,30,48,0.05),0_55px_22px_0_rgba(21,30,48,0.01),0_87px_24px_0_rgba(21,30,48,0.0)] group">
                  <h1 className="text-sm text-white font-secondary whitespace-nowrap">
                    Join the waitlist
                  </h1>
                  <div className="max-w-0 duration-300 group-hover:max-w-[30px] flex items-center overflow-hidden">
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="text-white duration-200 opacity-0 group-hover:opacity-100"
                    />
                  </div>
                </div>
              </Link>
              <Link to="learnmore">
                <div className="px-4 py-3 rounded-lg border border-white text-white font-secondary font-semibold text-sm whitespace-nowrap flex justify-center cursor-pointer items-center hover:shadow-[0_0_0_0_rgba(21,30,48,0.10),0_3px_8px_0_rgba(21,30,48,0.10),0_14px_14px_0_rgba(21,30,48,0.09),0_31px_19px_0_rgba(21,30,48,0.05),0_55px_22px_0_rgba(21,30,48,0.01),0_87px_24px_0_rgba(21,30,48,0.0)] duration-500">
                  Learn more
                </div>
              </Link>
            </div>
          </div>
          <div className="h-[380px] max-md:h-[200px] max-sm:h-[140px] w-[1186px] max-xl:w-[920px] max-lg:w-[700px] max-md:w-[500px] max-sm:w-[360px] max-xm:w-[280px] border-b-0  relative after:absolute after:content-[' '] after:top-0 after:bottom-0 after:left-0 after:right-0 after:bg-[url(../src/assets/landing/mobile.png)] after:rounded-t-3xl after:bg-cover" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
