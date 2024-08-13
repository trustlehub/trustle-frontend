import { faArrowLeft, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, MouseEvent, useState } from "react";
import kill_logo from "../../../assets/mainLogo/killswitch.svg";
import { useKillAccountContext } from "../../../context/killAccountContext";
import StripeComp from "../../stripe";
import { Link } from "react-router-dom";

function Preview({
  setIsPreviewOpenModal,
}: {
  setIsPreviewOpenModal: (data: boolean) => void;
  setStep: (data: string) => void;
}) {
  const mainRef = useRef<HTMLDivElement>(null);
  const [isOpenStripeWidget, setIsOpenStripeWidget] = useState<boolean>(false);
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const { killAccounts } = useKillAccountContext();

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLDivElement) === mainRef.current) {
      setIsPreviewOpenModal(false);
    }
  };

  return (
    <div className="fixed top-0 left-0 z-50" onClick={(e) => handleClick(e)}>
      <div
        className="absolute top-0 left-0 h-screen w-screen bg-[#00000066]"
        ref={mainRef}
      />
      <div className="flex flex-col fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl px-6 py-8 z-[60] w-[567px] max-sm:w-[calc(100vw-32px)] shadow-[0_0_0_1px_inset_#eaecf0]">
        <div className="flex flex-col gap-8 pb-6 border-b border-b-grey-400">
          <div className="flex gap-4">
            <FontAwesomeIcon icon={faArrowLeft} />
            <h1 className="text-xl font-medium leading-5 font-primary text-grey-900">
              Order preview
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <img src={kill_logo} alt="" className="h-[30px] w-[30px]" />
            <h1 className="text-sm font-medium leading-6 font-secondary text-grey-700">
              Killswitch
            </h1>
          </div>
        </div>
        <div className="flex flex-col gap-8 mt-6">
          <div className="rounded-lg p-4 bg-[#fafafa] shadow-[0_0_0_1px_inset_#eaecf0] flex flex-col gap-[10px]">
            <div className="flex justify-between text-sm font-secondary text-grey-700">
              <h1 className="">
                US ${import.meta.env.VITE_PRICE_ACCOUNT}.00 x{" "}
                {killAccounts.length} accounts
              </h1>
              <h1 className="">
                $
                {parseInt(import.meta.env.VITE_PRICE_ACCOUNT) *
                  killAccounts.length}
                .00
              </h1>
            </div>
            <div className="flex justify-between text-sm font-secondary">
              <h1 className="text-grey-700">Verification cost</h1>
              <h1 className="text-grey-700">$1.00</h1>
            </div>
            <div className="flex justify-between text-sm font-secondary text-grey-700">
              <h1 className="">Tax</h1>
              <h1 className="">
                $
                {(
                  (parseInt(import.meta.env.VITE_PRICE_ACCOUNT) *
                    killAccounts.length +
                    1) /
                  4
                ).toFixed(2)}
              </h1>
            </div>
            <div className="h-[1px] w-full bg-grey-400"></div>
            <div className="flex justify-between font-semibold font-primary text-grey-900">
              <h1 className="">Total Due:</h1>
              <h1 className="">
                $
                {(
                  ((parseInt(import.meta.env.VITE_PRICE_ACCOUNT) *
                    killAccounts.length +
                    1) *
                    125) /
                  100
                ).toFixed(2)}
              </h1>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex gap-[10px]">
              <div
                className="min-w-[16px] h-4 rounded-[4px] shadow-[0_0_0_1px_inset_#d0d5dd] cursor-pointer flex items-center justify-center"
                onClick={() => setIsChecked(!isChecked)}
              >
                {isChecked && (
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="text-lg duration-200 text-grey-700"
                  />
                )}
              </div>
              <h1 className="text-xs leading-5 font-secondary text-grey-700">
                I have read and I agree to Trustle’s{" "}
                <Link to="/killswitch/terms"><span className="underline">Terms and Conditions</span></Link>, as well
                as the Company's{" "}
                <Link to='/privacy'><span className="underline">Privacy Policy.</span></Link>
              </h1>
            </div>
            <div className="flex">
              <div
                className={`${
                  isChecked
                    ? "bg-[linear-gradient(180deg,#1B253C_0%,#101828_100%)] after:absolute after:top-0 after:left-0 after:bottom-0 after:right-0 after:rounded-lg after:duration-300 after:shadow-[0_1px_2px_0_#1018280D] hover:after:shadow-[0_0_0_0_rgba(21,30,48,0.10),0_3px_8px_0_rgba(21,30,48,0.10),0_14px_14px_0_rgba(21,30,48,0.09),0_31px_19px_0_rgba(21,30,48,0.05),0_55px_22px_0_rgba(21,30,48,0.01),0_87px_24px_0_rgba(21,30,48,0.0)] cursor-pointer"
                    : "bg-grey-600 cursor-not-allowed"
                } rounded-lg shadow-[0_0_0_1px_inset_#475467] relative font-secondary font-semibold text-sm text-white px-4 py-3 max-sm:w-full text-center`}
                onClick={() => {
                  if (isChecked) setIsOpenStripeWidget(true);
                }}
              >
                Proceed with payment
              </div>
            </div>
          </div>
        </div>
      </div>
      {isOpenStripeWidget && (
        <StripeComp
          amount={
            (parseInt(import.meta.env.VITE_PRICE_ACCOUNT) *
              killAccounts.length +
              1) *
            125
          }
          type="account"
          setIsOpen={setIsOpenStripeWidget}
        />
      )}
    </div>
  );
}

export default Preview;
