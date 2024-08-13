/* eslint-disable @typescript-eslint/ban-ts-comment */
import { accountType } from "./setting";
import { useEffect, useState } from "react";
import snapchat from "../../../assets/icons/socials/snap.svg";
import behance from "../../../assets/icons/socials/behance.svg";
import codecademy from "../../../assets/icons/socials/codecademy.svg";
import deviant from "../../../assets/icons/socials/deviant.svg";
import facebook from "../../../assets/icons/socials/facebook.svg";
import github from "../../../assets/icons/socials/github.svg";
import google from "../../../assets/icons/socials/google.svg";
import instagram from "../../../assets/icons/socials/instagram.svg";
import last from "../../../assets/icons/socials/last.svg";
import medium from "../../../assets/icons/socials/medium.svg";
import onlyfan from "../../../assets/icons/socials/onlyfan.svg";
import pornhub from "../../../assets/icons/socials/pornhub.svg";
import printerest from "../../../assets/icons/socials/printerest.svg";
import reddit from "../../../assets/icons/socials/reddit.svg";
import telegram from "../../../assets/icons/socials/telegram.svg";
import spotify from "../../../assets/icons/socials/spotify.svg";
import tiktok from "../../../assets/icons/socials/tiktok.svg";
import linkedin from "../../../assets/icons/socials/linkedin.svg";
import x from "../../../assets/icons/socials/x.svg";
import youtube from "../../../assets/icons/socials/youtube.svg";
import vimeo from "../../../assets/icons/socials/vimeo.svg";
import avatar from "../../../assets/avatar/p_2.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  // faEllipsisVertical,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import {
  accountProperties,
  useAccountContext,
} from "../../../context/accountsContext";
import { useKillAccountContext } from "../../../context/killAccountContext";

function UserAccount({
  data,
  account,
  all,
  setAll,
  setAccountsData,
}: {
  data: accountProperties;
  account?: boolean;
  all?: boolean;
  setAll?: Function;
  setAccountsData?: (data: accountType[]) => void;
}) {
  const [socialItem, setSocialItem] = useState<string>("");
  const [active, setActive] = useState<boolean>(false);
  const [dropMenu, setDropMenu] = useState<boolean>(false);
  const { killAccounts, setKillAccounts } = useKillAccountContext();
  const { accounts } = useAccountContext();

  useEffect(() => {
    if (all) {
      setKillAccounts(accounts);
      setActive(true);
    }
  }, [all]);

  useEffect(() => {
    if (killAccounts.length === accounts.length) {
      // @ts-ignore
      setAll(true);
    } else if (killAccounts.length === 0) {
      // @ts-ignore
      setAll(false);
    }
  }, [killAccounts]);

  useEffect(() => {
    switch (data.type) {
      case "Twitter":
        setSocialItem(x);
        return;
      case "Instagram":
        setSocialItem(instagram);
        return;
      case "Snapchat":
        setSocialItem(snapchat);
        return;
      case "Facebook":
        setSocialItem(facebook);
        return;
      case "Reddit":
        setSocialItem(reddit);
        return;
      case "Pinterest":
        setSocialItem(printerest);
        return;
      case "Last":
        setSocialItem(last);
        return;
      case "YouTube":
        setSocialItem(youtube);
        return;
      case "Vimeo":
        setSocialItem(vimeo);
        return;
      case "Codecademy":
        setSocialItem(codecademy);
        return;
      case "GitHub":
        setSocialItem(github);
        return;
      case "OnlyFans":
        setSocialItem(onlyfan);
        return;
      case "Medium":
        setSocialItem(medium);
        return;
      case "Behance":
        setSocialItem(behance);
        return;
      case "Google":
        setSocialItem(google);
        return;
      case "DeviantArt":
        setSocialItem(deviant);
        return;
      case "Pornhub":
        setSocialItem(pornhub);
        return;
      case "Linkedin":
        setSocialItem(linkedin);
        return;
      case "Telegram":
        setSocialItem(telegram);
        return;
      case "Spotify":
        setSocialItem(spotify);
        return;
      default:
        setSocialItem(tiktok);
        return;
    }
  }, [data.type]);

  useEffect(() => {
    if (account) return;
    if (active) {
      const kill = killAccounts.filter((killdata) => killdata.id === data.id);
      if (kill.length === 0) {
        // @ts-ignore
        setKillAccounts((prev: accountType[]) => [...prev, data]);
      }
    } else if (killAccounts.length) {
      const datas = killAccounts.filter((obj) => obj.id !== data.id);
      setKillAccounts(datas);
    }
  }, [active]);

  useEffect(() => {
    setActive(killAccounts.findIndex((obj) => obj.id === data.id) !== -1);
  }, []);

  const DeleteAccount = () => {
    setDropMenu(false);
    // @ts-ignore
    setAccountsData((prev: accountType[]) => {
      const newData = prev.filter((obj) => obj.id !== data.id);
      return newData;
    });
  };

  return (
    <div
      className={`rounded-xl px-3 py-4 bg-white border shadow-[0_1px_2px_0_#1018280D] flex flex-col gap-4 cursor-pointer relative ${
        active ? "border-[#5E93AB54]" : "border-grey-300"
      }`}
      onClick={() => setActive(!active)}
    >
      <div className="flex items-center justify-between">
        <img src={socialItem} alt="" className="w-6 h-6" />
        {account ? (
          <div
            className="w-[18px] h-[18px] flex items-center justify-center"
            // onClick={() => setDropMenu(!dropMenu)}
          >
            {/* <FontAwesomeIcon
              icon={faEllipsisVertical}
              className="text-xl font-thin duration-200 text-grey-700"
            /> */}
          </div>
        ) : (
          <div
            className={`rounded-md w-5 h-5 border-2 relative flex items-center justify-center duration-200 ${
              active ? "border-[#5E93AB] bg-[#5E93AB1A]" : "border-grey-400"
            }`}
          >
            {active ? (
              <FontAwesomeIcon
                icon={faCheck}
                className="duration-200 font-thin text-[#5e93ab]"
              />
            ) : (
              ""
            )}
          </div>
        )}
      </div>
      <div className="w-full h-[1px] bg-grey-400"></div>
      <div className="flex">
        <div className="flex items-center gap-2 rounded-full px-2 py-[6px] border border-grey-400 bg-grey-200 max-w-[calc(100%-4px)]">
          <img src={avatar} className="w-8 h-8 rounded-[50%]" />
          <h1 className="overflow-hidden font-medium font-secondary text-grey-700 whitespace-nowrap text-ellipsis">
            {data.link}
          </h1>
        </div>
      </div>
      {dropMenu && (
        <div
          className="absolute flex items-center gap-6 px-4 py-2 bg-white border rounded-xl border-grey-500 top-11 right-3"
          onClick={DeleteAccount}
        >
          <h1 className="text-sm font-secondary font-grey-900">
            Delete Account
          </h1>
          <FontAwesomeIcon
            icon={faXmark}
            className="text-[#F97066] duration-200 text-2xl font-thin"
          />
        </div>
      )}
    </div>
  );
}

export default UserAccount;
