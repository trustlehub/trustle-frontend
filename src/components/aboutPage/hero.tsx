function Hero() {
  return (
    <div className="max-w-[1512px] m-auto bg-white relative overflow-hidden after:absolute after:content-[''] after:w-full after:h-full after:bg-[url('../src/assets/landing/intro_banner.webp')] after:top-0 after:left-0 after:opacity-10 after:z-[2] after:bg-[center_bottom] after:bg-no-repeat after:bg-cover rounded-b-[60px] shadow-[0_0_0_1px_inset_#EAECF0] max-sm:rounded-none pt-20">
      <div className="px-[340px] max-xl:px-56 max-lg:px-10 max-sm:px-4 py-[142px] items-center relative z-10">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3 max-lg:gap-8 max-sm:gap-4">
            <h1 className="font-primary font-medium text-[56px] max-xl:text-[40px] max-lg:text-[56px] max-sm:text-[40px] max-xm:text-[32px] leading-[64px] max-xl:leading-[48px] max-lg:leading-[56px] max-sm:leading-[45px] text-transparent bg-clip-text bg-gradient-to-b from-[#1D2939] to-[#1D2939AB] text-center">
              Trustle is creating the sovereign digital self
            </h1>
            <h1 className="font-secondary font-medium text-grey-700 leading-6 text-center max-sm:text-sm px-48 max-2xl:px-20 max-md:px-0">
              Through our core services we provide individuals with complete
              control over their online presence.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
