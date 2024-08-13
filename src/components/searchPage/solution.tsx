import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import tow_3 from "../../assets/mainLogo/2-3-con.svg";
import kill from "../../assets/mainLogo/killswitch.svg";
import uni from "../../assets/mainLogo/uniment.svg";

function Solution() {
  return (
    <div className="max-w-[1512px] m-auto">
      <div className="px-20 max-lg:px-10 max-xm:px-4 py-24 max-md:py-12 flex flex-col gap-10">
        <h1 className="font-primary font-medium text-[32px] max-md:text-[24px] leading-10 max-md:leading-[30px] text-transparent bg-clip-text bg-gradient-to-b from-[#1D2939] to-[#1D2939AB] px-[500px] max-2xl:px-60 max-lg:px-40 max-md:px-14 text-center">
          Explore Trustle's{" "}
          <span className="max-md:text-transparent max-md:bg-clip-text max-md:bg-gradient-to-b max-md:from-[#7CCA68] max-md:to-[#62CA9E]">
            Suite of Solutions
          </span>
        </h1>
        <div className="grid grid-cols-3 gap-5 max-md:grid-cols-1">
          <div className="p-5 flex flex-col gap-5 rounded-xl shadow-[0_0_0_1px_inset_#f2f4f7] relative after:absolute after:top-0 after:left-0 after:right-0 after:bottom-0 after:duration-300 hover:after:shadow-[0_12px_28px_-4px_#47546729] group overflow-hidden">
            <div className="rounded-xl flex items-center justify-center border border-grey-300 overflow-hidden h-32">
              <img
                src={tow_3}
                alt=""
                className="object-center duration-500 group-hover:scale-105 h-20"
              />
            </div>
            <div className="flex flex-col gap-6 justify-between relative z-10">
              <div className="flex flex-col gap-2">
                <div className="flex gap-3 items-center">
                  <h1 className="font-primary font-medium text-2xl leading-[30px] text-grey-800">
                    2-to-3
                  </h1>
                  <div className="rounded-full p-[6px] bg-[#eee]">
                    <h1 className="font-secondary font-medium text-sm leading-[18px] text-grey-600">
                      Coming soon
                    </h1>
                  </div>
                </div>
                <h1 className="font-secondary text-grey-700">
                  Seamlessly migrate data to a decentralized platform. Be in
                  control of your privacy and information.
                </h1>
              </div>
              <Link to="/2-to-3">
                <div className="flex gap-2 items-center cursor-pointer group/learn">
                  <h1 className="font-secondary font-medium text-primary">
                    Learn more
                  </h1>
                  <div className="max-w-0 duration-300 group-hover/learn:max-w-[18px] flex items-center overflow-hidden">
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="text-[#7CCA68] duration-200 opacity-0 group-hover/learn:opacity-100"
                    />
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="p-5 flex flex-col gap-5 rounded-xl shadow-[0_0_0_1px_inset_#f2f4f7] relative after:absolute after:top-0 after:left-0 after:right-0 after:bottom-0 after:duration-300 hover:after:shadow-[0_12px_28px_-4px_#47546729] group overflow-hidden">
            <div className="rounded-xl flex items-center justify-center border border-grey-300 overflow-hidden h-32">
              <img
                src={kill}
                alt=""
                className="object-center duration-500 group-hover:scale-105 h-20"
              />
            </div>
            <div className="flex flex-col gap-6 justify-between relative z-10">
              <div className="flex flex-col gap-2">
                <h1 className="font-primary font-medium text-2xl leading-[30px] text-grey-800">
                  Killswitch
                </h1>
                <h1 className="font-secondary text-grey-700">
                  Permanently remove specific online data results. Curate and
                  manage your online identity with ease.
                </h1>
              </div>
              <Link to="/killswitch">
                <div className="flex gap-2 items-center cursor-pointer group/learn">
                  <h1 className="font-secondary font-medium text-primary">
                    Learn more
                  </h1>
                  <div className="max-w-0 duration-300 group-hover/learn:max-w-[18px] flex items-center overflow-hidden">
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="text-[#7CCA68] duration-200 opacity-0 group-hover/learn:opacity-100"
                    />
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="p-5 flex flex-col gap-5 rounded-xl shadow-[0_0_0_1px_inset_#f2f4f7] relative after:absolute after:top-0 after:left-0 after:right-0 after:bottom-0 after:duration-300 hover:after:shadow-[0_12px_28px_-4px_#47546729] group overflow-hidden">
            <div className="rounded-xl flex items-center justify-center border border-grey-300 overflow-hidden h-32">
              <img
                src={uni}
                alt=""
                className="object-center duration-500 group-hover:scale-105 h-20"
              />
            </div>
            <div className="flex flex-col gap-6 justify-between relative z-10">
              <div className="flex flex-col gap-2">
                <div className="flex gap-3 items-center">
                  <h1 className="font-primary font-medium text-2xl leading-[30px] text-grey-800">
                    Uniment
                  </h1>
                  <div className="rounded-full p-[6px] bg-[#eee]">
                    <h1 className="font-secondary font-medium text-sm leading-[18px] text-grey-600">
                      Coming soon
                    </h1>
                  </div>
                </div>
                <h1 className="font-secondary text-grey-700">
                  Transfer your online presence to a blockchain network,
                  preserving your digital identity seamlessly.
                </h1>
              </div>
              <Link to="/uniment">
                <div className="flex gap-2 items-center cursor-pointer group/learn">
                  <h1 className="font-secondary font-medium text-primary">
                    Learn more
                  </h1>
                  <div className="max-w-0 duration-300 group-hover/learn:max-w-[18px] flex items-center overflow-hidden">
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="text-[#7CCA68] duration-200 opacity-0 group-hover/learn:opacity-100"
                    />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Solution;
