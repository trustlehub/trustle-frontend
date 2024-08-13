import eye_sl from "../../assets/icons/eye_l.svg";
import eye from "../../assets/icons/eye.svg";
import google from "../../assets/icons/socials/google.svg";
import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import auth0 from "auth0-js";
import { useNavigate } from "react-router-dom";

function SignIn({ setSignType }: { setSignType: (type: boolean) => void }) {
  const { loginWithRedirect } = useAuth0();
  const navigate = useNavigate();

  const [isViewPass, setIsViewPass] = useState<boolean>(false);
  const [remember, setRemember] = useState<boolean>(false);
  const [eamil, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleGoogleLogin = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: "/",
      },
      authorizationParams: {
        prompt: "login",
        connection: "google-oauth2",
      },
    });
  };

  const handleLogin = async (e: any) => {
    e.preventDefault();
    const webAuth = new auth0.WebAuth({
      domain: import.meta.env.VITE_AUTH0_DOMAIN as string,
      clientID: import.meta.env.VITE_AUTH0_CLIENT_ID as string,
      redirectUri: window.location.origin,
    });

    return webAuth.signup(
      {
        connection: "Username-Password-Authentication",
        email: eamil,
        password: password,
      },
      () => navigate(window.location.origin)
    );
  };

  return (
    <div className="relative min-w-[475px] pl-10 pr-[75px] py-12 flex flex-col gap-6 z-20">
      <form className="flex flex-col gap-8" onSubmit={handleLogin}>
        <div className="flex flex-col gap-6">
          <h1 className="font-primary font-medium text-2xl leading-6 text-grey-1000">
            Welcome back!
          </h1>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-[6px]">
              <h1 className="font-secondary font-medium text-sm text-grey-900">
                Email*
              </h1>
              <input
                type="text"
                className="rounded-md border border-grey-400 p-3 font-secondary text-sm text-grey-600 focus:outline-none"
                placeholder="example@email.com"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-[6px]">
              <h1 className="font-secondary font-medium text-sm text-grey-900">
                Pssword*
              </h1>
              <div className="rounded-md border border-grey-400 p-3 flex gap-3 bg-white">
                <input
                  type={isViewPass ? "text" : "password"}
                  className="font-secondary text-sm text-grey-600 focus:outline-none w-full"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <img
                  src={isViewPass ? eye_sl : eye}
                  alt=""
                  className="cursor-pointer"
                  onClick={() => setIsViewPass(!isViewPass)}
                />
              </div>
              <div
                className="flex gap-[10px] items-center cursor-pointer"
                onClick={() => setRemember(!remember)}
              >
                <div className="border border-grey-500 bg-white rounded-[4px] h-4 w-4 flex items-center justify-center">
                  {remember && (
                    <FontAwesomeIcon icon={faCheck} className="text-xs" />
                  )}
                </div>
                <h1 className="font-secondary text-xs leading-5 text-grey-900">
                  Remember me
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <button
            type="submit"
            className="rounded-lg py-3 bg-[linear-gradient(180deg,#1B253C_0%,#101828_100%)] duration-300 hover:shadow-[0_0_0_0_rgba(21,30,48,0.10),0_3px_8px_0_rgba(21,30,48,0.10),0_14px_14px_0_rgba(21,30,48,0.09),0_31px_19px_0_rgba(21,30,48,0.05),0_55px_22px_0_rgba(21,30,48,0.01),0_87px_24px_0_rgba(21,30,48,0.0)] border border-grey-800 font-secondary font-semibold text-sm text-white text-center cursor-pointer"
            // onClick={handleLogin}
          >
            Log in
          </button>
          <div
            className="bg-white rounded-lg border border-grey-300 flex gap-3 justify-center py-[10px] cursor-pointer duration-300 hover:shadow-[0_0_0_0_rgba(21,30,48,0.10),0_3px_8px_0_rgba(21,30,48,0.10),0_14px_14px_0_rgba(21,30,48,0.09),0_31px_19px_0_rgba(21,30,48,0.05),0_55px_22px_0_rgba(21,30,48,0.01),0_87px_24px_0_rgba(21,30,48,0.0)]"
            onClick={handleGoogleLogin}
          >
            <img src={google} alt="" />
            <h1 className="font-secondary font-medium text-sm leading-6">
              Sign in with Google
            </h1>
          </div>
        </div>
      </form>
      <div className="text-center font-primary text-grey-800 text-xs leading-5 select-none">
        Don't have an account?{" "}
        <span
          className="underline cursor-pointer"
          onClick={() => setSignType(false)}
        >
          Sign up
        </span>
      </div>
    </div>
  );
}

export default SignIn;
