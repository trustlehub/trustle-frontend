import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import start from "../../assets/twotothree/start.png";

function Start() {
  return (
    <div className="max-w-[1512px] m-auto">
      <div className="py-24 pl-[148px] flex max-md:flex-col items-center gap-16 max-md:py-16 max-md:px-10 max-sm:px-4">
        <div className="flex flex-col md:min-w-[400px]">
          <h1 className="font-primary font-medium text-5xl max-lg:text-4xl max-md:text-3xl max-sm:text-[28px] tracking-[-2%] text-transparent bg-clip-text bg-[linear-gradient(180deg,#1D2939_0%,rgba(29,41,57,0.67)_100%)]">
            Get Started Today
          </h1>
          <h1 className="font-secondary text-grey-700 mt-4">
            Are you ready to reclaim your digital sovereignty? Join us in the
            digital revolution and make the leap to decentralized digital
            identity with 2-to-3. Trustle is here to guide you every step of the
            way.
          </h1>
          <div className="flex mt-10">
            <div className="rounded-lg bg-[linear-gradient(180deg,#1B253C_0%,#101828_100%)] border border-grey-800 px-4 py-3 flex items-center group duration-300 hover:shadow-[0_0_0_0_rgba(21,30,48,0.10),0_3px_8px_0_rgba(21,30,48,0.10),0_14px_14px_0_rgba(21,30,48,0.09),0_31px_19px_0_rgba(21,30,48,0.05),0_55px_22px_0_rgba(21,30,48,0.01),0_87px_24px_0_rgba(21,30,48,0.0)] gap-0 hover:gap-2 cursor-pointer max-md:w-full justify-center">
              <h1 className="font-secondary text-white text-sm font-semibold">
                Coming soon
              </h1>
              <div className="max-w-0 duration-300 group-hover:max-w-[30px] flex items-center overflow-hidden">
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="text-white duration-200 opacity-0 group-hover:opacity-100"
                />
              </div>
            </div>
          </div>
        </div>
        <img src={start} alt="" className=" object-[15px]" />
      </div>
    </div>
  );
}

export default Start;
