import { useState } from "react";
import filter from "../../assets/filter.svg";

const FilterBar = () => {
  const [isFilter, openFilter] = useState<boolean>(false);

  return (
    <>
      <div className="shadow-header pt-[96px]">
        <div className="max-w-[1512px] m-auto">
          <div className="flex items-center justify-between max-[500px]:px-[16px] px-20 py-3">
            <div className="min-[366px]:flex gap-3">
              <div className="px-4 py-2 rounded-full font-manrope font-semibold text-white bg-grey-1100 shadow-[0_0_0_1px_inset_#EAECF0] cursor-pointer">
                All results
              </div>
              <div className="px-3 py-2 rounded-full font-manrope font-medium text-grey-700 bg-white shadow-[0_0_0_1px_inset_#EAECF0] cursor-pointer">
                Images
              </div>
            </div>
            <div
              className="px-4 py-3 flex gap-2 rounded-lg shadow-[0_0_0_1px_inset_#EAECF0] cursor-pointer"
              onClick={() => openFilter(!isFilter)}
            >
              <img src={filter} alt="" />
              <h1 className="font-semibold font-secondary text-grey-700">
                Filters
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`shadow-header duration-300 overflow-hidden ${
          isFilter ? "max-h-20" : "max-h-0"
        }`}
      >
        <div className="max-w-[1512px] m-auto px-20 py-4 flex flex-col gap-4">
          <div className="flex gap-3">
            <div className="px-3 py-[6px] rounded-full bg-[#F8EEFD] font-secondary text-sm font-medium text-[#775585] select-none">
              Advanced search applied
            </div>
            <div className="flex items-center justify-center text-sm font-semibold cursor-pointer font-secondary text-error-600">
              Clear all
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterBar;
