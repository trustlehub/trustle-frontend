import exLogo from "../../assets/ex_logo.svg";

function Introduction() {
  return (
    <div className="max-w-[1512px] m-auto">
      <div className="px-20 max-sm:px-4 py-24 grid grid-cols-[auto_1fr] gap-20 max-md:gap-8 max-lg:grid-cols-1 max-lg:justify-center">
        <div className="flex flex-col gap-10">
          <h1 className="text-transparent bg-clip-text bg-gradient-to-b from-[#1D2939] to-[#1D2939AB] font-primary font-medium text-[48px] leading-[48px] max-xl:text-[36px] max-lg:text-[48px] max-md:text-[28px] max-md:leading-[39px] text-center max-md:text-left">
            The Genesis of Trustle
          </h1>
          <div className="flex max-lg:justify-center max-md:hidden">
            <img src={exLogo} alt="" />
          </div>
        </div>
        <div className="flex flex-col gap-6 font-secondary text-lg leading-[27px] text-grey-700 max-md:text-base">
          <h1>
            Trustle was born out of a vision to empower individuals with true
            control over their digital identities. As the digital landscape
            evolves, it is becoming increasingly important to know the scale and
            vastness of one's digital footprint. Trustle identified the lack of
            transparency online and went on a journey to build the sovereign
            digital individual, where a user has complete control over their
            online presence.
            <br />
            <br />
            Through our solutions we aim to create a world where individuals can
            truly restore their digital agency. With Trustle, you can find,
            delete, and control your online presence - We want users to own
            their identity, their data, and their voice.
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
