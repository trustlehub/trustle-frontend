/* eslint-disable @typescript-eslint/no-explicit-any */
// import location from "../../assets/location.svg";
import link from "../../assets/icons/link.svg";
// import info from "../../assets/info.svg";
// import twitter from "../../assets/icons/socials/twitter.svg";
// import facebook from "../../assets/icons/socials/facebook.svg";
// import instagram from "../../assets/icons/socials/instagram.svg";
// import tiktok from "../../assets/icons/socials/tiktok.svg";
// import snap from "../../assets/snap.svg";
import down from "../../assets/arrow-down.svg";
import right from "../../assets/p_right.svg";
import ProfileItem from "./profileItem";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface ProfileTypes {
  userData: any;
  userName: any;
  setViewProfile: any;
  setUserName: any;
}

function Profile({
  userData,
  userName,
  setViewProfile,
  setUserName,
}: ProfileTypes) {
  const [profileCount, setProfileCount] = useState<number>(0);
  const [profileURL, setProfileURL] = useState<string>("");
  const [imgCount, setImageCount] = useState<number>(4);
  const [maxImg, setMaxImg] = useState<boolean>(false);
  const navigate = useNavigate();

  const setMaxImageCount = () => {
    if (userData[userName]["image"].length == 4) return;
    setImageCount(userData[userName]["image"].length);
    setMaxImg(true);
  };

  const setDefImageCount = () => {
    setImageCount(4);
    setMaxImg(false);
  };

  const init_profile = () => {
    const accounts = userData[userName]["account"];
    // const images = userData[userName]['image']
    let total = 0;
    for (const platform in accounts) {
      total += accounts[platform].length;
    }
    setProfileCount(total);
    const avatar = userData[userName]["image"][0]["image"]
      ? userData[userName]["image"][0]["image"]
      : "";
    setProfileURL(avatar);
  };

  const ViewProfile = () => {
    setViewProfile(userData[userName]);
    navigate("/search/profile");
  };

  useEffect(() => {
    init_profile();
  }, []);
  return (
    <div className="max-w-[1512px] m-auto">
      <div className="grid min-[1224px]:grid-cols-[1fr_auto] pb-[96px] ">
        <div className="order-1 max-[1224px]:order-2 pt-8 pl-20 pr-6 w-full flex flex-col border-r max-[1224px]:px-[16px] border-r-grey-300 max-md:px-4 max-lg:border-none">
          <div className="flex flex-col">
            <div className="flex flex-col gap-5 max-md:flex-col bg-[#fafafa] p-[19px_16px]">
              <div className="flex justify-between max-[687px]:flex-col">
                <div className="min-[500px]:flex gap-4 max-[687px]:order-2 max-[687px]:mt-3">
                  <img
                    src={profileURL}
                    alt=""
                    className="min-[500px]:w-[168px] w-full h-[102px] rounded-lg object-cover"
                  />
                  <div className="flex flex-col justify-center gap-3">
                    <div className="flex flex-col gap-4">
                      <h1 className="font-primary font-medium text-grey-1000 w-[220px] text-[32px] leading-[34px]">
                        {userName}
                      </h1>
                      <div className="flex flex-col gap-3">
                        <div className="flex gap-2">
                          <img src={link} alt="" />
                          <h1 className="font-secondary font-medium text-sm leading-[18px] text-grey-700">
                            {profileCount} linked accounts found
                          </h1>
                        </div>
                      </div>
                    </div>
                    {/* <div className="flex flex-col w-full gap-5">
                    <div className="hidden opacity-0 max-xl:opacity-100 max-xl:duration-400 w-full max-xl:flex gap-[6px] items-center justify-center bg-[#FAF2FF] py-2 rounded-lg cursor-pointer">
                    <h1 className="font-secondary font-medium text-sm text-[#7B5290]">
                      View all images
                    </h1>
                    <img src={right} alt="" />
                  </div>
                  </div> */}
                  </div>
                </div>
                <div className="max-[687px]:order-1 max-[687px]:flex mt-3">
                  <div className="text-[#17612C] p-[6px_12px] bg-[rgba(176,255,198,0.56)] rounded-[40px] font-manrope text-sm font-semibold ">
                    Closest match
                  </div>
                </div>
              </div>

              <div
                className="w-full text-[#667085] bg-white rounded-lg border border-[#EAECF0] duration-500 px-6 py-3 text-sm font-secondary font-semibold text-center cursor-pointer hover:shadow-[0_0_0_0_rgba(21,30,48,0.10),0_3px_8px_0_rgba(21,30,48,0.10),0_14px_14px_0_rgba(21,30,48,0.09),0_31px_19px_0_rgba(21,30,48,0.05),0_55px_22px_0_rgba(21,30,48,0.01),0_87px_24px_0_rgba(21,30,48,0.0)]"
                onClick={ViewProfile}
              >
                View profile
              </div>
              {/* <div className="w-full bg-gradient-to-r from-[#1B253C] to-[#101828] rounded-lg border border-[#475467] duration-500 px-6 py-3 text-white text-sm font-secondary font-semibold text-center cursor-pointer hover:shadow-[0_0_0_0_rgba(21,30,48,0.10),0_3px_8px_0_rgba(21,30,48,0.10),0_14px_14px_0_rgba(21,30,48,0.09),0_31px_19px_0_rgba(21,30,48,0.05),0_55px_22px_0_rgba(21,30,48,0.01),0_87px_24px_0_rgba(21,30,48,0.0)]">
                View  profile
              </div> */}
            </div>
            <div className="flex flex-col w-full mt-8 max-xl:max-w-full">
              <div className="flex flex-col gap-4 mt-6">
                {userData &&
                  Object.keys(userData).map((item: string, index: number) => {
                    return (
                      <ProfileItem
                        type={item}
                        data={userData[item]}
                        key={index}
                        setViewProfile={setViewProfile}
                        setUserName={setUserName}
                      />
                    );
                  })}
              </div>
              <div className="mt-6 w-full flex gap-[6px] items-center justify-center bg-[#FAF2FF] py-4 rounded-lg cursor-pointer group">
                <h1 className="font-secondary font-medium text-sm text-[#7B5290]">
                  Load more
                </h1>
                <img src={down} alt="" className="group-hover:animate-bounce" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col max-[1224px]:order-1 max-[1224px]:w-full max-[1224px]:px-[16px] order-2 gap-3 pt-8 pl-6 pr-28 ">
          <h1 className="text-xl font-medium font-primary text-grey-900">
            Images for {userName}
          </h1>
          <div className="rounded-xl p-3 min-[1224px]:grid min-[1224px]:grid-cols-2 max-[1224px]:flex max-[1224px]:flex-wrap max-[1224px]:justify-between shadow-[0_0_0_1px_inset_#F2F4F7] bg-[#fafafa] gap-3">
            {userData[userName] &&
              userData[userName].image &&
              userData[userName].image.map((data: any, index: number) => {
                if (index < imgCount) {
                  return (
                    <img
                      src={data["image"]}
                      className="rounded-lg w-[149px] h-[93px] object-cover"
                      key={index}
                    />
                  );
                }
              })}
          </div>
          {maxImg ? (
            <div
              className="max-[687px]:mt-1 mt-6 w-full flex gap-[6px] items-center justify-center bg-[#FAF2FF] max-[687px]:bg-transparent  py-2 rounded-lg cursor-pointer"
              onClick={setDefImageCount}
            >
              <h1 className="font-secondary font-medium text-sm text-[#7B5290]">
                Less images
              </h1>
            </div>
          ) : (
            <div
              className="max-[687px]:mt-1 mt-6 w-full flex gap-[6px] items-center justify-center bg-[#FAF2FF] max-[687px]:bg-transparent  py-2 rounded-lg cursor-pointer"
              onClick={setMaxImageCount}
            >
              <h1 className="font-secondary font-medium text-sm text-[#7B5290]">
                View all images
              </h1>
              <img src={right} alt="" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Profile;
