import plan1 from "../../assets/icons/plan_1.svg";
import plan2 from "../../assets/icons/plan_2.svg";
import plan3 from "../../assets/icons/plan_3.svg";
import star from "../../assets/icons/pink_star.svg";
import b_star from "../../assets/icons/black_star.svg";
import { useState } from "react";
import StripeComp from "../stripe";
import AuthModal from "../authModal";
import { useAuth0 } from "@auth0/auth0-react";

function PlanList() {
  const [isOpenStripeWidget, setIsOpenStripeWidget] = useState<boolean>(false);
  const [amount, setAmount] = useState<number>(0);
  const [payType, setPayType] = useState<string>("");
  const [isAuthModal, setIsAuthModal] = useState<boolean>(false);

  const { isAuthenticated } = useAuth0();

  const subscribe = (paytype: string, payamount: number) => {
    setAmount(payamount);
    setPayType(paytype);
    if (isAuthenticated) {
      setIsOpenStripeWidget(true);
    } else {
      setIsAuthModal(true);
    }
  }

  return (
    <div className="max-w-[1512px] m-auto">
      <div className="grid grid-cols-3 gap-6 px-40 pt-16 max-xl:px-8 pb-28 max-sm:pb-12 max-lg:grid-cols-1 max-lg:px-40 max-sm:px-4">
        <div className="rounded-xl px-6 max-sm:px-4 py-8 flex flex-col gap-6 max-sm:gap-4 shadow-[0_8px_8px_-4px_#10182808,0_20px_24px_-4px_#10182814,0_0_0_1px_inset_#F2F4F7]">
          <div className="flex flex-col gap-4">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[linear-gradient(180deg,rgba(199,27,227,0.21)_0%,rgba(104,31,225,0.1407)_100%)] shadow-[0_0_0_3px_inset_#C71BE321,0_0_0_3px_#681FE116]">
              <img src={plan1} alt="" />
            </div>
            <div className="flex flex-col gap-3 max-sm:gap-1">
              <h1 className="font-primary font-medium text-2xl max-md:text-xl leading-[30px] max-md:leading-[25px] text-grey-900">
                Basic
              </h1>
              <h1 className="font-secondary text-grey-700 max-sm:text-sm max-sm:leading-6">
                Search as much as you like
              </h1>
            </div>
          </div>
          <div className="w-full border border-dashed" />
          <div className="flex flex-col gap-4">
            <div className="flex items-baseline gap-3">
              <h1 className="font-primary font-semibold text-5xl max-sm:text-[32px] leading-[60px] max-sm:leading-[39px] text-grey-900">
                $1
              </h1>
              <h1 className="items-baseline text-sm font-secondary text-grey-700">
                per 50 searches
              </h1>
            </div>
            <div
              className="w-full bg-white rounded-lg py-4 shadow-[0_1px_2px_0_#1018280D,0_0_0_1px_inset_#eaecf0] relative after:absolute after:top-0 after:left-0 after:right-0 after:bottom-0 after:duration-300 after:rounded-lg cursor-pointer font-secondary font-semibold text-sm text-grey-700 text-center"
            // hover:after:shadow-[0_0_0_0_rgba(21,30,48,0.10),0_3px_8px_0_rgba(21,30,48,0.10),0_14px_14px_0_rgba(21,30,48,0.09),0_31px_19px_0_rgba(21,30,48,0.05),0_55px_22px_0_rgba(21,30,48,0.01),0_87px_24px_0_rgba(21,30,48,0.0)]
              onClick={() => subscribe('basic', 100)}
            >
              Get Started
            </div>
          </div>
          <div className="w-full border border-dashed" />
          <div className="flex flex-col gap-3">
            <div className="flex gap-2">
              <img src={star} alt="" />
              <h1 className="text-sm font-secondary text-grey-700">
                50 search credits
              </h1>
            </div>
            <div className="flex gap-2">
              <img src={star} alt="" />
              <h1 className="text-sm font-secondary text-grey-700">
                Limited performance priority
              </h1>
            </div>
          </div>
        </div>
        <div className="rounded-xl px-6 max-sm:px-4 py-8 flex flex-col gap-6 max-sm:gap-4 shadow-[0_0_0_1px_inset_#C71BE3] bg-[linear-gradient(180deg,rgba(225,73,250,0.09)_0%,rgba(199,37,225,0.09)_100%)]">
          <div className="flex flex-col gap-4">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[linear-gradient(180deg,rgba(199,27,227,0.21)_0%,rgba(104,31,225,0.1407)_100%)] shadow-[0_0_0_3px_inset_#C71BE321,0_0_0_3px_#681FE116]">
              <img src={plan2} alt="" />
            </div>
            <div className="flex flex-col gap-3 max-sm:gap-1">
              <h1 className="font-primary font-medium text-2xl max-sm:text-xl leading-[30px] max-sm:leading-[25px] text-black">
                Pro (Recommended)
              </h1>
              <h1 className="text-black font-secondary max-sm:text-sm max-sm:leading-6">
                Top-tier subscription
              </h1>
            </div>
          </div>
          <div className="w-full border border-dashed border-grey-400" />
          <div className="flex flex-col gap-4">
            <div className="flex items-baseline gap-3">
              <h1 className="font-primary font-semibold text-5xl max-sm:text-[32px] leading-[60px] max-sm:leading-[39px] text-black">
                $24
              </h1>
              <h1 className="items-baseline text-sm text-black font-secondary">
                per user/month
              </h1>
            </div>
            <div
              className="w-full bg-[linear-gradient(180deg,#1B253C_0%,#101828_100%)] rounded-lg py-4 shadow-[0_1px_2px_0_#1018280D,0_0_0_1px_inset_#475467]hover:shadow-[0_0_0_1px_inset#C71BE3,0_1px_2px_0_rgba(16,24,40,0.05)] hover:bg-[linear-gradient(180deg,rgba(199,27,227,0.51)_0%,rgba(104,31,225,0.34)_100%)] duration-300 cursor-pointer font-secondary font-semibold text-sm text-white text-center"
              onClick={() => subscribe('pro', 2400)}
            >
              Get Started
            </div>
          </div>
          <div className="w-full border border-dashed border-grey-400" />
          <div className="flex flex-col gap-3">
            <div className="flex gap-2">
              <img src={b_star} alt="" />
              <h1 className="text-sm text-black font-secondary">
                Infinite number of searches
              </h1>
            </div>
            <div className="flex gap-2">
              <img src={b_star} alt="" />
              <h1 className="text-sm text-black font-secondary">
                Continuous search for your accounts
              </h1>
            </div>
            <div className="flex gap-2">
              <img src={b_star} alt="" />
              <h1 className="text-sm text-black font-secondary">
                Top performance ensured
              </h1>
            </div>
          </div>
        </div>
        <div className="rounded-xl px-6 max-sm:px-4 py-8 flex flex-col gap-6 max-sm:gap-4 shadow-[0_8px_8px_-4px_#10182808,0_20px_24px_-4px_#10182814,0_0_0_1px_inset_#F2F4F7]">
          <div className="flex flex-col gap-4">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[linear-gradient(180deg,rgba(199,27,227,0.21)_0%,rgba(104,31,225,0.1407)_100%)] shadow-[0_0_0_3px_inset_#C71BE321,0_0_0_3px_#681FE116]">
              <img src={plan3} alt="" />
            </div>
            <div className="flex flex-col gap-3 max-sm:gap-1">
              <h1 className="font-primary font-medium text-2xl max-md:text-xl leading-[30px] max-md:leading-[25px] text-grey-900">
                Premium
              </h1>
              <h1 className="font-secondary text-grey-700 max-sm:text-sm max-sm:leading-6">
                Premium subscription
              </h1>
            </div>
          </div>
          <div className="w-full border border-dashed" />
          <div className="flex flex-col gap-4">
            <div className="flex items-baseline gap-3">
              <h1 className="font-primary font-semibold text-5xl max-sm:text-[32px] leading-[60px] max-sm:leading-[39px] text-grey-900">
                $10
              </h1>
              <h1 className="items-baseline text-sm font-secondary text-grey-700">
                per user/month
              </h1>
            </div>
            <div
              className="w-full bg-white rounded-lg py-4 shadow-[0_1px_2px_0_#1018280D,0_0_0_1px_inset_#eaecf0] relative after:absolute after:top-0 after:left-0 after:right-0 after:bottom-0 after:duration-300 after:rounded-lg cursor-pointer font-secondary font-semibold text-sm text-grey-700 text-center"
              onClick={() => subscribe('Premium', 1000)}
            >
              Get Started
            </div>
          </div>
          <div className="w-full border border-dashed" />
          <div className="flex flex-col gap-3">
            <div className="flex gap-2">
              <img src={star} alt="" />
              <h1 className="text-sm font-secondary text-grey-700">
                1,000 searches every month
              </h1>
            </div>
            <div className="flex gap-2">
              <img src={star} alt="" />
              <h1 className="text-sm font-secondary text-grey-700">
                Top prioritised searches
              </h1>
            </div>
          </div>
        </div>
        {isOpenStripeWidget && (
          <StripeComp
            amount={amount}
            type={payType}
            setIsOpen={setIsOpenStripeWidget}
          />
        )}
      </div>
      {
        isAuthModal && (
          <AuthModal setIsAuthModal={setIsAuthModal} />
        )
      }
    </div>
  );
}

export default PlanList;
