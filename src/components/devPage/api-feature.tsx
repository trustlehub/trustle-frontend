import search from "../../assets/mainLogo/search.svg";
import kill from "../../assets/mainLogo/killswitch.svg";
import two_three from "../../assets/mainLogo/2-3-con.svg";
import uniment from "../../assets/mainLogo/uniment.svg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function APIFeature() {
  return (
    <div className="max-w-[1512px] m-auto">
      <div className="px-20 max-lg:px-10 max-xm:px-4 py-24 max-md:py-12 flex flex-col gap-16">
        <div className="flex flex-col gap-4">
          <h1 className="font-primary font-medium text-[40px] max-sm:text-[28px] leading-[48px] max-sm:leading-[34px] text-center text-transparent bg-clip-text bg-[linear-gradient(180deg,#1D2939_0%,rgba(29,41,57,0.67)_100%)]">
            API Features
          </h1>
          <h1 className="font-secondary text-grey-900 text-center">
            Explore our API services
          </h1>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="min-w-[270px] max-w-[314px] px-4 py-6 flex flex-col gap-7 justify-between shadow-[0_8px_8px_-4px_#10182808,0_20px_34px_-4px_#1018280A]">
            <div className="flex flex-col">
              <img src={search} alt="" className="h-[63px] w-[63px] p-2" />
              <h1 className="font-primary font-medium text-xl leading-[30px] text-grey-900 mt-4">
                Search Tool
              </h1>
              <h1 className="font-secondary text-sm leading-[22px] text-grey-700 mt-2">
                Harness the power of Trustle's Search API to find comprehensive
                information about online identities, profiles, and accounts.
                Retrieve data efficiently for a wide range of use cases.
              </h1>
            </div>
            <Link to="/search">
              <div className="flex gap-2 items-center cursor-pointer group">
                <h1 className="font-secondary font-medium text-primary">
                  Learn more
                </h1>
                <div className="max-w-0 duration-300 group-hover:max-w-[18px] flex items-center overflow-hidden">
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="text-[#7CCA68] duration-200 opacity-0 group-hover:opacity-100"
                  />
                </div>
              </div>
            </Link>
          </div>
          <div className="min-w-[270px] max-w-[314px] px-4 py-6 flex flex-col gap-7 justify-between shadow-[0_8px_8px_-4px_#10182808,0_20px_34px_-4px_#1018280A]">
            <div className="flex flex-col">
              <img src={kill} alt="" className="h-[63px] w-[63px] p-1" />
              <h1 className="font-primary font-medium text-xl leading-[30px] text-grey-900 mt-4">
                Killswitch
              </h1>
              <h1 className="font-secondary text-sm leading-[22px] text-grey-700 mt-2">
                Implement the Killswitch API to enable users to manage and
                remove online content with ease.
              </h1>
            </div>
            <Link to="/killswitch">
              <div className="flex gap-2 items-center cursor-pointer group">
                <h1 className="font-secondary font-medium text-primary">
                  Learn more
                </h1>
                <div className="max-w-0 duration-300 group-hover:max-w-[18px] flex items-center overflow-hidden">
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="text-[#7CCA68] duration-200 opacity-0 group-hover:opacity-100"
                  />
                </div>
              </div>
            </Link>
          </div>
          <div className="min-w-[270px] max-w-[314px] px-4 py-6 flex flex-col gap-7 justify-between shadow-[0_8px_8px_-4px_#10182808,0_20px_34px_-4px_#1018280A]">
            <div className="flex flex-col">
              <img src={two_three} alt="" className="h-[63px] w-[63px] p-2" />
              <h1 className="font-primary font-medium text-xl leading-[30px] text-grey-900 mt-4">
                2-to-3 Migration Tool
              </h1>
              <h1 className="font-secondary text-sm leading-[22px] text-grey-700 mt-2">
                Integrate the 2-to-3 API to facilitate data migration from web2
                to web3 platforms securely.
              </h1>
            </div>
            <Link to="/2-to-3">
              <div className="flex gap-2 items-center cursor-pointer group">
                <h1 className="font-secondary font-medium text-primary">
                  Learn more
                </h1>
                <div className="max-w-0 duration-300 group-hover:max-w-[18px] flex items-center overflow-hidden">
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="text-[#7CCA68] duration-200 opacity-0 group-hover:opacity-100"
                  />
                </div>
              </div>
            </Link>
          </div>
          <div className="min-w-[270px] max-w-[314px] px-4 py-6 flex flex-col gap-7 justify-between shadow-[0_8px_8px_-4px_#10182808,0_20px_34px_-4px_#1018280A]">
            <div className="flex flex-col">
              <img src={uniment} alt="" className="h-[63px] w-[63px] p-2" />
              <h1 className="font-primary font-medium text-xl leading-[30px] text-grey-900 mt-4">
                Uniment
              </h1>
              <h1 className="font-secondary text-sm leading-[22px] text-grey-700 mt-2">
                Lorem ipsum dolor sit amet, ctetur adipiscing elit. ndisse
                varius enim in eros elementum tristique.
              </h1>
            </div>
            <Link to="/uniment">
              <div className="flex gap-2 items-center cursor-pointer group">
                <h1 className="font-secondary font-medium text-primary">
                  Learn more
                </h1>
                <div className="max-w-0 duration-300 group-hover:max-w-[18px] flex items-center overflow-hidden">
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="text-[#7CCA68] duration-200 opacity-0 group-hover:opacity-100"
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

export default APIFeature;
