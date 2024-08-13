/* eslint-disable @typescript-eslint/no-explicit-any */
import httpCommon from "./http-common";

const upload = (file: File, onUploadProgress: any): Promise<any> => {
  const formData = new FormData();

  formData.append("file", file);

  return httpCommon.post("/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    onUploadProgress,
  });
};

const getFiles = (): Promise<any> => {
  return httpCommon.get("/files");
};

const FileUploadService = {
  upload,
  getFiles,
};

export default FileUploadService;
