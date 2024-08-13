import { useAuth0 } from "@auth0/auth0-react";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useKillAccountContext } from "../../../context/killAccountContext";

function Order() {
  const { user } = useAuth0();
  const { killAccounts } = useKillAccountContext();

  return (
    <div className="py-10 pl-10 max-md:px-4 flex flex-col gap-6 w-[517px] max-md:w-auto">
      <div className="flex gap-4 items-center">
        <div className="h-14 w-14 max-md:h-10 max-md:w-10 max-md:min-w-[40px] rounded-full bg-[#ECFDF3] flex items-center justify-center border-[3px] border-[#A6F4C5] shadow-[0_0_0_3px_#A6F4C5]">
          <FontAwesomeIcon
            icon={faCheck}
            className="text-[#2A6943] text-4xl max-md:text-2xl"
          />
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="font-primary font-medium text-2xl leading-[30px] text-grey-900">
            Order Complete!
          </h1>
          <h1 className="font-secondary text-sm text-grey-700">
            Cheers to taking the first step in securing your digital life
          </h1>
        </div>
      </div>
      <div className="h-[1px] w-full bg-grey-400"></div>
      <div className="flex flex-col gap-2">
        <h1 className="font-secondary font-semibold text-grey-900">
          Order summary
        </h1>
        <h1 className="font-secondary text-sm text-grey-700">
          We have sent a confirmation email to {user?.email}
        </h1>
      </div>
      <div className="rounded-lg p-4 bg-[#fafafa] shadow-[0_0_0_1px_inset_#eaecf0] flex flex-col gap-[10px]">
        <div className="flex justify-between font-secondary text-sm">
          <h1 className="text-grey-700">
            US ${import.meta.env.VITE_PRICE_ACCOUNT}.00 x {killAccounts.length}{" "}
            accounts
          </h1>
          <h1 className="text-grey-900">
            $
            {parseInt(import.meta.env.VITE_PRICE_ACCOUNT) * killAccounts.length}
            .00
          </h1>
        </div>
        <div className="flex justify-between font-secondary text-sm">
          <h1 className="text-grey-700">Verification cost</h1>
          <h1 className="text-grey-900">$1.00</h1>
        </div>
        <div className="flex justify-between font-secondary text-sm">
          <h1 className="text-grey-700">Tax</h1>
          <h1 className="text-grey-900">
            $
            {(
              (parseInt(import.meta.env.VITE_PRICE_ACCOUNT) *
                killAccounts.length +
                1) /
              4
            ).toFixed(2)}
          </h1>
        </div>
        <div className="h-[1px] w-full bg-[#eaecf0]"></div>
        <div className="flex justify-between font-primary font-semibold text-grey-900">
          <h1>Total Paid:</h1>
          <h1>
            $
            {(
              ((parseInt(import.meta.env.VITE_PRICE_ACCOUNT) *
                killAccounts.length +
                1) *
                125) /
              100
            ).toFixed(2)}
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Order;
