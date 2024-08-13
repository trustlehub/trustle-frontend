import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import left from "../../../assets/uniment/emo.png";
import marker from "../../../assets/uniment/mark.svg";
import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Explain() {
  const progress = useRef<HTMLDivElement | null>(null);
  const all = useRef<HTMLDivElement | null>(null);
  const marke = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(all.current, {
        scrollTrigger: {
          trigger: all.current,
          start: "top center",
          end: "bottom center",
          scrub: true,
          // markers: true,
          onUpdate: (self) => {
            const data = (self.progress * 100).toFixed(3);
            if (progress.current) {
              progress.current.style.height = `${data}%`;
            }
          },
        },
      });
    }, all);

    const ctx1 = gsap.context(() => {
      const animation = gsap.timeline({
        scrollTrigger: {
          trigger: marke.current,
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
      });

      animation.to(marke.current, {
        opacity: "1",
      });
    }, marke);

    return () => {
      ctx.revert();
      ctx1.revert();
    };
  }, []);

  return (
    <div className="max-w-[1512px] m-auto">
      <div className="relative" ref={all}>
        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-36 mt-28 px-20 max-lg:px-10 max-md:px-20 max-sm:pl-[44px] max-sm:pr-4 overflow-hidden">
          <img
            src={left}
            alt=""
            className="object-contain object-bottom max-w-[434px] w-full self-center"
          />
          <div className="flex flex-col gap-6 max-md:order-[-1]">
            <h1 className="font-primary font-medium text-[32px] max-sm:text-[28px] leading-[38px] max-sm:leading-[34px] text-[#6F99FF]">
              The dance of human desires
            </h1>
            <h1 className="font-secondary text-grey-700">
              Social media, in its current manifestation, serves as a grand
              stage where humanity's deepest interests unfold. It caters to the
              primal need for connection, enabling individuals to transcend
              physical boundaries and forge bonds digitally. It offers a mirror
              to the human ego, reflecting back a tapestry of likes, comments,
              and shares that affirm one's existence. Moreover, it acts as an
              oracle of information, satisfying the insatiable thirst for
              knowledge and entertainment.
            </h1>
          </div>
        </div>
        <div className="grid grid-cols-2 max-md:grid-cols-1 bg-white relative after:left-0 after:top-0 after:bottom-0 after:right-0 after:absolute after:bg-[url(../src/assets/uniment/explain.webp)] after:opacity-[17%] after:bg-no-repeat after:bg-[center_top_150px] gap-x-36 gap-y-24 max-sm:gap-y-16 pt-6 pb-24 px-20 max-lg:px-10 max-md:px-20 max-sm:pl-[44px] max-sm:pr-4">
          <div className="flex flex-col gap-6 relative z-20">
            <h1 className="font-primary font-medium text-[32px] max-sm:text-[28px] leading-[38px] max-sm:leading-[34px] text-transparent bg-clip-text bg-[linear-gradient(180deg,#1D2939_0%,rgba(29,41,57,0.67)_100%)]">
              The Illusion of Connection
            </h1>
            <h1 className="font-secondary text-grey-700">
              Yet, beneath the façade of connection lies an unsettling truth.
              Social media often fosters shallow interactions, mere echoes of
              genuine human connection. It propels us into a ceaseless quest for
              validation, where self-worth becomes intrinsically tied to the
              number of likes and followers. It drowns us in a sea of curated
              perfection, leaving authenticity gasping for air.
            </h1>
          </div>
          <div className="max-md:hidden"></div>
          <div className="max-md:hidden"></div>
          <div className="flex flex-col gap-6 relative z-20">
            <h1 className="font-primary font-medium text-[32px] max-sm:text-[28px] leading-[38px] max-sm:leading-[34px] text-transparent bg-clip-text bg-[linear-gradient(180deg,#1D2939_0%,rgba(29,41,57,0.67)_100%)]">
              The Birth of Trustle's Vision
            </h1>
            <h1 className="font-secondary text-grey-700">
              In this cosmic tapestry, Trustle emerges as a luminary, uniquely
              positioned Company to disrupt the established order. The super
              app, Uniment, shall transcend the limitations of mere social media
              by embracing the core essence of human cognition.
            </h1>
          </div>
        </div>
        <div className="grid grid-cols-2 max-md:grid-cols-1 bg-white relative after:left-0 after:top-0 after:bottom-0 after:right-0 after:absolute after:bg-[url(../src/assets/uniment/explain.webp)] after:opacity-[17%] after:rotate-180 after:bg-no-repeat after:bg-[center_top_530px] gap-x-36 gap-y-24 max-sm:gap-y-16 py-24 px-20 max-lg:px-10 max-md:px-20 max-sm:pl-[44px] max-sm:pr-4">
          <div className="relative">
            <div className="flex flex-col gap-6">
              <h1 className="font-primary font-medium text-[32px] max-sm:text-[28px] leading-[38px] max-sm:leading-[34px] text-transparent bg-clip-text bg-[linear-gradient(180deg,#1D2939_0%,rgba(29,41,57,0.67)_100%)]">
                The Cognitive Alchemy of Uniment
              </h1>
              <h1 className="font-secondary text-grey-700 max-w-[546px]">
                Uniment shall be a crucible where cognitive alchemy reigns
                supreme. It will not merely affirm the ego, but delve deep into
                the recesses of individual consciousness. By transcending the
                shallow pursuit of likes, Trustle will craft an oasis of
                authentic connection where users encounter like-minded souls,
                not through the superficiality of appearance but through the
                intricate dance of thought.
              </h1>
            </div>
            <div
              className="absolute sm:top-1/2 max-md:-bottom-8 -translate-y-1/2 max-md:translate-y-full -right-[72px] max-md:right-1/2 translate-x-1/2 max-md:translate-x-1/2 z-[25] opacity-0"
              ref={marke}
            >
              <img src={marker} alt="" />
              <div className="absolute top-0 w-full h-full rounded-full overflow-hidden">
                <div className="absolute top-0 bg-[linear-gradient(185deg,rgba(252,252,253,0)_22.95%,rgba(252,252,253,0.755208)_44.96%,rgba(252,252,252,0)_75.09%)] w-[50%] mark-anim"></div>
                <div className="absolute top-0 right-0 bg-[linear-gradient(175deg,rgba(252,252,253,0)_22.95%,rgba(252,252,253,0.755208)_44.96%,rgba(252,252,252,0)_75.09%)] w-[50%] mark-anim"></div>
              </div>
            </div>
          </div>
          <div className="max-sm:h-[50px]"></div>
          <div className="max-sm:h-[50px]"></div>
          <div className="flex flex-col gap-6 justify-self-end">
            <h1 className="font-primary font-medium text-[32px] max-sm:text-[28px] leading-[38px] max-sm:leading-[34px] text-transparent bg-clip-text bg-[linear-gradient(180deg,#1D2939_0%,rgba(29,41,57,0.67)_100%)]">
              The True Purpose of Uniment
            </h1>
            <h1 className="font-secondary text-grey-700 max-w-[560px]">
              Uniment shall empower individuals to explore the rich tapestry of
              their own cognition, allowing them to glimpse the labyrinth of
              their thought patterns. It will be a sanctuary for the seekers of
              profound knowledge, fostering an environment where wisdom flows
              freely.
            </h1>
          </div>
          <div className="flex flex-col gap-6">
            <h1 className="font-primary font-medium text-[32px] max-sm:text-[28px] leading-[38px] max-sm:leading-[34px] text-transparent bg-clip-text bg-[linear-gradient(180deg,#1D2939_0%,rgba(29,41,57,0.67)_100%)]">
              Disruption Through Authenticity
            </h1>
            <h1 className="font-secondary text-grey-700 max-w-[568px]">
              Trustle shall disrupt the digital cosmos by anchoring itself in
              authenticity. It shall unravel the threads of superficiality,
              replacing them with a tapestry woven from genuine connections and
              meaningful exchanges. Through Uniment, Trustle will guide users to
              the heart of their own consciousness, offering insights that
              extend beyond mere likes and shares.
            </h1>
          </div>
        </div>
        <div className="absolute h-full w-1 bg-[#E6EDFB78] top-0 left-1/2 max-md:left-[16px] -translate-x-1/2 z-30">
          <div
            className="absolute w-full bg-[linear-gradient(180deg,rgba(111,153,255,0.55)_0%,rgba(111,153,255,0.18)_100%)]"
            ref={progress}
          />
        </div>
      </div>
      <div className="flex flex-col gap-24 px-20 max-sm:px-4 py-24">
        <div className="rounded-2xl bg-[linear-gradient(180deg,#89AEFE_0%,#6C96F1_151.86%)] overflow-hidden relative after:absolute after:top-0 after:left-0 after:right-0 after:bottom-0 after:bg-[url(../src/assets/uniment/footer.webp)] after:opacity-25 px-[92px] max-lg:px-20 max-md:px-12 max-sm:px-4 pt-[134px] pb-[115px]">
          <h1 className="relative z-20 font-secondary font-semibold text-xl leading-[30px] text-white text-center">
            In the grand tapestry of social media, Uniment shall emerge as a
            transformative force, not by conforming to established norms but by
            disrupting them with the brilliance of applied human cognitive
            science. By focusing on the intricate patterns of human thought,
            Uniment shall guide humanity to a deeper, more authentic
            understanding of itself, transcending the ephemeral quest for
            validation and information. In this journey, Uniment is not merely a
            super app; it is the philosopher's stone, poised to transform the
            digital landscape into something profoundly human.
          </h1>
        </div>
        <div className="flex max-md:flex-col justify-between p-16 max-md:p-0 gap-36 max-md:gap-14">
          <div className="flex flex-col gap-4">
            <h1 className="font-secondary font-semibold text-[30px] leading-[38px] text-grey-900">
              Lorem ipsum dolor
            </h1>
            <h1 className="font-secondary text-xl leading-[30px] text-grey-700">
              Lorem ipsum dolor sit amet consectetur.
            </h1>
          </div>
          <div className="flex gap-3 max-md:flex-col">
            <Link to="/*">
              <div className="px-6 py-3 rounded-lg border border-grey-400 shadow-[0_1px_2px_0_#1018280D] bg-white text-grey-700 font-secondary font-semibold text-sm whitespace-nowrap flex justify-center cursor-pointer items-center hover:shadow-[0_0_0_0_rgba(21,30,48,0.10),0_3px_8px_0_rgba(21,30,48,0.10),0_14px_14px_0_rgba(21,30,48,0.09),0_31px_19px_0_rgba(21,30,48,0.05),0_55px_22px_0_rgba(21,30,48,0.01),0_87px_24px_0_rgba(21,30,48,0.0)] duration-300">
                Learn more
              </div>
            </Link>
            <Link to="/*">
              <div className="px-4 py-3 flex gap-0 hover:gap-2 rounded-lg bg-gradient-to-r from-[#1B253C] to-[#101828] items-center justify-center cursor-pointer border border-[#475467] duration-300 hover:shadow-[0_0_0_0_rgba(21,30,48,0.10),0_3px_8px_0_rgba(21,30,48,0.10),0_14px_14px_0_rgba(21,30,48,0.09),0_31px_19px_0_rgba(21,30,48,0.05),0_55px_22px_0_rgba(21,30,48,0.01),0_87px_24px_0_rgba(21,30,48,0.0)] group">
                <h1 className="text-sm text-white font-secondary whitespace-nowrap">
                  Join the waitlist
                </h1>
                <div className="max-w-0 duration-300 group-hover:max-w-[30px] flex items-center overflow-hidden">
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="text-white duration-200 opacity-0 group-hover:opacity-100"
                  />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Explain;
