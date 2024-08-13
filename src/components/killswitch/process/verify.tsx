import info_gray from "../../../assets/icons/info_gray.svg";
import camera from "../../../assets/icons/camera.svg";
import PhotoTipModal from "./photoTipModal";
import { useState } from "react";
import ImageUploadModal from "./imageUploadModal";

function Verify() {
  const [isOpenTipModal, setIsOpenTipModal] = useState<boolean>(false);
  const [tipModalType, setTipModalType] = useState<string>("");
  const [isImageUploadModal, setIsImageUploadModal] = useState<boolean>(false);

  return (
    <div className="relative">
      <div className="pt-10 pb-14 px-10 max-md:px-4">
        <div className="flex flex-col gap-2 pb-6 w-full border-b border-b-grey-400">
          <div className="flex gap-2 items-center">
            <h1 className="font-primary font-medium text-2xl text-grey-900">
              Identity Verification
            </h1>
            <img src={info_gray} alt="" className="" />
          </div>
          <h1 className="font-secondary text-sm text-grey-700">
            Next, let’s verify your identity. This is required to commence the
            deletion process.
          </h1>
        </div>
        <div className="mt-6 flex flex-col gap-8 w-[566px] max-sm:w-auto">
          <div className="flex gap-4">
            <div className="h-[70px] min-w-[70px] flex items-center justify-center bg-grey-300 rounded-lg">
              <img src={camera} alt="" />
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="font-primary font-medium text-lg leading-[22px] text-grey-900">
                Personal Photo
              </h1>
              <h1 className="font-secondary text-sm text-grey-700">
                Upload a photo of your valid government-issued ID. Please click
                here to show a list of accepted form of identification.
              </h1>
              <h1
                className="font-secondary font-semibold text-sm text-[#5E93AB] cursor-pointer"
                onClick={() => {
                  setIsOpenTipModal(true);
                  setTipModalType("photo");
                }}
              >
                Photo Tips
              </h1>
              <div className="flex">
                <div
                  className="rounded-lg px-4 py-3 shadow-[0_0_0_1px_inset_#eaecf0] font-secondary font-semibold text-sm text-grey-700 cursor-pointer relative after:absolute after:top-0 after:left-0 after:right-0 after:bottom-0 after:rounded-lg after:shadow-[0_1px_2px_0_#1018280D] hover:after:shadow-[0_0_0_0_rgba(21,30,48,0.10),0_3px_8px_0_rgba(21,30,48,0.10),0_14px_14px_0_rgba(21,30,48,0.09),0_31px_19px_0_rgba(21,30,48,0.05),0_55px_22px_0_rgba(21,30,48,0.01),0_87px_24px_0_rgba(21,30,48,0.0)] after:duration-300"
                  onClick={() => setIsImageUploadModal(true)}
                >
                  Upload photo
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="h-[70px] min-w-[70px] flex items-center justify-center bg-grey-300 rounded-lg">
              <img src={camera} alt="" />
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="font-primary font-medium text-lg leading-[22px] text-grey-900">
                ID
              </h1>
              <h1 className="font-secondary text-sm text-grey-700">
                Upload a photo of your valid government-issued ID. Please click
                here to show a list of accepted form of identification.
              </h1>
              <h1
                className="font-secondary font-semibold text-sm text-[#5E93AB] cursor-pointer"
                onClick={() => {
                  setIsOpenTipModal(true);
                  setTipModalType("id");
                }}
              >
                Photo Tips
              </h1>
              <div className="flex">
                <div
                  className="rounded-lg px-4 py-3 shadow-[0_0_0_1px_inset_#eaecf0] font-secondary font-semibold text-sm text-grey-700 cursor-pointer relative after:absolute after:top-0 after:left-0 after:right-0 after:bottom-0 after:rounded-lg after:shadow-[0_1px_2px_0_#1018280D] hover:after:shadow-[0_0_0_0_rgba(21,30,48,0.10),0_3px_8px_0_rgba(21,30,48,0.10),0_14px_14px_0_rgba(21,30,48,0.09),0_31px_19px_0_rgba(21,30,48,0.05),0_55px_22px_0_rgba(21,30,48,0.01),0_87px_24px_0_rgba(21,30,48,0.0)] after:duration-300"
                  onClick={() => setIsImageUploadModal(true)}
                >
                  Upload photo
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isOpenTipModal && (
        <PhotoTipModal
          type={tipModalType}
          setIsOpenTipModal={setIsOpenTipModal}
        />
      )}
      {isImageUploadModal && (
        <ImageUploadModal setIsImageUploadModal={setIsImageUploadModal} />
      )}
    </div>
  );
}

export default Verify;
