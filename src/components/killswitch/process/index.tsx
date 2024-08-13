import ProcessFooter from "./processFooter";
import ProcessHeader from "./processHeader";
import { useEffect, useState } from "react";
import Order from "./order";
import Verify from "./verify";
import Power from "./power";
import Processing from "./processing";
import Finish from "./finish";
import Header from "../../header";
import Footer from "../../footer";
import { useKillAccountContext } from "../../../context/killAccountContext";

function Process() {
  const [step, setStep] = useState<number>(1);
  const [agreeStep, setAgreeStep] = useState<number>(0);
  const { setKillAccounts } = useKillAccountContext();

  useEffect(() => {
    const account = window.localStorage.getItem("killaccount");
    if (account) {
      const save = JSON.parse(account);
      console.log("json", save);
      setKillAccounts(save);
    }
  }, []);

  return (
    <>
      <Header />
      <div className="max-w-[1512px] m-auto pt-36 bg-[#fafafa] px-[177px] max-xl:px-20 max-md:px-4 pb-40">
        <div className="bg-white rounded-lg shadow-[0_0_0_1px_inset_#f2f4f7]">
          <ProcessHeader step={step} />
          {step === 1 ? (
            <Order />
          ) : step === 2 ? (
            <Verify />
          ) : step === 3 ? (
            <Power agreeStep={agreeStep} />
          ) : step === 4 ? (
            <Processing />
          ) : (
            <Finish />
          )}
          <ProcessFooter
            setStep={setStep}
            step={step}
            setAgreeStep={setAgreeStep}
            agreeStep={agreeStep}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Process;
