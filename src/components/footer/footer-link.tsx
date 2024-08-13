import {
  faAngellist,
  faFacebook,
  faGithub,
  faLinkedin,
  faReddit,
  faSquareInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import searchLogo from "../../assets/mainLogo/search.svg";
import twoLogo from "../../assets/mainLogo/2-3-con.svg";
import unimentLogo from "../../assets/mainLogo/uni_footer.svg";
import killLogo from "../../assets/mainLogo/killswitch.svg";
import mainLogo from "../../assets/mainLogo/logo.svg";
import trustle from "../../assets/mainLogo/trustle.svg";

function FooterLink() {
  const [logoUrl, setLogoUrl] = useState<string>("");
  const [logoTitle, setLogoTitle] = useState<string>("");
  const [footerColor, setFooterColor] = useState<string>("");
  const [logoBg, setLogoBg] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [isMain, setIsMain] = useState<boolean>(false);
  const { pathname } = useLocation();
  const currentPage = window.location.href;
  const [isKillSwitch, setIsKillSwitch] = useState(false);
  const [isUniment, setIsUniment] = useState(false);

  useEffect(() => {
    if (window.location.pathname.includes("/search")) {
      setLogoUrl(searchLogo);
      setLogoTitle("Find anyone, anywhere!");
      setLogoBg("bg-[#BA74FF21]");
      setTitle("Search");
      setFooterColor("text-[#D4A3EE]");
    } else if (window.location.pathname.includes("/2-to-3")) {
      setLogoUrl(twoLogo);
      setLogoTitle("Bridging the gap between web2 and web3!");
      setLogoBg("bg-[#9affc720]");
      setTitle("2-TO-3");
      setFooterColor("text-[#A4CA5E]");
    } else if (window.location.pathname.includes("/uniment")) {
      setLogoUrl(unimentLogo);
      setLogoTitle("Celebrate authentic connections!");
      setLogoBg("bg-translate");
      setTitle("Uniment");
      setFooterColor("text-[#A8C1FF]");
    } else if (window.location.pathname.includes("/killswitch")) {
      setLogoUrl(killLogo);
      setLogoTitle("Reclaim your online presence!");
      setLogoBg("bg-[#F0F3F7]");
      setTitle("Killswitch");
      setFooterColor("text-[#ECF5F9]");
    } else {
      setLogoUrl(mainLogo);
      setLogoTitle("Building the sovereign individual!");
      setLogoBg("bg-[linear-gradient(271deg,#EBE8F4_-14.65%,#E9F4EB_114.17%)]");
      setIsMain(true);
      setTitle(trustle);
      setFooterColor("text-[#BCECB0]");
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    if (currentPage.indexOf('killswitch') > -1) {
      setIsKillSwitch(true);
    }
    if (currentPage.indexOf('uniment') > -1) {
      setIsUniment(true)
    }
  }, [])

  return (
    <div className="max-w-[1512px] m-auto w-full">
      <div className="pt-28 max-md:pt-12 pb-[50px] px-20 max-md:px-10 max-xm:px-4 flex flex-col gap-16 relative overflow-hidden">
        <div className="z-10 flex justify-between max-sm:flex-col max-sm:gap-8">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div
                className={`w-10 h-10 rounded-[50%] flex items-center cursor-pointer justify-center ${logoBg}`}
              >
                {logoUrl && <img src={logoUrl} alt="" className="w-8 h-8" />}
              </div>
              {isMain ? (
                <img src={title} alt="" />
              ) : (
                <h1 className="text-2xl font-bold text-white font-primary">
                  {title}
                </h1>
              )}
            </div>
            <div className="grid grid-rows-2 gap-2">
              <h1 className="font-secondary text-grey-200">{logoTitle}</h1>
              {/* <h1 className="font-primary font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#7CCA68] to-[#62CA9E]">
                By Trustle
              </h1> */}
            </div>
          </div>
          <div className="grid gap-24 grid-cols-[repeat(3,auto)] max-sm:grid-cols-[repeat(2,auto)] max-lg:gap-12 footer-links">
            <div className="flex flex-col gap-4 home">
              <h1 className="text-lg font-medium leading-5 select-none font-primary text-grey-200 cursur-pointer">
                Home
              </h1>
              <div className="flex flex-col gap-3">
                <Link
                  to="/"
                  className="font-secondary text-[#FFFFFFB0] cursor-pointer duration-300 hover:text-primary"
                >
                  Overview
                </Link>
                <Link
                  to="/about"
                  className="font-secondary text-[#FFFFFFB0] cursor-pointer duration-300 hover:text-primary"
                >
                  About us
                </Link>
                <Link
                  to='/faqs'
                  className="font-secondary text-[#FFFFFFB0] cursor-pointer duration-300 hover:text-primary"
                >
                  FAQs
                </Link>
                <Link
                  to="/dev"
                  className="font-secondary text-[#FFFFFFB0] cursor-pointer duration-300 hover:text-primary"
                >
                  For Developers
                </Link>
                <Link
                  to="/"
                  className="font-secondary text-[#FFFFFFB0] cursor-pointer duration-300 hover:text-primary"
                >
                  Blog
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-4 product">
              <h1 className="text-lg font-medium leading-5 select-none font-primary text-grey-200 cursur-pointer">
                Products
              </h1>
              <div className="flex flex-col gap-3">
                <Link
                  to="/search"
                  className="font-secondary text-[#FFFFFFB0] cursor-pointer duration-300 hover:text-primary"
                >
                  Search
                </Link>
                <Link
                  to="/killswitch"
                  className="font-secondary text-[#FFFFFFB0] cursor-pointer duration-300 hover:text-primary"
                >
                  Killswitch
                </Link>
                <Link
                  to="/2-to-3"
                  className="font-secondary text-[#FFFFFFB0] cursor-pointer duration-300 hover:text-primary"
                >
                  2-to-3
                </Link>
                <Link
                  to="/uniment"
                  className="font-secondary text-[#FFFFFFB0] cursor-pointer duration-300 hover:text-primary"
                >
                  Uniment
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-4 legal">
              <h1 className="text-lg font-medium leading-5 select-none font-primary text-grey-200 cursur-pointer">
                Legal
              </h1>
              <div className="flex flex-col gap-3">
                <Link
                  to='/terms'
                  className="font-secondary text-[#FFFFFFB0] cursor-pointer duration-300 hover:text-primary"
                >
                  Terms
                </Link>
                <Link
                  to="/privacy"
                  className="font-secondary text-[#FFFFFFB0] cursor-pointer duration-300 hover:text-primary"
                >
                  Privacy
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-8 shadow-[0_2px_0_-1px_inset_#BCECB030] grid grid-cols-[repeat(2,auto)] justify-between max-md:grid-cols-1 max-md:gap-8 z-10">
          <h1 className={`text-secondary text-[#98A2B3]`}>
            © 2023, made with 💚 by{" "}
            <span className="font-semibold text-transparent bg-clip-text bg-[linear-gradient(90.48deg,#7CCA68_41.69%,#62CA9E_80.68%)]">
              Trustle.
            </span>
          </h1>
          <div className="flex">
            <div className="grid gap-6 grid-cols-[repeat(7,auto)] max-md:grid-cols-[repeat(5,auto)]">
              <Link to="https://www.reddit.com/r/trustle">
                <FontAwesomeIcon
                  icon={faReddit}
                  className={`text-[24px] ${footerColor} cursor-pointer`}
                />
              </Link>
              <Link to="https://twitter.com/Trustle999">
                <FontAwesomeIcon
                  icon={faXTwitter}
                  className={`text-[24px] ${footerColor} cursor-pointer`}
                />
              </Link>
              <Link to="https://www.linkedin.com/company/trustle-beta/">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className={`text-[24px] ${footerColor} cursor-pointer`}
                />
              </Link>
              <Link to="https://web.facebook.com/profile.php?id=61550843695241">
                <FontAwesomeIcon
                  icon={faFacebook}
                  className={`text-[24px] ${footerColor} cursor-pointer`}
                />
              </Link>
              <Link to="https://instagram.com/trustle.life">
                <FontAwesomeIcon
                  icon={faSquareInstagram}
                  className={`text-[24px] ${footerColor} cursor-pointer`}
                />
              </Link>
              <Link to="https://wellfound.com/company/trustle-9">
                <FontAwesomeIcon
                  icon={faAngellist}
                  className={`text-[24px] ${footerColor} cursor-pointer`}
                />
              </Link>
              <Link to="https://github.com/trustlelabs">
                <FontAwesomeIcon
                  icon={faGithub}
                  className={`text-[24px] ${footerColor} cursor-pointer`}
                />
              </Link>
            </div>
          </div>
        </div>
        {/* <div className="w-[876.34px] h-[884.98px] bg-[#91E27C38] rounded-full absolute top-[300px] left-1/2 -translate-x-1/2 rotate-45 blur-[93px] z-[1]"></div> */}
      </div>
    </div>
  );
}

export default FooterLink;
