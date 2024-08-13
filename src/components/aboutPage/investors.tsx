import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Joeli from "../../assets/about/joeli.jpg";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Investors() {
  return (
    <div className="max-w-[1512px] m-auto">
      {/* <div className="flex flex-col gap-24 px-20 py-24 max-sm:px-4 max-md:gap-8 max-lg:grid-cols-1 max-lg:justify-center">
        <div className="flex flex-col gap-6 px-[300px] max-2xl:px-40 max-lg:px-0">
          <h1 className="font-primary font-medium text-[40px] max-lg:text-4xl max-sm:text-[28px] leading-[48px] text-center text-transparent bg-clip-text bg-[linear-gradient(180deg,#1D2939_0%,rgba(29,41,57,0.67)_100%)]">
            Our Valued Investors
          </h1>
          <h1 className="text-lg text-center font-secondary text-grey-700">
            Investors are not just financial partners; they are an integral part
            of the Trustle community. Their insights, ideas, and feedback shape
            our path forward. Together, we are creating a digital environment
            where people can be their authentic selves and form meaningful
            connections.
          </h1>
        </div>
        <div className="relative z-20 flex items-center justify-center">
          <div className="flex flex-wrap items-center justify-center gap-10">
            <div className="p-5 grid grid-rows-[auto_1fr] h-[367px] w-[271px] gap-5 duration-500 rounded-xl relative bg-gradient-to-tr from-[#7CCA682E] to-[#62CA9E2E] after:absolute after:top-0 after:left-0 after:bottom-0 after:right-0 after:bg-grey-200 after:rounded-xl hover:after:top-[2px] hover:after:right-[2px] hover:after:bottom-[2px] hover:after:left-[2px] group">
              <div className="z-10 overflow-hidden rounded-lg">
                <img
                  src={Joeli}
                  alt=""
                  className="relative duration-500 group-hover:scale-105"
                />
              </div>
              <div className="relative z-10 flex flex-col gap-6">
                <div className="flex flex-col gap-1">
                  <h1 className="text-2xl font-medium leading-9 text-center font-primary text-grey-900">
                    Joel Norrmarker
                  </h1>
                  <h1 className="font-medium text-center font-secondary text-grey-700">
                    Director
                  </h1>
                </div>
                <div className="flex gap-[14px] justify-center">
                  <Link to="https://www.linkedin.com/in/michaelbage/">
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      className="text-[#7CCA68] text-xl"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Investors;
