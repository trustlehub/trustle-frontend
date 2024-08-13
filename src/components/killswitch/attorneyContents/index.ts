import Instagram from "./instagram";
import Snapchat from "./snapchat";
import Twitter from "./twitter";
import Behance from "./behance";
import Codecademy from "./codecademy";
import Facebook from "./facebook";
import GitHub from "./github";
import Google from "./google";
import Last from "./last";
import OnlyFans from "./onlyFans";
import Pinterest from "./pinterest";
import PornHub from "./pornHub";
import Reddit from "./reddit";
import Spotify from "./spotify";
import Telegram from "./telegram";
import Tiktok from "./tiktok";
import Vimeo from "./vimeo";
import YouTube from "./youTube";
import DeviantArt from "./deviantArt";
import Linkedin from "./linkedin";
import Medium from "./medium";

export const Icons = {
  Instagram,
  Snapchat,
  Twitter,
  Behance,
  Codecademy,
  Facebook,
  GitHub,
  Google,
  Last,
  OnlyFans,
  Pinterest,
  PornHub,
  Reddit,
  Spotify,
  Telegram,
  Tiktok,
  Vimeo,
  YouTube,
  DeviantArt,
  Linkedin,
  Medium,
} as const;

export type IconNames = keyof typeof Icons;
