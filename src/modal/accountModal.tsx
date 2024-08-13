/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import Select, { StylesConfig } from "react-select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState, ChangeEvent, useRef, MouseEvent, useEffect } from "react";
import snapchat from "../assets/icons/socials/snap.svg";
import behance from "../assets/icons/socials/behance.svg";
import codecademy from "../assets/icons/socials/codecademy.svg";
import deviant from "../assets/icons/socials/deviant.svg";
import facebook from "../assets/icons/socials/facebook.svg";
import github from "../assets/icons/socials/github.svg";
import google from "../assets/icons/socials/google.svg";
import instagram from "../assets/icons/socials/instagram.svg";
import last from "../assets/icons/socials/last.svg";
import medium from "../assets/icons/socials/medium.svg";
import onlyfan from "../assets/icons/socials/onlyfan.svg";
import pornhub from "../assets/icons/socials/pornhub.svg";
import printerest from "../assets/icons/socials/printerest.svg";
import reddit from "../assets/icons/socials/reddit.svg";
import telegram from "../assets/icons/socials/telegram.svg";
import spotify from "../assets/icons/socials/spotify.svg";
import tiktok from "../assets/icons/socials/tiktok.svg";
import linkedin from "../assets/icons/socials/linkedin.svg";
import x from "../assets/icons/socials/x.svg";
import youtube from "../assets/icons/socials/youtube.svg";
import vimeo from "../assets/icons/socials/vimeo.svg";
import { useAccountContext } from "../context/accountsContext";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import { Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export interface ColourOption {
  readonly value: string;
  readonly label: string;
  readonly icon: string;
  readonly type: number;
  readonly isFixed?: boolean;
  readonly isDisabled?: boolean;
}

export const colourOptions: readonly ColourOption[] = [
  {
    value: "Behance",
    label: "Behance",
    icon: behance,
    type: 0,
    defaultURL: "https://www.behance.net/",
  },
  {
    value: "Codecademy",
    label: "Codecademy",
    icon: codecademy,
    type: 1,
    defaultURL: "https://www.codecademy.com/",
  },
  {
    value: "DeviantArt",
    label: "DeviantArt",
    icon: deviant,
    type: 2,
    defaultURL: "https://www.deviantart.com/",
  },
  {
    value: "Facebook",
    label: "Facebook",
    icon: facebook,
    type: 0,
    defaultURL: "https://www.facebook.com/",
  },
  {
    value: "GitHub",
    label: "GitHub",
    icon: github,
    type: 0,
    defaultURL: "https://github.com/",
  },
  {
    value: "Google",
    label: "Google",
    icon: google,
    type: 0,
    defaultURL: "gmail",
  },
  {
    value: "Instagram",
    label: "Instagram",
    icon: instagram,
    type: 0,
    defaultURL: "https://www.instagram.com/",
  },
  {
    value: "Last",
    label: "Last.fm",
    icon: last,
    type: 0,
    defaultURL: "https://www.last.fm/user/",
  },
  {
    value: "Linkedin",
    label: "Linkedin",
    icon: linkedin,
    type: 0,
    defaultURL: "https://www.linkedin.com/in/",
  },
  {
    value: "Medium",
    label: "Medium",
    icon: medium,
    type: 0,
    defaultURL: "https://medium.com/@",
  },
  {
    value: "OnlyFans",
    label: "OnlyFans",
    icon: onlyfan,
    type: 0,
    defaultURL: "https://onlyfans.com/",
  },
  {
    value: "Pinterest",
    label: "Pinterest",
    icon: printerest,
    type: 0,
    defaultURL: "https://www.pinterest.com/",
  },
  {
    value: "PornHub",
    label: "PornHub",
    icon: pornhub,
    type: 0,
    defaultURL: "https://www.pornhub.com/users/",
  },
  {
    value: "Reddit",
    label: "Reddit",
    icon: reddit,
    type: 0,
    defaultURL: "https://www.reddit.com/user/",
  },
  {
    value: "Snapchat",
    label: "Snapchat",
    icon: snapchat,
    type: 0,
    defaultURL: "https://www.snapchat.com/add/",
  },
  {
    value: "Spotify",
    label: "Spotify",
    icon: spotify,
    type: 0,
    defaultURL: "https://open.spotify.com/user/",
  },
  {
    value: "Telegram",
    label: "Telegram",
    icon: telegram,
    type: 0,
    defaultURL: "https://t.me/",
  },
  {
    value: "Tiktok",
    label: "Tiktok",
    icon: tiktok,
    type: 0,
    defaultURL: "https://www.tiktok.com/@",
  },
  {
    value: "Twitter",
    label: "Twitter",
    icon: x,
    type: 0,
    defaultURL: "https://twitter.com/",
  },
  {
    value: "Vimeo",
    label: "Vimeo",
    icon: vimeo,
    type: 0,
    defaultURL: "https://vimeo.com/",
  },
  {
    value: "YouTube",
    label: "YouTube",
    icon: youtube,
    type: 0,
    defaultURL: "https://www.youtube.com/user/",
  },
];

const dot = (color = "transparent") => ({
  alignItems: "center",
  display: "flex",

  ":before": {
    backgroundImage: "url(" + color + ")",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    content: '" "',
    display: "block",
    marginRight: 8,
    height: 20,
    width: 20,
  },
});

const colourStyles: StylesConfig<ColourOption> = {
  control: (styles) => ({
    ...styles,
    backgroundColor: "white",
    borderColor: "#eaecf0",
    borderRadius: "8px",
    padding: "5px 12px",
    fontFamily: "Plus Jakarta Sans",
    fontWeight: 400,
    fontSize: "14px",
    color: "#667085",
  }),
  option: (styles, { isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      backgroundColor: isDisabled
        ? undefined
        : isSelected
        ? "#d0d5dd"
        : isFocused
        ? "#f2f4f7"
        : undefined,
      color: isDisabled ? "#ccc" : isSelected ? "#344054" : "#98a2b3",
      cursor: isDisabled ? "not-allowed" : "default",

      ":active": {
        ...styles[":active"],
        backgroundColor: !isDisabled
          ? isSelected
            ? "#f2f4f7"
            : "#f2f4f7"
          : undefined,
      },
    };
  },
  singleValue: (styles, { data }) => ({ ...styles, ...dot(data.icon) }),
};

function AccountModal({
  modalType,
  setOpenModal,
}: {
  modalType: boolean;
  setOpenModal: (data: boolean) => void;
}) {
  const { accounts, setAccounts } = useAccountContext();
  const [selectedValue, setSelectedValue] = useState<string>("Behance");
  const [defaultValue, setDefaultValue] = useState<string>(
    "https://www.behance.net/"
  );
  const [itemType, setItemType] = useState<number>(0);
  const mainRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const { user } = useAuth0();

  useEffect(() => {
    inputRef.current.defaultValue = "https://www.behance.net/";
  }, []);

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(e.value);
    const selectedDefault = colourOptions.find((obj) => obj.value == e.value);
    setDefaultValue(selectedDefault?.defaultURL);
    setItemType(selectedDefault?.type);
    const selectedDefaultURL = selectedDefault
      ? selectedDefault.defaultURL
      : null;
    inputRef.current.value = selectedDefaultURL;
  };

  const addAccount = async () => {
    if (
      inputRef.current?.value.indexOf(defaultValue) === -1 ||
      inputRef.current?.value === defaultValue
    ) {
      const toastId = "fetched-nationalities";
      const message =
        "The format you entered is incorrect. Take the correct format.";
      toast.error(message, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        toastId,
        transition: Slide,
      });
      return;
    }
    const response = await axios.post(
      (import.meta.env.VITE_BASE_URL as string) + "/profile/add",
      {
        email: user?.email,
        platform: selectedValue,
        link: inputRef.current.value,
        type: itemType,
      }
    );
    if (response.status === 200) {
      const number = accounts.length + 1;
      setAccounts([
        ...accounts,
        {
          id: number,
          type: selectedValue,
          username: "username",
          link: inputRef.current.value,
          status: 0,
          itemType: itemType,
        },
      ]);
      setOpenModal(false);
    }
  };

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLDivElement) === mainRef.current) {
      setOpenModal(false);
    }
  };

  const keyFunction = (e) => {
    if (e.code === "Enter" || e.code === "NumpadEnter") {
      addAccount();
    }
  };

  const confirmUrl = () => {
    if (inputRef.current) {
      if (!inputRef.current.value.includes(defaultValue)) {
        const list = inputRef.current.value.split("/");
        const name = list[list.length - 1];
        inputRef.current.value = defaultValue + name;
      }
    }
  };

  return (
    <div className="fixed top-0 z-50" onClick={(e) => handleClick(e)}>
      <div className="toast-container">
        <ToastContainer limit={2} />
      </div>
      <div
        className="absolute top-0 left-0 h-screen w-screen bg-[#00000066]"
        ref={mainRef}
      />
      <div className="rounded-xl px-6 py-[30px] bg-white fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[372px] w-[652px] flex flex-col gap-8 justify-center">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-medium font-primary text-grey-900">
            {modalType ? "Add account" : "Search account"}
          </h1>
          <div
            className="flex items-center justify-center w-8 h-8 cursor-pointer"
            onClick={() => setOpenModal(false)}
          >
            <FontAwesomeIcon
              icon={faXmark}
              className="text-lg duration-200 text-grey-700"
            />
          </div>
        </div>
        <div className="flex flex-col w-full gap-6">
          <div className="flex flex-col gap-2">
            <h1 className="text-sm font-medium font-secondary text-grey-70">
              Select platform
            </h1>
            <Select
              defaultValue={colourOptions[0]}
              options={colourOptions}
              styles={colourStyles}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-sm font-medium font-secondary text-grey-70">
              Username
            </h1>
            <input
              ref={inputRef}
              type="text"
              className="rounded-lg p-3 font-secondary text-sm text-grey-600 shadow-[0_0_0_1px_inset_#eaecf0] focus:outline-none"
              placeholder="Account name or username"
              onChange={confirmUrl}
              onKeyDown={(e) => keyFunction(e)}
            />
          </div>
        </div>
        <div className="flex">
          <div
            className="rounded-lg bg-[linear-gradient(180deg,#1B253C_0%,#101828_100%)] border border-[#475467] px-4 py-3 font-secondary font-semibold text-sm text-white cursor-pointer"
            onClick={addAccount}
          >
            Add account
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountModal;
