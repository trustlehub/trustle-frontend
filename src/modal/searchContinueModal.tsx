import { useNavigate } from "react-router-dom";
import { useUserInfoContext } from "../context/userInfoContext";

function SearchContinueModal({
  setIsUpgrade,
  setOpenModal,
}: {
  setIsUpgrade: (data: boolean) => void;
  setOpenModal: (data: boolean) => void;
}) {
  const { userInfo } = useUserInfoContext();
  const navigate = useNavigate();

  const upgrade = () => {
    navigate("/plan");
  };

  return (
    <div className="fixed top-0 z-50">
      <div className="absolute top-0 left-0 h-screen w-screen bg-[#00000066]" />
      <div className="rounded-xl bg-white fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[621px] max-md:w-[calc(100vw-32px)]">
        <div className="px-6 max-md:px-4 py-8 max-md:py-6 flex flex-col gap-5">
          <div className="flex gap-2 items-center">
            <h1 className="font-primary font-medium text-2xl max-md:text-xl leading-[30px] text-transparent bg-clip-text bg-[linear-gradient(180deg,#1D2939_0%,rgba(29,41,57,0.67)_100%)]">
              Welcome to Trustle Search!
            </h1>
            <h1 className="text-2xl">💖</h1>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="font-secondary text-grey-700">
              As a welcome gift, you have{" "}
              <span className="font-bold text-transparent bg-clip-text bg-[linear-gradient(180deg,rgba(199,27,227,0.51)_0%,rgba(104,31,225,0.3417)_100%)]">
                {userInfo.credit} free searches
              </span>{" "}
              to kickstart your journey toward online empowerment! It's on us,
              no strings attached.
            </h1>
            <h1 className="font-secondary text-grey-700">
              If you ever find yourself wanting more, we've got your back.
              Unlock unlimited searches and tap into even deeper insights by
              upgrading to one of our premium plans.
            </h1>
          </div>
        </div>
        <div className="w-full h-[1px] bg-grey-400" />
        <div className="flex max-md:flex-col gap-[10px] px-6 max-md:px-4 pt-4 pb-8 max-md:pb-6">
          <div
            className="rounded-lg px-3 py-4 bg-[linear-gradient(180deg,#1B253C_0%,#101828_100%)] shadow-[0_0_0_1px_inset_#465467] relative after:absolute after:top-0 after:left-0 after:bottom-0 after:right-0 after:rounded-lg after:duration-300 hover:after:shadow-[0_0_0_0_rgba(21,30,48,0.10),0_3px_8px_0_rgba(21,30,48,0.10),0_14px_14px_0_rgba(21,30,48,0.09),0_31px_19px_0_rgba(21,30,48,0.05),0_55px_22px_0_rgba(21,30,48,0.01),0_87px_24px_0_rgba(21,30,48,0.0)] cursor-pointer font-secondary font-semibold text-sm text-white text-center"
            onClick={() => {
              if (!userInfo.accept) {
                setIsUpgrade(true);
              } else {
                setOpenModal(false);
              }
            }}
          >
            Continue to Search
          </div>
          <div
            className="rounded-lg px-3 py-4 shadow-[0_0_0_1px_inset_#eaecf0,0_1px_2px_0_#1018280D] relative after:absolute after:top-0 after:left-0 after:bottom-0 after:right-0 after:rounded-lg after:duration-300 hover:after:shadow-[0_0_0_0_rgba(21,30,48,0.10),0_3px_8px_0_rgba(21,30,48,0.10),0_14px_14px_0_rgba(21,30,48,0.09),0_31px_19px_0_rgba(21,30,48,0.05),0_55px_22px_0_rgba(21,30,48,0.01),0_87px_24px_0_rgba(21,30,48,0.0)] cursor-pointer font-secondary font-semibold text-sm text-grey-700 text-center order-[-1]"
            onClick={upgrade}
          >
            Upgrade plan
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchContinueModal;
