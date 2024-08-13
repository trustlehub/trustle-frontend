import { useRef, MouseEvent } from "react";
import info from "../../../assets/icons/info.svg";

function Caution({
  setIsOpenCautionModal,
  setStep,
}: {
  setIsOpenCautionModal: (data: boolean) => void;
  setStep: (data: string) => void;
}) {
  const mainRef = useRef<HTMLDivElement | null>(null);

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === mainRef.current) {
      setIsOpenCautionModal(false);
    }
  };

  return (
    <div
      className="fixed top-0 left-0 right-0 bottom-0 z-50"
      onClick={handleClick}
    >
      <div
        className="absolute top-0 left-0 h-screen w-screen bg-[#00000066]"
        ref={mainRef}
      />
      <div className="flex flex-col gap-8 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-3xl p-6 z-[60] w-[538px] max-sm:w-[calc(100vw-32px)]">
        <div className="flex flex-col gap-5">
          <div className="h-12 w-12 rounded-full shadow-[0_0_0_4px_#5e93ab29] bg-[#5E93AB52] border-4 border-[#5E93AB29] p-2 flex items-center justify-center">
            <img src={info} alt="" />
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="font-primary font-medium text-lg leading-6 text-grey-900">
              Caution
            </h1>
            <h1 className="font-secondary text-sm text-grey-700">
              Are you sure you want to delete these accounts? Permanently
              removing online accounts with Killswitch cannot be undone. Proceed
              with care.
            </h1>
          </div>
        </div>
        <div className="flex gap-3 max-sm:flex-col">
          <div
            className="rounded-lg px-4 py-[10px] shadow-[0_0_0_1px_inset_#eaecf0] relative after:absolute after:top-0 after:left-0 after:right-0 after:bottom-0 after:rounded-lg after:shadow-[0_1px_2px_0_#1018280D]  after:duration-300 font-secondary font-medium text-sm leading-6 text-grey-900 cursor-pointer text-center"
            onClick={() => setIsOpenCautionModal(false)}
          >
            Cancel
          </div>
          <div className="rounded-lg bg-grey-200 px-4 py-[10px] shadow-[0_0_0_1px_inset_#f2f4f7] relative after:absolute after:top-0 after:left-0 after:right-0 after:bottom-0 after:rounded-lg after:shadow-[0_1px_2px_0_#1018280D] after:duration-300 font-secondary font-medium text-sm leading-6 text-grey-900 cursor-pointer text-center">
            Migrate data
          </div>
          <div
            className="rounded-lg bg-[linear-gradient(180deg,#1B253C_0%,#101828_100%)] px-4 py-3 font-secondary font-semibold text-sm text-white shadow-[0_0_0_1px_inset_#475467] relative after:absolute after:top-0 after:left-0 after:right-0 after:bottom-0 after:duration-300 cursor-pointer text-center"
            onClick={() => {
              setStep("terms");
              setIsOpenCautionModal(false);
            }}
          >
            Proceed
          </div>
        </div>
      </div>
    </div>
  );
}

export default Caution;
