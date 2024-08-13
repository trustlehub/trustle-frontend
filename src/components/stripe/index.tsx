import { useState, useEffect, useRef, MouseEvent } from "react";
import { loadStripe, StripeElementsOptions } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import CheckoutForm from "./CheckoutForm";
import axios from "axios";
import { useKillAccountContext } from "../../context/killAccountContext";
import { useAuth0 } from "@auth0/auth0-react";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

export default function StripeComp({
  amount,
  type = "",
  setIsOpen,
}: {
  amount: number;
  type?: string;
  setIsOpen: (data: boolean) => void;
}) {
  const [clientSecret, setClientSecret] = useState("");
  const [paymentIntentId, setPaymentIntetnId] = useState<string>("");
  const [paymentDBId, setPaymentDBId] = useState<string>("");
  const [cancelPayment, setCancelPayment] = useState<boolean>(false);
  const { killAccounts } = useKillAccountContext();
  const { user } = useAuth0();
  const mainRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios.post(
        import.meta.env.VITE_BASE_URL + "/stripe/create-payment-intent",
        {
          amount: amount as number,
          cnt: killAccounts.length,
          email: user?.email,
          date: new Date(),
        }
      );
      setPaymentDBId(response.data.id);
      setClientSecret(response.data.clientSecred);
      setPaymentIntetnId(response.data.intentId);
    };
    getClientSecret();
    window.localStorage.setItem("killaccount", JSON.stringify(killAccounts));
  }, []);

  const options: StripeElementsOptions = {
    clientSecret,
    appearance: {
      theme: "stripe",
    },
  };

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLDivElement) === mainRef.current) {
      setCancelPayment(true);
    }
  };

  const createPayment = () => {
    return (
      <Elements options={options} stripe={stripePromise}>
        <CheckoutForm
          type={type}
          intentId={paymentIntentId}
          cancelPayment={cancelPayment}
          paymentDBId={paymentDBId}
          setIsOpen={setIsOpen}
          amount={amount}
          setCancelPayment={setCancelPayment}
        />
      </Elements>
    );
  };

  return (
    <div className="fixed top-0 left-0 z-[60]" onClick={(e) => handleClick(e)}>
      <div
        className="absolute top-0 left-0 h-screen w-screen bg-[#00000066]"
        ref={mainRef}
      />
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl z-[60] w-[1164px] max-xl:w-[calc(100vw-32px)] flex gap-10 overflow-hidden">
        {clientSecret && createPayment()}
      </div>
    </div>
  );
}
