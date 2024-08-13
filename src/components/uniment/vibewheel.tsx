import wheel from "../../assets/uniment/wheel.svg";

function Vibewheel() {
  return (
    <div className="max-w-[1512px] m-auto">
      <div className="px-20 max-md:px-4 py-24 max-md:py-16 flex flex-col gap-[72px]">
        <div className="flex flex-col gap-5 items-center">
          <h1 className="font-primary font-medium text-[40px] leading-[44px] tracking-[-2%] text-transparent bg-clip-text bg-[linear-gradient(180deg,#1D2939_0%,rgba(29,41,57,0.67)_100%)] text-center">
            Vibewheel
          </h1>
          <h1 className="font-secondary text-lg leading-[30px] text-grey-700">
            Emotions were meant to flow freely - Untapped.
          </h1>
        </div>
        <div className="flex flex-col gap-20 items-center">
          <img src={wheel} alt="" />
          <div className="flex flex-col items-center px-[290px] max-2xl:px-40 max-lg:px-32 max-md:px-20 max-sm:px-4">
            <h1 className="font-primary font-medium text-[32px] leading-[38px] text-center text-transparent bg-clip-text bg-[linear-gradient(180deg,#1D2939_0%,rgba(29,41,57,0.67)_100%)]">
              Respond To Content Using The
              <br />
              <span className="text-[#6F99FF]">Vibe Wheel</span>
            </h1>
            <h1 className="font-secondary text-lg leading-6 text-center text-grey-700 mt-6">
              The Vibe Wheel is designed to give emotional responsiveness back
              to its users. Content is colour-coded based on emotional reaction,
              meaning no post is complete without you.
            </h1>
            <div className="flex mt-10">
              <div className="rounded-lg px-6 py-3 shadow-[0_0_0_1px_inset_#EAECF0,0_1px_2px_0_#1018280D] cursor-pointer font-secondary font-semibold text-sm text-grey-700 relative after:absolute after:top-0 after:left-0 after:right-0 after:bottom-0 after:rounded-lg hover:after:shadow-[0_0_0_0_rgba(21,30,48,0.10),0_3px_8px_0_rgba(21,30,48,0.10),0_14px_14px_0_rgba(21,30,48,0.09),0_31px_19px_0_rgba(21,30,48,0.05),0_55px_22px_0_rgba(21,30,48,0.01),0_87px_24px_0_rgba(21,30,48,0.0)] after:duration-300">
                Learn more
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Vibewheel;
