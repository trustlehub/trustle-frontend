/* eslint-disable @typescript-eslint/no-explicit-any */
// import twitter from "../../assets/icons/socials/twitter.svg";
// import facebook from "../../assets/icons/socials/facebook.svg";
// import instagram from "../../assets/icons/socials/instagram.svg";
// import tiktok from "../../assets/icons/socials/tiktok.svg";
// import snap from "../../assets/snap.svg";
// import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import link from "../../assets/icons/link.svg";

import { useState, useEffect } from "react";

// function ProfileItem({ type, data,setViewProfile }: { type: string; data: any,setViewProfile:any }) {
function ProfileItem({
  type,
  data,
  setViewProfile,
  setUserName,
}: {
  type: string;
  data: any;
  setViewProfile: (data: object) => void;
  setUserName: (name: string) => void;
}) {
  // const [avatarURL, setAvatarURL] = useState<string>(data['image'][0]['image'])
  const [profileCount, setProfileCount] = useState<number>(0);
  const [profileURL, setProfileURL] = useState<string>("");

  const navigate = useNavigate();
  const init_profile = () => {
    const accounts = data["account"];
    // const images = userData[userName]['image']
    let total = 0;
    for (const platform in accounts) {
      total += accounts[platform].length;
    }
    setProfileCount(total);
    const avatar = data["image"][0]["image"];
    setProfileURL(avatar);
  };

  const viewProfile = () => {
    setViewProfile(data);
    setUserName(type);
    navigate("/search/profile");
  };

  useEffect(() => {
    init_profile();
  }, []);

  return (
    <div className="rounded-xl flex flex-col w-full bg-[#fafafa]">
      <div className="flex max-[687px]:flex-col justify-between px-6 py-5 border-b-grey-400">
        <div className="flex items-center gap-3">
          <img src={profileURL} className="w-[64px] h-[64px] rounded-[50px]" />
          <div>
            <h1 className="text-lg font-medium font-primary text-grey-900">
              {type}
            </h1>
            <div className="flex gap-2 ">
              <img src={link} alt="" />
              <h1 className="font-medium text-grey-700 font-secondary">
                {profileCount} linked accounts found
              </h1>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div
            className="max-[687px]:w-full max-[687px]:mt-6 text-center p-[12px_24px] border rounded-[8px] text-sm text-[#667085] leading-[140%] font-semibold font-secondary cursor-pointer bg-white hover:shadow-md"
            onClick={viewProfile}
          >
            View profile
          </div>
        </div>
      </div>
      {/* {data &&
            data.map((data: any, index: number) => {
              let title = data.username;
              if (data.username.length > 10) {
                title = title.substring(0, 10) + "...";
              }
              return (
                <div
                  className="p-3 rounded-xl shadow-[0_0_0_1px_inset_#EAECF0] font-secondary font-medium text-grey-700 bg-white leading-[17px] cursor-pointer"
                  key={index}
                >
                  {title}
                </div>
              );
            })} */}
      {/* asdfasdf
        </div>
      </div> */}
    </div>
  );
}

export default ProfileItem;
