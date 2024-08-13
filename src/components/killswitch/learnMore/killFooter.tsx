import { Link } from "react-router-dom";

function KillFooter() {
  return (
    <div className="max-w-[1512px] m-auto">
      <div className="px-16 max-md:px-4 py-28 flex flex-col gap-20">
        <div className="flex flex-col gap-6">
          <h1 className="font-primary font-medium text-transparent bg-clip-text bg-[linear-gradient(180deg,#1D2939_0%,rgba(29,41,57,0.67)_100%)] text-[40px] leading-[48px]">
            Join the revolution
          </h1>
          <h1 className="font-secondary text-grey-700 max-w-[720px] w-full">
            At Killswitch, we're not just rewriting the script; we're
            redesigning the stage. Our vision is a future where digital
            sovereignty is not a dream but a reality, where you are the author
            of your digital story. We invite you to join the digital revolution,
            where we transcend limits, reimagine possibilities, and empower you
            to rewrite your own destiny.
          </h1>
        </div>
        <div className="bg-[linear-gradient(245.56deg,#6199B1_-74.88%,rgba(255,255,255,0)_108.56%)] px-[305px] max-xl:px-[200px] max-lg:px-[40px] max-md:px-4 py-[116px] max-sm:py-16 relative overflow-hidden after:absolute after:w-[840px] after:h-[840px] after:top-80 max-md:after:top-[350px] max-xm:after:top-[450px] max-sm:after:top-[320px] after:border-[27px] after:bg-[#E5EEF2] after:border-[#87AFC054] after:rounded-full after:left-[-436px] before:absolute before:w-[840px] before:h-[840px] before:border-[27px] before:bg-[#E5EEF2] before:border-[#87AFC054] before:rounded-full before:bottom-80 max-md:before:bottom-96 before:right-[-436px]">
          <div className="absolute z-10 top-0 right-0 bottom-0 left-0 bg-[linear-gradient(269deg,#FFF_7.48%,rgba(255,255,255,0)_75.07%)] after:top-0 after:left-0 after:bottom-0 after:right-0 after:bg-[url(../src/assets/mainLogo/killswitch.svg)] after:bg-contain after:bg-no-repeat after:bg-center after:opacity-10 after:absolute"></div>
          <h1 className="font-primary font-medium text-[40px] max-md:text-[28px] leading-[49px] bg-clip-text text-transparent bg-[linear-gradient(180deg,#1D2939_0%,rgba(29,41,57,0.67)_100%)] text-center relative z-20">
            Start your journey today!
          </h1>
          <h1 className="mt-4 font-secondary font-medium text-grey-700 text-center relative z-20">
            Are you ready to embrace the future of digital freedom? Join
            Killswitch by Trustle today, and together, let's shape a digital
            utopia where your digital presence knows no bounds. The future is
            yours, and with Killswitch, you hold the key.
            <br />
            <br />
            Thank you for choosing Killswitch as your trusted partner on this
            exhilarating journey into the limitless realm of digital freedom.
          </h1>

          <div className="mt-8 flex justify-center relative z-20">
            <Link to='/killswitch/kill'>
              <div className="rounded-lg shadow-[0_0_0_1px_inset_#475467] bg-[linear-gradient(180deg,#1B253C_0%,#101828_100%)] font-secondary font-semibold text-sm text-white p-4 cursor-pointer relative after:absolute after:top-0 after:left-0 after:right-0 after:bottom-0 after:rounded-lg after:shadow-[0_1px_2px_0_#1018280D] hover:after:shadow-[0_0_0_0_rgba(21,30,48,0.10),0_3px_8px_0_rgba(21,30,48,0.10),0_14px_14px_0_rgba(21,30,48,0.09),0_31px_19px_0_rgba(21,30,48,0.05),0_55px_22px_0_rgba(21,30,48,0.01),0_87px_24px_0_rgba(21,30,48,0.0)] after:duration-300">
                Access Killswitch
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default KillFooter;
