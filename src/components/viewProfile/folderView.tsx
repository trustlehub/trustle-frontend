import right from "../../assets/right.svg";

function FolderView({ userName }: { userName: string }) {
  return (
    <div className="shadow-header pt-[96px]">
      <div className="max-w-[1512px] m-auto">
        <div className="px-20 py-[22px] flex items-center gap-3">
          <h1 className="text-transparent bg-clip-text bg-gradient-to-b from-[#C71BE382] to-[#681FE157] font-secondary font-medium text-sm">
            Search results
          </h1>
          <img src={right} alt="" />
          <h1 className="text-sm font-medium font-secondary text-grey-700">
            {userName}
          </h1>
        </div>
      </div>
    </div>
  );
}

export default FolderView;
