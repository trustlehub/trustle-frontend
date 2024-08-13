import "./loader.css";

function Loader({ active }: { active: boolean }) {
  return (
    <div
      className={`flex justify-center items-center gap-[1px] ${
        active ? "active" : ""
      }`}
    >
      <div className="w-[2px] h-3 bg-[#828282] wave" />
      <div className="w-[2px] h-3 bg-[#828282] wave" />
      <div className="w-[2px] h-3 bg-[#828282] wave" />
      <div className="w-[2px] h-3 bg-[#828282] wave" />
      <div className="w-[2px] h-3 bg-[#828282] wave" />
    </div>
  );
}

export default Loader;
