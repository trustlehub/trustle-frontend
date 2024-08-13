import { useAuth0 } from "@auth0/auth0-react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
import killswitch from "../../assets/mainLogo/killswitch.svg";
import { useState } from "react";
import AuthModal from "../authModal";

function Hero() {
  const { isAuthenticated } = useAuth0();
  const navigate = useNavigate();
  const [isAuthModal, setIsAuthModal] = useState<boolean>(false);

  const goKill = () => {
    if (!isAuthenticated) {
      setIsAuthModal(true);
      // const toastId = "fetched-nationalities";
      // const message = "You are not authorized.";
      // if (!isAuthenticated) {
      //   toast.error(message, {
      //     position: toast.POSITION.TOP_RIGHT,
      //     autoClose: 3000,
      //     hideProgressBar: false,
      //     closeOnClick: true,
      //     pauseOnHover: true,
      //     draggable: true,
      //     toastId,
      //     transition: Slide,
      //   });
      // }
    } else {
      navigate("kill");
    }
  };
  return (
    <div className="relative">
      <div className="max-w-[1512px] m-auto pt-24 max-md:pt-20">
        <div className="relative overflow-hidden flex max-lg:flex-col gap-4 max-lg:gap-12 px-20 max-md:px-4 py-24 max-md:py-16 before:absolute before:bg-[linear-gradient(246deg,#6199B1_-74.88%,rgba(255,255,255,0)_108.56%)] before:top-0 before:right-0 before:bottom-0 before:left-0 after:absolute after:w-[840px] after:h-[840px] after:border-[27px] after:bg-[#E5EEF2] after:border-[#87AFC054] after:rounded-full after:top-[404px] after:left-[-436px]">
          <div className="flex flex-col gap-6 relative z-10">
            <div className="flex max-md:justify-center">
              <div className="relative bg-gradient-to-tr from-white via-[#E2ECF1AB] to-white before:absolute before:content-[' '] before:top-[1px] before:right-[1px] before:bottom-[1px] before:left-[1px] before:bg-white after:absolute after:content-[' '] after:top-[2px] after:right-[2px] after:bottom-[2px] after:left-[2px] after:bg-[linear-gradient(151deg,#FFF_4.05%,rgba(226,236,241,0.67)_57.4%,#FFF_124.57%)] px-[55px] py-4">
                <h1 className="relative z-10 font-primary font-medium text-[#062846]">
                  Welcome to our beta launch!
                </h1>
              </div>
            </div>
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <h1 className="text-transparent bg-clip-text bg-gradient-to-b from-[#1D2939] to-[#1D2939AB] font-primary font-medium text-[56px] max-xl:text-[36px] max-md:text-[28px] leading-[72px] max-xl:leading-[60px] max-lg:leading-[40px] max-md:leading-[34px]">
                  Tired of the internet holding on to your past?
                </h1>
                <h1 className="font-secondary text-grey-700 pr-32 max-xl:pr-10 max-md:pr-0">
                  Killswitch gives you the power to shape your digital self,
                  removing what no longer represents you. Say goodbye to old
                  posts, unwanted data, and hello to a fresh start.
                </h1>
              </div>
              <div className="flex gap-3 max-sm:flex-col">
                <div
                  className="px-8 py-4 flex gap-0 hover:gap-2 rounded-lg bg-gradient-to-r from-[#1B253C] to-[#101828] items-center justify-center cursor-pointer border border-[#475467] duration-300 hover:shadow-[0_0_0_0_rgba(21,30,48,0.10),0_3px_8px_0_rgba(21,30,48,0.10),0_14px_14px_0_rgba(21,30,48,0.09),0_31px_19px_0_rgba(21,30,48,0.05),0_55px_22px_0_rgba(21,30,48,0.01),0_87px_24px_0_rgba(21,30,48,0.0)] group"
                  onClick={goKill}
                >
                  <h1 className="text-sm text-white font-secondary whitespace-nowrap">
                    Access Killswitch
                  </h1>
                  <div className="max-w-0 duration-300 group-hover:max-w-[30px] flex items-center overflow-hidden">
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="text-white duration-200 opacity-0 group-hover:opacity-100"
                    />
                  </div>
                </div>
                <Link to="learnmore">
                  <div className="px-8 py-4 rounded-lg border border-grey-400 shadow-[0_1px_2px_0_#1018280D] bg-white text-grey-700 font-secondary font-semibold text-sm whitespace-nowrap flex justify-center cursor-pointer items-center hover:shadow-[0_0_0_0_rgba(21,30,48,0.10),0_3px_8px_0_rgba(21,30,48,0.10),0_14px_14px_0_rgba(21,30,48,0.09),0_31px_19px_0_rgba(21,30,48,0.05),0_55px_22px_0_rgba(21,30,48,0.01),0_87px_24px_0_rgba(21,30,48,0.0)] duration-500">
                    Learn more
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <img
            src={killswitch}
            alt=""
            className="z-10 cursor-none min-w-[645px] max-2xl:min-w-[460px] max-xl:min-w-[400px] max-md:min-w-[280px]"
          />
        </div>
      </div>
      {isAuthModal && <AuthModal setIsAuthModal={setIsAuthModal} />}
    </div>
  );
}

export default Hero;
