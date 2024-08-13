import webLogo from "../assets/logo.svg";
import hamburger from "../assets/hamburger.svg";
import cancel from "../assets/cancel.svg";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import userIcon from "../assets/user.svg";
import SearchIcon from "../assets/mainLogo/search.svg";
import KillSwitch from "../assets/mainLogo/killswitch.svg";
import Uniment from "../assets/mainLogo/uniment.svg";
import TTthree from "../assets/mainLogo/2-3-con.svg";
import avatar from "../assets/icons/user.svg";
import { useAuth0 } from "@auth0/auth0-react";
import AuthModal from "./authModal";
import UserDropdown from "./dropDown/userDropdown";
import axios from "axios";
import {
  accountProperties,
  useAccountContext,
} from "../context/accountsContext";
import { useOrderContext } from "../context/orderContext";
import { useUserInfoContext } from "../context/userInfoContext";
import { loadStripe } from "@stripe/stripe-js";
import { useKillAccountContext } from "../context/killAccountContext";

interface accountServerStruct {
  links: string;
  platform: string;
  accuntType: number;
  status: number;
  username: string
  date: Date;
  orderNumber: string;
  cnt: number;
}

const data = [
  {
    img: SearchIcon,
    title: "Search",
    content: "Discover anyone's digital footprints",
    link: "/search",
    size: "w-[48px] h-[48px]",
    comming: false,
  },
  {
    img: KillSwitch,
    title: "Killswitch",
    content: "Manage your online identity with ease",
    link: "/killswitch",
    size: "w-[48px] h-[48px]",
    comming: false,
  },
  {
    img: TTthree,
    title: "2-to-3",
    content: "Seamlessly migrate data to a decentralized platform",
    link: "/2-to-3",
    size: "w-[48px] h-[48px]",
    comming: true,
  },
  {
    img: Uniment,
    title: "Uniment",
    content: "Foster secure and meaningful connections",
    link: "/uniment",
    size: "w-[32px] h-[32px]",
    comming: true,
  },
];

