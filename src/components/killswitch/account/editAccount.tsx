import UserAccount from "./userAccount";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import edit from "../../../assets/icons/edit.svg";
import Caution from "./caution";
import { useKillAccountContext } from "../../../context/killAccountContext";
import { Link } from "react-router-dom";

function EditAccount({ setStep }: { setStep: (data: string) => void }) {
  const [isOpenCautionModal, setIsOpenCautionModal] = useState<boolean>(false);
  const { killAccounts } = useKillAccountContext();

  return (
    <>
      <div className="max-w-[1512px] m-auto pt-24">
        <div className="px-28 max-xl:px-20 max-md:px-4 mb-20">
          <div className="flex gap-3 items-center">
            <h1 className="py-6 font-secondary font-medium text-grey-700 cursor-pointer" onClick={() => setStep('create')}>
              Account Overview
            </h1>
            <FontAwesomeIcon icon={faChevronRight} className="text-grey-500" />
            <h1 className="font-secondary font-medium text-sm text-[#5e93ab]">
              Confirm Selections
            </h1>
          </div>
          <div className="flex flex-col rounded-lg border border-grey-500">
            <Link to={'/killswitch'} className="pl-6 pt-8 pb-5 w-full border-b border-b-grey-400 flex gap-[10px] items-center">
              <img src={edit} alt="" />
              <h1 className="font-primary font-medium text-lg leading-[22px] text-[#5E93AB]">
                Edit
              </h1>
            </Link>
            <div className="px-6 max-md:px-4 pt-5 pb-8 flex flex-col gap-5">
              <h1 className="font-primary font-medium text-lg leading-[22px] text-grey-900">
                Confirm Selections
              </h1>
              <div className="grid grid-cols-4 max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-6">
                {killAccounts.map((account, index) => (
                  <UserAccount data={account} key={index} account={true} />
                ))}
              </div>
            </div>
          </div>
          <div className="flex mt-6">
            <div
              className="rounded-lg bg-[linear-gradient(180deg,#1B253C_0%,#101828_100%)] border border-grey-800 px-4 py-3 flex items-center group duration-300 hover:shadow-[0_0_0_0_rgba(21,30,48,0.10),0_3px_8px_0_rgba(21,30,48,0.10),0_14px_14px_0_rgba(21,30,48,0.09),0_31px_19px_0_rgba(21,30,48,0.05),0_55px_22px_0_rgba(21,30,48,0.01),0_87px_24px_0_rgba(21,30,48,0.0)] gap-0 hover:gap-2 cursor-pointer"
              onClick={() => setIsOpenCautionModal(true)}
            >
              <h1 className="font-secondary text-white text-sm font-semibold">
                Delete accounts
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
      {isOpenCautionModal && (
        <Caution
          setIsOpenCautionModal={setIsOpenCautionModal}
          setStep={setStep}
        />
      )}
    </>
  );
}

export default EditAccount;
