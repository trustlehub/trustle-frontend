/* eslint-disable @typescript-eslint/ban-ts-comment */
import axios from "axios";
import { useRef, useState } from "react";
import logo from "../../assets/icons/circleLogo.svg";
import Code from "./code";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

function VerifyPage() {
  const blankList = [...Array(4)];
  const [code, setCode] = useState<string | undefined>("");
  const [focus, setFocus] = useState(false);
  const numRef = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();
  const { user } = useAuth0();

  const verifyCode = async () => {
    const response = await axios.post(
      import.meta.env.VITE_BASE_URL + "/users/verify",
      { code: code, url: window.location.search.slice(1) }
    );
    if (response.status === 200) {
      navigate("/");
    }
  };

  const regenerate = async () => {
    const response = await axios.post(
      import.meta.env.VITE_BASE_URL + "/users/regenerate",
      { email: user?.email }
    );

    console.log("response------------->>>>", response);

    if (response.status === 200) {
      navigate("/resend");
    }
  };

  return (
    <div className="bg-[#00000066] relative h-screen w-full">
      <div className="bg-white w-[604px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl shadow-[0_0_0_0_rgba(21,30,48,0.10),0_3px_8px_0_rgba(21,30,48,0.10),0_14px_14px_0_rgba(21,30,48,0.09),0_31px_19px_0_rgba(21,30,48,0.05),0_55px_22px_0_rgba(21,30,48,0.01),0_87px_24px_0_rgba(21,30,48,0.0),0_0_0_1px_inset_#344054] flex flex-col justify-center gap-8 px-6 py-8">
        <img src={logo} alt="" className="h-[76px]" />
        <div className="flex flex-col gap-2">
          <h1 className="font-primary font-medium text-[32px] leading-[38px] text-transparent bg-clip-text bg-[linear-gradient(180deg,#1D2939_0%,rgba(29,41,57,0.67)_100%)] text-center">
            Enter Verification Code
          </h1>
          <h1 className="font-secondary text-grey-700 text-center">
            We sent a verification link to{" "}
            <span className="font-medium">{user?.email}</span>
          </h1>
        </div>
        <div className="relative flex items-center justify-center">
          <div className="flex gap-3 justify-center">
            {blankList.map((i, index) => {
              if (code && index < code.length) {
                return <Code number={code[index]} key={index} />;
              }
              if (index === code?.length) {
                return <Code current={true} active={focus} key={index} />;
              }
              return <Code key={index} />;
            })}
          </div>
          <input
            type="number"
            name=""
            id=""
            ref={numRef}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            onChange={() => {
              if (numRef.current) {
                if (numRef.current.value.length <= 4) {
                  setCode(numRef.current?.value);
                } else if (numRef.current) {
                  // @ts-ignore
                  numRef.current.value = code;
                }
              }
            }}
            className="w-[428px] h-[72px] absolute top-0 opacity-0"
          />
        </div>
        <div
          className={`rounded-lg relative duration-500 ${
            code?.length === 4
              ? "after:duration-300 after:absolute after:top-0 after:left-0 after:right-0 after:bottom-0 after:rounded-xl after:shadow-[0_1px_2px_0_#1018280D] hover:after:shadow-[0_0_0_0_rgba(21,30,48,0.10),0_3px_8px_0_rgba(21,30,48,0.10),0_14px_14px_0_rgba(21,30,48,0.09),0_31px_19px_0_rgba(21,30,48,0.05),0_55px_22px_0_rgba(21,30,48,0.01),0_87px_24px_0_rgba(21,30,48,0.0)] cursor-pointer text-white bg-[linear-gradient(180deg,#1B253C_0%,#101828_100%)]"
              : "cursor-not-allowed text-grey-600 shadow-[0_0_0_1px_inset_#e3e7f0]"
          } py-[10px] font-secondary font-medium text-center`}
          onClick={verifyCode}
        >
          Verify email
        </div>
        <h1 className="leading-5 text-center font-secondary text-grey-700">
          Didn't receive the email?{" "}
          <span
            className="cursor-pointer font-medium text-grey-800"
            onClick={regenerate}
          >
            Click to resend
          </span>
        </h1>
      </div>
    </div>
  );
}

export default VerifyPage;
