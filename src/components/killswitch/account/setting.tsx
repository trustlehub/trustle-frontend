import link from "../../../assets/icons/link.svg";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faCheck,
  faChevronRight,
  faPlus,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";
import AccountModal from "../../../modal/accountModal";
import {
  accountProperties,
  useAccountContext,
} from "../../../context/accountsContext";
import UserAccount from "./userAccount";
import { useKillAccountContext } from "../../../context/killAccountContext";
import { useAuth0 } from "@auth0/auth0-react";
import AccountHeader from "./accountHeader";

export interface accountType {
  id: number;
  social: string;
  account_name: string;
}

export const filterList = [
  "All Accounts",
  "Social Media",
  "Creative",
  "Music",
  "Dating",
  "Gaming",
];

function Setting({ setStep }: { setStep: (data: string) => void }) {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [modalType, setModalType] = useState<boolean>(false);
  const [accuntType, setAccuntType] = useState<number>(0);
  const [accountList, setAccountList] = useState<Array<accountProperties>>([]);
  const [active, setActive] = useState<boolean>(false);
  const { accounts } = useAccountContext();
  const { killAccounts } = useKillAccountContext();

  const AccountSetting = () => {
    setOpenModal(true);
    setModalType(true);
  };

  useEffect(() => {
    console.log("kill-accounts", killAccounts.length);
  }, [killAccounts]);

  const { user } = useAuth0();

  useEffect(() => {
    if (accuntType > 0) {
      const list = accounts.filter((item) => item.itemType === accuntType);
      setAccountList(list);
    } else {
      setAccountList(accounts);
    }
  }, [accuntType, accounts]);

  return (
    <div className="relative">
      <div className="max-w-[1512px] m-auto pt-24">
        <div className="px-28 max-xl:px-20 max-md:px-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-between w-full">
              <h1 className="py-6 font-medium font-secondary text-grey-700">
                Home
              </h1>
              <div className="flex">
                <div className="rounded-md p-[6px] flex gap-2 items-center bg-[#5E93AB1A] text-[#5E93AB]">
                  <FontAwesomeIcon icon={faWallet} />
                  <h1 className="font-bold font-secondary">12 Credits</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6 pb-10">
            <div className="flex flex-col gap-3">
              <h1 className="font-primary font-medium text-2xl leading-[30px] text-grey-900">
                Welcome, {user?.name}
              </h1>
              <h1 className="font-secondary text-grey-700">
                Select the accounts you want Killswitch to help you get rid off
                permanently
              </h1>
            </div>
            <div className="pt-8 bg-white border rounded-lg border-grey-300">
              <h1 className="pb-5 pl-6 text-lg font-medium font-primary text-grey-700">
                Account overview
              </h1>
              <div className="flex items-center gap-6 py-5 pl-6 border-y border-y-grey-400">
                <img
                  src={user?.picture}
                  alt=""
                  className="w-[72px] h-[72px] rounded-full object-cover border border-white shadow-[0_2px_3px_-1px_#10182808,0_5px_7px_-2px_#10182814]"
                />
                <div className="flex flex-col gap-3">
                  <h1 className="font-primary font-medium text-[20px] leading-[25px] text-grey-900">
                    {user?.name}
                  </h1>
                  <div className="flex font-medium gap-7 font-secondary text-grey-700">
                    <h1 className="">Lisbon, Portugal</h1>
                    <div className="flex gap-2">
                      <div className="items-center list-item">
                        <img src={link} alt="" className="" />
                      </div>
                      <h1 className="">{accounts.length} Linked Accounts</h1>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between px-6 pt-8 pb-6">
                <h1 className="font-primary font-medium text-lg leading-[22px] text-grey-900 ">
                  Linked Accounts
                </h1>
                <h1 className="font-secondary font-medium text-[#5E93AB]">
                  {killAccounts.length} accounts selected
                </h1>
              </div>
              <div className="flex flex-wrap gap-3 py-3 pl-6 border-y border-y-grey-400">
                {filterList.map((item, index) => {
                  return (
                    <AccountHeader
                      index={index}
                      accuntType={accuntType}
                      setAccuntType={setAccuntType}
                      key={index}
                    />
                  );
                })}
              </div>
              <div
                className="flex gap-1 pt-5 pl-6"
                onClick={() => setActive(!active)}
              >
                <div
                  className={`rounded-md w-5 h-5 border-2 relative flex items-center justify-center duration-200 ${
                    active
                      ? "border-[#5E93AB] bg-[#5E93AB1A]"
                      : "border-grey-400"
                  }`}
                >
                  {active ? (
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="duration-200 font-thin text-[#5e93ab]"
                    />
                  ) : (
                    ""
                  )}
                </div>
                <h1 className="font-secondary font-medium text-[#5E93AB]">
                  Select all
                </h1>
              </div>
              <div className="grid grid-cols-4 grid-rows-2 px-6 pt-4 max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-x-6 gap-y-5 pb-7">
                {accountList.map((account, index) => (
                  <UserAccount
                    data={account}
                    key={index}
                    all={active}
                    setAll={setActive}
                  />
                ))}
                <div
                  className="rounded-xl px-3 py-4 bg-white border border-dashed border-primary shadow-[0_1px_2px_0_#1018280D] flex gap-2 cursor-pointer w-full h-[177px] items-center justify-center"
                  onClick={AccountSetting}
                >
                  <FontAwesomeIcon
                    icon={faPlus}
                    className="text-xl duration-200 text-grey-700"
                  />
                  <h1 className="font-medium font-secondary text-grey-700">
                    Add account
                  </h1>
                </div>
              </div>
            </div>
            <div className="flex">
              <div
                className="px-4 py-3 flex gap-0 hover:gap-2 rounded-lg bg-gradient-to-r from-[#1B253C] to-[#101828] items-center justify-center cursor-pointer border border-[#475467] duration-300 hover:shadow-[0_0_0_0_rgba(21,30,48,0.10),0_3px_8px_0_rgba(21,30,48,0.10),0_14px_14px_0_rgba(21,30,48,0.09),0_31px_19px_0_rgba(21,30,48,0.05),0_55px_22px_0_rgba(21,30,48,0.01),0_87px_24px_0_rgba(21,30,48,0.0)] max-sm:w-full group"
                onClick={() => {
                  if (killAccounts.length > 0) {
                    setStep("edit");
                  }
                }}
              >
                <h1 className="text-sm text-white font-secondary whitespace-nowrap">
                  Continue
                </h1>
                <div className="max-w-0 duration-300 group-hover:max-w-[30px] flex items-center overflow-hidden">
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="text-white duration-200 opacity-0 group-hover:opacity-100"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {openModal && (
        <AccountModal modalType={modalType} setOpenModal={setOpenModal} />
      )}
    </div>
  );
}

export default Setting;
