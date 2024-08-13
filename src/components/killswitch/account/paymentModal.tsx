import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, MouseEvent } from "react";
import layer from "../../../assets/icons/layer.svg";
import star from "../../../assets/icons/star.svg";

function PaymentModal({
  setIsOpenPaymentModal,
  setIsPreviewOpenModal,
}: {
  setIsOpenPaymentModal: (data: boolean) => void;
  setIsPreviewOpenModal: (data: boolean) => void;
}) {
  const mainRef = useRef<HTMLDivElement>(null);

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLDivElement) === mainRef.current) {
      setIsOpenPaymentModal(false);
    }
  };

  return (
    <>
      <div
        className="fixed top-0 left-0 right-0 bottom-0 z-50"
        onClick={(e) => handleClick(e)}
      >
        <div
          className="absolute top-0 left-0 h-screen w-screen bg-[#00000066]"
          ref={mainRef}
        />
        <div className="flex flex-col gap-8 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl px-6 py-8 z-[60] w-[739px] max-md:w-[calc(100vw-32px)] shadow-[0_0_0_1px_inset_#eaecf0]">
          <div>
            <div className="flex justify-between items-center pb-6 border-b border-b-grey-400 w-full">
              <h1 className="font-primary font-medium text-xl text-grey-900">
                Payment plan
              </h1>
              <FontAwesomeIcon
                icon={faXmark}
                className="text-grey-900 text-2xl"
              />
            </div>
            <div className="mt-6 flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                <div className="flex gap-3 items-center">
                  <img src={layer} alt="" />
                  <h1 className="font-secondary font-medium text-grey-700">
                    Killswitch
                  </h1>
                </div>
                <div className="flex gap-2 items-end">
                  <h1 className="font-primary font-medium text-grey-900 text-[32px] leading-10">
                    US ${import.meta.env.VITE_PRICE_ACCOUNT}.00
                  </h1>
                  <h1 className="font-secondary font-medium text-xs text-grey-700">
                    Per account
                  </h1>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex gap-2 items-center">
                  <img src={star} alt="" />
                  <h1 className="font-secondary text-sm text-grey-700">
                    Lorem ipsum dolor sit amet consectetur. Commodo fames.
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="flex">
            <div
              className="bg-[linear-gradient(180deg,#1B253C_0%,#101828_100%)] px-4 py-3 rounded-lg shadow-[0_0_0_1px_inset_#475467] relative after:absolute after:top-0 after:left-0 after:right-0 after:bottom-0 after:rounded-lg after:shadow-[0_1px_2px_0_#1018280D] hover:after:shadow-[0_0_0_0_rgba(21,30,48,0.10),0_3px_8px_0_rgba(21,30,48,0.10),0_14px_14px_0_rgba(21,30,48,0.09),0_31px_19px_0_rgba(21,30,48,0.05),0_55px_22px_0_rgba(21,30,48,0.01),0_87px_24px_0_rgba(21,30,48,0.0)] after:duration-300 font-secondary font-semibold text-sm text-white cursor-pointer"
              onClick={() => {
                setIsPreviewOpenModal(true);
                setIsOpenPaymentModal(false);
              }}
            >
              Continue to checkout
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PaymentModal;
