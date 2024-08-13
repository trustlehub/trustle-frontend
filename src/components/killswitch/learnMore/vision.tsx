import bird from "../../../assets/killswitch/bird.svg";

function Vision() {
  return (
    <div className="max-w-[1512px] m-auto">
      <div className="pt-[120px] pl-[155px] max-xl:pl-[100px] max-md:pl-0 pb-[46px] flex max-md:flex-col gap-14 max-xl:gap-8">
        <div className="flex flex-col gap-6 max-md:px-16 max-sm:px-4">
          <h1 className="font-primary font-medium text-[40px] max-sm:text-[28px] text-transparent bg-clip-text bg-[linear-gradient(180deg,#1D2939_0%,rgba(29,41,57,0.67)_100%)]">
            Our Vision
          </h1>
          <h1 className="font-secondary text-xl max-sm:text-base leading-[30px] text-grey-700">
            In a world immersed in the ever-expanding digital cosmos, your
            online presence is more than just data; it's your digital soul.
            <br />
            <br />
            Killswitch was conceived with a bold vision – to empower individuals
            like you with the ultimate control over your digital lives. We're
            rewriting the rules of the digital game so you can thrive, not just
            survive, in the online universe.
          </h1>
        </div>
        <img
          src={bird}
          alt=""
          className="max-lg:h-[300px] max-md:h-[360px] self-end"
        />
      </div>
    </div>
  );
}

export default Vision;
