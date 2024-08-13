function Tool() {
  return (
    <div className="max-w-[1512px] m-auto">
      <div className="px-20 py-24 flex flex-col gap-16 max-md:px-4 max-md:py-16">
        <div className="flex flex-col gap-6 justify-center items-center">
          <h1 className="font-primary font-medium text-[40px] max-xl:text-[32px] max-md:text-[28px] leading-[48px] max-md:leading-[34px] text-transparent bg-clip-text bg-gradient-to-b from-[#1D2939] to-[#1D2939AB]">
            It’s Not Just a Tool
          </h1>
          <h1 className="font-secondary text-[18px] leading-[27px] text-grey-700 px-96 text-center max-2xl:px-72 max-xl:px-56 max-lg:px-0">
            It is the power of choice, granting you the ability to shape your
            online narrative with intention.
          </h1>
        </div>
        <div className="grid grid-cols-2 gap-8 max-md:grid-cols-1">
          <div className="rounded-xl bg-[#5E93AB] pt-12 max-md:pt-8 pb-60 max-sm:pb-72 px-10 max-xl:px-4 flex flex-col gap-6 max-md:gap-4 relative before:absolute before:content-[' '] before:top-[315px] max-md:before:top-[256px] before:left-[-180px] max-md:before:left-[-280px] before:rounded-full before:w-[632px] before:h-[632px] before:bg-gradient-to-br before:from-[#FFFFFF2B] before:to-[#FFFFFF00] after:absolute after:content-[url(../src/assets/killswitch/defence.png)] max-sm:after:scale-[85%] after:bottom-[27px] after:right-[39px] max-sm:after:right-[16px] overflow-hidden">
            <h1 className="font-primary font-bold text-white text-[32px] leading-[48px] max-xl:text-[28px] max-md:text-[24px] max-md:leading-9">
              Your Identity, Your Choice
            </h1>
            <h1 className="font-secondary font-medium text-white text-xl leading-[30px] max-md:text-base relative z-10">
              Tired of having old content that you can’t delete or doesn't
              represent you?
              <br />
              With Killswitch, you're in charge of what stays and what goes,
              empowering you to curate your digital footprint and leave behind
              only what you want.
            </h1>
          </div>
          <div className="rounded-xl bg-[#ECF5F9] pt-12 max-md:pt-8 pb-60 max-sm:pb-72 px-10 max-xl:px-4 flex flex-col gap-6 max-md:gap-4 relative before:absolute before:content-[' '] before:top-[315px] before:left-[-180px] max-md:before:left-[-280px] before:rounded-full before:w-[632px] before:h-[632px] before:bg-gradient-to-r before:from-[#5E93AB2B] before:to-[#5E93AB02] after:absolute after:content-[url(../src/assets/killswitch/magic.png)] max-sm:after:scale-[85%] after:bottom-0 max-sm:after:bottom-5 after:right-0 max-sm:after:right-[-22px] overflow-hidden">
            <h1 className="font-primary font-semibold text-[#406779] text-[32px] leading-[48px] max-xl:text-[28px] max-md:text-[24px] max-md:leading-9">
              Regain Your Privacy with a Click
            </h1>
            <h1 className="font-secondary font-medium text-[#406779BD] text-xl leading-[30px] max-md:text-base">
              Experience the magic of a single click that erases your data from
              the internet.
              <br />
              With Killswitch, you can ensure your personal information is
              safeguarded and private.
            </h1>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="px-8 py-4 font-secondary font-semibold text-grey-700 text-sm rounded-lg border bordergrey-400 hover:shadow-[0_0_0_0_rgba(21,30,48,0.10),0_3px_8px_0_rgba(21,30,48,0.10),0_14px_14px_0_rgba(21,30,48,0.09),0_31px_19px_0_rgba(21,30,48,0.05),0_55px_22px_0_rgba(21,30,48,0.01),0_87px_24px_0_rgba(21,30,48,0.0)] duration-300 cursor-pointer">
            Learn more
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tool;
