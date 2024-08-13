import person from "../../assets/avatar/person.svg";
import key from "../../assets/avatar/key.svg";
import reload from "../../assets/avatar/reload.svg";

function About() {
  return (
    <div className="max-w-[1512px] m-auto">
      <div className="px-20 max-lg:px-10 max-xm:px-4 py-28 max-sm:py-16 flex flex-col gap-[72px] max-sm:gap-8 items-center">
        <h1 className="font-primary font-medium text-[40px] max-sm:text-[28px] leading-[40px] text-transparent bg-clip-text bg-gradient-to-b from-[#1D2939] to-[#1D2939AB]">
          Why Trustle?
        </h1>
        <div className="grid grid-cols-3 gap-8 max-lg:gap-4 max-md:grid-cols-1">
          <div className="p-6 flex flex-col gap-3 rounded-xl relative bg-gradient-to-b from-[#7CCA6826] to-[#62CA9E26] before:content-[' '] before:absolute before:duration-500 before:rounded-xl before:top-0 before:left-0 before:bottom-0 before:right-0 before:bg-[#fafafa] hover:before:bg-white hover:before:top-[1px] hover:before:left-[1px] hover:before:right-[1px] hover:before:bottom-[1px] overflow-hidden group">
            <div className="z-10 flex">
              <img src={person} alt="" className="max-sm:w-12" />
            </div>
            <h1 className="z-10 text-xl font-medium font-primary">
              Enhanced Digital Identity Control
            </h1>
            <h1 className="font-secondary text-grey-700 leading-6 max-sm:text-sm max-sm:leading-[21px] z-10">
              With Trustle, you regain sovereignty over your digital presence.
              Our services empower you to effortlessly discover, manage, and
              protect your online identity, ensuring you have complete control
              and agency in the digital realm.
            </h1>
            <div className="w-[162px] h-[162px] bg-[#C6F17F] top-[-80%] right-0 blur-[100px] absolute opacity-0 group-hover:opacity-100 duration-500" />
            <div className="w-[162px] h-[162px] bg-gradient-to-t from-[#7CCA68] to-[#62CA9E] bottom-[-95%] blur-[100px] absolute opacity-0 group-hover:opacity-100 duration-500" />
          </div>
          <div className="p-6 flex flex-col gap-3 rounded-xl relative bg-gradient-to-b from-[#76CBE526] to-[#8097F226] before:content-[' '] before:absolute before:duration-500 before:rounded-xl before:top-0 before:left-0 before:bottom-0 before:right-0 before:bg-[#fafafa] hover:before:bg-white hover:before:top-[1px] hover:before:left-[1px] hover:before:right-[1px] hover:before:bottom-[1px] overflow-hidden group">
            <div className="z-10 flex">
              <img src={key} alt="" className="max-sm:w-12" />
            </div>
            <h1 className="z-10 text-xl font-medium font-primary">
              Seamless Data Liberation
            </h1>
            <h1 className="font-secondary text-grey-700 leading-6 max-sm:text-sm max-sm:leading-[21px] z-10">
              Take control with Trustle's data liberation tools. Effortlessly
              delete your online data, free yourself from data captivity and
              take charge of your digital footprint.
            </h1>
            <div className="w-[162px] h-[162px] bg-[#8BD6EE] top-[-80%] right-0 blur-[100px] absolute opacity-0 group-hover:opacity-100 duration-500" />
            <div className="w-[162px] h-[162px] bg-[#A8B7F5] bottom-[-75%] blur-[100px] absolute opacity-0 group-hover:opacity-100 duration-500" />
          </div>
          <div className="p-6 flex flex-col gap-3 rounded-xl relative bg-gradient-to-b from-[#C71BE314] to-[#681FE10E] before:content-[' '] before:absolute before:duration-500 before:rounded-xl before:top-0 before:left-0 before:bottom-0 before:right-0 before:bg-[#fafafa] hover:before:bg-white hover:before:top-[1px] hover:before:left-[1px] hover:before:right-[1px] hover:before:bottom-[1px] overflow-hidden group">
            <div className="z-10 flex">
              <img src={reload} alt="" className="max-sm:w-12" />
            </div>
            <h1 className="z-10 text-xl font-medium font-primary">
              Fostering Decentralisation
            </h1>
            <h1 className="font-secondary text-grey-700 leading-6 max-sm:text-sm max-sm:leading-[21px] z-10">
              Trustle's 2-to-3 migration service transfers your digital identity
              to a blockchain network. This decentralized process offers
              enhanced security, transparency, and data ownership, fostering an
              inclusive and innovative digital landscape.
            </h1>
            <div className="w-[162px] h-[162px] bg-[#E07BF3C7] top-[-80%] right-0 blur-[100px] absolute opacity-0 group-hover:opacity-100 duration-500" />
            <div className="w-[162px] h-[162px] bg-[#B18EF0E3] bottom-[-75%] blur-[100px] absolute opacity-0 group-hover:opacity-100 duration-500" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
