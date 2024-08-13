import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import robot from "../../assets/dev/robot.png";
import phone from "../../assets/dev/phone.png";

function Community() {
  return (
    <div className="max-w-[1512px] m-auto">
      <div className="px-20 max-lg:px-10 max-xm:px-4 py-24 max-md:py-12 flex flex-col gap-16 items-center">
        <div className="flex flex-col gap-4">
          <h1 className="font-primary font-medium text-[40px] max-sm:text-[28px] leading-[48px] max-sm:leading-[34px] text-center text-transparent bg-clip-text bg-[linear-gradient(180deg,#1D2939_0%,rgba(29,41,57,0.67)_100%)]">
            Help & Community
          </h1>
          <h1 className="font-secondary text-grey-900 text-center px-[380px] max-xl:px-[240px] max-lg:px-[140px] max-md:px-4">
            Learn, grow, and build together with Trustle's developing community.
          </h1>
        </div>
        <div className="flex justify-between gap-8 items-center max-w-[1352px] max-lg:flex-col">
          <div className="flex w-[63%] max-lg:w-full max-md:flex-col items-center">
            <div className="flex flex-col w-1/2 bg-[#F9F9F9] p-8 rounded-l-xl items-center justify-center max-md:w-full">
              <h1 className="font-primary font-medium text-[32px] max-sm:text-2xl leading-[42px] text-transparent bg-clip-text bg-[linear-gradient(180deg,#1D2939_0%,rgba(29,41,57,0.67)_100%)]">
                Developer Community
              </h1>
              <h1 className="font-secondary text-grey-700 mt-6">
                Join our developer community to connect with other developers,
                share experiences, and get support. Access forums, blogs, and
                developer resources to stay updated on the latest developments.
              </h1>
              <Link to="https://www.reddit.com/r/trustle" className="mt-8">
                <div className="flex gap-2 items-center cursor-pointer group">
                  <h1 className="font-secondary font-medium text-primary">
                    Join the community
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
            <img src={robot} alt="" className="w-1/2 max-md:w-2/3" />
          </div>
          <div className="flex flex-col bg-[#F9F9F9] p-8 rounded-xl items-center w-1/3 h-full max-lg:w-full">
            <div className="flex flex-col">
              <h1 className="font-primary font-medium text-[32px] leading-[42px] text-transparent bg-clip-text bg-[linear-gradient(180deg,#1D2939_0%,rgba(29,41,57,0.67)_100%)]">
                Getting Help
              </h1>
              <h1 className="font-secondary text-grey-700 mt-6">
                If you encounter any issues or have questions while using
                Trustle's developer tools, our support team is here to assist
                you. Contact us via support@trustle-beta.com for prompt
                assistance.
              </h1>
              <Link to="mailto:support@trustle-beta.com" className="mt-6">
                <div className="flex gap-2 items-center cursor-pointer group">
                  <h1 className="font-secondary font-medium text-primary">
                    Contact us
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
            <img src={phone} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Community;
