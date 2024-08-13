import left from "../../assets/search/left.svg";
import right from "../../assets/search/right.svg";

function SearchEngin() {
  return (
    <div className="max-w-[1512px] m-auto">
      <div className="px-20 max-lg:px-10 max-xm:px-4 py-24 max-md:py-12 grid grid-cols-2 max-md:grid-cols-1 gap-y-20 gap-x-12">
        <h1 className="font-primary font-medium text-[40px] max-lg:text-4xl max-sm:text-[28px] leading-[49px] text-transparent bg-clip-text bg-[linear-gradient(180deg,#1D2939_0%,rgba(29,41,57,0.67)_100%)]">
          Discover the Power of Trustle's Search Engine
        </h1>
        <h1 className="font-secondary text-lg text-grey-700">
          In a digital age where information is abundant, managing your online
          presence is more crucial than ever. Trustle's Search Engine is your
          ultimate tool for exploring, monitoring, and curating your digital
          footprint across various online platforms. Let's delve deeper into
          what makes this platform an essential part of your digital life.
        </h1>
        <div className="flex flex-col">
          <img src={left} alt="" />
          <h1 className="font-primary font-medium text-2xl leading-[33px] text-grey-900 mt-8">
            Comprehensive Digital Footprint Analysis
          </h1>
          <h1 className="font-secondary text-grey-700 mt-4">
            Our platform scours the internet to compile an extensive report of
            your online presence. This includes social media profiles, blog
            posts, articles, and more. The result is a complete overview of your
            digital identity.
          </h1>
        </div>
        <div className="flex flex-col">
          <img src={right} alt="" />
          <h1 className="font-primary font-medium text-2xl leading-[33px] text-grey-900 mt-8">
            Reputation Management
          </h1>
          <h1 className="font-secondary text-grey-700 mt-4">
            Whether you're a professional building a brand or an individual
            shaping their digital image, Trustle's Search Engine equips you with
            the tools to manage and enhance your online reputation.
          </h1>
        </div>
      </div>
    </div>
  );
}

export default SearchEngin;
