import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Services() {
  return (
    <div className="max-w-[1512px] py-24 max-:px-[64.5px] mx-auto max-sm:px-4 max-md:px-8">
      <h1 className="text-transparent bg-clip-text bg-gradient-to-b from-[#1D2939] to-[#1D2939AB] font-primary font-medium text-[40px] max-md:text-[28px] leading-[48px] max-md:leading-[39px] text-center">
        Our Services
      </h1>
      <div className="flex justify-center flex-wrap gap-10">
        <div className="mt-[30px] card pt-20 pl-6 pr-4 pb-6 bg-[url('/assets/about_trustle/feature-cards1.png')] bg-cover rounded-xl lg:w-[30%] md:w-[45%]">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <h1 className="font-primary text-[24px] font-medium leading-[29.52px] text-grey-900">
                Search
              </h1>
              <h2 className="font-secondary text-base font-normal leading-[24px] text-grey-700">
                Uncover anyone’s online presence in one place - Find anyone, anywhere!
              </h2>
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
        </div>
        <div className="mt-[30px] card pt-20 pl-6 pr-4 pb-6 bg-[url('/assets/about_trustle/feature-cards2.png')] bg-cover rounded-xl lg:w-[30%] md:w-[45%]">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <h1 className="font-primary text-[24px] font-medium leading-[29.52px] text-grey-900">
                Killswitch
              </h1>
              <h2 className="font-secondary text-base font-normal leading-[24px] text-grey-700">
                Permanently remove specific online data results.
                Curate and manage your online identity with ease.
              </h2>
            </div>
            <Link to='/killswitch'>
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
        <div className="mt-[30px] card pt-20 pl-6 pr-4 pb-6 bg-[url('/assets/about_trustle/feature-cards3.png')] bg-cover rounded-xl lg:w-[30%] md:w-[45%]">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <h1 className="font-primary text-[24px] font-medium leading-[29.52px] text-grey-900">
                2-to-3
              </h1>
              <h2 className="font-secondary text-base font-normal leading-[24px] text-grey-700">
                Seamlessly migrate your data. Be in control of your privacy and information.
              </h2>
            </div>
            <Link to='/2-to-3' >
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
        <div className="mt-[30px] card pt-20 pl-6 pr-4 pb-6 bg-[url('/assets/about_trustle/feature-cards4.png')] bg-cover rounded-xl lg:w-[30%] md:w-[45%]">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <h1 className="font-primary text-[24px] font-medium leading-[29.52px] text-grey-900">
                Uniment
              </h1>
              <h2 className="font-secondary text-base font-normal leading-[24px] text-grey-700">
                Faster meaningful connections in the emerging web3 landscape-Where vibes can flow freely.
              </h2>
            </div>
            <Link to='/uniment' >
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

export default Services;
