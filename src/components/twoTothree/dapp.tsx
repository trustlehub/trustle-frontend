import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import dapp from "../../assets/twotothree/dapp.png";

function Dapp() {
  return (
    <div className="max-w-[1512px] m-auto">
      <div className="py-24 px-[120px] flex flex-col gap-16 max-md:py-16 max-lg:px-20 max-md:px-10 max-sm:px-4">
        <div className="bg-[linear-gradient(90deg,#FCFCFD_-0.67%,#EDEEEB_100%)] rounded-[20px] px-14 max-xl:px-10 max-md:px-4 py-11 flex max-md:flex-col max-md:items-center justify-between gap-5">
          <div className="flex flex-col">
            <h1 className="font-secondary font-medium text-grey-700">
              Integrations
            </h1>
            <h1 className="font-primary font-medium text-[40px] max-lg:text-4xl max-md:text-3xl max-sm:text-[28px] leading-[44px] tracking-[-2%] text-transparent bg-clip-text bg-[linear-gradient(180deg,#1D2939_0%,rgba(29,41,57,0.67)_100%)] mt-4">
              Want to connect your dApp?
            </h1>
            <h1 className="font-secondary text-grey-900 mt-5">
              Are you a decentralised platform and want to integrate your
              platform with us? - Don't hesitate to contact our awesome support
              team to help you with the optimal business integration.
            </h1>
            <Link to="" className="mt-6">
              <div className="flex gap-2 items-center cursor-pointer group">
                <h1 className="font-secondary font-medium text-transparent bg-clip-text bg-[linear-gradient(131.04deg,#8DB862_-10.54%,#F7CE28_144.5%)]">
                  Contact Us
                </h1>
                <div className="max-w-0 duration-300 group-hover:max-w-[18px] flex items-center overflow-hidden">
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="duration-200 opacity-0 group-hover:opacity-100 text-[#F7CE28]"
                  />
                </div>
              </div>
            </Link>
          </div>
          <img
            src={dapp}
            alt=""
            className="max-md:rotate-90 max-md:w-[280px] max-xl:w-[360px] object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default Dapp;
