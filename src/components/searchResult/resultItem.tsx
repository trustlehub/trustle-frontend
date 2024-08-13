/* eslint-disable @typescript-eslint/no-explicit-any */
import link from "../../assets/icons/link.svg";
import twitter from "../../assets/icons/socials/twitter.svg";
import facebook from "../../assets/icons/socials/facebook.svg";
import instagram from "../../assets/icons/socials/instagram.svg";
import tiktok from "../../assets/icons/socials/tiktok.svg";
// import { useEffect, useState } from "react"
import thumbup from "../../assets/thumbup.svg";
import thumbdown from "../../assets/thumbdown.svg";

function ResultItem({ info, platform }: { info: any; platform: string }) {
  // const [copyValue, setCopyValue] = useState<string>("");

  const showIcon = () => {
    switch (platform) {
      case "linkedin":
        return <img src={link} className="w-[24px] h-[24px]" alt="li" />;
      case "twitter":
        return <img src={twitter} className="w-[24px] h-[24px]" alt="tw" />;
      case "facebook":
        return <img src={facebook} className="w-[24px] h-[24px]" alt="fa" />;
      case "tiktok":
        return <img src={tiktok} className="w-[24px] h-[24px]" alt="ti" />;
      case "instagram":
        return <img src={instagram} className="w-[24px] h-[24px]" alt="in" />;
    }
  };

  return (
    <>
      {info.map((val: any, index: number) => {
        console.log("profile data", val);

        if (val.username.length > 15) {
          val.username = val.username.slice(0, 15) + " ...";
        }

        if (!val.username.startsWith("@")) {
          val.username = "@" + val.username;
        }

        return (
          <div className="relative mr-4 mb-7 " key={index}>
            <div className="p-[16px_12px] border w-[222px] group border-[#F2F4F7] rounded-[12px] bg-white">
              <div className="flex justify-between pb-4 border-b">
                {showIcon()}
              </div>
              <h1 className="py-4 text-sm font-secondary">Account name</h1>
              <div key={index}>
                <div
                  className="flex items-center justify-center border border-[#EAECF0] bg-[#F9FAFB] p-3 rounded-[12px] cursor-pointer"
                  onClick={() => window.open(val.href, "_blank")}
                >
                  {val.username}
                </div>
              </div>
              <div className="break-keep absolute top-[200px] hidden whitespace-nowrap p-3 transition-all group-hover:block bg-slate-800 text-white border border-cyan-200 z-10 rounded-lg font-primary">
                content
                <br />
                {`${
                  val.body.length > 30
                    ? val.body.slice(0, 30) + " ..."
                    : val.body
                }`}
                <br />
                title
                <br />
                {`${
                  val.title.length > 30
                    ? val.title.slice(0, 30) + " ..."
                    : val.title
                }`}
              </div>
            </div>
            <div className="p-3 text-xs recommend font-secondary">
              Was this result helpful?
            </div>
            <div className="flex gap-2">
              <img
                src={thumbdown}
                alt=""
                className="w-8 h-8 cursor-pointer"
                onClick={() => alert("Thumb down!")}
              />
              <img
                src={thumbup}
                alt=""
                className="w-8 h-8 cursor-pointer"
                onClick={() => alert("Thumb up!")}
              />
            </div>
          </div>
        );
      })}
    </>
  );
}

export default ResultItem;
