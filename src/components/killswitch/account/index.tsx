import Footer from "../../footer";
import Header from "../../header";
import Setting from "./setting";
import { useEffect, useState } from "react";
import EditAccount from "./editAccount";
import Terms from "./terms";
import Process from "../process";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

function Account() {
  const [step, setStep] = useState<string>("create");
  const { isAuthenticated } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate(-1);
    }
  }, []);

  return (
    <>
      <Header />
      {step === "create" ? (
        <Setting setStep={setStep} />
      ) : step === "edit" ? (
        <EditAccount setStep={setStep} />
      ) : step === "terms" ? (
        <Terms setStep={setStep} />
      ) : (
        <Process />
      )}
      <Footer />
    </>
  );
}

export default Account;
