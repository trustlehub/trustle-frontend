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

function CardImg({ type }: { type: string }) {
  const [iconImg, setIconImg] = useState<string>("");

  useEffect(() => {
    switch (type) {
      case "Twitter":
        setIconImg(x);
        return;
      case "Instagram":
        setIconImg(instagram);
        return;
      case "Snapchat":
        setIconImg(snapchat);
        return;
      case "Facebook":
        setIconImg(facebook);
        return;
      case "Reddit":
        setIconImg(reddit);
        return;
      case "Pinterest":
        setIconImg(printerest);
        return;
      case "Last":
        setIconImg(last);
        return;
      case "YouTube":
        setIconImg(youtube);
        return;
      case "Vimeo":
        setIconImg(vimeo);
        return;
      case "Codecademy":
        setIconImg(codecademy);
        return;
      case "GitHub":
        setIconImg(github);
        return;
      case "OnlyFans":
        setIconImg(onlyfan);
        return;
      case "Medium":
        setIconImg(medium);
        return;
      case "Behance":
        setIconImg(behance);
        return;
      case "Google":
        setIconImg(google);
        return;
      case "DeviantArt":
        setIconImg(deviant);
        return;
      case "PornHub":
        setIconImg(pornhub);
        return;
      case "Linkedin":
        setIconImg(linkedin);
        return;
      case "Telegram":
        setIconImg(telegram);
        return;
      case "Spotify":
        setIconImg(spotify);
        return;
      default:
        setIconImg(tiktok);
        return;
    }
  }, [type]);

  return <img src={iconImg} alt="" />;
}

export default CardImg;
