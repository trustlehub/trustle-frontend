import { Link } from "react-router-dom";
import search from "../../assets/mainLogo/search.svg";

function SearchAPI() {
  return (
    <div className="max-w-[1512px] m-auto">
      <div className="px-20 max-lg:px-10 max-xm:px-4 py-24 max-md:py-12 flex flex-col gap-20 items-center overflow-hidden">
        <div className="flex flex-col gap-6 items-center">
          <h1 className="font-primary font-medium text-[40px] leading-[48px] text-center text-transparent bg-clip-text bg-[linear-gradient(180deg,#1D2939_0%,rgba(29,41,57,0.67)_100%)]">
            Explore with Search’s API
          </h1>
          <h1 className="font-secondary text-lg text-center text-grey-700">
            Unlock the power of Trustle's Search capabilities with our intuitive
            API. Whether you're building applications, conducting research, or
            enhancing your platform, our API provides seamless access to
            comprehensive online data.
          </h1>
        </div>
        <div className="flex flex-col gap-16 items-center">
          <div className="flex gap-12 max-xl:gap-8 items-center max-md:flex-col">
            <div className="flex flex-col gap-16 px-4">
              <div className="flex flex-col gap-4">
                <h1 className="font-primary font-medium text-2xl text-center text-grey-900">
                  Simple Integration
                </h1>
                <h1 className="font-secondary font-grey-700 text-center">
                  Effortlessly integrate Trustle API into your project with
                  clear, developer-friendly documentation.
                </h1>
              </div>
              <div className="flex flex-col gap-4">
                <h1 className="font-primary font-medium text-2xl text-center text-grey-900">
                  Security
                </h1>
                <h1 className="font-secondary font-grey-700 text-center">
                  Trustle's commitment to data privacy extends to our API,
                  ensuring your users' information is handled with care.
                </h1>
              </div>
            </div>
            <div className="px-[94px] max-xl:p-12 max-lg:p-8 max-md:p-0 py-[50px]">
              <div className="w-[440px] h-[440px] max-xl:w-[400px] max-lg:w-[360px] max-lg:h-[360px] max-xl:h-[400px] rounded-full p-9 bg-[#F6F3F7] border-[9px] border-white shadow-[0_26.916748046875px_40.3751220703125px_-13.4583740234375px_#10182808,0_80.750244140625px_107.6669921875px_-26.916748046875px_#10182814]">
                <img src={search} alt="" className="round-animation" />
              </div>
            </div>
            <div className="flex flex-col gap-16 px-4">
              <div className="flex flex-col gap-4">
                <h1 className="font-primary font-medium text-2xl text-center text-grey-900">
                  Data Insights
                </h1>
                <h1 className="font-secondary font-grey-700 text-center">
                  Gain deep insights into online identities, profiles, and more
                  for enriched user experiences.
                </h1>
              </div>
              <div className="flex flex-col gap-4">
                <h1 className="font-primary font-medium text-2xl text-center text-grey-900">
                  Customisation
                </h1>
                <h1 className="font-secondary font-grey-700 text-center">
                  Tailor our API to your unique requirements, enabling you to
                  build exactly what you envision.
                </h1>
              </div>
            </div>
          </div>
          <div className="flex">
            <Link
              to="/dev"
              className="rounded-lg px-8 py-4 shadow-[0_0_0_1px_inset_#EAECF0,0_1px_2px_0_#1018280D] relative after:absolute after:top-0 after:left-0 after:right-0 after:bottom-0 after:rounded-lg after:shadow-[0_1px_2px_0_#1018280D] hover:after:shadow-[0_0_0_0_rgba(21,30,48,0.10),0_3px_8px_0_rgba(21,30,48,0.10),0_14px_14px_0_rgba(21,30,48,0.09),0_31px_19px_0_rgba(21,30,48,0.05),0_55px_22px_0_rgba(21,30,48,0.01),0_87px_24px_0_rgba(21,30,48,0.0)] after:duration-300 font-secondary font-semibold text-sm text-grey-700 cursor-pointer"
            >
              Get API access
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchAPI;
