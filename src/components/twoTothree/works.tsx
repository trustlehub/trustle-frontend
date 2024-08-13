import left from "../../assets/twotothree/left.webp";
import left_2 from "../../assets/twotothree/left_2.webp";
import right from "../../assets/twotothree/right.webp";

function Works() {
  return (
    <div className="max-w-[1512px] m-auto">
      <div className="py-24 px-20 flex flex-col gap-16 max-md:py-16 max-md:px-10 max-sm:px-4">
        <div className="flex flex-col gap-4">
          <h1 className="bg-clip-text text-transparent bg-[linear-gradient(180deg,#1D2939_0%,rgba(29,41,57,0.67)_100%)] font-primary font-medium text-5xl max-lg:text-4xl max-md:text-3xl max-sm:text-[28px] leading-[44px] spacing-[-1.2px] text-center">
            How 2-to-3 works
          </h1>
          <h1 className="font-secondary text-xl max-md:text-base max-sm:text-sm leading-[30px] text-grey-700 text-center">
            The process is as seamless as it is transformative
          </h1>
        </div>
        <div className="grid grid-cols-2 gap-24 px-[68px] items-center max-xl:px-10 max-lg:px-0 max-md:flex max-md:flex-col-reverse max-md:gap-8">
          <img src={left} alt="" className="" />
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <h1 className="text-transparent bg-clip-text bg-[linear-gradient(180deg,#1D2939_0%,rgba(29,41,57,0.67)_100%)] font-primary font-medium text-[28px] max-md:text-[20px] leading-[38px] max-md:leading-[32px]">
                Assessment
              </h1>
              <h1 className="font-secondary text-[18px] max-md:text-base leading-7 text-grey-700">
                When you begin your 2-to-3 journey, we perform a comprehensive
                assessment of your online presence. We analyze your accounts,
                profiles, and data across various platforms to create a complete
                picture of your digital footprint.
              </h1>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-24 items-center max-md:flex max-md:flex-col max-md:gap-8">
          <div className="flex flex-col gap-8 pl-[68px] max-xl:pl-10 max-lg:pl-0">
            <div className="flex flex-col gap-4">
              <h1 className="text-transparent bg-clip-text bg-[linear-gradient(180deg,#1D2939_0%,rgba(29,41,57,0.67)_100%)] font-primary font-medium text-[28px] max-md:text-[20px] leading-[38px] max-md:leading-[32px]">
                Blockchain Integration
              </h1>
              <h1 className="font-secondary text-[18px] max-md:text-base leading-7 text-grey-700">
                Next, we help you choose a blockchain network that aligns with
                your preferences. Whether you're interested in Ethereum,
                Polkadot, or any other blockchain, 2-to-3 provides a range of
                options. We'll assist you in creating your digital identity on
                the chosen blockchain.
              </h1>
            </div>
          </div>
          <img src={right} alt="" />
        </div>
        <div className="grid grid-cols-2 gap-24 px-[68px] items-center max-xl:px-10 max-lg:px-0 max-md:flex max-md:flex-col-reverse max-md:gap-8">
          <img src={left_2} alt="" className="" />
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <h1 className="text-transparent bg-clip-text bg-[linear-gradient(180deg,#1D2939_0%,rgba(29,41,57,0.67)_100%)] font-primary font-medium text-[28px] max-md:text-[20px] leading-[38px] max-md:leading-[32px]">
                Migration
              </h1>
              <h1 className="font-secondary text-[18px] max-md:text-base leading-7 text-grey-700">
                This is where the magic happens. Your digital identity,
                including your social media accounts, blogs, and other online
                activities, is securely migrated to the blockchain. Your history
                and connections are preserved, ensuring a seamless transition.
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Works;
