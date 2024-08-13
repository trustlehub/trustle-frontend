import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, MouseEvent } from "react";

function PhotoTipModal({
  type,
  setIsOpenTipModal,
}: {
  type: string;
  setIsOpenTipModal: (data: boolean) => void;
}) {
  const mainRef = useRef<HTMLDivElement>(null);

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLDivElement) === mainRef.current) {
      setIsOpenTipModal(false);
    }
  };

  return (
    <div className="fixed top-0 left-0 z-50" onClick={(e) => handleClick(e)}>
      <div
        className="absolute top-0 left-0 h-screen w-screen bg-[#00000066]"
        ref={mainRef}
      />
      <div className="rounded-xl px-6 py-8 bg-white fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[587px] flex flex-col gap-8 justify-center">
        <div className="flex flex-col gap-6">
          <div className="flex justify-between items-center">
            <h1 className="font-primary font-medium text-2xl text-grey-900">
              Photo Tips
            </h1>
            <FontAwesomeIcon
              icon={faXmark}
              className="text-lg text-grey-900 font-thin cursor-pointer"
              onClick={() => setIsOpenTipModal(false)}
            />
          </div>
          {type === "photo" ? (
            <div className="flex flex-col gap-4 pb-6 border-b border-b-grey-400">
              <h1 className="font-secondary text-sm text-grey-700">
                We understand that providing a clear and accurate photo is
                essential for account identification on Trustle. To ensure a
                smooth and successful process, please follow these guidelines
                when uploading your photo:
              </h1>
              <div className="flex flex-col">
                <h1 className="font-secondary font-bold text-xs leading-[18px] text-grey-900">
                  1.Clarity and Resolution:
                </h1>
                <h1 className="font-secondary text-xs leading-[18px] text-grey-900 list-item list-inside">
                  Use a high-resolution camera or smartphone to capture your
                  photo.
                </h1>
                <h1 className="font-secondary text-xs leading-[18px] text-grey-900 list-item list-inside">
                  Ensure the image is clear, sharp, and well-lit with no
                  blurriness or distortion.
                </h1>
                <h1 className="font-secondary text-xs leading-[18px] text-grey-900 list-item list-inside">
                  Aim for a minimum resolution of 600 x 750 pixels.
                </h1>
              </div>
              <div className="flex flex-col">
                <h1 className="font-secondary font-bold text-xs leading-[18px] text-grey-900">
                  2.Photo Background:
                </h1>
                <h1 className="font-secondary text-xs leading-[18px] text-grey-900 list-item list-inside">
                  Choose a plain, evenly lit background that contrasts with your
                  face.
                </h1>
                <h1 className="font-secondary text-xs leading-[18px] text-grey-900 list-item list-inside">
                  Avoid busy or distracting backgrounds, including patterns or
                  bright colours.
                </h1>
                <h1 className="font-secondary text-xs leading-[18px] text-grey-900 list-item list-inside">
                  A neutral background, such as a white wall, works well.
                </h1>
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-6">
              <div className="flex flex-col font-secondary text-sm">
                <h1 className="font-bold text-grey-900">Primary Forms of ID</h1>
                <h1 className="text-grey-700">
                  Government-Issued Photo ID: A valid passport. The document
                  must have a photograph, full name, date of birth, and
                  government seal.
                </h1>
              </div>
              <div className="flex flex-col font-secondary text-sm">
                <h1 className="font-bold text-grey-900">
                  Secondary Forms of ID
                </h1>
                <h1 className="text-grey-700">
                  Official Documents with Photo: Other official documents such
                  as military IDs or government employee IDs with user's
                  photograph and personal information.
                </h1>
              </div>
              <div className="flex flex-col font-secondary text-sm">
                <h1 className="font-bold text-grey-900">
                  Complimentary Forms of ID
                </h1>
                <h1 className="text-grey-700">
                  Bank Statements: A recent bank statement with the user's name
                  and address. Utility Bills: Recent utility bills (e.g.,
                  electricity, water, or gas bills) with the user's name and
                  address.
                </h1>
              </div>
              <div className="w-full h-[1px] bg-grey-400"></div>
            </div>
          )}
        </div>
        <div className="flex">
          <div
            className="rounded-lg shadow-[0_1px_2px_0_#1018280D,0_0_0_1px_inset_#eaecf0] relative after:absolute after:top-0 after:left-0 after:right-0 after:bottom-0 after:rounded-lg after:duration-300 hover:after:shadow-[0_0_0_0_rgba(21,30,48,0.10),0_3px_8px_0_rgba(21,30,48,0.10),0_14px_14px_0_rgba(21,30,48,0.09),0_31px_19px_0_rgba(21,30,48,0.05),0_55px_22px_0_rgba(21,30,48,0.01),0_87px_24px_0_rgba(21,30,48,0.0)] px-4 py-3 font-secondary font-semibold text-sm text-grey-700 cursor-pointer"
            onClick={() => setIsOpenTipModal(false)}
          >
            Close
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhotoTipModal;
