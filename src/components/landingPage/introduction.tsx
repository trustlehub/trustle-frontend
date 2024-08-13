/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faChevronDown } from "@fortawesome/free-solid-svg-icons";

function Introduction() {
  const [isDown, setIsDown] = useState<boolean>(false);
  const [isMove, setIsMove] = useState<boolean>(false);
  const [isHorizontal, setIsHorizontal] = useState<boolean>(false);
  const [countDown, setCountDown] = useState<number>(0);
  const [mousePosition, setMousePosition] = useState<number>(-1);
  const [timerId, setTimerId] = useState<number | undefined>(undefined);
  const [direction, setDirection] = useState<number>(0);
  const [bgColor, setBgColor] = useState<string>("bg-[#fafff1]");

  const carouselRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!timerId) {
      const interval = setInterval(() => {
        setCountDown((prev) => (prev + 1) % 4);
      }, 4000);
      // @ts-ignore
      setTimerId(interval);
    }

    const id = (countDown + 3) % 4;
    if (carouselRef.current) {
      (carouselRef.current.children[id] as HTMLDivElement).style.opacity = "1";
      (carouselRef.current.children[id] as HTMLDivElement).style.transform = "";
      if (isHorizontal) {
        (
          carouselRef.current.children[(id + 3) % 4] as HTMLDivElement
        ).style.transform = "translateX(-100vw)";
        (
          carouselRef.current.children[(id + 1) % 4] as HTMLDivElement
        ).style.transform = "translateX(100vw)";
      } else if (!isHorizontal) {
        (
          carouselRef.current.children[(id + 3) % 4] as HTMLDivElement
        ).style.transform = "translateY(-736px)";
        (
          carouselRef.current.children[(id + 1) % 4] as HTMLDivElement
        ).style.transform = "translateY(736px)";
      }
      (
        carouselRef.current.children[(id + 3) % 4] as HTMLDivElement
      ).style.opacity = "0";
      (
        carouselRef.current.children[(id + 1) % 4] as HTMLDivElement
      ).style.opacity = "0";
    }
    if (textRef.current) {
      (textRef.current.children[id] as HTMLDivElement).style.opacity = "1";
      if (id % 2 === 0) {
        (textRef.current.children[id] as HTMLDivElement).style.transform = "";
        (
          textRef.current.children[(id + 3) % 4] as HTMLDivElement
        ).style.transform = "translateX(-50px)";
        (
          textRef.current.children[(id + 1) % 4] as HTMLDivElement
        ).style.transform = "translateX(-50px)";
      } else if (id % 2 === 1) {
        (
          textRef.current.children[(id + 1) % 4] as HTMLDivElement
        ).style.transform = "translateX(50px)";
        (
          textRef.current.children[(id + 3) % 4] as HTMLDivElement
        ).style.transform = "translateX(50px)";
        (textRef.current.children[id] as HTMLDivElement).style.transform = "";
      }
      (textRef.current.children[(id + 3) % 4] as HTMLDivElement).style.opacity =
        "0";
      (textRef.current.children[(id + 1) % 4] as HTMLDivElement).style.opacity =
        "0";
    }
    if (countDown === 0) {
      setBgColor("bg-[#FBF3FF]");
    } else if (countDown === 1) {
      setBgColor("bg-[#fafff1]");
    } else if (countDown === 2) {
      setBgColor("bg-[#EFF4FF]");
    } else if (countDown === 3) {
      setBgColor("bg-[#F4FDFF]");
    }
  }, [countDown]);

  useEffect(() => {
    if (direction === 1) {
      setCountDown((prev) => (prev + 4 - 1) % 4);
    } else if (direction === -1 && mousePosition) {
      setCountDown((prev) => (prev + 1) % 4);
    }
    if (direction !== 0) {
      clearInterval(timerId);
      setTimerId(undefined);
    }
  }, [direction, mousePosition]);

  useEffect(() => {
    if (window.innerWidth <= 1024 && !isHorizontal) {
      setIsHorizontal(true);
      if (carouselRef.current && !timerId) {
        carouselRef.current.style.transform = "translate(0px, 0px)";
      }
    } else if (window.innerWidth > 1024 && isHorizontal) {
      setIsHorizontal(false);
      if (carouselRef.current && !timerId) {
        carouselRef.current.style.transform = "translate(0px, 1200px)";
      }
    }
  });

  useEffect(() => {
    setCountDown((prev) => (prev === undefined ? 0 : (prev + 1) % 4));
  }, [isHorizontal]);

  return (
    <div
      className={`m-auto ${bgColor} relative overflow-hidden after:absolute after:w-full after:h-full after:bg-[url('../src/assets/landing/intro_banner.webp')] after:top-0 after:left-0 after:opacity-10 after:z-[2] after:bg-[center_bottom] after:bg-no-repeat after:bg-cover rounded-b-[60px] shadow-[0_0_0_1px_inset_#EAECF0] max-sm:rounded-none pt-24 duration-300`}
    >
      <div className="pl-20 pr-[90px] max-lg:px-0 max-lg:py-10 grid grid-cols-[1fr_auto] max-lg:grid-cols-1 gap-[147px] max-xl:gap-10 max-lg:gap-20 max-lg:justify-items-center justify-center items-center relative z-10 h-[736px] max-lg:h-auto">
        <div className="flex flex-col gap-32 relative">
          <div className="flex flex-col gap-6 max-lg:px-10 max-sm:px-4">
            <div className="flex">
              <div className="relative bg-gradient-to-r from-[#7CCA68] to-[#62CA9E] max-sm:w-full flex items-center py-3 px-7 before:absolute before:top-[1px] before:right-[1px] before:bottom-[1px] before:left-[1px] before:bg-white after:absolute after:top-[2px] after:right-[2px] after:bottom-[2px] after:left-[2px] after:bg-gradient-to-r after:from-[#7CCA6869] after:to-[#62CA9E69] max-md:justify-center">
                <h1 className="font-primary font-medium leading-6 text-[#24623E] relative z-10">
                  Welcome to our beta launch!
                </h1>
              </div>
            </div>
            <div className="flex flex-col gap-3 max-lg:gap-8 max-sm:gap-4">
              <h1 className="font-primary font-medium text-[50px] leading-[64px] max-xl:leading-[48px]  max-lg:leading-[64px] max-sm:leading-[45px] text-transparent bg-clip-text bg-gradient-to-b from-[#1D2939] to-[#1D2939AB] max-lg:text-center">
                Build Your Sovereign Individual
              </h1>
              <h1 className="font-medium leading-6 font-secondary text-grey-700 max-lg:text-center max-sm:text-sm">
                Uncover anyone's digital footprint effortlessly, eradicate your
                presence and transition seamlessly to blockchain with Trustle.
                Liberate your digital identity's potential.
              </h1>
            </div>
            <div className="flex gap-4 max-lg:justify-center max-sm:flex-col">
              <Link to="/search">
                <div className="px-8 py-4 flex gap-0 hover:gap-2 rounded-lg bg-gradient-to-r from-[#1B253C] to-[#101828] items-center justify-center cursor-pointer border border-[#475467] duration-300 hover:shadow-[0_0_0_0_rgba(21,30,48,0.10),0_3px_8px_0_rgba(21,30,48,0.10),0_14px_14px_0_rgba(21,30,48,0.09),0_31px_19px_0_rgba(21,30,48,0.05),0_55px_22px_0_rgba(21,30,48,0.01),0_87px_24px_0_rgba(21,30,48,0.0)] group">
                  <h1 className="text-sm text-white font-secondary whitespace-nowrap">
                    Use search
                  </h1>
                  <div className="max-w-0 duration-300 group-hover:max-w-[30px] flex items-center overflow-hidden">
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="text-white duration-200 opacity-0 group-hover:opacity-100"
                    />
                  </div>
                </div>
              </Link>
              <Link to="/about">
                <div className="px-8 py-4 rounded-lg border border-grey-400 shadow-[0_1px_2px_0_#1018280D] bg-white text-grey-700 font-secondary font-semibold text-sm whitespace-nowrap flex justify-center cursor-pointer items-center hover:shadow-[0_0_0_0_rgba(21,30,48,0.10),0_3px_8px_0_rgba(21,30,48,0.10),0_14px_14px_0_rgba(21,30,48,0.09),0_31px_19px_0_rgba(21,30,48,0.05),0_55px_22px_0_rgba(21,30,48,0.01),0_87px_24px_0_rgba(21,30,48,0.0)] duration-500">
                  Learn more
                </div>
              </Link>
            </div>
          </div>
          {/* <div className="flex max-lg:px-10 max-sm:px-4 max-md:absolute max-md:-top-10">
            <div className="p-3 max-md:p-0 bg-[#FFFFFF82] max-md:bg-transparent rounded-xl flex md:flex-col gap-2 min-w-[205px]">
              <div className="flex gap-1 items-center">
                <h1 className="font-secondary font-semibold text-xs text-[#828282] uppercase">
                  now playing
                </h1>
                <Loader active={!pause} />
              </div>
              <div className="flex items-center justify-between max-md:order-[-1]">
                <div className="flex flex-col max-md:hidden">
                  <h1 className="font-secondary font-semibold text-sm text-grey-900 uppercase whitespace-nowrap">
                    {data?.artists[0].name}
                  </h1>
                  <h1 className="font-secondary text-xs text-[#475467] capitalize whitespace-nowrap">
                    {data?.name}
                  </h1>
                </div>
                <div className="h-[34px] w-[34px] bg-transparent rounded-full shadow-[0_0_0_1px_inset_white] flex items-center justify-center max-md:bg-[#00000012]">
                  <FontAwesomeIcon
                    icon={!pause ? faCirclePause : faCirclePlay}
                    className="cursor-pointer"
                    onClick={() => setPause(!pause)}
                  />
                </div>
              </div>
            </div>
          </div> */}
        </div>
        <div
          className="h-full w-[576px] flex flex-col max-lg:flex-row overflow-hidden relative max-lg:h-[400px] max-sm:h-[300px] max-lg:w-screen"
          id="carousel"
          onMouseDown={(e) => {
            setIsDown(true);
            if (window.innerWidth <= 1024) {
              setIsHorizontal(true);
              setMousePosition(e.clientX);
            } else {
              setMousePosition(e.clientY);
            }
          }}
          onMouseLeave={() => {
            setDirection(0);
            setIsDown(false);
            const intervalId = setTimeout(() => {
              setIsMove(false);
            }, 1000);
            return () => {
              clearTimeout(intervalId);
            };
          }}
          onMouseUp={() => {
            setDirection(0);
            setIsDown(false);
            const intervalId = setTimeout(() => {
              setIsMove(false);
            }, 1000);
            return () => {
              clearTimeout(intervalId);
            };
          }}
          onMouseMove={(e) => {
            if (!isDown) return;
            e.preventDefault();
            if (isHorizontal) {
              if (e.clientX - mousePosition > 200) {
                setDirection(1);
              } else if (mousePosition - e.clientX > 200) {
                setDirection(-1);
              }
            } else {
              if (e.clientY - mousePosition > 300) {
                setDirection(1);
              } else if (mousePosition - e.clientY > 300) {
                setDirection(-1);
              }
            }
            setIsMove(true);
          }}
        >
          <div
            className="flex flex-col max-lg:flex-row relative"
            ref={carouselRef}
          >
            <div className="h-[736px] max-lg:h-[400px] max-sm:h-[300px] max-lg:w-screen flex justify-center items-center absolute duration-[2s] ease-[cubic-bezier(.23,1.46,.45,.89)]">
              <Link to={`${isMove ? "" : "/2-to-3"}`}>
                <div className="bg-[url(../src/assets/landing/green_earth.png)] bg-contain h-[570px] w-[570px] max-lg:h-[400px] max-lg:w-[400px] max-sm:h-[300px] max-sm:w-[300px] rounded-full relative before:absolute before:bg-[radial-gradient(37.04%_37.24%_at_46.05%_54.49%,rgba(255,255,255,0.00)_0%,rgba(255,255,255,0.71)_100%)] before:top-0 before:right-0 before:bottom-0 before:left-0 before:rounded-full after:absolute after:top-[52px] after:right-[52px] after:bottom-[52px] after:left-[52px] after:rounded-full after:bg-[url(../src/assets/mainLogo/2-3-con.svg)] after:bg-contain after:bg-center cursor-pointer" />
              </Link>
            </div>
            <div className="h-[736px] max-lg:h-[400px] max-sm:h-[300px] max-lg:w-screen flex justify-center items-center absolute duration-[2s] ease-[cubic-bezier(.23,1.46,.45,.89)]">
              <Link to={`${isMove ? "" : "/uniment"}`}>
                <div className="bg-[url(../src/assets/landing/blue_earth.png)] bg-contain h-[570px] w-[570px] max-lg:h-[400px] max-lg:w-[400px] max-sm:h-[300px] max-sm:w-[300px] rounded-full relative after:absolute after:bg-[radial-gradient(56.45%_57.48%_at_50%_47.62%,rgba(233,239,255,0)_0%,#E6EDFF_100%)] after:top-0 after:right-0 after:bottom-0 after:left-0 after:rounded-full before:absolute before:top-[140px] before:right-[140px] before:bottom-[140px] before:left-[140px] max-lg:before:top-[80px] max-lg:before:right-[80px] max-lg:before:bottom-[80px] max-lg:before:left-[80px] max-sm:before:top-[65px] max-sm:before:right-[65px] max-sm:before:bottom-[65px] max-sm:before:left-[65px] before:bg-[url(../src/assets/mainLogo/uniment.svg)] before:bg-contain before:bg-center before:bg-no-repeat cursor-pointer" />
              </Link>
            </div>
            <div className="h-[736px] max-lg:h-[400px] max-sm:h-[300px] max-lg:w-screen flex justify-center items-center absolute duration-[2s] ease-[cubic-bezier(.23,1.46,.45,.89)]">
              <Link to={`${isMove ? "" : "/killswitch"}`}>
                <div className="bg-[url(../src/assets/landing/other_earth.png)] bg-contain h-[570px] w-[570px] max-lg:h-[400px] max-lg:w-[400px] max-sm:h-[300px] max-sm:w-[300px] rounded-full relative after:absolute after:bg-[radial-gradient(54.36%_54.15%_at_57.08%_53.05%,rgba(255,255,255,0.00)_23.21%,rgba(255,255,255,0.71)_87.89%)] after:top-0 after:right-0 after:bottom-0 after:left-0 after:rounded-full after:bg-no-repeat before:absolute before:top-[102px] before:right-[102px] before:bottom-[102px] before:left-[102px] max-lg:before:top-[62px] max-lg:before:right-[62px] max-lg:before:bottom-[62px] max-lg:before:left-[62px] max-sm:before:top-[42px] max-sm:before:right-[42px] max-sm:before:bottom-[42px] max-sm:before:left-[42px] before:bg-[url(../src/assets/mainLogo/killswitch.svg)] before:bg-contain before:bg-center before:bg-no-repeat cursor-pointer" />
              </Link>
            </div>
            <div className="h-[736px] max-lg:h-[400px] max-sm:h-[300px] max-lg:w-screen flex justify-center items-center absolute duration-[2s] ease-[cubic-bezier(.23,1.46,.45,.89)]">
              <Link to={`${isMove ? "" : "/search"}`}>
                <div className="bg-[url(../src/assets/landing/pink_earth.png)] bg-contain h-[570px] w-[570px] max-lg:h-[400px] max-lg:w-[400px] max-sm:h-[300px] max-sm:w-[300px] rounded-full relative after:absolute after:bg-[radial-gradient(51.06%_51.07%_at_46.05%_54.49%,rgba(255,255,255,0.00)_55.21%,rgba(255,255,255,0.65)_100%)] after:top-0 after:right-0 after:bottom-0 after:left-0 after:rounded-full before:absolute before:top-[102px] before:right-[102px] before:bottom-[102px] before:left-[102px] max-lg:before:top-[62px] max-lg:before:right-[62px] max-lg:before:bottom-[62px] max-lg:before:left-[62px] max-sm:before:top-[42px] max-sm:before:right-[42px] max-sm:before:bottom-[42px] max-sm:before:left-[42px] before:bg-[url(../src/assets/mainLogo/search.svg)] before:bg-contain before:bg-center before:bg-no-repeat cursor-pointer" />
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute right-20 max-lg:left-20 max-sm:left-4 top-10 max-lg:top-[unset] max-lg:bottom-[482px] max-sm:bottom-[382px] w-[200px] select-none">
          <div className="relative" ref={textRef}>
            <div
              className="min-w-[200px] flex flex-col gap-1 text-[#5E6B43] font-primary text-right max-lg:text-left absolute top-0 duration-700"
              style={{ transform: "translateX(50px)", opacity: "0" }}
            >
              <h1 className="font-semibold">2-to-3</h1>
              <h1 className="text-sm">Migrate Your Digital Footprint</h1>
            </div>
            <div
              className="min-w-[200px] flex flex-col gap-1 text-[#43536B] font-primary text-right max-lg:text-left absolute top-0 duration-700"
              style={{ transform: "translateX(-50px)", opacity: "0" }}
            >
              <h1 className="font-semibold">Uniment</h1>
              <h1 className="text-sm">Your Very Own Social Galaxy</h1>
            </div>
            <div
              className="min-w-[200px] flex flex-col gap-1 text-[#436B64] font-primary text-right max-lg:text-left absolute top-0 duration-700"
              style={{ transform: "translateX(50px)", opacity: "0" }}
            >
              <h1 className="font-semibold">Killswitch</h1>
              <h1 className="text-sm">Secure Your Identity</h1>
            </div>
            <div
              className="min-w-[200px] flex flex-col gap-1 text-[#5A3381] font-primary text-right max-lg:text-left absolute top-0 duration-700"
              style={{ transform: "translateX(-50px)", opacity: "0" }}
            >
              <h1 className="font-semibold">Search</h1>
              <h1 className="text-sm">Find Anyone, Anywhere!</h1>
            </div>
          </div>
        </div>
        <div
          className="absolute right-20 max-lg:right-20 max-sm:right-8 top-24 max-lg:top-[unset] max-lg:bottom-[440px] max-sm:bottom-[340px] z-20 rounded-full border-[1.5px] border-[#9AA689] flex items-center justify-center p-1 cursor-pointer w-5 h-5"
          onClick={() => {
            setCountDown((prev) => (prev + 1) % 4);
            clearInterval(timerId);
            setTimerId(undefined);
          }}
        >
          <FontAwesomeIcon
            icon={faChevronDown}
            className="text-[10px] text-[#9AA689] rotate-180 max-lg:rotate-[270deg]"
          />
        </div>
      </div>
    </div>
  );
}

export default Introduction;
