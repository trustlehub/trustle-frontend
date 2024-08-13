function Hero() {
  return (
    <div className="max-w-[1512px] m-auto pt-20">
      <div className="bg-white w-full rounded-b-[60px] shadow-[0_0_0_1px_inset_#EAECF0] overflow-hidden relative">
        <div className="flex flex-col gap-6 pt-[198px] max-sm:pt-[110px] pb-[296px] max-sm:pb-[110px] px-20 max-sm:px-4 relative z-20">
          <h1 className="font-primary font-medium text-[56px] max-lg:text-[42px] max-md:text-[32px] leading-[67px] max-md:leading-[38px] text-transparent bg-clip-text bg-[linear-gradient(180deg,#1D2939_0%,rgba(29,41,57,0.67)_100%)] max-w-[600px] w-full">
            Redefining The Digital Landscape
          </h1>
          <h1 className="font-secondary text-grey-700 leading-6 max-w-[600px] w-full">
            In the ethereal realm of social media, the human psyche dances an
            intricate waltz, seeking to satiate its profound desires for
            connection, validation, and information dissemination.
            <br />
            <br />
            It is here that we shall embark on a voyage, examining the enigmatic
            purpose of social media and how Trustle, with its visionary pursuit
            of a super app, is poised to rewrite the very narrative of this
            digital dimension.
          </h1>
        </div>
        <div className="w-[1200px] h-[1200px] rounded-full absolute top-[390px] -right-[200px] overflow-hidden after:top-0 after:left-0 after:bottom-0 after:right-0 after:absolute after:bg-[url(../src/assets/uniment/hero.webp)] after:opacity-[46%] after:bg-[bottom_400px_left_-100px]" />
      </div>
    </div>
  );
}

export default Hero;
