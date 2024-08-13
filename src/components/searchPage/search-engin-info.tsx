import search from "../../assets/icons/search_white.svg";
import chart from "../../assets/icons/chart.svg";
import security from "../../assets/icons/security.svg";

function SearchEnginInfo() {
  return (
    <div className="max-w-[1512px] m-auto">
      <div className="px-20 max-lg:px-10 max-xm:px-4 py-24 max-md:py-12 flex flex-col gap-20 bg-black overflow-hidden relative before:absolute before:-top-[20%] before:w-[194px] before:h-[194px] before:bg-[#f57ba9] before:blur-[100px] before:left-[30%] after:absolute after:top-0 after:left-[40%] after:w-[402px] after:h-[402px] after:bg-[rgba(116,91,205,0.84)] after:blur-[131.5px]">
        <h1 className="font-primary font-medium text-[40px] max-lg:text-4xl max-sm:text-[28px] leading-[49px] text-center text-white px-[380px] max-xl:px-[220px] max-lg:px-[180px] max-md:px-[80px] max-sm:px-4 relative z-20">
          Why Trust Trustle's Search Engine?
        </h1>
        <div className="grid grid-cols-3 max-md:grid-cols-1 gap-[25px]">
          <div className="flex flex-col rounded-lg px-10 py-[47px] shadow-[0_0_0_1px_inset_#FFFFFF3D] bg-[#FFFFFF0F] text-white">
            <img src={search} alt="" className="h-8 w-8 " />
            <h1 className="font-primary font-medium text-2xl leading-[33px] mt-6">
              Accuracy
            </h1>
            <h1 className="font-secondary mt-4">
              Our advanced algorithms provide precise results.
            </h1>
          </div>
          <div className="flex flex-col rounded-lg px-10 py-[47px] shadow-[0_0_0_1px_inset_#FFFFFF3D] bg-[#FFFFFF0F] text-white">
            <img src={chart} alt="" className="h-8 w-8 " />
            <h1 className="font-primary font-medium text-2xl leading-[33px] mt-6">
              Insights
            </h1>
            <h1 className="font-secondary mt-4">
              Gain actionable insights from your digital footprint.
            </h1>
          </div>
          <div className="flex flex-col rounded-lg px-10 py-[47px] shadow-[0_0_0_1px_inset_#FFFFFF3D] bg-[#FFFFFF0F] text-white">
            <img src={security} alt="" className="h-8 w-8 " />
            <h1 className="font-primary font-medium text-2xl leading-[33px] mt-6">
              Control
            </h1>
            <h1 className="font-secondary mt-4">
              Customize what you want to keep private and what you want to
              share.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchEnginInfo;
