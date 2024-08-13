import unlock from "../../assets/icons/unlock_white.svg";

function Privacy() {
  return (
    <div className="max-w-[1512px] m-auto">
      <div className="px-20 py-24 flex flex-col gap-20 max-md:px-4">
        <div className="flex flex-col gap-4">
          <h1 className="font-secondary font-semibold text-[#5E93AB]">
            Empowering Control Through Innovation
          </h1>
          <div className="flex flex-col gap-6 max-w-[825px]">
            <h1 className="font-primary font-medium bg-clip-text text-transparent bg-gradient-to-b from-[#1D2939] to-[#1D2939AB] text-[40px] leading-[48px] max-xl:text-[32px] max-md:text-[28px] max-md:leading-[34px]">
              Experience the secure erasure that ensures your privacy
            </h1>
            <h1 className="font-secondary text-[18px] leading-[27px] max-md:text-base text-grey-700">
              Killswitch is a switch that can remove your unwanted online
              presence. Our platform combines advanced capabilities with
              user-friendly features, giving you complete control over your
              online identity.
            </h1>
          </div>
        </div>
        <div className="flex flex-col gap-[72px]">
          <div className="grid grid-cols-3 gap-8 max-xl:grid-cols-2 max-md:grid-cols-1">
            <div className="flex flex-col gap-4">
              <div className="flex">
                <div className="rounded-[4px] w-12 h-12 flex items-center justify-center bg-[#406D82]">
                  <img src={unlock} alt="" />
                </div>
              </div>
              <div className="flex flex-col gap-6">
                <h1 className="font-primary font-medium text-transparent bg-clip-text bg-gradient-to-b from-[#1D2939] to-[#1D2939AB] text-[24px] leading-[34px]">
                  Advanced Algorithms
                </h1>
                <h1 className="font-secondary text-grey-700">
                  Killswitch employs state-of-the-art algorithms that identify
                  and remove content across platforms with surgical precision.
                </h1>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex">
                <div className="rounded-[4px] w-12 h-12 flex items-center justify-center bg-[#406D82]">
                  <img src={unlock} alt="" />
                </div>
              </div>
              <div className="flex flex-col gap-6">
                <h1 className="font-primary font-medium text-transparent bg-clip-text bg-gradient-to-b from-[#1D2939] to-[#1D2939AB] text-[24px] leading-[34px]">
                  Streamlined Removal Process
                </h1>
                <h1 className="font-secondary text-grey-700">
                  Experience the simplicity of removing unwanted data. Our
                  intuitive interface guides you through the removal process in
                  a few easy steps, ensuring a hassle-free experience.
                </h1>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex">
                <div className="rounded-[4px] w-12 h-12 flex items-center justify-center bg-[#406D82]">
                  <img src={unlock} alt="" />
                </div>
              </div>
              <div className="flex flex-col gap-6">
                <h1 className="font-primary font-medium text-transparent bg-clip-text bg-gradient-to-b from-[#1D2939] to-[#1D2939AB] text-[24px] leading-[34px]">
                  Permanent Deletion
                </h1>
                <h1 className="font-secondary text-grey-700">
                  Enjoy the peace of mind that comes with knowing removed online
                  presence is gone for good. Killswitch ensures that your
                  digital footprint remains truly under your control.
                </h1>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="px-8 py-4 font-secondary font-semibold text-grey-700 text-sm rounded-lg border bordergrey-400 hover:shadow-[0_0_0_0_rgba(21,30,48,0.10),0_3px_8px_0_rgba(21,30,48,0.10),0_14px_14px_0_rgba(21,30,48,0.09),0_31px_19px_0_rgba(21,30,48,0.05),0_55px_22px_0_rgba(21,30,48,0.01),0_87px_24px_0_rgba(21,30,48,0.0)] duration-300 cursor-pointer">
              Learn more
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Privacy;
