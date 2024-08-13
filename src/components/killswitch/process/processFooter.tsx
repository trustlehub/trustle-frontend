import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useKillAccountContext } from "../../../context/killAccountContext";

/* eslint-disable @typescript-eslint/ban-ts-comment */
const steps = [
  "Verify your Identity",
  "Submit & continue",
  "Agree & continue",
  "View Orders",
  "Return home",
];

function ProcessFooter({
  setStep,
  step,
  setAgreeStep,
  agreeStep,
}: {
  setStep: (step: number) => void;
  step: number;
  setAgreeStep: (step: number) => void;
  agreeStep: number;
}) {
  const { killAccounts, setKillAccounts } = useKillAccountContext();
  const navigate = useNavigate();
  const { user } = useAuth0();

  useEffect(() => {
    console.log("kill", killAccounts);
  }, []);

  const setNextStep = async () => {
    if (step === 1) {
      const response = await axios.post(
        import.meta.env.VITE_BASE_URL + "/stripe/verify",
        {
          name: user?.name,
          email: user?.email,
          count: killAccounts.length,
        }
      );

      console.log("payment Resonse", response);
    }

    if (step === 5) {
      navigate("/killswitch");
      window.localStorage.removeItem("killaccount");
      setKillAccounts([]);
    } else if (step !== 3) {
      setStep(step + 1);
    } else if (step === 3) {
      
      const today = new Date();
      const month = String(today.getMonth() + 1).padStart(2, '0'); // Add 1 to the month because months are 0-indexed
      const day = String(today.getDate()).padStart(2, '0');
      const year = today.getFullYear();

      const formattedDate = `${month}/${day}/${year}`;
      await axios.post(import.meta.env.VITE_BASE_URL + "/history/add", {
        email: user?.email,
        link: killAccounts[agreeStep].link,
        username: killAccounts[agreeStep].name,
        platform: killAccounts[agreeStep].type,
        cnt: killAccounts.length,
        date: formattedDate
      });
      if (killAccounts.length - 1 > agreeStep) {
        setAgreeStep(agreeStep + 1);
      }
      if (killAccounts.length - 1 === agreeStep) setStep(step + 1);
    }
  };

  return (
    <div className="flex px-10 border-t max-md:px-4 py-7 border-t-grey-400">
      <div
        className="rounded-lg px-4 py-3 bg-[linear-gradient(180deg,#1B253C_0%,#101828_100%)] shadow-[0_0_0_1px_inset-#475467] relative after:absolute after:top-0 after:left-0 after:right-0 after:bottom-0 after:rounded-lg after:duration-300 after:shadow-[0_1px_2px_0_#1018280D] hover:after:shadow-[0_0_0_0_rgba(21,30,48,0.10),0_3px_8px_0_rgba(21,30,48,0.10),0_14px_14px_0_rgba(21,30,48,0.09),0_31px_19px_0_rgba(21,30,48,0.05),0_55px_22px_0_rgba(21,30,48,0.01),0_87px_24px_0_rgba(21,30,48,0.0)] font-secondary font-semibold text-sm text-white cursor-pointer max-sm:w-full text-center"
        onClick={setNextStep}
      >
        {steps[step - 1]}
      </div>
    </div>
  );
}

export default ProcessFooter;
