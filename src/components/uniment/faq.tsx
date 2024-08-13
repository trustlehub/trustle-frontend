import { useState } from "react";
import { Link } from "react-router-dom";
import plus from "../../assets/plus.svg";

function FAQ() {
  const [faqId, setFaqId] = useState<number | null>(null);

  const onSelectFAQ = (id: number) => {
    if (faqId === id) {
      setFaqId(-1);
    } else {
      setFaqId(id);
    }
  };

  return (
    <div className="max-w-[1512px] m-auto">
      <div className="flex flex-col items-center justify-center py-24 gap-14 relative before:absolute before:content-[' '] before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-[url(../src/assets/uniment/hero.webp)] before:opacity-[11%] before:bg-bottom before:bg-no-repeat">
        <div className="relative z-10 flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <h1 className="font-primary font-medium text-[40px] leading-[56px] tracking-[-1.2px] text-center text-transparent bg-clip-text bg-gradient-to-b from-[#1D2939] to-[#1D2939AB] capitalize">
              Frequently asked
              <br />
              questions
            </h1>
            <h1 className="font-secondary text-xl leading-[30px] text-grey-700 text-center">
              Everything you need to know about Uniment.
            </h1>
          </div>
          <div className="max-w-[910px] w-full flex flex-col gap-4">
            <div
              className={`px-6 py-5 rounded-lg shadow-[0_0_0_1px_inset_#EAECF0] bg-white flex flex-col duration-300 ${
                faqId === 1 ? "gap-4" : "gap-0"
              }`}
            >
              <div
                className={`grid grid-cols-[1fr_auto] justify-between cursor-pointer ${
                  faqId === 1 ? "active" : ""
                }`}
                onClick={() => onSelectFAQ(1)}
              >
                <h1 className="font-primary text-grey-900 font-medium text-[18px] leading-[27px]">
                What is Uniment?
                </h1>
                <div className="flex items-center justify-center min-w-[32px] h-8">
                  <img src={plus} alt="" className="duration-300" />
                </div>
              </div>
              <div
                className={`w-full shadow-[0_0_0_1px_inset_#EAECF0] duration-300 ${
                  faqId === 1 ? "h-[2px]" : "max-h-0"
                }`}
              />
              <div
                className={`flex flex-col gap-4 duration-300 overflow-hidden ${
                  faqId === 1 ? "max-h-screen" : "max-h-0"
                }`}
              >
                <h1 className="font-secondary text-grey-700">
                Uniment is an innovative connection platform that brings people together through AI and emotions. It categorizes content with RGB codes, each representing a unique emotion or vibe. Users create emotional maps based on their interactions, fostering genuine connections.
                </h1>
              </div>
            </div>
            <div
              className={`px-6 py-5 rounded-lg shadow-[0_0_0_1px_inset_#EAECF0] bg-white flex flex-col duration-300 ${
                faqId === 2 ? "gap-4" : "gap-0"
              }`}
            >
              <div
                className={`grid grid-cols-[1fr_auto] justify-between cursor-pointer ${
                  faqId === 2 ? "active" : ""
                }`}
                onClick={() => onSelectFAQ(2)}
              >
                <h1 className="font-primary text-grey-900 font-medium text-[18px] leading-[27px]">
                How does Uniment work?
                </h1>
                <div className="flex items-center justify-center min-w-[32px] h-8">
                  <img src={plus} alt="" className="duration-300" />
                </div>
              </div>
              <div
                className={`w-full shadow-[0_0_0_1px_inset_#EAECF0] duration-300 ${
                  faqId === 2 ? "h-[2px]" : "max-h-0"
                }`}
              />
              <div
                className={`flex flex-col gap-4 overflow-hidden duration-300 ${
                  faqId === 2 ? "max-h-screen" : "max-h-0"
                }`}
              >
                <h1 className="font-secondary text-grey-700">
                Uniment uses AI to categorize content based on emotions. Users interact with content using a color wheel that represents various emotions. The platform aims to create authentic connections, free from hierarchical metrics like "likes" and "followers."
                </h1>
              </div>
            </div>
            <div
              className={`px-6 py-5 rounded-lg shadow-[0_0_0_1px_inset_#EAECF0] bg-white flex flex-col duration-300 ${
                faqId === 3 ? "gap-4" : "gap-0"
              }`}
            >
              <div
                className={`grid grid-cols-[1fr_auto] justify-between cursor-pointer ${
                  faqId === 3 ? "active" : ""
                }`}
                onClick={() => onSelectFAQ(3)}
              >
                <h1 className="font-primary text-grey-900 font-medium text-[18px] leading-[27px]">
                What is the significance of RGB codes in Uniment?
                </h1>
                <div className="flex items-center justify-center min-w-[32px] h-8">
                  <img src={plus} alt="" className="duration-300" />
                </div>
              </div>
              <div
                className={`w-full shadow-[0_0_0_1px_inset_#EAECF0] duration-300 ${
                  faqId === 3 ? "h-[2px]" : "max-h-0"
                }`}
              />
              <div
                className={`flex flex-col gap-4 overflow-hidden duration-300 ${
                  faqId === 3 ? "max-h-screen" : "max-h-0"
                }`}
              >
                <h1 className="font-secondary text-grey-700">
                RGB codes are used to classify content based on emotional vibes. Each color corresponds to a specific emotion, helping users understand the emotional content of posts and engage authentically.
                </h1>
              </div>
            </div>
            <div
              className={`px-6 py-5 rounded-lg shadow-[0_0_0_1px_inset_#EAECF0] bg-white flex flex-col duration-300 ${
                faqId === 4 ? "gap-4" : "gap-0"
              }`}
            >
              <div
                className={`grid grid-cols-[1fr_auto] justify-between cursor-pointer ${
                  faqId === 4 ? "active" : ""
                }`}
                onClick={() => onSelectFAQ(4)}
              >
                <h1 className="font-primary text-grey-900 font-medium text-[18px] leading-[27px]">
                How does Uniment ensure authenticity in connections?
                </h1>
                <div className="flex items-center justify-center min-w-[32px] h-8">
                  <img src={plus} alt="" className="duration-300" />
                </div>
              </div>
              <div
                className={`w-full shadow-[0_0_0_1px_inset_#EAECF0] duration-300 ${
                  faqId === 4 ? "h-[2px]" : "max-h-0"
                }`}
              />
              <div
                className={`flex flex-col gap-4 overflow-hidden duration-300 ${
                  faqId === 4 ? "max-h-screen" : "max-h-0"
                }`}
              >
                <h1 className="font-secondary text-grey-700">
                Uniment eliminates hierarchical concepts like "likes" and "followers" and encourages interaction based on emotions. Users can engage with posts through the color wheel, making emotional connections that are authentic and in touch with users' feelings.
                </h1>
              </div>
            </div>
            <div
              className={`px-6 py-5 rounded-lg shadow-[0_0_0_1px_inset_#EAECF0] bg-white flex flex-col duration-300 ${
                faqId === 5 ? "gap-4" : "gap-0"
              }`}
            >
              <div
                className={`grid grid-cols-[1fr_auto] justify-between cursor-pointer ${
                  faqId === 5 ? "active" : ""
                }`}
                onClick={() => onSelectFAQ(5)}
              >
                <h1 className="font-primary text-grey-900 font-medium text-[18px] leading-[27px]">
                Is Uniment a blockchain-powered platform?
                </h1>
                <div className="flex items-center justify-center min-w-[32px] h-8">
                  <img src={plus} alt="" className="duration-300" />
                </div>
              </div>
              <div
                className={`w-full shadow-[0_0_0_1px_inset_#EAECF0] duration-300 ${
                  faqId === 5 ? "h-[2px]" : "max-h-0"
                }`}
              />
              <div
                className={`flex flex-col gap-4 overflow-hidden duration-300 ${
                  faqId === 5 ? "max-h-screen" : "max-h-0"
                }`}
              >
                <h1 className="font-secondary text-grey-700">
                Yes, Uniment operates on blockchain technology, making it a user-owned network. All content is owned by the users themselves.
                </h1>
              </div>
            </div>
            <div
              className={`px-6 py-5 rounded-lg shadow-[0_0_0_1px_inset_#EAECF0] bg-white flex flex-col duration-300 ${
                faqId === 6 ? "gap-4" : "gap-0"
              }`}
            >
              <div
                className={`grid grid-cols-[1fr_auto] justify-between cursor-pointer ${
                  faqId === 6 ? "active" : ""
                }`}
                onClick={() => onSelectFAQ(6)}
              >
                <h1 className="font-primary text-grey-900 font-medium text-[18px] leading-[27px]">
                What is the UNC token, and how is it used on Uniment?
                </h1>
                <div className="flex items-center justify-center min-w-[32px] h-8">
                  <img src={plus} alt="" className="duration-300" />
                </div>
              </div>
              <div
                className={`w-full shadow-[0_0_0_1px_inset_#EAECF0] duration-300 ${
                  faqId === 6 ? "h-[2px]" : "max-h-0"
                }`}
              />
              <div
                className={`flex flex-col gap-4 overflow-hidden duration-300 ${
                  faqId === 6 ? "max-h-screen" : "max-h-0"
                }`}
              >
                <h1 className="font-secondary text-grey-700">
                Yes, Uniment operates on blockchain technology, making it a user-owned network. All content is owned by the users themselves.
                </h1>
              </div>
            </div>
            <div
              className={`px-6 py-5 rounded-lg shadow-[0_0_0_1px_inset_#EAECF0] bg-white flex flex-col duration-300 ${
                faqId === 7 ? "gap-4" : "gap-0"
              }`}
            >
              <div
                className={`grid grid-cols-[1fr_auto] justify-between cursor-pointer ${
                  faqId === 7 ? "active" : ""
                }`}
                onClick={() => onSelectFAQ(7)}
              >
                <h1 className="font-primary text-grey-900 font-medium text-[18px] leading-[27px]">
                How can I get started on Uniment?
                </h1>
                <div className="flex items-center justify-center min-w-[32px] h-8">
                  <img src={plus} alt="" className="duration-300" />
                </div>
              </div>
              <div
                className={`w-full shadow-[0_0_0_1px_inset_#EAECF0] duration-300 ${
                  faqId === 7 ? "h-[2px]" : "max-h-0"
                }`}
              />
              <div
                className={`flex flex-col gap-4 overflow-hidden duration-300 ${
                  faqId === 7 ? "max-h-screen" : "max-h-0"
                }`}
              >
                <h1 className="font-secondary text-grey-700">
                To get started, sign up on the Uniment platform. New users receive +100 UNC as a sign-up bonus. You can explore the platform, interact with posts using the color wheel, and create your emotional map.
                </h1>
              </div>
            </div>
            <div
              className={`px-6 py-5 rounded-lg shadow-[0_0_0_1px_inset_#EAECF0] bg-white flex flex-col duration-300 ${
                faqId === 8 ? "gap-4" : "gap-0"
              }`}
            >
              <div
                className={`grid grid-cols-[1fr_auto] justify-between cursor-pointer ${
                  faqId === 8 ? "active" : ""
                }`}
                onClick={() => onSelectFAQ(8)}
              >
                <h1 className="font-primary text-grey-900 font-medium text-[18px] leading-[27px]">
                Are there any restrictions on interactions in Uniment?
                </h1>
                <div className="flex items-center justify-center min-w-[32px] h-8">
                  <img src={plus} alt="" className="duration-300" />
                </div>
              </div>
              <div
                className={`w-full shadow-[0_0_0_1px_inset_#EAECF0] duration-300 ${
                  faqId === 8 ? "h-[2px]" : "max-h-0"
                }`}
              />
              <div
                className={`flex flex-col gap-4 overflow-hidden duration-300 ${
                  faqId === 8 ? "max-h-screen" : "max-h-0"
                }`}
              >
                <h1 className="font-secondary text-grey-700">
                Uniment encourages free and authentic interactions, but there are costs associated with certain actions. For example, engaging with the color wheel costs -1 UNC, while creating a new post requires -10 UNC.
                </h1>
              </div>
            </div>
            <div
              className={`px-6 py-5 rounded-lg shadow-[0_0_0_1px_inset_#EAECF0] bg-white flex flex-col duration-300 ${
                faqId === 9 ? "gap-4" : "gap-0"
              }`}
            >
              <div
                className={`grid grid-cols-[1fr_auto] justify-between cursor-pointer ${
                  faqId === 9 ? "active" : ""
                }`}
                onClick={() => onSelectFAQ(9)}
              >
                <h1 className="font-primary text-grey-900 font-medium text-[18px] leading-[27px]">
                Is Uniment a blockchain-powered platform?
                </h1>
                <div className="flex items-center justify-center min-w-[32px] h-8">
                  <img src={plus} alt="" className="duration-300" />
                </div>
              </div>
              <div
                className={`w-full shadow-[0_0_0_1px_inset_#EAECF0] duration-300 ${
                  faqId === 9 ? "h-[2px]" : "max-h-0"
                }`}
              />
              <div
                className={`flex flex-col gap-4 overflow-hidden duration-300 ${
                  faqId === 9 ? "max-h-screen" : "max-h-0"
                }`}
              >
                <h1 className="font-secondary text-grey-700">
                You can explore Uniment's token economics by referring to our official resources and documentation. For in-depth details, please visit our token economics folder.
                </h1>
              </div>
            </div>
            <div
              className={`px-6 py-5 rounded-lg shadow-[0_0_0_1px_inset_#EAECF0] bg-white flex flex-col duration-300 ${
                faqId === 10 ? "gap-4" : "gap-0"
              }`}
            >
              <div
                className={`grid grid-cols-[1fr_auto] justify-between cursor-pointer ${
                  faqId === 10 ? "active" : ""
                }`}
                onClick={() => onSelectFAQ(10)}
              >
                <h1 className="font-primary text-grey-900 font-medium text-[18px] leading-[27px]">
                What happens if I have more questions or need assistance?
                </h1>
                <div className="flex items-center justify-center min-w-[32px] h-8">
                  <img src={plus} alt="" className="duration-300" />
                </div>
              </div>
              <div
                className={`w-full shadow-[0_0_0_1px_inset_#EAECF0] duration-300 ${
                  faqId === 10 ? "h-[2px]" : "max-h-0"
                }`}
              />
              <div
                className={`flex flex-col gap-4 overflow-hidden duration-300 ${
                  faqId === 10 ? "max-h-screen" : "max-h-0"
                }`}
              >
                <h1 className="font-secondary text-grey-700">
                If you have additional questions or require assistance, please contact our support team at
                <span className='text-blue-500'> support@trustle-beta.com</span>. We are here to help and ensure your Uniment experience is as smooth as possible.
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="relative z-10 flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <h1 className="font-primary font-medium text-[28px] leading-9 text-transparent bg-clip-text bg-gradient-to-b from-[#1D2939] to-[#1D2939AB] text-center">
              Want to know more?
            </h1>
            <h1 className="text-lg text-center font-secondary text-grey-800">
              Visit our FAQ page
            </h1>
          </div>
          <Link to="faq" className="flex justify-center">
            <div className="px-6 py-3 rounded-lg border border-grey-400 shadow-[0_1px_2px_0_#1018280D] bg-white text-grey-700 font-secondary font-semibold text-sm whitespace-nowrap flex justify-center cursor-pointer items-center hover:shadow-[0_0_0_0_rgba(21,30,48,0.10),0_3px_8px_0_rgba(21,30,48,0.10),0_14px_14px_0_rgba(21,30,48,0.09),0_31px_19px_0_rgba(21,30,48,0.05),0_55px_22px_0_rgba(21,30,48,0.01),0_87px_24px_0_rgba(21,30,48,0.0)] duration-300">
              See more FAQs
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
