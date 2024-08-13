import { useAuth0 } from "@auth0/auth0-react";
import { faCookieBite } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Cookies from "js-cookie";
import { useState, useRef, MouseEvent, useEffect } from "react";

function Cookie() {
  const [openModal, setOpenModal] = useState<boolean>(true);
  const mainRef = useRef<HTMLDivElement>(null);

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLDivElement) === mainRef.current) {
      // setOpenModal(false);
    }
  };

  const { isAuthenticated } = useAuth0();

  useEffect(() => {
    const cook = Cookies.get("trustle");
    if (cook) {
      setOpenModal(false);
    }
    // console.log("cook---", cook);
    // let cookie = "";
    // for (const i of document.cookie.split(";")) {
    //   // console.log(i);
    //   // console.log("i", i.split(".")[0]);
    //   if (i.split(".")[0] === " auth0") {
    //     cookie += i + "; expires=0";
    //   } else {
    //     cookie += i + ";";
    //   }
    // }
    // // console.log("cookei", cookie);
    // document.cookie = cookie;
  }, [isAuthenticated]);

  const setCookie = () => {
    Cookies.set("trustle", "ok");
    setOpenModal(false);
  };

  return (
    <>
      {openModal && (
        <div
          className="fixed top-0 bottom-0 z-40 w-full"
          onClick={(e) => handleClick(e)}
        >
          <div
            className="absolute top-0 left-0 h-screen w-screen bg-[#00000066]"
            ref={mainRef}
          ></div>
          <div className="absolute px-20 max-md:px-10 max-sm:px-4 py-8 flex max-md:flex-col justify-between w-full bg-white bottom-0 items-center gap-8">
            <div className="flex flex-col gap-3">
              <h1 className="font-primary font-medium text-xl text-grey-900">
                Our website uses cookies
              </h1>
              <h1 className="font-secondary text-grey-700">
                Trustle uses cookies to enhance your browsing experience. By
                continuing to use this site, you consent to our use of cookies.
                Learn more in our Cookie Policy.
              </h1>
            </div>
            <div className="flex gap-4 max-md:flex-col max-md:w-full">
              <div
                className="rounded-lg px-6 py-3 shadow-[0_0_0_1px_inset_#EAECF0,0_1px_2px_0_#1018280D] cursor-pointer font-secondary font-semibold text-sm text-grey-700 text-center max-md:w-full"
                onClick={() => setOpenModal(false)}
              >
                Decline
              </div>
              <div
                className="cursor-pointer rounded-lg px-4 py-3 shadow-[0_0_0_1px_inset_#475467] bg-[linear-gradient(180deg,#1B253C_0%,#101828_100%)] font-secondary font-semibold text-sm text-white flex gap-2 whitespace-nowrap justify-center items-center"
                onClick={setCookie}
              >
                <span>Accept Cookies</span>
                <FontAwesomeIcon icon={faCookieBite} className="text-white" />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Cookie;
