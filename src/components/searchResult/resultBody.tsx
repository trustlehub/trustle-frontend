/* eslint-disable @typescript-eslint/no-explicit-any */
// import location from "../../assets/location.svg";
import link from "../../assets/icons/link.svg";
// import info from "../../assets/info.svg";
import down from "../../assets/arrow-down.svg";
import right from "../../assets/p_right.svg";
import ResultList from "./resultList";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ResultBody({
  viewProfile,
  userName,
}: {
  viewProfile: any;
  userName: any;
}) {
  const [profileURL, setProfileURL] = useState<string>("");
  const [profileCount, setProfileCount] = useState<number>(0);
  const [maxImg, setMaxImg] = useState<boolean>(false);
  const [imgCount, setImageCount] = useState<number>(4);
  const navigate = useNavigate();

  const init = () => {
    const accounts = viewProfile.account;
    // const images = userData[userName]['image']
    let total = 0;
    for (const platform in accounts) {
      total += Object.keys(accounts[platform]).length;
    }
    setProfileCount(total);
    const avatar = viewProfile.image[0].image;
    setProfileURL(avatar);
  };

  const setDefImageCount = () => {
    setImageCount(4);
    setMaxImg(false);
  };

  const setMaxImageCount = () => {
    if (viewProfile.image.length == 4) return;
    setImageCount(viewProfile.image.length);
    setMaxImg(true);
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <div className="max-w-[1512px] m-auto">
      <div className="grid min-[1224px]:grid-cols-[1fr_auto] gap-6">
        <div className="order-1 max-[1224px]:order-2 w-full flex flex-col border-r border-r-grey-300">
          <div className="flex flex-col w-full gap-5 px-4 py-5 rounded-xl">
            <div className="flex items-center gap-6">
              <img
                src={profileURL}
                alt=""
                className=" w-[278px] h-[232px] rounded-lg object-cover"
              />
              <div className="flex justify-between">
                <div className="flex flex-col gap-3">
                  <h1 className="font-primary font-medium leading-[25px] text-grey-1000 text-[32px]">
                    {userName}
                  </h1>
                  <div className="flex flex-col gap-3">
                    {/* <div className="flex gap-2">
                        <img src={location} alt="" />
                        <h1 className="font-secondary font-medium text-sm leading-[18px] text-grey-700">
                          Lisbon, Portugal
                        </h1>
                      </div> */}
                    <div className="flex gap-2">
                      <img src={link} alt="" />
                      <h1 className="font-secondary font-medium text-sm leading-[18px] text-grey-700">
                        {profileCount} linked accounts found
                      </h1>
                    </div>
                  </div>
                  <div
                    className="flex items-center justify-center font-secondary font-semibold text-sm text-grey-700 rounded-lg bg-white shadow-[0_0_0_1px_inset_#EAECF0] py-3 cursor-pointer hover:shadow-[0_0_0_0_rgba(21,30,48,0.10),0_3px_8px_0_rgba(21,30,48,0.10),0_14px_14px_0_rgba(21,30,48,0.09),0_31px_19px_0_rgba(21,30,48,0.05),0_55px_22px_0_rgba(21,30,48,0.01),0_87px_24px_0_rgba(21,30,48,0.0)]"
                    onClick={() => navigate("/search/result")}
                  >
                    View other profile
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full gap-6 p-6 mt-5 bg-white rounded-lg">
            <ResultList data={viewProfile.account} />
          </div>
          <div className="mt-6 w-full flex gap-[6px] items-center justify-center bg-[#FAF2FF] py-4 rounded-lg cursor-pointer group">
            <h1 className="font-secondary font-medium text-sm text-[#7B5290]">
              Load more
            </h1>
            <img src={down} alt="" className="group-hover:animate-bounce" />
          </div>
        </div>
        <div className="flex flex-col gap-3 pt-8 pl-6 pr-28  max-[1224px]:order-1 max-[1224px]:w-full max-[1224px]:px-[16px] order-2">
          <h1 className="text-xl font-medium font-primary text-grey-900">
            Related images
          </h1>
          <div className="rounded-xl p-3 min-[1224px]:grid min-[1224px]:grid-cols-2 max-[1224px]:flex max-[1224px]:flex-wrap max-[1224px]:justify-between shadow-[0_0_0_1px_inset_#F2F4F7] bg-[#fafafa] gap-3">
            {viewProfile.image &&
              viewProfile.image.map((data: any, index: number) => {
                if (index < imgCount) {
                  return (
                    <img
                      src={data.image}
                      className="rounded-lg w-[149px] h-[93px] object-cover"
                      key={index}
                    />
                  );
                }
              })}
          </div>
          {maxImg ? (
            <div
              className="mt-6 w-full flex gap-[6px] items-center justify-center bg-[#FAF2FF] py-2 rounded-lg cursor-pointer group"
              onClick={setDefImageCount}
            >
              <h1 className="font-secondary font-medium text-sm text-[#7B5290]">
                View all images
              </h1>
              <img
                src={right}
                alt=""
                className="group-hover:animate-[go_.5s_ease-out_infinite]"
              />
            </div>
          ) : (
            <div
              className="mt-6 w-full flex gap-[6px] items-center justify-center bg-[#FAF2FF] py-2 rounded-lg cursor-pointer group"
              onClick={setMaxImageCount}
            >
              <h1 className="font-secondary font-medium text-sm text-[#7B5290]">
                View all images
              </h1>
              <img
                src={right}
                alt=""
                className="group-hover:animate-[go_.5s_ease-out_infinite]"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ResultBody;
