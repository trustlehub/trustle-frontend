import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import searchIcon from "../../assets/icons/search.svg";
import searchIcon_white from "../../assets/icons/search_white.svg";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth0 } from "@auth0/auth0-react";
import SearchContinueModal from "../../modal/searchContinueModal";
import TermModal from "../../modal/termModal";
import axios from "axios";
import { PiShoppingCartFill } from "react-icons/pi";
import { useUserInfoContext } from "../../context/userInfoContext";
import AuthModal from "../authModal";

function Hero({ setUserName }: { setUserName: (name: string) => void }) {
  const [isAdvanced, setIsAdvanced] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [isUpgrade, setIsUpgrade] = useState<boolean>(false);
  const [isAccept, setIsAccept] = useState<boolean>(false);
  const [isAuthModal, setIsAuthModal] = useState<boolean>(false);

  const { userInfo, setUserInfo } = useUserInfoContext();
  const navigate = useNavigate();

  const { isAuthenticated, user } = useAuth0();

  useEffect(() => {
    if (isAuthenticated && !isUpgrade) {
      setOpenModal(true);
    }
  }, [isAuthenticated]);

  useEffect(() => {
    if (isAuthenticated && isUpgrade) {
      setOpenModal(false);
    }
  }, [isUpgrade]);

  useEffect(() => {
    setIsAccept(userInfo.accept);
  }, [userInfo]);

  const getName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  const handleKeydown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      goSearch();
    }
  };

  const goSearch = async () => {
    if (!isAuthenticated) {
      setIsAuthModal(true);
    } else {
      const response = await axios.post(
        import.meta.env.VITE_BASE_URL + "/search/search",
        {
          email: user?.email,
        }
      );
      if (response.status === 200) {
        setUserInfo(response.data);
        navigate("progress");
      }
    }
  };

  return (
    <div className="relative">
      <div className="max-w-[1512px] m-auto pt-20">
        <div className="toast-container">
          <ToastContainer limit={2} />
        </div>
        <div className="bg-white w-full rounded-b-[60px] shadow-[0_0_0_1px_inset_#EAECF0] py-28 max-md:py-12 px-[280px] max-xl:px-20 max-md:px-4 flex flex-col items-center max-xm:pb-[32px] relative after:absolute after:content-[' '] after:rounded-b-[60px] after:w-full after:h-full after:bg-[url(../src/assets/search/banner.webp)] after:top-0 after:left-0 after:opacity-[0.18] after:z-[2] after:bg-[center_bottom] after:bg-no-repeat after:bg-cover">
          <div className="flex flex-col items-center gap-6">
            <div className="border px-7 py-4 search-beta relative after:absolute after:bg-[linear-gradient(180deg,rgba(199,27,227,0.18)_0%,rgba(104,31,225,0.12)_100%)] after:border after:border-white after:top-0 after:left-0 after:bottom-0 after:right-0">
              <h1 className="bg-gradient-to-r from-[#C71BE3] to-[#681FE1] text-transparent bg-clip-text font-primary font-medium relative z-10 leading-3">
                Welcome to our beta launch!
              </h1>
            </div>
            <div className="relative z-20 flex flex-col gap-4">
              <h1 className="font-primary font-medium text-[56px] max-lg:text-[44px] max-md:text-[32px] leading-[56px] max-lg:leading-[44px] text-transparent bg-clip-text bg-gradient-to-b from-[#C71BE382] to-[#681FE157] text-center">
                <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#1D2939] to-[#1D2939AB]">
                  Find Anyone, Anywhere!
                </span>
              </h1>
              <h1 className="font-secondary text-grey-700 px-[220px] max-2xl:px-40 max-lg:px-24 max-md:px-0 text-center max-md:text-sm">
                Uncover anyone’s all social media profiles and online presence
                in one place - Using only relevant keywords.
              </h1>
            </div>
          </div>
          <div className="flex gap-2 max-md:flex-col mt-10 mb-[50px] w-full justify-center relative z-20">
            <div className="rounded-lg shadow-[0_0_0_1px_inset_#F2F4F7] bg-white px-3 flex gap-2 items-center max-w-[624px] max-md:max-w-[calc(100vw-32px)] w-full max-xm:flex-col max-xm:py-3 relative z-20">
              <div className="flex w-full gap-2">
                <img src={searchIcon} alt="" />
                <input
                  type="text"
                  placeholder="Start your search"
                  className="w-full py-5 text-sm font-secondary text-grey-800 focus:outline-none"
                  onChange={getName}
                  onKeyDown={handleKeydown}
                />
              </div>
              <div className="flex gap-2 max-xm:w-full">
                <div className="w-full" onClick={goSearch}>
                  <div className="px-4 py-3 rounded-lg border border-[#475467] duration-500 bg-gradient-to-r from-[#1B253C] to-[#101828] flex items-center justify-center cursor-pointer hover:shadow-[0_0_0_0_rgba(21,30,48,0.10),0_3px_8px_0_rgba(21,30,48,0.10),0_14px_14px_0_rgba(21,30,48,0.09),0_31px_19px_0_rgba(21,30,48,0.05),0_55px_22px_0_rgba(21,30,48,0.01),0_87px_24px_0_rgba(21,30,48,0.0)] group hover:gap-2">
                    <h1 className="text-sm font-semibold text-white font-secondary">
                      Search
                    </h1>
                    <div className="w-0 duration-300 group-hover:w-[18px] flex items-center">
                      <img
                        src={searchIcon_white}
                        alt=""
                        className="duration-200 opacity-0 group-hover:opacity-100"
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="p-[10px] rounded-lg shadow-[0_0_0_1px_inset_#EAECF0] flex items-center justify-center cursor-pointer h-[44px] min-w-[44px]"
                  onClick={() => setIsAdvanced(!isAdvanced)}
                >
                  <FontAwesomeIcon
                    icon={faPlus}
                    className={`text-[14px] text-grey-700 duration-300 ${
                      isAdvanced ? "rotate-45" : ""
                    }`}
                  />
                </div>
              </div>
              <div
                className={`rounded-xl px-4 py-5 w-[624px] max-md:w-full h-[340px] grid grid-rows-[1fr_auto] gap-8 bg-white absolute left-1/2 -translate-x-1/2 top-[70px] max-xm:top-[144px] shadow-[0_12px_28px_-4px_#47546729] z-[50] duration-500 overflow-hidden ${
                  isAdvanced ? "opacity-100 max-h-96" : "opacity-0 max-h-0"
                }`}
              >
                <div className="grid grid-rows-[auto_auto_1fr] gap-4">
                  <h1 className="font-secondary font-semibold text-lg leading-[25px] text-grey-700">
                    Advanced Search
                  </h1>
                  <div className="w-full h-[2px] shadow-[0_0_0_1px_inset_#EAECF0]"></div>
                  <div className="grid grid-rows-2 gap-4">
                    <label
                      htmlFor=""
                      className="flex flex-col gap-2 text-sm font-medium font-secondary text-grey-700 "
                    >
                      Full name
                      <input
                        type="text"
                        name=""
                        id=""
                        placeholder="Enter full name"
                        className="px-3 py-[13px] font-secondary text-sm text-grey-600 rounded-xl bg-grey-200 shadow-[0_0_0_1px_inset_#EAECF0] font-normal focus:outline-none focus:shadow-[0_0_0_2px_inset_#7CCA68] duration-300"
                      />
                    </label>
                    <label
                      htmlFor=""
                      className="flex flex-col gap-2 text-sm font-medium font-secondary text-grey-700 "
                    >
                      Favourite string
                      <input
                        type="text"
                        name=""
                        id=""
                        placeholder="Enter favourite string"
                        className="px-3 py-[13px] font-secondary text-sm text-grey-600 rounded-xl bg-grey-200 shadow-[0_0_0_1px_inset_#EAECF0] font-normal focus:outline-none focus:shadow-[0_0_0_2px_inset_#7CCA68] duration-300"
                      />
                    </label>
                  </div>
                </div>
                <div className="grid grid-cols-[repeat(2,auto)] justify-self-start gap-3">
                  <div className="px-4 py-3 rounded-lg border border-[#475467] duration-500 bg-gradient-to-r from-[#1B253C] to-[#101828] flex items-center justify-center cursor-pointer hover:shadow-[0_0_0_0_rgba(21,30,48,0.10),0_3px_8px_0_rgba(21,30,48,0.10),0_14px_14px_0_rgba(21,30,48,0.09),0_31px_19px_0_rgba(21,30,48,0.05),0_55px_22px_0_rgba(21,30,48,0.01),0_87px_24px_0_rgba(21,30,48,0.0)] group hover:gap-2">
                    <h1 className="text-sm font-semibold text-white font-secondary">
                      Search now
                    </h1>
                    <div className="w-0 duration-300 group-hover:w-[18px] flex items-center">
                      <img
                        src={searchIcon_white}
                        alt=""
                        className="duration-200 opacity-0 group-hover:opacity-100"
                      />
                    </div>
                  </div>
                  <div
                    className="rounded-lg bg-white px-4 py-3 text-grey-700 font-secondary font-semibold text-sm shadow-[0_0_0_1px_inset_#667085] cursor-pointer"
                    onClick={() => setIsAdvanced(false)}
                  >
                    Cancel
                  </div>
                </div>
              </div>
            </div>
            {
              isAuthenticated && (
              <div className="rounded-lg px-2 py-3 grid items-center justify-center max-md:flex place-items-center gap-2 bg-[#FFFFFFA4] shadow-[0_0_0_1px_inset_#f2f4f7] relative z-20 group w-[92px] h-[61px] cursor-pointer" onClick = {() => {navigate('/plan')}}>
                <div className="group-hover:hidden">
                  <h1 className="font-primary font-medium leading-5 text-transparent bg-clip-text bg-[linear-gradient(180deg,rgba(199,27,227,0.51)_0%,rgba(104,31,225,0.3417)_100%)] text-center self-end max-md:justify-self-start">
                    {userInfo.credit}
                  </h1>
                  <h1 className="font-secondary font-medium text-xs leading-[17px] text-transparent bg-clip-text bg-[linear-gradient(180deg,rgba(199,27,227,0.51)_0%,rgba(104,31,225,0.3417)_100%)] self-start text-center whitespace-nowrap max-md:order-[-1] max-md:justify-self-end">
                    Searches left
                  </h1>
                </div>
                <div className="hidden group-hover:flex">
                  <PiShoppingCartFill className="text-3xl text-[rgba(199,27,227,0.51)]" />
                </div>
              </div>
              )
            }
          </div>
        </div>
      </div>
      {openModal && !isAccept && (
        <SearchContinueModal
          setIsUpgrade={setIsUpgrade}
          setOpenModal={setOpenModal}
        />
      )}
      {isUpgrade && <TermModal setIsUpgrade={setIsUpgrade} />}
      {isAuthModal && <AuthModal setIsAuthModal={setIsAuthModal} />}
    </div>
  );
}

export default Hero;
