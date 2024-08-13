/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
// import Header from "./header";
import shain_button from "../../assets/mainLogo/search.svg";
import { useEffect } from "react";

import "react-toastify/dist/ReactToastify.css";

import { useNavigate } from "react-router-dom";
import axios from "axios";
import { cronbaseURL } from "../../helper";
import { toast, ToastContainer } from "react-toastify";
import { useState } from "react";
import Header from "../header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

function Progress({
  getData,
  userName,
  setUserName,
}: {
  getData: (data: any) => void;
  userName: string;
  setUserName: any;
}) {
  const navigate = useNavigate();
  const [isMore, setIsMore] = useState<boolean>(false);

  let step = 0;
  let total;

  useEffect(() => {
    const progress = document.getElementById("progress");
    const icon = document.getElementById("icon");
    let i = 0;
    const intervelId = setInterval(() => {
      i++;
      if (progress && i < 250) {
        progress.style.width = (448 / 300) * i + "px";
      }
      if (icon) {
        icon.style.transform = "rotate(" + i / 0.3 + "deg)";
      }
    }, 100);

    return () => {
      clearInterval(intervelId);
    };
  }, []);

  useEffect(() => {
    let timer: any;
    const getUserData = async () => {
      const toastId = "fetched-nationalities";
      try {
        const data = await axios.get(`${cronbaseURL}monitor/db/search_result?fullname=${userName}`);
        const intervalId = setInterval(() => {
          const progress = document.getElementById("progress");
          const bar = document.getElementById("bar");
          total = parseInt(bar?.style.width ?? "0");
          step = total / 100;
          let width = parseInt(progress?.style.width ?? "0");
          if (width < total && progress != null) {
            width += step;
            progress.style.width = width + "px";
          } else {
            clearInterval(intervalId);
            navigate("/search/result");
          }
        }, 10);
        getData(data.data);
      } catch {
        // alert("Server not found");
        toast.error("Server not found.", {
          position: toast.POSITION.TOP_RIGHT,
          toastId,
        });
        timer = setTimeout(() => {
          navigate("/search");
        }, 300000);
      }
    };
    if (userName) {
      getUserData();
    }
    return () => {
      clearTimeout(timer);
    };
  }, [userName]);

  return (
    <>
      {/* <Header setUserName={setUserName} /> */}
      <Header />
      <ToastContainer />
      <div className="bg-[#F3F7F6] w-full h-[calc(100vh)] shadow-[0_0_0_1px_inset_#EAECF0] px-4 py-28 max-md:pb-12 flex flex-col items-center max-xm:pb-[32px] relative overflow-hidden after:absolute after:w-full after:h-full after:bg-[url(../src/assets/search/progress.webp)] after:top-0 after:left-0 after:opacity-[0.18] after:z-[2] after:bg-[center_bottom] after:bg-no-repeat after:bg-cover bt-[160px]">
        <div className="flex flex-col gap-3 max-w-[496px] w-full relative z-30">
          <div className="z-30 flex flex-col gap-6 p-6 bg-white rounded-xl">
            <div className="flex justify-between">
              <div className="grid grid-rows-[auto_auto] gap-2">
                <div className="rounded-full bg-[url(../src/assets/avatar/userAvatar.svg)] border-white border-[3px] shadow-[0_3px_4.5px_-1.5px_rgba(16,24,40,0.03),0_9px_12px_-3px_rgba(16,24,40,0.08)] bg-no-repeat bg-cover bg-center h-[72px] w-[72px]" />
                <h1 className="text-xl font-medium font-primary text-grey-700">
                  Searching for "{userName}" ...
                </h1>
                <div className="flex gap-[10px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="96"
                    height="16"
                    viewBox="0 0 96 16"
                    fill="none"
                  >
                    <rect
                      width="96"
                      height="16"
                      rx="8"
                      fill="#DFE5E7"
                      fillOpacity="0.45"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="96"
                    height="16"
                    viewBox="0 0 96 16"
                    fill="none"
                  >
                    <rect
                      width="96"
                      height="16"
                      rx="8"
                      fill="#DFE5E7"
                      fillOpacity="0.45"
                    />
                  </svg>
                </div>
              </div>
              <div className="w-[49px] h-[49px] p-1 rounded-full border border-white bg-[#F3F7F6] shaddow-[0_3px_4.5px_-1.5px_rgba(16,24,40,0.03),0_9px_12px_-3px_rgba(16,24,40,0.08)]">
                <img
                  src={shain_button}
                  alt=""
                  className="p-1 rounded-full"
                  id="icon"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="relative w-full">
                <div
                  className="rounded-[100px] border border-grey-300 bg-grey-200 w-full h-3"
                  id="bar"
                />
                <div
                  className="absolute rounded-[100px] h-[10px] bg-gradient-to-r from-[#7CCA68] to-[#62CA9E] w-9 top-[1px] left-[1px]"
                  id="progress"
                />
              </div>
              {/* <h1 className="text-sm font-normal font-secondary">{cnt} accounts found...</h1> */}
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => setIsMore(!isMore)}
            >
              <h1 className="text-sm font-medium font-secondary text-grey-700">
                More info
              </h1>
              <FontAwesomeIcon
                icon={faChevronDown}
                className={`text-grey-900 duration-300 ${
                  isMore ? "rotate-180" : "rotate-0"
                }`}
              />
            </div>
            <h1 className="text-sm font-medium text-right font-secondary text-grey-700">
              <span className="font-bold text-transparent bg-clip-text bg-[linear-gradient(180deg,rgba(199,27,227,0.51)_0%,rgba(104,31,225,0.3417)_100%)]">
                {"2,342"}searches
              </span>{" "}
              made in the last 24hrs
            </h1>
          </div>
          <div
            className={`px-4 flex flex-col gap-3 rounded-lg shadow-[0_0_0_1px_inset_#f2f4f7] bg-white duration-300 overflow-hidden ${
              isMore ? "max-h-[100vh] py-5" : "max-h-0 py-0"
            }`}
          >
            <h1 className="font-secondary font-semibold text-sm leading-[18px] text-grey-900">
              Search performance priority
            </h1>
            <div className="flex flex-col">
              <div className="pr-[10px] py-[10px] grid grid-cols-[1fr_2fr] items-center">
                <h1 className="font-secondary text-sm leading-[18px] text-grey-700">
                  Sweden
                </h1>
                <div className="w-full rounded-sm h-[14px] bg-[#34a859]" />
              </div>
              <div className="pr-[10px] py-[10px] grid grid-cols-[1fr_2fr] items-center">
                <h1 className="font-secondary text-sm leading-[18px] text-grey-700">
                  Nordics (Ex-sweden)
                </h1>
                <div className="w-full rounded-sm h-[14px] bg-[#F2F4F7] relative after:absolute after:left-0 after:top-0 after:h-full after:w-[80%] after:rounded-sm after:bg-[#FBBC29]" />
              </div>
              <div className="pr-[10px] py-[10px] grid grid-cols-[1fr_2fr] items-center">
                <h1 className="font-secondary text-sm leading-[18px] text-grey-700">
                  RoE (Rest of Europe)
                </h1>
                <div className="w-full rounded-sm h-[14px] bg-[#F2F4F7] relative after:absolute after:left-0 after:top-0 after:h-full after:w-[60%] after:rounded-sm after:bg-[#FF6D13]" />
              </div>
              <div className="pr-[10px] py-[10px] grid grid-cols-[1fr_2fr] items-center">
                <h1 className="font-secondary text-sm leading-[18px] text-grey-700">
                  RoW (Rest of World)
                </h1>
                <div className="w-full rounded-sm h-[14px] bg-[#F2F4F7] relative after:absolute after:left-0 after:top-0 after:h-full after:w-[40%] after:rounded-sm after:bg-[#EA4336]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Progress;
