import { useRef, useState, MouseEvent } from "react";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import title from "../../assets/mainLogo/black_logo_title.svg";
import SignIn from "./signIn";
import SignUp from "./signUp";

function AuthModal({
  setIsAuthModal,
}: {
  setIsAuthModal: (type: boolean) => void;
}) {
  const [signType, setSignType] = useState<boolean>(true);
  const mainRef = useRef<HTMLDivElement>(null);

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLDivElement) === mainRef.current) {
      setIsAuthModal(false);
    }
  };

  return (
    <div className="fixed z-50 top-0" onClick={(e) => handleClick(e)}>
      <div
        className="absolute top-0 left-0 h-screen w-screen bg-[#00000066]"
        ref={mainRef}
      />
      <div className="flex flex-col gap-3 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-transparent">
        <div className="flex justify-end" onClick={() => setIsAuthModal(false)}>
          <div className="p-2 rounded-lg w-11 h-11 flex items-center justify-center cursor-pointer bg-white justify-self-end duration-300 hover:shadow-[0_0_0_0_rgba(21,30,48,0.10),0_3px_8px_0_rgba(21,30,48,0.10),0_14px_14px_0_rgba(21,30,48,0.09),0_31px_19px_0_rgba(21,30,48,0.05),0_55px_22px_0_rgba(21,30,48,0.01),0_87px_24px_0_rgba(21,30,48,0.0)]">
            <FontAwesomeIcon icon={faXmark} className="text-grey-900 text-lg" />
          </div>
        </div>
        <div className="rounded-xl bg-white flex overflow-hidden relative before:absolute before:bg-[url(../src/assets/landing/intro_banner.webp)] before:top-0 before:right-0 before:bottom-0 before:left-0 before:opacity-10 before:bg-cover">
          <div className="relative bg-white flex items-center justify-center min-w-[296px] before:absolute before:bg-[linear-gradient(157.13deg,#F3F3F3_37.2%,rgba(243,243,243,0)_141.77%)] before:rounded-full before:w-60 before:h-60 before:top-0 before:left-0 before:-translate-x-1/2 before:-translate-y-1/2 after:absolute after:bg-[#F5F5F5] after:rounded-full after:w-60 after:h-60 after:-bottom-20 after:-right-32 overflow-hidden">
            <div className="rounded-full bg-[linear-gradient(270.96deg,#EBE8F4_-14.65%,#E9F4EB_114.17%)] relative before:absolute before:bg-[linear-gradient(247.88deg,#EEEEEE_5.7%,rgba(238,238,238,0)_89.39%)] before:rounded-full before:w-60 before:h-60 before:-bottom-80 before:z-40 before:-right-16 after:absolute after:top-7 after:left-14 after:right-14 after:bottom-7 after:bg-[url(../src/assets/mainLogo/logo.svg)] after:bg-cover h-[162px] w-[162px]" />
            <img src={title} alt="" className="absolute top-8 left-6" />
          </div>
          {signType ? (
            <SignIn setSignType={setSignType} />
          ) : (
            <SignUp setSignType={setSignType} />
          )}
        </div>
      </div>
    </div>
  );
}

export default AuthModal;
