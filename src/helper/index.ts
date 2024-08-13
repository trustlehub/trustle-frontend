import axios from "axios";

export const baseURL = import.meta.env.VITE_BASE_URL;
export const cronbaseURL: string | undefined = import.meta.env
  .VITE_CRONBASE_URL;

export const verify = async (token: string | null) => {
  if (!token) return "unautherize";
  const { status } = await axios.post(
    `${baseURL}/users/verify`,
    {},
    { headers: { authorization: token } }
  );
  if (status == 200) {
    return "autherize";
  } else {
    return "unautherize";
  }
};
