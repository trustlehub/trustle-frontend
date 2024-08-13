import { Link } from "react-router-dom";

function Business() {
  return (
    <div className="max-w-[1512px] m-auto">
      <div className="px-20 max-lg:px-10 max-xm:px-4 py-24 max-md:py-12 flex flex-col gap-10 items-center">
        <div className="flex flex-col gap-6 items-center">
          <h1 className="font-primary font-medium text-[40px] max-md:text-[28px] leading-[48px] max-md:leading-[34px] text-transparent bg-clip-text bg-[linear-gradient(180deg,#1D2939_0%,rgba(29,41,57,0.67)_100%)]">
            Are you a business?
          </h1>
          <h1 className="font-secondary text-lg text-grey-600">
            Trustle's Tailored APIs Serve Businesses of Every Size and Need
          </h1>
        </div>
        <div className="flex gap-3">
          <a
            href="mailto:support@trustle-beta.com"
            className="rounded-lg px-4 py-3 bg-[linear-gradient(180deg,#1B253C_0%,#101828_100%)] font-secondary font-semibold text-sm text-white cursor-pointer relative after:absolute after:top-0 after:left-0 after:right-0 after:bottom-0 after:rounded-lg after:shadow-[0_1px_2px_0_#1018280D] hover:after:shadow-[0_0_0_0_rgba(21,30,48,0.10),0_3px_8px_0_rgba(21,30,48,0.10),0_14px_14px_0_rgba(21,30,48,0.09),0_31px_19px_0_rgba(21,30,48,0.05),0_55px_22px_0_rgba(21,30,48,0.01),0_87px_24px_0_rgba(21,30,48,0.0)] after:duration-300"
          >
            Contact us
          </a>
          <Link
            to="/dev"
            className="rounded-lg px-6 py-3 shadow-[0_0_0_1px_inset_#eaecf0] relative after:absolute after:top-0 after:left-0 after:right-0 after:bottom-0 after:rounded-lg after:shadow-[0_1px_2px_0_#1018280D] hover:after:shadow-[0_0_0_0_rgba(21,30,48,0.10),0_3px_8px_0_rgba(21,30,48,0.10),0_14px_14px_0_rgba(21,30,48,0.09),0_31px_19px_0_rgba(21,30,48,0.05),0_55px_22px_0_rgba(21,30,48,0.01),0_87px_24px_0_rgba(21,30,48,0.0)] after:duration-300 cursor-pointer font-secondary font-semibold text-sm text-grey-600"
          >
            Learn more
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Business;
