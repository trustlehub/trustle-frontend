import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import {
  // accountProperties,
  useAccountContext,
} from "../../context/accountsContext";
import AccountModal from "../../modal/accountModal";
import UserAccount from "../killswitch/account/userAccount";

function Accounts() {
  // const [userInfo, setUserInfo] = useState<accountProperties[]>([]);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [modalType, setModalType] = useState<boolean>(false);
  const [accuntType, setAccuntType] = useState<number>(0);
  const { accounts } = useAccountContext();

  const AccountSetting = () => {
    setOpenModal(true);
    setModalType(true);
  };

  return (
    <>
      <div className="max-w-[1512px] m-auto mt-8 pb-8 px-20">
        <div className="flex flex-col overflow-hidden border border-grey-300 rounded-xl">
          <div className="flex flex-col gap-4 px-6 pt-8 pb-6">
            <h1 className="font-primary font-medium text-2xl leading-5 text-grey-900">
              Linked Accounts
            </h1>
            <h1 className="font-secondary text-grey-700">
              These are accounts that have been been auto-created and linked
              based on your name and email.
            </h1>
            {/*Filter*/}
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex gap-3 px-6 py-3 border-y border-y-grey-500">
              <div className="flex gap-2 px-3 py-2 rounded-[100px] border border-grey-400 cursor-pointer">
                <h1 className="font-secondary font-medium text-grey-700">
                  All accounts
                </h1>
                <div className="h-6 w-6 rounded-full flex items-center justify-center font-secondary font-medium text-sm text-grey-800 bg-[#F2F4F7]">
                  13
                </div>
              </div>
              <div className="flex gap-2 px-4 py-2 rounded-[100px] border border-[#7CCA68] bg-[linear-gradient(90deg,rgba(124,202,104,0.18)_41.69%,rgba(98,202,158,0.18)_80.68%)] cursor-pointer">
                <h1 className="font-secondary font-semibold text-[#446F57]">
                  Social media
                </h1>
                <div className="h-6 w-6 rounded-full flex items-center justify-center font-secondary font-medium text-sm text-[#446F57] bg-[#446E5738]">
                  5
                </div>
              </div>
              <div className="flex gap-2 px-3 py-2 rounded-[100px] border border-grey-400 cursor-pointer">
                <h1 className="font-secondary font-medium text-grey-700">
                  Creative
                </h1>
                <div className="h-6 w-6 rounded-full flex items-center justify-center font-secondary font-medium text-sm text-grey-800 bg-[#F2F4F7]">
                  5
                </div>
              </div>
              <div className="flex gap-2 px-3 py-2 rounded-[100px] border border-grey-400 cursor-pointer">
                <h1 className="font-secondary font-medium text-grey-700">
                  Music
                </h1>
                <div className="h-6 w-6 rounded-full flex items-center justify-center font-secondary font-medium text-sm text-grey-800 bg-[#F2F4F7]">
                  5
                </div>
              </div>
              <div className="flex gap-2 px-3 py-2 rounded-[100px] border border-grey-400 cursor-pointer">
                <h1 className="font-secondary font-medium text-grey-700">
                  Dating
                </h1>
                <div className="h-6 w-6 rounded-full flex items-center justify-center font-secondary font-medium text-sm text-grey-800 bg-[#F2F4F7]">
                  5
                </div>
              </div>
              <div className="flex gap-2 px-3 py-2 rounded-[100px] border border-grey-400 cursor-pointer">
                <h1 className="font-secondary font-medium text-grey-700">
                  Gaming
                </h1>
                <div className="h-6 w-6 rounded-full flex items-center justify-center font-secondary font-medium text-sm text-grey-800 bg-[#F2F4F7]">
                  5
                </div>
              </div>
            </div>
            <div className="grid grid-cols-4 max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 grid-rows-2 gap-x-6 gap-y-5 px-6 pt-6 pb-8">
              {accounts.map((account, index) => (
                <UserAccount
                  data={account}
                  // setUserInfo={setUserInfo}
                  // userInfo={userInfo}
                  key={index}
                  account={true}
                />
              ))}
              <div
                className="rounded-xl px-3 py-4 bg-white border border-dashed border-primary shadow-[0_1px_2px_0_#1018280D] flex gap-2 cursor-pointer w-full h-[177px] items-center justify-center"
                onClick={AccountSetting}
              >
                <FontAwesomeIcon
                  icon={faPlus}
                  className="text-grey-700 duration-200 text-xl"
                />
                <h1 className="font-secondary font-medium text-grey-700">
                  Add account
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      {openModal && (
        <AccountModal modalType={modalType} setOpenModal={setOpenModal} />
      )}
    </>
  );
}

export default Accounts;