const Header = () => {
  const [isOpenHamburger, setIsOpenHamburger] = useState<boolean>(false);
  const [isProduct, setIsProduct] = useState<boolean>(false);
  const [isAuthModal, setIsAuthModal] = useState<boolean>(false);
  const [isUserDropdown, setIsUserDropdown] = useState<boolean>(false);
  const [isSearchPage, setIsSearchPage] = useState<boolean>(false);
  const { setAccounts } = useAccountContext();
  const { setOrders } = useOrderContext();
  const { setUserInfo } = useUserInfoContext();
  const { killAccounts, setKillAccounts } = useKillAccountContext();

  const { isAuthenticated, user } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    if (killAccounts.length > 0) {
      setKillAccounts([]);
    }
  }, []);

  useEffect(() => {
    const login = async () => {
      const pasword = "";
      const response = await axios.post(
        import.meta.env.VITE_BASE_URL + "/users/sign",
        {
          email: user?.email,
          name: user?.name,
          password: pasword,
          avatar: user?.picture,
          social: user?.sub?.split("|")[0],
        }
      );
      if (response.data.verify) {
        navigate(`verify?${response.data.url}`);
      }
      if (response.data.data && response.data.data.verify) {
        setUserInfo(response.data.data);
      }
    };
    const getUserData = async () => {
      const response = await axios.post(
        import.meta.env.VITE_BASE_URL + "/profile/",
        { email: user?.email }
      );
      const accountList: Array<accountProperties> = [];
      if (response.data.data) {
        response.data.data.socials.map(
          (item: accountServerStruct, index: number) => {
            accountList.push({
              id: index,
              type: item.platform,
              link: item.links,
              name: item.username,
              itemType: item.accuntType,
              status: item.status,
              date: item.date,
              orderNumber: item.orderNumber,
              cnt: item.cnt
            });
          }
        );
        setAccounts(accountList);
      }
    };
    const getOrderData = async () => {
      const response = await axios.post(
        import.meta.env.VITE_BASE_URL + "/history/",
        { email: user?.email }
      );
      setOrders(response.data.socials);
    };
    if (isAuthenticated) {
      login();
      getUserData();
      getOrderData();
    }
  }, [isAuthenticated]);

  const hamburgerModal = () => (
    <div className="z-[200] bg-[#00000066] w-full h-full min-h-screen absolute top-20">
      <div className="flex flex-col w-full gap-8 px-10 py-6 bg-white max-xm:px-4">
        <Link
          to="/about"
          className="font-medium duration-300 cursor-pointer font-primary text-grey-900 hover:text-primary"
        >
          About Trustle
        </Link>
        <div
          className={`flex flex-col duration-300 cursor-pointer hover:text-primary ${isProduct ? "gap-3" : "gap-0"
            }`}
          onClick={() => setIsProduct(!isProduct)}
        >
          <div className="flex items-center justify-between">
            <h1 className="font-primary font-medium leading-[22px] text-grey-900">
              Our Products
            </h1>
            <FontAwesomeIcon
              icon={faChevronDown}
              className={`text-grey-900 duration-300 ${isProduct ? "rotate-180" : "rotate-0"
                }`}
            />
          </div>
          <div
            className={`dropdown w-full bg-white pl-4 flex flex-col duration-300 overflow-hidden gap-4 ${isProduct ? "max-h-80" : "max-h-0"
              }`}
          >
            {data.map((val) => {
              return (
                <Link
                  to={val.link}
                  className="flex items-center gap-4 rounded-md hover:bg-[#fafafa] duration-300"
                >
                  <div className="flex items-center justify-center max-w-[48px] h-12 w-full">
                    <img src={val.img} alt="" className={val.size} />
                  </div>
                  <div className="flex flex-col justify-center">
                    <div className="flex gap-[10px]">
                      <h1 className="text-base font-primary font-medium leading-[24px] text-grey-900">
                        {val.title}
                      </h1>
                      {val.comming && (
                        <div className="bg-[#eee] rounded-full px-[6px] py-1 font-secondary font-medium text-xs text-grey-600">
                          Comming soon
                        </div>
                      )}
                    </div>
                    <h1 className="font-secondary text-xs leading-[15px] text-[#98A2B3]">
                      {val.content}
                    </h1>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
        <Link
          to="/faqs"
          className="font-medium duration-300 cursor-pointer font-primary text-grey-900 hover:text-primary"
        >
          FAQs
        </Link>
        <Link
          to="/dev"
          className="font-medium duration-300 cursor-pointer font-primary text-grey-900 hover:text-primary"
        >
          For Developers
        </Link>
        <Link
          to="/privacy"
          className="font-medium duration-300 cursor-pointer font-primary text-grey-900 hover:text-primary"
        >
          Privacy
        </Link>
        <Link
          to="/terms"
          className="font-medium duration-300 cursor-pointer font-primary text-grey-900 hover:text-primary"
        >
          Terms
        </Link>
        {!isAuthenticated ? (
          <div onClick={() => setIsAuthModal(true)}
            className="rounded-lg py-4 border border-[#475467] duration-500 bg-gradient-to-r from-[#1B253C] to-[#101828] flex items-center justify-center cursor-pointer hover:shadow-[0_0_0_0_rgba(21,30,48,0.10),0_3px_8px_0_rgba(21,30,48,0.10),0_14px_14px_0_rgba(21,30,48,0.09),0_31px_19px_0_rgba(21,30,48,0.05),0_55px_22px_0_rgba(21,30,48,0.01),0_87px_24px_0_rgba(21,30,48,0.0)] w-full group hover:gap-2">
            <h1 className="text-sm font-semibold text-white font-secondary whitespace-nowrap">
              Sign In
            </h1>
            <div className="w-0 duration-300 group-hover:w-[18px] flex items-center">
              <img
                src={userIcon}
                alt=""
                className="duration-200 opacity-0 group-hover:opacity-100"
              />
            </div>
          </div>) : ''
        }
      </div>
    </div>
  );

  const ProductDropdown = () => {
    return (
      <>
        <h1 className="text-primary font-secondary text-[14px]">Products</h1>
        {data.map((val, index) => {
          return (
            <Link
              to={val.link}
              className="flex items-center flex-row gap-4 px-2 py-3 mt-3 rounded-md hover:bg-[#fafafa]"
              key={index}
            >
              <div className="flex items-center justify-center max-w-[48px] h-12 w-full">
                <img src={val.img} alt="" className={val.size} />
              </div>
              <div className="flex flex-col justify-center">
                <div className="flex gap-[10px]">
                  <h1 className="text-base font-primary font-medium leading-[24px] text-grey-900">
                    {val.title}
                  </h1>
                  {val.comming && (
                    <div className="bg-[#eee] rounded-full px-[6px] py-1 font-secondary font-medium text-xs text-grey-600">
                      Comming soon
                    </div>
                  )}
                </div>
                <h1 className="font-secondary text-xs leading-[15px] text-[#98A2B3]">
                  {val.content}
                </h1>
              </div>
            </Link>
          );
        })}
      </>
    );
  };

  const createId = async () => {
    const stripePromise = await loadStripe(
      // "pk_test_51NmibcEilmghbyUQUunYswUOXvUaPokpsPcEZny3Ukb8bXYBBiTGZWoCsQ3w2WiIBUHKfenhFkCddgepotMJQg6E00NeaU7ND1"
      "pk_live_51NmibcEilmghbyUQfXLsWFOCvjsi6gFaktuQuCmXN0UBIlXa4KjyXcblbSJdozBTyb9FRyMyBbucZDESD52HmaZI00uLdGygYB"
    );
    console.log("stripePromise ", stripePromise);
    const respones = await axios.post(
      import.meta.env.VITE_BASE_URL + "/stripe/create-verification-session"
    );
    console.log("response", respones);
    if (stripePromise) {
      const verify = await stripePromise.verifyIdentity(respones.data);
      console.log("verify", verify);
    }
  };

  useEffect(() => {
    console.log("window.location.pathname", window.location.pathname);
    if (window.location.pathname.includes("/search")) {
      setIsSearchPage(true);
    }
  }, []);

  return (
    <div className="relative">
      <div className="shadow-header fixed z-[40] bg-white w-full">
        {isOpenHamburger && hamburgerModal()}
        <div className="max-w-[1512px] m-auto w-screen">
          {/* <div className="cursor-pointer " onClick={createId}>
            Connect stripe
          </div> */}
          <div className="px-20 max-lg:px-10 max-sm:px-4 py-[22px] max-lg:py-[14px] grid grid-cols-2 items-center">
            <Link to="/" className="relative">
              <img
                src={webLogo}
                alt="webLogo"
                className="cursor-pointer justify-self-start"
              />
              <h1 className="font-primary font-bold text-grey-900 text-xs absolute bottom-0 left-[123px]">
                beta
              </h1>
            </Link>
            <div className="justify-self-end justify-center items-center flex gap-7 font-primary font-medium leading-[22px] text-gray-900 max-md:hidden">
              {isSearchPage && (
                <Link to="/plan">
                  <h1 className="duration-300 cursor-pointer text-[#C71BE3] hover:text-primary">
                    Upgrade
                  </h1>
                </Link>
              )}
              <Link to="/about">
                <h1 className="duration-300 cursor-pointer hover:text-primary">
                  About Trustle
                </h1>
              </Link>
              <div className="relative flex items-center gap-2 duration-300 cursor-pointer group hover:text-primary py-[10px]">
                <h1 className="">Our Products</h1>
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className="duration-300 group-hover:rotate-180"
                />
                <div className="w-[393px] bg-white px-4 py-0 group-hover:py-4 absolute group-hover:border duration-500 border-red top-[30px] right-[-10px] rounded-[12px] max-h-0 overflow-hidden z-[-2] group-hover:z-20 group-hover:max-h-screen mt-2 group-hover:text-black shadow-[0_12px_28px_-4px_#47546729]">
                  <ProductDropdown />
                </div>
              </div>
              {!isAuthenticated ? (
                <div
                  onClick={() => setIsAuthModal(true)}
                  className="px-4 py-3 rounded-lg border border-[#475467] duration-500 bg-gradient-to-r from-[#1B253C] to-[#101828] flex items-center justify-center cursor-pointer hover:shadow-[0_0_0_0_rgba(21,30,48,0.10),0_3px_8px_0_rgba(21,30,48,0.10),0_14px_14px_0_rgba(21,30,48,0.09),0_31px_19px_0_rgba(21,30,48,0.05),0_55px_22px_0_rgba(21,30,48,0.01),0_87px_24px_0_rgba(21,30,48,0.0)] group hover:gap-2"
                >
                  <h1 className="text-sm font-semibold text-white font-secondary whitespace-nowrap">
                    Sign In
                  </h1>
                  <div className="w-0 duration-300 group-hover:w-[18px] h-[18px] flex items-center">
                    <img
                      src={userIcon}
                      alt=""
                      className="text-white duration-200 opacity-0 group-hover:opacity-100"
                    />
                  </div>
                </div>
              ) : (
                <div className="relative">
                  <img
                    src={avatar}
                    onMouseOver={() => setIsUserDropdown(!isUserDropdown)}
                    onMouseLeave={() => setIsUserDropdown(!isUserDropdown)}
                    // onClick={() => setIsUserDropdown(!isUserDropdown)}
                    className="duration-200 cursor-pointer"
                  />
                  <div
                    className={`${isUserDropdown ? "max-h-screen" : "max-h-0"
                      } overflow-hidden absolute right-0 top-10 duration-100`}
                      onMouseLeave={() => setIsUserDropdown(!isUserDropdown)}
                  >
                    <UserDropdown />
                  </div>
                </div>
              )}
            </div>
            <img
              src={isOpenHamburger ? cancel : hamburger}
              alt=""
              className="flex items-center justify-center w-10 h-10 cursor-pointer md:hidden justify-self-end"
              onClick={() => setIsOpenHamburger(!isOpenHamburger)}
            />
          </div>
        </div>
      </div>
      {isAuthModal && <AuthModal setIsAuthModal={setIsAuthModal} />}
    </div>
  );
};

export default Header;
