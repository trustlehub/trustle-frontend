import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
import eye_sl from "../../assets/icons/eye_l.svg";
import eye from "../../assets/icons/eye.svg";
import google from "../../assets/icons/socials/google.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import auth0 from "auth0-js";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function SignUp({ setSignType }: { setSignType: (type: boolean) => void }) {
  const { loginWithRedirect } = useAuth0();
  const navigate = useNavigate();

  const [isViewPass, setIsViewPass] = useState<boolean>(false);
  const [agree, setAgree] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");
  const [eamil, setEmail] = useState<string>("");
  const [username, setUsername] = useState<string>("");

  const handleGoogleSignUp = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: "",
      },
      authorizationParams: {
        prompt: "login",
        screen_hint: "signup",
        connection: "google-oauth2",
      },
    });
  };

  const handleNomalSignUp = async () => {
    const webAuth = new auth0.WebAuth({
      domain: import.meta.env.VITE_AUTH0_DOMAIN as string,
      clientID: import.meta.env.VITE_AUTH0_CLIENT_ID as string,
      redirectUri: window.location.origin,
    });

    webAuth.signup(
      {
        connection: "Username-Password-Authentication",
        email: eamil,
        password: password,
        username: username,
      },
      function (err) {
        if (err) {
          console.log("error", err);
          return alert("error");
        }
        return alert("success");
      }
    );
  };

  return (
    <div className="p-12 flex flex-col gap-6 w-[456px] relative z-20">
      <form className="flex flex-col gap-6" onSubmit={handleNomalSignUp}>
        <h1 className="font-primary font-medium text-2xl text-grey-1000">
          Get started with Trustle
        </h1>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-[6px]">
            <h1 className="font-secondary font-medium text-sm text-grey-900">
              Full name*
            </h1>
            <input
              type="text"
              className="rounded-md border border-grey-400 p-3 font-secondary text-sm text-grey-600 focus:outline-none"
              placeholder="Enter your full name"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
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
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div
            className="flex gap-[10px] items-center cursor-pointer"
            onClick={() => setAgree(!agree)}
          >
            <div className="border border-grey-500 bg-white rounded-[4px] h-4 w-4 flex items-center justify-center">
              {agree && <FontAwesomeIcon icon={faCheck} className="text-xs" />}
            </div>
            <h1 className="font-secondary text-xs leading-5 text-grey-900">
              I agree to Trustle's Terms & Conditions
            </h1>
          </div>
          <button
            className={`rounded-lg py-3 ${
              agree
                ? "bg-[linear-gradient(180deg,#1B253C_0%,#101828_100%)] text-white hover:shadow-[0_0_0_0_rgba(21,30,48,0.10),0_3px_8px_0_rgba(21,30,48,0.10),0_14px_14px_0_rgba(21,30,48,0.09),0_31px_19px_0_rgba(21,30,48,0.05),0_55px_22px_0_rgba(21,30,48,0.01),0_87px_24px_0_rgba(21,30,48,0.0)] cursor-pointer"
                : "bg-[#BDC4C7] text-grey-900 cursor-not-allowed"
            } duration-300 font-secondary font-semibold text-sm text-center`}
            type="submit"
          >
            Create Account
          </button>
          <div
            className="bg-white rounded-lg border border-grey-300 flex gap-3 justify-center py-[10px] cursor-pointer duration-300 hover:shadow-[0_0_0_0_rgba(21,30,48,0.10),0_3px_8px_0_rgba(21,30,48,0.10),0_14px_14px_0_rgba(21,30,48,0.09),0_31px_19px_0_rgba(21,30,48,0.05),0_55px_22px_0_rgba(21,30,48,0.01),0_87px_24px_0_rgba(21,30,48,0.0)]"
            onClick={handleGoogleSignUp}
          >
            <img src={google} alt="" />
            <h1 className="font-secondary font-medium text-sm leading-6">
              Sign up with Google
            </h1>
          </div>
        </div>
      </form>
      <div className="flex flex-col justify-center gap-4 px-9">
        <h1 className="font-secondary text-xs leading-5 text-grey-700 text-center">
          By creating an account you agree with our{" "}
          <span className="underline cursor-pointer"><Link to={'/terms'}>Terms of Service</Link> </span> and{" "}
          <span className="underline cursor-pointer"><Link to={'/privacy'}>Privacy Policy</Link></span>
        </h1>
        <h1 className="font-secondary text-xs leading-5 text-center text-grey-800">
          Already have an account?{" "}
          <span
            className="underline cursor-pointer"
            onClick={() => setSignType(true)}
          >
            Log in
          </span>
        </h1>
      </div>
    </div>
  );
}

export default SignUp;
