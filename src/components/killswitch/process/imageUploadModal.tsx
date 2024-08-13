/* eslint-disable @typescript-eslint/no-explicit-any */
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, MouseEvent, ChangeEvent, useState, useEffect } from "react";
import IFile from "./file";
import FileUploadService from "./FileUploadService";

function ImageUploadModal({
  setIsImageUploadModal,
}: {
  setIsImageUploadModal: (data: boolean) => void;
}) {
  const mainRef = useRef<HTMLDivElement>(null);
  const [currentImage, setCurrentImage] = useState<File>();
  const [previewImage, setPreviewImage] = useState<string>("");
  const [progress, setProgress] = useState<number>(0);
  const [imageInfos, setImageInfos] = useState<Array<IFile>>([]);
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    FileUploadService.getFiles().then((response) => {
      setImageInfos(response.data);
    });
  }, []);

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLDivElement) === mainRef.current) {
      setIsImageUploadModal(false);
    }
  };

  const selectImage = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = event.target.files as FileList;
    setCurrentImage(selectedFiles?.[0]);
    setPreviewImage(URL.createObjectURL(selectedFiles?.[0]));
    setProgress(0);
  };

  const upload = () => {
    setProgress(0);
    if (!currentImage) return;

    FileUploadService.upload(currentImage, (event: any) => {
      setProgress(Math.round((100 * event.loaded) / event.total));
    })
      .then((response) => {
        setMessage(response.data.message);
        return FileUploadService.getFiles();
      })
      .then((files) => {
        setImageInfos(files.data);
      })
      .catch((err) => {
        setProgress(0);

        if (err.response && err.response.data && err.response.data.message) {
          setMessage(err.response.data.message);
        } else {
          setMessage("Could not upload the Image!");
        }

        setCurrentImage(undefined);
      });
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
              Upload Image
            </h1>
            <FontAwesomeIcon
              icon={faXmark}
              className="text-lg text-grey-900 font-thin cursor-pointer"
              onClick={() => setIsImageUploadModal(false)}
            />
          </div>
        </div>
        <div className="flex gap-10">
          <div className="min-h-[200px] min-w-[200px] shadow-[0_0_5px_-2px_#344054] rounded-lg flex items-center">
            {previewImage && (
              <div>
                <img
                  className="object-cover w-full h-full"
                  src={previewImage}
                  alt=""
                />
              </div>
            )}
          </div>
          <div className="flex flex-col gap-10 items-center justify-center">
            <label htmlFor="">
              <input type="file" accept="image/*" onChange={selectImage} />
            </label>
            <button
              className="w-full py-2 rounded-lg shadow-[0_0_0_1px_inset_#EAECF0] cursor-pointer font-secondary font-medium relative after:absolute after:top-0 after:left-0 after:right-0 after:bottom-0 after:rounded-lg after:shadow-[0_1px_2px_0_#1018280D] hover:after:shadow-[0_0_0_0_rgba(21,30,48,0.10),0_3px_8px_0_rgba(21,30,48,0.10),0_14px_14px_0_rgba(21,30,48,0.09),0_31px_19px_0_rgba(21,30,48,0.05),0_55px_22px_0_rgba(21,30,48,0.01),0_87px_24px_0_rgba(21,30,48,0.0)] after:duration-300"
              disabled={!currentImage}
              onClick={upload}
            >
              Upload
            </button>
          </div>
        </div>
        <div className="flex">
          <div
            className="rounded-lg shadow-[0_1px_2px_0_#1018280D,0_0_0_1px_inset_#eaecf0] relative after:absolute after:top-0 after:left-0 after:right-0 after:bottom-0 after:rounded-lg after:duration-300 hover:after:shadow-[0_0_0_0_rgba(21,30,48,0.10),0_3px_8px_0_rgba(21,30,48,0.10),0_14px_14px_0_rgba(21,30,48,0.09),0_31px_19px_0_rgba(21,30,48,0.05),0_55px_22px_0_rgba(21,30,48,0.01),0_87px_24px_0_rgba(21,30,48,0.0)] px-4 py-3 font-secondary font-semibold text-sm text-grey-700 cursor-pointer"
            onClick={() => setIsImageUploadModal(false)}
          >
            Close
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageUploadModal;
