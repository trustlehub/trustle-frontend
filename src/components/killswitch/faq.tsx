import { Link } from "react-router-dom";
import avatar1 from "../../assets/avatar/kill_1.svg";
import sms from "../../assets/icons/sms.svg";

function FAQ() {
  return (
    <div className="max-w-[1512px] m-auto">
      <div className="px-20 py-24 flex flex-col gap-14 bg-[#ECF5F9] max-md:px-4 max-md:py-16">
        <div className="flex flex-col gap-8">
          <div className="flex justify-center flex-col gap-4">
            <h1 className="font-secondary font-semibold text-[40px] max-xl:text-[32px] max-md:text-[28px] leading-[50px] max-md:leading-9 tracking-[-1.2px] bg-clip-text text-transparent bg-gradient-to-b from-[#1D2939] to-[#1D2939AB] text-center">
              FAQs
            </h1>
            <h1 className="font-secondary text-[20px] leading-[30px] text-grey-700 text-center max-md:text-lg">
              Everything you need to know about Killswitch.
            </h1>
          </div>
          <div className="grid grid-cols-3 gap-x-8 gap-y-16 max-xl:grid-cols-2 max-md:grid-cols-1">
            <div className="flex flex-col gap-2">
              <h1 className="font-secondary font-medium text-[20px] leading-[30px] text-grey-900 text-center">
                What is Killswitch?
              </h1>
              <h1 className="font-secondary text-center text-grey-700">
                Killswitch is a powerful tool that enables you to regain control
                over your online presence. It allows you to seamlessly remove
                your complete or selected parts of your digital footprint,
                ensuring your privacy and data autonomy.
              </h1>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="font-secondary font-medium text-[20px] leading-[30px] text-grey-900 text-center">
                How does Killswitch work?
              </h1>
              <h1 className="font-secondary text-center text-grey-700">
                Killswitch uses Trustle's robust search engine to find your
                online presence. Through automated services and legal
                technology, we remove targeted accounts and content.
              </h1>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="font-secondary font-medium text-[20px] leading-[30px] text-grey-900 text-center">
                What data can Killswitch help me remove?
              </h1>
              <h1 className="font-secondary text-center text-grey-700">
                Killswitch gives you the flexibility to decide what to remove.
                You can choose to remove specific social media accounts, posts,
                personal information, or even your complete digital presence
                from the platforms we support.
              </h1>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="font-secondary font-medium text-[20px] leading-[30px] text-grey-900 text-center">
                Is the removal process irreversible?
              </h1>
              <h1 className="font-secondary text-center text-grey-700">
                Yes, the removal process is irreversible. Once you choose to use
                Killswitch to remove your online presence, the action cannot be
                undone. We recommend carefully reading our terms & conditions
                before proceeding.
              </h1>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="font-secondary font-medium text-[20px] leading-[30px] text-grey-900 text-center">
                How long does the removal process take?
              </h1>
              <h1 className="font-secondary text-center text-grey-700">
                The removal process duration can vary based on the platforms and
                the extent of content you wish to remove. Generally, the process
                is swift, but certain platforms might have longer processing
                times.
              </h1>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="font-secondary font-medium text-[20px] leading-[30px] text-grey-900 text-center">
                How can I get started with Killswitch?
              </h1>
              <h1 className="font-secondary text-center text-grey-700">
                To get started with Killswitch, simply sign up for a Trustle
                account and follow the easy steps to initiate the removal
                process. Our user-friendly interface will guide you through each
                stage.
              </h1>
            </div>
          </div>
        </div>
        <div className="rounded-2xl bg-white flex flex-col items-center justify-center py-10 gap-8 px-4 bg-[#F9FAFB">
          <div className="flex items-end relative">
            <img src={avatar1} alt="" className="rounded-full" />
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="font-secondary font-medium text-[20px] leading-[30px] text-center text-grey-900">
              Still have questions?
            </h1>
            <h1 className="font-secondary text-[18px] leading-7 text-center text-grey-700">
              Can’t find the answer you’re looking for? Please chat to our
              friendly team.
            </h1>
          </div>
          <Link
            to="mailto:support@trustle-beta.com"
            className="flex justify-center"
          >
            <div className="px-4 py-3 flex gap-0 hover:gap-2 rounded-lg bg-gradient-to-r from-[#1B253C] to-[#101828] items-center justify-center cursor-pointer border border-[#475467] duration-300 hover:shadow-[0_0_0_0_rgba(21,30,48,0.10),0_3px_8px_0_rgba(21,30,48,0.10),0_14px_14px_0_rgba(21,30,48,0.09),0_31px_19px_0_rgba(21,30,48,0.05),0_55px_22px_0_rgba(21,30,48,0.01),0_87px_24px_0_rgba(21,30,48,0.0)] group">
              <h1 className="text-sm text-white font-secondary whitespace-nowrap">
                Get In Touch
              </h1>
              <div className="w-0 duration-300 group-hover:w-[18px] h-[18px] flex items-center">
                <img
                  src={sms}
                  alt=""
                  className="text-white duration-200 opacity-0 group-hover:opacity-100"
                />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
