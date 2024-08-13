import { useState } from "react";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import { useUserInfoContext } from "../context/userInfoContext";

function TermModal({
  setIsUpgrade,
}: {
  setIsUpgrade: (data: boolean) => void;
}) {
  const [accept, setAccept] = useState<boolean>(false);
  const { userInfo, setUserInfo } = useUserInfoContext();
  const { user } = useAuth0();

  const acceptTerm = async () => {
    if (accept) {
      const response = await axios.post(
        import.meta.env.VITE_BASE_URL + "/users/accept",
        {
          email: user?.email,
        }
      );
      if (response.status === 200) {
        setUserInfo({ ...userInfo, accept: true });
        setIsUpgrade(false);
      }
    }
  };

  return (
    <div className="fixed top-0 z-50">
      <div className="absolute top-0 left-0 h-screen w-screen bg-[#00000066]" />
      <div className="rounded-xl bg-white fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[695px] max-md:max-w-[calc(100%-32px)] max-md:w-full">
        <div className="px-6 py-8 flex flex-col gap-8">
          <div className="flex justify-between items-center">
            <h1 className="font-primary font-medium text-2xl leading-[30px] text-transparent bg-clip-text bg-[linear-gradient(180deg,#1D2939_0%,rgba(29,41,57,0.67)_100%)]">
              Terms & conditions (T&C)
            </h1>
            <div
              className="h-8 w-8 flex items-center justify-center cursor-pointer"
              onClick={() => setIsUpgrade(false)}
            >
              <FontAwesomeIcon
                icon={faXmark}
                className="text-lg text-grey-700"
              />
            </div>
          </div>
          <div className="h-[270px] overflow-y-scroll flex flex-col gap-8 font-secondary text-grey-700">
            <h1 className="">
              Welcome to Trustle's Search Engine, a powerful tool for
              comprehensive online information gathering. These Terms and
              Conditions ("Terms") represent a legally binding agreement between
              you ("User" or "you") and Trustle ("we," "us," or "Trustle")
              regarding your use of the Trustle Search Engine product ("Search
              Engine"). By accessing and using the Search Engine, you signify
              that you have read, understood, accepted, and agreed to be bound
              by these Terms. If you do not agree to these Terms, please refrain
              from using the Search Engine.
            </h1>
            <div className="flex flex-col gap-3">
              <h1 className="pl-2 font-primary font-medium text-lg leading-6 text-grey-900">
                1. Changes to the Terms
              </h1>
              <h1>
                Trustle reserves the right to revise or modify these Terms at
                any time, and such changes will be effective immediately upon
                posting the updated Terms on the Trustle website or within the
                Search Engine. It is your responsibility to review these Terms
                regularly for any changes. Your continued use of the Search
                Engine after the posting of any revised Terms signifies your
                acceptance of the updated Terms. If you do not agree to the
                revised Terms, you should discontinue your use of the Search
                Engine.
              </h1>
            </div>
            <div className="flex flex-col gap-3">
              <h1 className="pl-2 font-primary font-medium text-lg leading-6 text-grey-900">
                2. Description of the Search Engine
              </h1>
              <h1>
                The Trustle Search Engine is designed to facilitate the
                exploration and consolidation of digital footprints and
                information across various online platforms. It is intended for
                research and information gathering purposes. While Trustle
                strives to provide accurate and comprehensive information, it
                does not guarantee the accuracy, completeness, or timeliness of
                the information retrieved via the Search Engine. You are solely
                responsible for your use of the Search Engine and any data or
                information obtained through it.
              </h1>
            </div>
            <div className="flex flex-col gap-3">
              <h1 className="pl-2 font-primary font-medium text-lg leading-6 text-grey-900">
                3. Accessing Content Behind Login Walls
              </h1>
              <h1>
                Trustle acknowledges that certain online platforms require user
                authentication or may restrict access to content behind login
                walls or other authentication mechanisms. When using the Search
                Engine to access such content, you, the User, agree that a) you
                are responsible for providing valid and accurate authentication
                credentials, such as usernames and passwords, if required to
                access specific content. Trustle does not store or retain your
                authentication credentials; b) you must comply with all
                applicable local, national, and international laws and
                regulations, including but not limited to the terms of use and
                policies of the respective online platforms you access via the
                Search Engine. Trustle does not endorse or encourage any
                unlawful, malicious, or harmful activities; c) you should be
                aware that accessing content behind login walls may involve the
                processing of personal information and data. It is your
                responsibility to respect the privacy rights of individuals or
                entities whose information you access, and to comply with
                applicable data protection laws, including GDPR and similar
                regulations in your jurisdiction; d) you will exercise ethical
                discretion and responsible usage when accessing and utilising
                information obtained from content behind login walls. Trustle
                does not condone or support any form of data scraping,
                unauthorised access, or activities that violate the terms and
                conditions of online platforms; e) you understand that
                information retrieved from content behind login walls is subject
                to the accuracy and completeness of the source. Trustle does not
                verify or guarantee the accuracy of such information.
              </h1>
            </div>
            <div className="flex flex-col gap-3">
              <h1 className="pl-2 font-primary font-medium text-lg leading-6 text-grey-900">
                4. User Responsibilities
              </h1>
              <h1>
                By using the Trustle Search Engine, you agree to the following
                responsibilities: a) use the Search Engine in compliance with
                all applicable local, national, and international laws and
                regulations, including but not limited to data protection laws,
                copyright laws, and laws related to online conduct; b) respect
                the privacy rights and applicable laws regarding the use of
                personal information and data of individuals or entities whose
                information you access via the Search Engine; c) not use the
                Search Engine for any unlawful, malicious, or harmful purposes,
                including but not limited to harassment, data scraping,
                stalking, or any activity that violates the rights of
                individuals or entities; d) exercise your own judgement and
                discretion when relying on the information gathered via the
                Search Engine, understanding that it does not constitute an
                endorsement or verification by Trustle of the individuals,
                organisations, or entities mentioned in the search results.
              </h1>
            </div>
            <div className="flex flex-col gap-3">
              <h1 className="pl-2 font-primary font-medium text-lg leading-6 text-grey-900">
                5. Intellectual Property Rights
              </h1>
              <h1>
                All rights, title, and interest in and to the Trustle Search
                Engine, including associated intellectual property rights, are
                and shall remain the exclusive property of Trustle. You may not
                download, modify, or alter any portion of the Search Engine
                without Trustle's express written consent. By submitting content
                to the Search Engine, you grant Trustle a worldwide,
                non-exclusive, royalty-free, perpetual, transferable, and
                sublicensable licence to use, reproduce, distribute, modify,
                adapt, publicly display, and publicly perform your content for
                the purpose of operating, promoting, and improving the Search
                Engine. This licence continues even if you stop using our
                Services.
              </h1>
            </div>
            <div className="flex flex-col gap-3">
              <h1 className="pl-2 font-primary font-medium text-lg leading-6 text-grey-900">
                6. Termination
              </h1>
              <h1>
                You may terminate your use of the Trustle Search Engine at any
                time. Upon termination, your account data and content associated
                with the Search Engine may be permanently deleted, subject to
                any applicable legal obligations. Trustle reserves the right to
                terminate or suspend your access to the Search Engine for any
                reason, including but not limited to violations of these Terms,
                Trustle's policies, or applicable laws and regulations.
              </h1>
            </div>
            <div className="flex flex-col gap-3">
              <h1 className="pl-2 font-primary font-medium text-lg leading-6 text-grey-900">
                7. Fees and Payment
              </h1>
              <h1>
                Search Engine is currently being provided free of charge. When
                you sign up for Search Engine, your account will be credited
                with an initial allocation of search credits. These initial
                credits are provided to help you get started and explore the
                capabilities of the Search Engine. However, Trustle will charge
                fees for the continuous use of Search Engine. The details of
                these fees, including their amount and payment terms, will be
                clearly presented to you before initiating the account removal
                process. You agree to pay any applicable fees associated with
                the use of Search Engine as specified by Trustle.
                <br />
                <br />
                A third-party payment processor (such as Stripe) or another
                designated payment processor (“Payment Processor”) will securely
                process payments for Search Engine services. By Using Search
                Engine, you agree that you acknowledge that, in order to
                effectuate transactions, a Payment Processor may be employed. As
                such, you agree to review and be bound by the Payment
                Processor’s terms of use and privacy policy. All payments made
                for Trustle Search Engine services, including credit purchases,
                are non-refundable unless explicitly stated otherwise in
                Trustle's Refund Policy. Trustle is not liable for any issues
                resulting from incorrect or out-of-date payment information.
                <br />
                <br />
                All applicable fees for Search Engine services are exclusive of
                any applicable taxes and duties, and you are responsible for
                paying any such taxes or duties as required by law. Failure to
                timely pay any fees due to Trustle may result in the termination
                or suspension of your access to Search Engine. Trustle will make
                reasonable efforts to notify you of impending payment issues
                before taking such action.
                <br />
                <br />
                Trustle offers various subscription models and payment options
                for the use of the Trustle Search Engine, providing flexibility
                to cater to your specific needs: a) Basic: Trustle also offers a
                "Load Up As You Go" model for users who prefer to pay per
                search. In this model, you can purchase search credits as
                needed. For example, you can buy a block of 50 search credits
                for 1 USD. When you perform a search, one credit will be
                deducted from your balance; b) Premium: for users who require a
                more moderate search volume, Trustle offers a limited
                subscription plan that provides you with 1,000 search credits
                per month. Each search you perform deducts one credit from your
                monthly allocation; c) Pro: this subscription model provides
                unlimited access to the Trustle Search Engine for a fixed
                monthly fee. You can perform an unlimited number of searches
                within your subscription period.
                <br />
                <br />
                Trustle retains the right to modify these subscription models,
                including the associated fees and payment terms, at its sole
                discretion. Such changes may include adjustments to the amount
                or type of fees charged, and you will be informed of any changes
                through notifications on the Search Engine.
              </h1>
            </div>
            <div className="flex flex-col gap-3">
              <h1 className="pl-2 font-primary font-medium text-lg leading-6 text-grey-900">
                8. Disclaimer of Warranty
              </h1>
              <h1>
                The Trustle Search Engine is provided on an "as-is" and
                "as-available" basis, without any warranties, express or
                implied. Trustle disclaims all warranties, including but not
                limited to the implied warranties of merchantability, fitness
                for a particular purpose, non-infringement, and any warranties
                arising out of the course of dealing or usage of trade. Trustle
                does not guarantee the accuracy, completeness, or reliability of
                any information or content available through the Search Engine.
              </h1>
            </div>
            <div className="flex flex-col gap-3">
              <h1 className="pl-2 font-primary font-medium text-lg leading-6 text-grey-900">
                9. Limitation of Liability
              </h1>
              <h1>
                To the fullest extent permitted by law, Trustle shall not be
                liable for any indirect, incidental, special, consequential, or
                punitive damages, or any loss of profits or revenues, whether
                incurred directly or indirectly, resulting from the use or
                inability to use the Search Engine, unauthorised access to or
                use of user data, conduct or content of any third party on the
                Search Engine, or any content obtained from the Search Engine.
                In no event shall Trustle's total liability for any claims
                arising out of or related to these Terms or the use of the
                Search Engine exceed the amounts paid by the user to Trustle, if
                any, during the twelve (12) months immediately preceding the
                claim.
              </h1>
            </div>
            <div className="flex flex-col gap-3">
              <h1 className="pl-2 font-primary font-medium text-lg leading-6 text-grey-900">
                10. Indemnity
              </h1>
              <h1>
                You agree to indemnify and hold Trustle, its affiliates,
                officers, agents, employees, and partners harmless from and
                against any and all claims, liabilities, damages, losses, costs,
                and expenses (including reasonable attorneys' fees) arising out
                of or in connection with your use of the Trustle Search Engine,
                your violation of these Terms, or your violation of any rights
                of a third party.
              </h1>
            </div>
            <div className="flex flex-col gap-3">
              <h1 className="pl-2 font-primary font-medium text-lg leading-6 text-grey-900">
                11. General
              </h1>
              <h1>
                These Terms and any disputes arising from or related to them
                shall be governed by and construed in accordance with the laws
                of Sweden, without regard to its conflict of law principles. Any
                legal action or proceeding arising out of or related to these
                Terms or the Trustle Search Engine shall be instituted
                exclusively in courts of Sweden, and you consent to the personal
                jurisdiction of such courts. Trustle reserves the right to amend
                these Terms at any time and without notice, and it is your
                responsibility to review these Terms regularly for any changes.
                Your use of the Trustle Search Engine following any amendment of
                these Terms will signify your assent to and acceptance of its
                revised terms.
              </h1>
            </div>
            <h1 className="">
              Thank you for using Trustle's Search Engine. If you have any
              questions or concerns, please contact us at
              <span>support@trustle-beta.com</span>.
            </h1>
          </div>
        </div>
        <div className="w-full h-[1px] bg-grey-400" />
        <div className="px-6 pt-4 pb-8 flex flex-col gap-4">
          <div className="flex gap-3 items-center">
            <div
              className="rounded-[4px] flex items-center justify-center h-4 w-4 bg-white shadow-[0_0_0_1px_inset_#d0d5dd] cursor-pointer"
              onClick={() => setAccept(!accept)}
            >
              {accept && <FontAwesomeIcon icon={faCheck} className="text-xs" />}
            </div>
            <h1 className="font-secondary font-medium text-xs leading-5 text-grey-700">
              I agree to Trustle's Terms & Conditions
            </h1>
          </div>
          <div className="flex gap-2 flex-col">
            <div className="flex">
              <div
                className={`rounded-lg px-4 py-3 font-secondary font-semibold text-sm text-white text-center duration-300 ${
                  accept
                    ? "bg-[linear-gradient(180deg,#1B253C_0%,#101828_100%)] shadow-[0_0_0_1px_inset_#465467] relative after:absolute after:top-0 after:left-0 after:bottom-0 after:right-0 after:rounded-lg after:duration-300 hover:after:shadow-[0_0_0_0_rgba(21,30,48,0.10),0_3px_8px_0_rgba(21,30,48,0.10),0_14px_14px_0_rgba(21,30,48,0.09),0_31px_19px_0_rgba(21,30,48,0.05),0_55px_22px_0_rgba(21,30,48,0.01),0_87px_24px_0_rgba(21,30,48,0.0)] cursor-pointer"
                    : "bg-grey-500 cursor-not-allowed"
                }`}
                onClick={acceptTerm}
              >
                Accept & continue
              </div>
            </div>
            <h1 className="font-secondary text-sm text-grey-700">
              By clicking ‘Accept’, you agree to Trustle’s Terms and Conditions
              of use
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TermModal;
