import key from "../../assets/icons/key.svg";
import people from "../../assets/icons/people.svg";
import octagon from "../../assets/icons/octagon.svg";

function Digital() {
  return (
    <div className="max-w-[1512px] m-auto">
      <div className="px-20 max-md:px-4 py-24 max-md:py-16 flex flex-col gap-16">
        <h1 className="font-primary font-medium text-[40px] leading-[40px] text-center text-transparent bg-clip-text bg-gradient-to-b from-[#1D2939] to-[#1D2939AB]">
          A Digital Life Controlled By The Users
        </h1>
        <div className="grid grid-cols-3 gap-8 max-md:grid-cols-1">
          <div className="flex flex-col gap-3 p-6 rounded-xl bg-[#EEDBD75E] duration-300 hover:bg-[#EEDBD7D8]">
            <div className="flex">
              <div className="w-12 h-12 border-4 border-[#DD944B61] shadow-[0_0_0_4px_#DD944B61] bg-[#DD944BAB] rounded-full flex items-center justify-center">
                <img src={key} alt="" />
              </div>
            </div>
            <h1 className="font-primary font-medium text-xl text-grey-900">
              True Digital Ownership
            </h1>
            <h1 className="font-secondary text-grey-700">
              Get ready to take back control of your digital life with Uniment.
              Your data, your voice, your world – respected and protected like
              never before. Join us in shaping a digital future that's truly
              yours.
            </h1>
          </div>
          <div className="flex flex-col gap-3 p-6 rounded-xl bg-[#DCF2D7AB] duration-300 hover:bg-[#CEEEC6]">
            <div className="flex">
              <div className="w-12 h-12 border-4 border-[#7FDD7161] shadow-[0_0_0_4px_#7FDD7161] bg-[#7FDD71AB] rounded-full flex items-center justify-center">
                <img src={people} alt="" />
              </div>
            </div>
            <h1 className="font-primary font-medium text-xl text-grey-900">
              Authentic Connections
            </h1>
            <h1 className="font-secondary text-grey-700">
              Experience a digital world fuelled by authenticity. Uniment
              connects you with like-hearted people who share your values,
              giving you a true sense of belonging in a crowded online universe.
            </h1>
          </div>
          <div className="flex flex-col gap-3 p-6 rounded-xl bg-[#F2DDFB82] duration-300 hover:bg-[#E7C8F4D8]">
            <div className="flex">
              <div className="w-12 h-12 border-4 border-[#C277DB61] shadow-[0_0_0_4px_#C277DB61] bg-[#C277DBAB] rounded-full flex items-center justify-center">
                <img src={octagon} alt="" />
              </div>
            </div>
            <h1 className="font-primary font-medium text-xl text-grey-900">
              Empowerment Through Innovation
            </h1>
            <h1 className="font-secondary text-grey-700">
              Uniment leverages technology’s power to provide an unparalleled
              user experience. From creative expression to community engagement,
              our platform is designed to empower you.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Digital;
