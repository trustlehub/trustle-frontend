import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Step() {
  const removal = useRef<HTMLDivElement | null>(null);
  const freedom = useRef<HTMLDivElement | null>(null);
  const icon1 = useRef<HTMLDivElement | null>(null);
  const icon2 = useRef<HTMLDivElement | null>(null);
  const icon3 = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(removal.current, {
        scrollTrigger: {
          trigger: removal.current,
          start: "top center",
          end: "100px center",
          scrub: true,
          onUpdate: (self) => {
            const progress = (self.progress * 100).toFixed(2);
            if (removal.current) {
              removal.current.style.height = `${progress}%`;
            }
          },
        },
      });
    }, removal);

    const ctx1 = gsap.context(() => {
      gsap.to(freedom.current, {
        scrollTrigger: {
          trigger: freedom.current,
          start: "top center",
          end: "100px center",
          scrub: true,
          onUpdate: (self) => {
            const progress = (self.progress * 100).toFixed(2);
            if (freedom.current) {
              freedom.current.style.height = `${progress}%`;
            }
          },
        },
      });
    }, freedom);

    const ctx2 = gsap.context(() => {
      const animation = gsap.timeline({
        scrollTrigger: {
          trigger: icon1.current,
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
      });

      animation.to(icon1.current, {
        backgroundColor: "#5E93AB",
      });

      if (icon1.current) {
        const children = Array.from(icon1.current.children[0].children);
        children.forEach((item) => {
          animation.to(item, {
            stroke: "white",
          });
        });
      }
    }, icon1);

    const ctx3 = gsap.context(() => {
      const animation = gsap.timeline({
        scrollTrigger: {
          trigger: icon2.current,
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
      });

      animation.to(icon2.current, {
        backgroundColor: "#5E93AB",
      });

      if (icon2.current) {
        const children = Array.from(icon2.current.children[0].children);
        children.forEach((item) => {
          animation.to(item, {
            stroke: "white",
          });
        });
      }
    }, icon2);

    const ctx4 = gsap.context(() => {
      const animation = gsap.timeline({
        scrollTrigger: {
          trigger: icon3.current,
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
      });

      animation.to(icon3.current, {
        backgroundColor: "#5E93AB",
      });

      if (icon3.current) {
        const children = Array.from(icon3.current.children[0].children);
        children.forEach((item) => {
          animation.to(item, {
            stroke: "white",
          });
        });
      }
    }, icon3);

    return () => {
      ctx.revert();
      ctx1.revert();
      ctx2.revert();
      ctx3.revert();
      ctx4.revert();
    };
  }, []);

  return (
    <div className="max-w-[1512px] m-auto">
      <div className="py-24 max-md:py-16 px-20 max-md:px-4 grid grid-cols-2 gap-20 max-xl:gap-10 max-md:gap-12 max-md:grid-cols-1 bg-[#ECF5F933] relative after:absolute after:content-[' '] after:w-[840px] after:h-[840px] after:border-[27px] after:bg-[#E5EEF2] after:border-[#87AFC054] after:rounded-full after:top-[404px] after:left-[-436px] max-sm:after:hidden overflow-hidden">
        <div className="flex flex-col gap-4 relative z-10">
          <h1 className="font-secondary font-semibold text-[#5E93AB]">
            How it works
          </h1>
          <h1 className="text-transparent bg-clip-text bg-gradient-to-b from-[#1D2939] to-[#1D2939AB] font-primary font-medium text-[40px] max-xl:text-[32px] max-md:text-[28px] leading-[48px] max-md:leading-[34px]">
            Safeguard Your Digital Identity in Three Simple Steps
          </h1>
        </div>
        <div className="flex flex-col gap-4 relative z-10">
          <div className="flex gap-10">
            <div className="flex flex-col gap-4 items-center">
              <div
                className="rounded-[4px] w-12 h-12 flex items-center justify-center shadow-[0_0_0_1px_inset_#97B5C066]"
                ref={icon1}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.41 18.0898L15.59 20.9098"
                    stroke="#292D32"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M18.41 20.9098L15.59 18.0898"
                    stroke="#292D32"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12.16 10.87C12.06 10.86 11.94 10.86 11.83 10.87C9.45 10.79 7.56 8.84 7.56 6.44C7.56 3.99 9.54 2 12 2C14.45 2 16.44 3.99 16.44 6.44C16.43 8.84 14.54 10.79 12.16 10.87Z"
                    stroke="#292D32"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 21.8097C10.18 21.8097 8.37 21.3497 6.99 20.4297C4.57 18.8097 4.57 16.1697 6.99 14.5597C9.74 12.7197 14.25 12.7197 17 14.5597"
                    stroke="#292D32"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="relative">
                <div className="h-[100px] w-[2px] bg-[#405D6633]" />
                <div
                  className="h-0 w-[2px] bg-[#5E93AB] absolute top-0"
                  ref={removal}
                />
              </div>
            </div>
            <div className="flex flex-col gap-[10px]">
              <h1 className="font-primary font-medium text-grey-900 text-xl">
                Precision Removal
              </h1>
              <h1 className="font-secondary text-grey-700">
                Selectively choose what you want to remove from your online
                presence—be it outdated posts, irrelevant comments, or images
                that you can no longer access or want removed.
              </h1>
            </div>
          </div>
          <div className="flex gap-10">
            <div className="flex flex-col gap-4 items-center">
              <div
                className="rounded-[4px] w-12 h-12 flex items-center justify-center shadow-[0_0_0_1px_inset_#97B5C066]"
                ref={icon2}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17 22H7C3 22 2 21 2 17V15C2 11 3 10 7 10H17C21 10 22 11 22 15V17C22 21 21 22 17 22Z"
                    stroke="#292D32"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6 10V8C6 4.69 7 2 12 2C16.5 2 18 4 18 7"
                    stroke="#292D32"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 18.5C13.3807 18.5 14.5 17.3807 14.5 16C14.5 14.6193 13.3807 13.5 12 13.5C10.6193 13.5 9.5 14.6193 9.5 16C9.5 17.3807 10.6193 18.5 12 18.5Z"
                    stroke="#292D32"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="relative">
                <div className="h-[100px] w-[2px] bg-[#405D6633]" />
                <div
                  className="h-0 w-[2px] bg-[#5E93AB] absolute top-0"
                  ref={freedom}
                />
              </div>
            </div>
            <div className="flex flex-col gap-[10px]">
              <h1 className="font-primary font-medium text-grey-900 text-xl">
                One Click Freedom
              </h1>
              <h1 className="font-secondary text-grey-700">
                With a single click, initiate the removal process. Watch as
                Killswitch seamlessly removes the chosen content from various
                platforms.
              </h1>
            </div>
          </div>
          <div className="flex gap-10">
            <div className="flex flex-col gap-4 items-center">
              <div
                className="rounded-[4px] w-12 h-12 flex items-center justify-center shadow-[0_0_0_1px_inset_#97B5C066]"
                ref={icon3}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
                    stroke="#292D32"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15.5 9.75C16.3284 9.75 17 9.07843 17 8.25C17 7.42157 16.3284 6.75 15.5 6.75C14.6716 6.75 14 7.42157 14 8.25C14 9.07843 14.6716 9.75 15.5 9.75Z"
                    stroke="#292D32"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.5 9.75C9.32843 9.75 10 9.07843 10 8.25C10 7.42157 9.32843 6.75 8.5 6.75C7.67157 6.75 7 7.42157 7 8.25C7 9.07843 7.67157 9.75 8.5 9.75Z"
                    stroke="#292D32"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.4 13.3008H15.6C16.1 13.3008 16.5 13.7008 16.5 14.2008C16.5 16.6908 14.49 18.7008 12 18.7008C9.51 18.7008 7.5 16.6908 7.5 14.2008C7.5 13.7008 7.9 13.3008 8.4 13.3008Z"
                    stroke="#292D32"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <div className="flex flex-col gap-[10px]">
              <h1 className="font-primary font-medium text-grey-900 text-xl">
                Preserve Your Legacy
              </h1>
              <h1 className="font-secondary text-grey-700">
                Every digital step contributes to your story. Killswitch helps
                you ensure that only the chapters you want to share remain
                visible.
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Step;
