import { useEffect, useState } from "react";
import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import plan1 from "../../assets/icons/plan_1.svg";
import plan2 from "../../assets/icons/plan_2.svg";
import plan3 from "../../assets/icons/plan_3.svg";
import stripe_icon from "../../assets/icons/stripe.svg";
import paypal_icon from "../../assets/icons/paypal.svg";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export default function CheckoutForm({
  type,
  intentId,
  cancelPayment,
  paymentDBId,
  setIsOpen,
  amount,
  setCancelPayment,
}) {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [paymentLogo, setPaymentLogo] = useState("");
  const [paymentType, setPaymentType] = useState("card");

  let url = "";

  if (type === "account") {
    url = import.meta.env.VITE_STRIPE_CALLBACK_URL;
  } else {
    url = import.meta.env.VITE_STRIPE_CALLBACK_PLAN_URL;
  }

  useEffect(() => {
    const cancelPay = async () => {
      const response = await axios.post(
        import.meta.env.VITE_BASE_URL + "/stripe/cancel",
        {
          id: intentId,
          dbId: paymentDBId,
        }
      );
      if (response.status === 200) {
        setIsOpen(false);
      }
    };
    if (cancelPayment) {
      cancelPay();
    }
  }, [cancelPayment]);

  useEffect(() => {
    switch (type) {
      case "basic":
        setPaymentLogo(plan1);
        return;
      case "pro":
        setPaymentLogo(plan2);
        return;
      default:
        setPaymentLogo(plan3);
        return;
    }
  }, []);

  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent?.status) {
        case "succeeded":
          setMessage("Payment succeeded!");
          break;
        case "processing":
          setMessage("Your payment is processing.");
          break;
        case "requires_payment_method":
          setMessage("Your payment was not successful, please try again.");
          break;
        default:
          setMessage("Something went wrong.");
          break;
      }
    });
  }, [stripe]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: url,
      },
    });

    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occurred.");
    }

    setIsLoading(false);
  };

  const paymentElementOptions = {
    layout: "tabs",
  };

  return (
    <>
      <div className="px-8 py-10 max-w-[378px] w-full">
        <div className="flex gap-4 items-center">
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[linear-gradient(180deg,rgba(199,27,227,0.21)_0%,rgba(104,31,225,0.1407)_100%)] shadow-[0_0_0_3px_inset_#C71BE321,0_0_0_3px_#681FE116]">
            <img src={paymentLogo} alt="" />
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="font-primary font-medium text-xl leading-[25px] text-grey-900 capitalize">
              {type} plan
            </h1>
            <h1 className="font-secondary text-grey-700">
              Lorem ipsum dolor sit amet
            </h1>
          </div>
        </div>
        <div className="flex pt-10 pb-8 gap-3 items-baseline">
          <h1 className="font-primary font-semibold text-5xl leading-[59px] text-transparent bg-clip-text bg-[linear-gradient(180deg,#1D2939_0%,rgba(29,41,57,0.67)_100%)]">
            US${amount / 100}
          </h1>
          <h1 className="font-secondary text-sm leading-[18px] text-transparent bg-clip-text bg-[linear-gradient(180deg,#1D2939_0%,rgba(29,41,57,0.67)_100%)]">
            per user/month
          </h1>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-6 font-secondary">
            <div className="flex flex-col gap-1">
              <div className="flex justify-between font-medium leading-5 text-grey-900">
                <h1 className="capitalize">{type} plan</h1>
                <h1 className="uppercase">us${amount / 100}</h1>
              </div>
              <h1 className="text-sm leading-[18px] text-grey-700">
                Billed monthly
              </h1>
            </div>
            <div className="flex justify-between font-medium leading-5 text-grey-900">
              <h1 className="">Subtotal</h1>
              <h1 className="">US${amount / 100}</h1>
            </div>
          </div>
          <div className="py-4 border-y border-y-grey-400 flex justify-between font-secondary text-grey-700 text-sm leading-[18px]">
            <h1 className="">Tax</h1>
            <h1 className="">Enter address to calculate</h1>
          </div>
          <div className="flex items-center justify-between font-secondary text-grey-900">
            <h1 className="font-medium leading-5">Total due today</h1>
            <h1 className="font-semibold text-xl leading-[25px]">
              US${amount / 100}
            </h1>
          </div>
        </div>
      </div>
      <div className="p-10 border-l border-l-grey-400 flex gap-[60px] items-start justify-between w-full">
        <div className="flex flex-col gap-4 font-secondary">
          <h1 className="font-medium text-lg leading-[25px] text-grey-900">
            Contact Information
          </h1>
          <div className="flex flex-col gap-8">
            <label
              htmlFor=""
              className="flex flex-col gap-[6px] font-secondary font-medium text-sm text-grey-900"
            >
              Email{" "}
              <input
                type="text"
                name=""
                id=""
                className="rounded-lg p-3 shadow-[0_0_0_1px_inset_#eaecf0] text-grey-600"
                placeholder="Enter your email address"
              />
            </label>
            <div className="flex flex-col gap-4">
              <h1 className="font-medium text-lg text-grey-900">
                Payment method
              </h1>
              <div className="grid grid-cols-2 gap-4">
                <div
                  className={`rounded-lg duration-300 ${
                    paymentType === "card"
                      ? "shadow-[0_0_0_1.4px_inset_#D37BEE9C,0_1px_2px_0_#1018280D]"
                      : "shadow-[0_0_0_1px_inset_#eaecf0,0_1px_2px_0_#1018280D] relative before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:rounded-lg before:duration-300 hover:before:shadow-[0_0_0_0_rgba(21,30,48,0.10),0_3px_8px_0_rgba(21,30,48,0.10),0_14px_14px_0_rgba(21,30,48,0.09),0_31px_19px_0_rgba(21,30,48,0.05),0_55px_22px_0_rgba(21,30,48,0.01),0_87px_24px_0_rgba(21,30,48,0.0)]"
                  } p-3 flex flex-col gap-2 cursor-pointer`}
                  onClick={() => {
                    if (paymentType !== "card") {
                      setPaymentType("card");
                    }
                  }}
                >
                  <div className="h-5 w-5 flex items-center justify-center">
                    <img src={stripe_icon} alt="" />
                  </div>
                  <h1 className="font-secondary font-semibold tex-sm leading-[18px] text-grey-700">
                    Card
                  </h1>
                </div>
                <div
                  className={`rounded-lg duration-300 ${
                    paymentType === "paypal"
                      ? "shadow-[0_0_0_1.4px_inset_#D37BEE9C,0_1px_2px_0_#1018280D]"
                      : "shadow-[0_0_0_1px_inset_#eaecf0,0_1px_2px_0_#1018280D] relative before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:rounded-lg before:duration-300 hover:before:shadow-[0_0_0_0_rgba(21,30,48,0.10),0_3px_8px_0_rgba(21,30,48,0.10),0_14px_14px_0_rgba(21,30,48,0.09),0_31px_19px_0_rgba(21,30,48,0.05),0_55px_22px_0_rgba(21,30,48,0.01),0_87px_24px_0_rgba(21,30,48,0.0)]"
                  } p-3 flex flex-col gap-2 cursor-pointer`}
                  onClick={() => {
                    if (paymentType !== "paypal") {
                      setPaymentType("paypal");
                    }
                  }}
                >
                  <div className="h-5 w-5 flex items-center justify-center">
                    <img src={paypal_icon} alt="" />
                  </div>
                  <h1 className="font-secondary font-semibold tex-sm leading-[18px] text-grey-700">
                    Paypal
                  </h1>
                </div>
              </div>
            </div>
            {paymentType === "card" ? (
              <form id="payment-form" onSubmit={handleSubmit}>
                {/* <LinkAuthenticationElement
        id="link-authentication-element"
        onChange={(e) => setEmail(e.target.value)}
      /> */}
                <PaymentElement
                  id="payment-element"
                  options={paymentElementOptions}
                />
                <div className="flex flex-col gap-8 mt-6">
                  <h1 className="font-secondary text-sm text-grey-700">
                    By providing your card information, you allow Trustle to
                    charge your card for future payments in accordance with
                    their terms.
                  </h1>
                  <button
                    disabled={isLoading || !stripe || !elements}
                    id="submit"
                    className="rounded-lg bg-[linear-gradient(180deg,#1B253C_0%,#101828_100%)] px-6 py-2 hover:shadow-[0_0_0_0_rgba(21,30,48,0.10),0_3px_8px_0_rgba(21,30,48,0.10),0_14px_14px_0_rgba(21,30,48,0.09),0_31px_19px_0_rgba(21,30,48,0.05),0_55px_22px_0_rgba(21,30,48,0.01),0_87px_24px_0_rgba(21,30,48,0.0)] duration-300"
                  >
                    <span
                      id="button-text"
                      className="font-secondary text-sm font-semibold text-white"
                    >
                      {isLoading ? (
                        <div className="spinner" id="spinner"></div>
                      ) : (
                        "Subscribe Now"
                      )}
                    </span>
                  </button>
                </div>
                {/* Show any error or success messages */}
                {message && <div id="payment-message">{message}</div>}
              </form>
            ) : (
              <></>
            )}
          </div>
          <h1 className="text-sm text-grey-900">
            You’ll be charged US${amount / 100} monthly until you cancel your
            subscription.
          </h1>
          <h1 className="text-grey-700 text-sm">
            By clicking on subscribe now, you agree to our{" "}
            <span className="text-transparent bg-clip-text bg-[linear-gradient(180deg,rgba(199,27,227,0.51)_0%,rgba(104,31,225,0.3417)_100%)] cursor-pointer">
              Terms
            </span>{" "}
            and{" "}
            <span className="text-transparent bg-clip-text bg-[linear-gradient(180deg,rgba(199,27,227,0.51)_0%,rgba(104,31,225,0.3417)_100%)] cursor-pointer">
              Privacy Policy
            </span>
          </h1>
        </div>
        <div
          className="h-8 w-8 flex items-center justify-center bg-[#f9fafb] cursor-pointer"
          onClick={() => setCancelPayment(true)}
        >
          <FontAwesomeIcon icon={faXmark} className="text-lg text-grey-700" />
        </div>
      </div>
    </>
  );
}
