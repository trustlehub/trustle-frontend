import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Wallet() {
  return (
    <div className="max-w-[1512px] m-auto">
      <div className="px-20 max-md:px-4 py-24 max-md:py-16 flex flex-col gap-16">
        <div className="flex max-md:flex-col justify-between bg-[#fafafa] rounded-2xl p-16 max-md:p-0 gap-36 max-md:gap-14">
          <div className="flex flex-col gap-4">
            <h1 className="font-secondary font-semibold text-[30px] leading-[38px] text-grey-900">
              Join the wait list for early access
            </h1>
            <h1 className="font-secondary text-xl leading-[30px] text-grey-700">
              Join 10,000 happy users in experiencing the future of social
              networking—a place where your voice matters, your data is
              protected, and your connections are authentic
            </h1>
          </div>
          <div className="flex gap-3 max-md:flex-col">
            <Link to="/*">
              <div className="px-6 py-3 rounded-lg border border-grey-400 shadow-[0_1px_2px_0_#1018280D] bg-white text-grey-700 font-secondary font-semibold text-sm whitespace-nowrap flex justify-center cursor-pointer items-center hover:shadow-[0_0_0_0_rgba(21,30,48,0.10),0_3px_8px_0_rgba(21,30,48,0.10),0_14px_14px_0_rgba(21,30,48,0.09),0_31px_19px_0_rgba(21,30,48,0.05),0_55px_22px_0_rgba(21,30,48,0.01),0_87px_24px_0_rgba(21,30,48,0.0)] duration-300">
                Learn more
              </div>
            </Link>
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wallet;
