import icon from "../../assets/mainLogo/killswitch.svg";
import { Link } from "react-router-dom";

function Partner() {
  return (
    <div className="max-w-[1512px] m-auto">
      <div className="py-24 px-[440px] max-2xl:px-[330px] max-xl:px-[220px] max-lg:px-[120px] max-md:px-[16px] flex justify-center flex-col gap-8 relative before:h-[840px] before:w-[840px] before:rounded-full before:bg-[#E5EEF2] before:border-[27px] before:border-[#87AFC054] before:absolute overflow-hidden before:-top-[660px] before:-right-[400px] max-lg:before:-right-[600px] max-lg:before:-top-[700px]">
        <div className="flex justify-center">
          <div className="px-[25px] py-[15px] flex items-center justify-center rounded-3xl border-[12px] border-[#D5E4E959]">
            <img src={icon} alt="" className="h-[62px]" />
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <h1 className="font-primary font-medium text-[40px] leading-[48px] max-xl:text-[32px] max-md:text-[28px] max-md:leading-[34px] text-center text-transparent bg-clip-text bg-[linear-gradient(180deg,#1D2939_0%,rgba(29,41,57,0.67)_100%)]">
            Are you a business partner?
          </h1>
          <h1 className="font-secondary text-lg leading-[27px] max-md:text-base text-center text-grey-700">
            Killswitch was built to simplify everyone's life. Become a part of
            Trustle through connecting with our API services
          </h1>
        </div>
        <div className="flex justify-center">
          <Link to='/dev'>
            <div className="rounded-lg p-4 bg-[linear-gradient(180deg,#1B253C_0%,#101828_100%)] shadow-[0_0_0_1px_inset_#475467] relative font-secondary font-semibold text-white cursor-pointer after:absolute after:top-0 after:left-0 after:right-0 after:bottom-0 after:rounded-lg hover:after:shadow-[0_0_0_0_rgba(21,30,48,0.10),0_3px_8px_0_rgba(21,30,48,0.10),0_14px_14px_0_rgba(21,30,48,0.09),0_31px_19px_0_rgba(21,30,48,0.05),0_55px_22px_0_rgba(21,30,48,0.01),0_87px_24px_0_rgba(21,30,48,0.0)] after:duration-300">
              Learn more
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Partner;
