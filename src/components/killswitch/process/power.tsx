import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import kill_logo from "../../../assets/mainLogo/killswitch.svg";
import { useKillAccountContext } from "../../../context/killAccountContext";
import Attorney from "../Attorney";
import CardImg from "./cardImg";
import { useEffect, useState } from "react";

type SocialMediaPlatform =
  | "Twitter"
  | "Instagram"
  | "Snapchat"
  | "Facebook"
  | "Reddit"
  | "Pinterest"
  | "YouTube"
  | "Vimeo"
  | "Codecademy"
  | "GitHub"
  | "OnlyFans"
  | "Behance"
  | "Google"
  | "Telegram"
  | "Spotify"
  | "Last"
  | "PornHub"
  | "Tiktok";

function Power({ agreeStep }: { agreeStep: number }) {
  const { killAccounts } = useKillAccountContext();
  const [today, setToday] = useState<string>("")

  useEffect(() => {
    const today = new Date();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Add 1 to the month because months are 0-indexed
    const day = String(today.getDate()).padStart(2, '0');
    const year = today.getFullYear();

    const formattedDate = `${month}/${day}/${year}`;
    setToday(formattedDate);

  }, [])

  return (
    <div className="flex gap-10 px-24 pt-16 pb-14 max-lg:px-12 max-md:px-4 max-md:flex-col">
      <div className="block">
        <div className="bg-[#fcfcfd] rounded-xl p-6 max-md:px-4 shadow-[0_0_0_1px_inset_#eaecf0] flex md:flex-col max-md:items-center overflow-x-scroll">
          {killAccounts.map((data, index) => {
            if (index > agreeStep) {
              return (
                <div
                  key={index}
                  className="flex items-center justify-center md:flex-col"
                >
                  <div className="bg-white rounded-[4px] px-4 py-3 flex justify-between shadow-[0_0_0_1px_inset_#f2f4f7] w-full max-md:min-w-[190px]">
                    <div className="flex gap-2 items-center opacity-[53%]">
                      <CardImg type={data.type} />
                      <h1 className="font-secondary font-medium text-sm leading-[18px] text-grey-700">
                        {data.type}
                      </h1>
                    </div>
                  </div>
                  {index < killAccounts.length - 1 && (
                    <div className="mx-2 my-1 h-[29px] max-md:h-[1px] w-[1px] max-md:w-[20px] bg-[#eaecf0]" />
                  )}
                </div>
              );
            } else {
              return (
                <div
                  key={index}
                  className="flex items-center justify-center md:flex-col"
                >
                  <div className="bg-white rounded-[4px] px-4 py-3 flex justify-between shadow-[0_0_0_1px_inset_#5E93AB] min-w-[226px] max-md:min-w-[190px]">
                    <div className="flex items-center gap-2">
                      <CardImg type={data.type} />
                      <h1 className="font-secondary font-medium text-sm leading-[18px] text-grey-700">
                        {data.type}
                      </h1>
                    </div>
                    <div className="rounded-full w-5 h-5 bg-[#5E93AB] flex items-center justify-center">
                      <FontAwesomeIcon
                        icon={faCheck}
                        className="text-sm text-white"
                      />
                    </div>
                  </div>
                  {index < killAccounts.length - 1 && (
                    <div className="mx-2 my-1 h-[29px] max-md:h-[1px] w-[1px] max-md:w-[20px] bg-[#5E93AB]" />
                  )}
                </div>
              );
            }
          })}
        </div>
      </div>
      <div className="flex flex-col w-full gap-6">
        <div className="flex flex-col w-full gap-2 pb-6 border-b border-b-grey-400">
          <h1 className="text-2xl font-medium leading-5 font-primary text-grey-900">
            Power of attorney for removal of account
          </h1>
          <h1 className="text-sm font-secondary text-grey-700">
            Attorney-in-Fact (Trustle) Information:
            <br />
            Full Legal Name of Attorney-in-Fact: Trustle AB.
            <br />
            Registered Office Address: Ulrika Gatan 6, 115 23, Stockholm,
            Sweden.
            <br />
            Email Address: {import.meta.env.VITE_MAIN_MAIL as string}
          </h1>
        </div>
        <Attorney
          name={killAccounts[agreeStep].type as SocialMediaPlatform}
          url={killAccounts[agreeStep].name}
        />
        <div className="flex flex-col gap-8">
          <div className="w-full h-[1px] bg-grey-400" />
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <h1 className="text-sm font-medium font-secondary text-grey-700">
                Your Contact Information*
              </h1>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  className="bg-[#f9fafb] shadow-[0_0_0_1px_inset_#eaecf0] p-3 font-secondary text-sm text-grey-600 focus:outline-none rounded-lg"
                  placeholder="First name"
                />
                <input
                  type="text"
                  className="bg-[#f9fafb] shadow-[0_0_0_1px_inset_#eaecf0] p-3 font-secondary text-sm text-grey-600 focus:outline-none rounded-lg"
                  placeholder="Last name"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <h1 className="text-sm font-medium font-secondary text-grey-700">
                  Date
                </h1>
                <input
                  type="text"
                  className="bg-[#f9fafb] shadow-[0_0_0_1px_inset_#eaecf0] p-3 font-secondary text-sm text-grey-600 focus:outline-none rounded-lg select-none"
                  placeholder="DD/MM/YYYY"
                  readOnly
                  defaultValue={today}
                />
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="text-sm font-medium font-secondary text-grey-700">
                  Click to add your signature
                </h1>
                <div className="flex">
                  <div className="rounded-lg px-6 py-3 bg-white shadow-[0_0_0_1px_inset_#eaecf0] font-secondary font-semibold text-sm text-grey-700 cursor-pointer relative after:absolute after:top-0 after:left-0 after:right-0 after:bottom-0 after:rounded-lg after:shadow-[0_1px_2px_0_#1018280D] hover:after:shadow-[0_0_0_0_rgba(21,30,48,0.10),0_3px_8px_0_rgba(21,30,48,0.10),0_14px_14px_0_rgba(21,30,48,0.09),0_31px_19px_0_rgba(21,30,48,0.05),0_55px_22px_0_rgba(21,30,48,0.01),0_87px_24px_0_rgba(21,30,48,0.0)] after:duration-300">
                    Click to Sign
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-[1px] bg-grey-400" />
          <div className="flex justify-between">
            <div className="flex flex-col gap-1">
              <h1 className="text-xl font-medium leading-5 font-primary text-grey-900">
                Michael Bage
              </h1>
              <h1 className="text-sm font-secondary text-grey-700">
                CEO & Founder
              </h1>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-[#f0f3f7] flex items-center justify-center">
                  <img src={kill_logo} alt="" className="w-10 h-10" />
                </div>
                <h1 className="text-xl font-bold font-primary text-grey-1000">
                  Killswitch
                </h1>
              </div>
              <h1 className="font-primary font-medium text-transparent bg-clip-text bg-[linear-gradient(90deg,#7CCA68_41.69%,#62CA9E_80.68%)] text-right    ">
                By Trustle
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Power;
