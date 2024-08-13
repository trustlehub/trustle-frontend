import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="max-w-[1512px] m-auto pt-24">
      <div className="pl-20 py-5 border-b border-b-grey-400 max-md:pl-4">
        <h1 className="font-secondary font-medium text-sm text-grey-700">
          FAQs
        </h1>
      </div>
      <div className="relative before:absolute before:content-[' '] before:bg-[url(../src/assets/otherPages/hero.webp)] before:opacity-30 before:top-0 before:right-0 before:bottom-0 before:left-0 before:max-md:rounded-b-[48px] before:max-md:shadow-[0_0_0_1px_inset_#EAECF0] py-24 max-md:py-16 flex flex-col gap-6">
        <h1 className="font-primary font-medium text-5xl max-md:text-[32px] max-md:leading-[45px] tracking-[-1.2px] text-center text-grey-900 relative z-10">
          FAQs
        </h1>
        <h1 className="px-[372px] max-2xl:px-72 max-xl:px-52 max-lg:px-24 max-md:px-14 max-sm:px-4 font-secondary text-[20px] leading-[30px] max-md:text-sm text-center text-grey-700 relative z-10">
          Everything you need to know about Trustle. Can’t find the answer
          you’re looking for?{" "}
          <Link to="mailto:support@trustle-beta.com">
            <span className="underline cursor-pointer">Please email us.</span>
          </Link>
        </h1>
      </div>
    </div>
  );
}

export default Hero;
