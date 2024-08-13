function Hero() {
  return (
    <div className="relative">
      <div className="max-w-[1512px] m-auto pt-20">
        <div className="bg-white w-full rounded-b-[60px] shadow-[0_0_0_1px_inset_#EAECF0] py-28 max-md:py-12 px-[280px] max-xl:px-20 max-md:px-4 flex flex-col items-center max-xm:pb-[32px] relative after:absolute after:content-[' '] after:rounded-b-[60px] after:w-full after:h-full after:bg-[url(../src/assets/search/banner.webp)] after:top-0 after:left-0 after:opacity-[0.18] after:z-[2] after:bg-[center_bottom] after:bg-no-repeat after:bg-cover">
          <div className="flex flex-col gap-6 items-center">
            <div className="relative z-20 flex flex-col gap-4">
              <h1 className="font-primary font-medium text-[56px] max-lg:text-[44px] max-md:text-[32px] leading-[56px] max-lg:leading-[44px] text-transparent bg-clip-text bg-gradient-to-b from-[#C71BE382] to-[#681FE157] text-center">
                Boost{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#1D2939] to-[#1D2939AB]">
                  your search
                </span>
              </h1>
              <h1 className="font-secondary text-grey-700 px-[240px] max-2xl:px-40 max-lg:px-24 max-md:px-0 text-center max-md:text-sm">
                Explore our flexible pricing plans to uncover the power of
                Trustle Search.
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
