import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Phone() {
  const step1 = useRef<HTMLDivElement | null>(null);
  const step2 = useRef<HTMLDivElement | null>(null);
  const step3 = useRef<HTMLDivElement | null>(null);
  const step4 = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const animation = gsap.timeline({
        scrollTrigger: {
          trigger: step1.current,
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
      });

      animation.to(step1.current, {
        boxShadow: "4px 0 0 0 inset #6F99FF",
      });
    }, step1);

    const ctx1 = gsap.context(() => {
      const animation = gsap.timeline({
        scrollTrigger: {
          trigger: step2.current,
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
      });

      animation.to(step2.current, {
        boxShadow: "4px 0 0 0 inset #6F99FF",
      });
    }, step2);

    const ctx2 = gsap.context(() => {
      const animation = gsap.timeline({
        scrollTrigger: {
          trigger: step3.current,
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
      });

      animation.to(step3.current, {
        boxShadow: "4px 0 0 0 inset #6F99FF",
      });
    }, step3);

    const ctx3 = gsap.context(() => {
      const animation = gsap.timeline({
        scrollTrigger: {
          trigger: step4.current,
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
      });

      animation.to(step4.current, {
        boxShadow: "4px 0 0 0 inset #6F99FF",
      });
    }, step4);

    return () => {
      ctx.revert();
      ctx1.revert();
      ctx2.revert();
      ctx3.revert();
    };
  }, []);

  return (
    <div className="max-w-[1512px] m-auto">
      <div className="py-24 max-md:pt-16 max-md:pb-0 px-[116px] flex flex-col gap-16 max-xl:px-12 max-md:px-4">
        <div className="flex flex-col gap-5 pl-8">
          <h1 className="font-primary font-medium text-[40px] max-md:text-[30px] leading-[44px] max-md:leading-[38px] tracking-[-1.2px] text-transparent bg-clip-text bg-gradient-to-b from-[#1D2939] to-[#1D2939AB]">
            Be Free. Be Yourself.
          </h1>
          <h1 className="font-secondary text-lg leading-[30px] text-grey-700 pr-[450px] max-2xl:pr-72 max-xl:pr-36 max-lg:pr-0">
            Uniment is where your digital world becomes your playground. Our
            network is all about being real, connecting with others who share
            your passions, and creating moments that matter
          </h1>
        </div>
        <div className="grid grid-cols-2 gap-16 px-8 overflow-hidden max-lg:grid-cols-1">
          <div className="flex flex-col py-2">
            <div
              className="flex flex-col gap-2 py-4 pl-7 shadow-[4px_0_0_0_inset_#F2F4F7]"
              ref={step1}
            >
              <h1 className="font-primary font-medium text-[20px] leading-[30px] text-grey-1100">
                Unleash Your Creative Expression
              </h1>
              <h1 className="font-secondary text-grey-700">
                Uniment is more than a platform—it's a space for you to share
                your thoughts, passions, and creativity without constraints.
                From captivating visuals to profound insights, let your voice
                resonate.
              </h1>
            </div>
            <div
              className="flex flex-col gap-2 py-4 pl-7 shadow-[4px_0_0_0_inset_#F2F4F7]"
              ref={step2}
            >
              <h1 className="font-primary font-medium text-[20px] leading-[30px] text-grey-1100">
                Clash Display Variable
              </h1>
              <h1 className="font-secondary text-grey-700">
                Connect with over 10,000 individuals who share your values,
                interests, and aspirations. Uniment's community is a place where
                conversations are genuine, fostering connections that go beyond
                the surface.
              </h1>
            </div>
            <div
              className="flex flex-col gap-2 py-4 pl-7 shadow-[4px_0_0_0_inset_#F2F4F7]"
              ref={step3}
            >
              <h1 className="font-primary font-medium text-[20px] leading-[30px] text-grey-1100">
                A user owned network
              </h1>
              <h1 className="font-secondary text-grey-700">
                Uniment is a decentralised platform that is structured as a
                network fully owned by the users that define it.
              </h1>
            </div>
            <div
              className="flex flex-col gap-2 py-4 pl-7 shadow-[4px_0_0_0_inset_#F2F4F7]"
              ref={step4}
            >
              <h1 className="font-primary font-medium text-[20px] leading-[30px] text-grey-1100">
                Experience Privacy Reimagined
              </h1>
              <h1 className="font-secondary text-grey-700">
                Take back control of your data and digital footprint. Uniment
                prioritises your privacy, ensuring that your information is
                safeguarded and your interactions remain yours alone.
              </h1>
            </div>
          </div>
          <div className="relative flex justify-center h-full max-lg:h-60 max-lg:min-h-[400px] max-lg:min-w-[314px]">
            {/* <div className="h-full min-w-[314px] max-md:min-w-[280px] max-h-[640px] bg-slate-500 relative top-16 shadow-[12px_12px_24px_-1.5px_#10182814,24px_24px_48px_-3px_#10182833] before:absolute before:bg-[url(../src/assets/uniment/phone1.webp)] before:top-[14px] before:right-[16px] before:bottom-[14px] before:left-[16px] before:bg-cover after:absolute after:top-0 after:left-0 after:bottom-0 after:right-0 after:bg-[url(../src/assets/phone.png)] z[-1] max-lg:hidden phone-mask left-5" /> */}
            <div className="h-full min-w-[314px] max-h-[640px] bg-slate-100 relative shadow-[12px_12px_24px_-1.5px_#10182814,24px_24px_48px_-3px_#10182833] before:absolute before:bg-[url(../src/assets/uniment/phone2.webp)] before:top-[14px] before:right-[16px] before:bottom-[14px] before:left-[16px] before:bg-cover after:absolute after:top-0 after:left-0 after:bottom-0 after:right-0 after:bg-[url(../src/assets/phone.png)] z-[2] right-5 max-lg:right-0 phone-mask" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Phone;
