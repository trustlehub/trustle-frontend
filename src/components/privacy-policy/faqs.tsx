import { useState } from "react";
import plus from "../../assets/plus.svg";
import serch from "../../assets/mainLogo/search.svg";
import killswitch from "../../assets/mainLogo/killswitch.svg";
import two from "../../assets/mainLogo/2-3-con.svg";
import uniment from "../../assets/mainLogo/uniment.svg";
import sms from "../../assets/icons/sms.svg";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngellist,
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

function FAQs() {
  const [faqId, setFaqId] = useState<number | null>(null);

  const navigate = useNavigate();

  const onSelectFAQ = (id: number) => {
    if (faqId === id) {
      setFaqId(-1);
    } else {
      setFaqId(id);
    }
  };

  return (
    <div className="max-w-[1512px] m-auto">
      <div className="flex flex-col gap-20 px-20 pt-24 pb-28 max-md:py-16 max-md:px-4">
        <div className="gap-y-4 gap-x-16 grid grid-cols-2 max-md:grid-cols-1">
          <div className="block">
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
                <h1 className="font-primary text-grey-900 font-medium text-[18px] leading-[27px] max-md:text-base">
                  What is Trustle?
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
                  Trustle is a information architecture Company that works in
                  the intersection of computational data markets, network
                  peering, and content distribution. Trustle’s focus is on
                  crafting solutions for managing online presence, data
                  security, and blockchain integration.
                </h1>
              </div>
            </div>
          </div>
          <div className="block">
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
                <h1 className="font-primary text-grey-900 font-medium text-[18px] leading-[27px] max-md:text-base">
                  What products does Trustle offer?
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
                className={`flex flex-col gap-4 overflow-hidden duration-500 ${
                  faqId === 2 ? "max-h-screen" : "max-h-0"
                }`}
              >
                <h1 className="font-secondary text-grey-700">
                  Our product portfolio comprises four core offerings:
                </h1>
                <div className="flex gap-1">
                  <div className="flex">
                    <div className="flex justify-center items-center h-7 w-7 rounded-full bg-white shadow-[0_3px_4.5px_-1.5px_#10182808,0_9px_12px_-3px_#10182814]">
                      <img src={serch} alt="" className="w-6 h-6" />
                    </div>
                  </div>
                  <h1 className="font-secondary text-grey-700">
                    <strong
                      className="cursor-pointer hover:text-[#D4A3EE] duration-300"
                      onClick={() => navigate("/search")}
                    >
                      Search Engine:
                    </strong>{" "}
                    Explore the digital footprints of individuals across various
                    online platforms, gathering comprehensive information in one
                    place.
                  </h1>
                </div>
                <div className="flex gap-1 duration-300">
                  <div className="flex">
                    <div className="flex justify-center items-center h-7 w-7 rounded-full bg-white shadow-[0_3px_4.5px_-1.5px_#10182808,0_9px_12px_-3px_#10182814]">
                      <img src={killswitch} alt="" className="w-6 h-3" />
                    </div>
                  </div>
                  <h1 className="font-secondary text-grey-700">
                    <strong
                      className="cursor-pointer hover:text-[#ECF5F9] duration-300"
                      onClick={() => navigate("/killswitch")}
                    >
                      Killswitch:
                    </strong>{" "}
                    Empower users to swiftly and securely remove their entire
                    online presence with a single click, ensuring data privacy.
                  </h1>
                </div>
                <div className="flex gap-1">
                  <div className="flex">
                    <div className="flex justify-center items-center h-7 w-7 rounded-full bg-white shadow-[0_3px_4.5px_-1.5px_#10182808,0_9px_12px_-3px_#10182814]">
                      <img src={two} alt="" className="w-6 h-6" />
                    </div>
                  </div>
                  <h1 className="font-secondary text-grey-700">
                    <strong
                      className="cursor-pointer hover:text-[#A4CA5E] duration-300"
                      onClick={() => navigate("/2-to-3")}
                    >
                      2-to-3 Migration:
                    </strong>{" "}
                    Migration: Seamlessly transfer your online presence to your
                    preferred blockchain network, preserving your digital
                    identity in a decentralised realm.
                  </h1>
                </div>
                <div className="flex gap-1">
                  <div className="flex">
                    <div className="flex justify-center items-center h-7 w-7 rounded-full bg-white shadow-[0_3px_4.5px_-1.5px_#10182808,0_9px_12px_-3px_#10182814]">
                      <img src={uniment} alt="" className="w-4 h-4" />
                    </div>
                  </div>
                  <h1 className="font-secondary text-grey-700">
                    <strong
                      className="cursor-pointer hover:text-[#A8C1FF] duration-300"
                      onClick={() => navigate("/uniment")}
                    >
                      Uniment:
                    </strong>{" "}
                    Our super-dApp (Decentralised Application) is designed to
                    offer you complete ownership of your data and interactions
                    while fostering meaningful connections in the evolving Web3
                    landscape.
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="block">
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
                <h1 className="font-primary text-grey-900 font-medium text-[18px] leading-[27px] max-md:text-base">
                  How does Trustle ensure data privacy and security?
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
                  faqId === 3 ? "max-h-40" : "max-h-0"
                }`}
              >
                <h1 className="font-secondary text-grey-700">
                  Trustle employs encryption, hashing, and anonymisation
                  techniques to safeguard user data. Our solutions adhere to
                  stringent ethical and legal standards, ensuring your
                  information remains protected.
                </h1>
              </div>
            </div>
          </div>
          <div className="block">
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
                <h1 className="font-primary text-grey-900 font-medium text-[18px] leading-[27px] max-md:text-base">
                  Can Trustle be used for personal and professional purposes?
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
                  Absolutely. Trustle's versatile suite of products caters to
                  both individual users and businesses, offering tailored
                  solutions for managing online identity, data removal, and
                  blockchain integration. Visit our{" "}
                  <a
                    href="/dev"
                    className="font-bold text-transparent bg-clip-text bg-[linear-gradient(90.48deg,#7CCA68_41.69%,#62CA9E_80.68%)]"
                  >
                    developer page
                  </a>{" "}
                  for more information.
                </h1>
              </div>
            </div>
          </div>
          <div className="block">
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
                <h1 className="font-primary text-grey-900 font-medium text-[18px] leading-[27px] max-md:text-base">
                  What sets Trustle apart from other similar platforms?
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
                  Trustle stands out due to its commitment to innovation,
                  user-centric design, and seamless integration of advanced
                  technologies. Our solutions are crafted to provide a holistic
                  and secure experience for users seeking to navigate the
                  digital landscape effortlessly.
                </h1>
              </div>
            </div>
          </div>
          <div className="block">
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
                <h1 className="font-primary text-grey-900 font-medium text-[18px] leading-[27px] max-md:text-base">
                  How can I get started with Trustle?
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
                  faqId === 6 ? "max-h-40" : "max-h-0"
                }`}
              >
                <h1 className="font-secondary text-grey-700">
                  To embark on your journey with Trustle, visit{" "}
                  <span className="text-transparent bg-clip-text bg-[linear-gradient(90.48deg,#7CCA68_41.69%,#62CA9E_80.68%)] font-bold cursor-pointer">
                    trustle-beta.com
                  </span>{" "}
                  and explore our product offerings. You can engage with our
                  search engine, explore the Killswitch, and experience the
                  transformative power of our 2-to-3 migration service.
                </h1>
              </div>
            </div>
          </div>
          <div className="block">
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
                <h1 className="font-primary text-grey-900 font-medium text-[18px] leading-[27px] max-md:text-base">
                  Is Trustle suitable for businesses?
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
                  faqId === 7 ? "max-h-40" : "max-h-0"
                }`}
              >
                <h1 className="font-secondary text-grey-700">
                  Yes, Trustle caters to businesses of all sizes. Our solutions
                  can be tailored to meet the unique needs of enterprises
                  seeking enhanced data security, online identity management,
                  and blockchain integration. Visit our business page to{" "}
                  <strong className="cursor-pointer text-transparent bg-clip-text bg-[linear-gradient(90.48deg,#7CCA68_41.69%,#62CA9E_80.68%)]">
                    learn more
                  </strong>
                  .
                </h1>
              </div>
            </div>
          </div>
          <div className="block">
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
                <h1 className="font-primary text-grey-900 font-medium text-[18px] leading-[27px] max-md:text-base">
                  What blockchain networks are compatible with Trustle's 2-to-3
                  Migration?
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
                  faqId === 8 ? "max-h-40" : "max-h-0"
                }`}
              >
                <h1 className="font-secondary text-grey-700">
                  Trustle supports a range of blockchain networks, allowing
                  users to seamlessly migrate their online presence to their
                  preferred decentralized environment.{" "}
                  <strong className="text-transparent bg-clip-text bg-gradient-to-b from-[#7CCA68] to-[#62CA9E]">
                    <a href="mailto:support@trustle-beta.com">
                      Contact our team
                    </a>
                  </strong>{" "}
                  for more details on compatibility.
                </h1>
              </div>
            </div>
          </div>
          <div className="block">
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
                <h1 className="font-primary text-grey-900 font-medium text-[18px] leading-[27px] max-md:text-base">
                  How can I contact Trustle's support team?
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
                  faqId === 9 ? "max-h-40" : "max-h-0"
                }`}
              >
                <h1 className="font-secondary text-grey-700">
                  For any inquiries, support requests, or collaboration
                  opportunities, you can reach out to our dedicated support team
                  by emailing{" "}
                  <strong className="text-transparent bg-clip-text bg-gradient-to-b from-[#7CCA68] to-[#62CA9E] cursor-pointer">
                    <a href="mailto:support@trustle-beta.com">
                      support@trustle-beta.com
                    </a>
                  </strong>
                  .
                </h1>
              </div>
            </div>
          </div>
          <div className="block">
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
                <h1 className="font-primary text-grey-900 font-medium text-[18px] leading-[27px] max-md:text-base">
                  How can I stay updated with Trustle's latest developments?
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
                  Stay connected with Trustle by following our social pages;{" "}
                  <a
                    href="https://twitter.com/Trustle999"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faXTwitter}
                      className="text-[#7CCA68] mx-2 text-lg"
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/trustle-beta/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      className="text-[#7CCA68] mx-2 text-lg"
                    />
                  </a>
                  <a
                    href="https://web.facebook.com/profile.php?id=61550843695241"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faFacebook}
                      className="text-[#7CCA68] mx-2 text-lg"
                    />
                  </a>
                  <a
                    href="https://github.com/trustlelabs"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faGithub}
                      className="text-[#7CCA68] mx-2 text-lg"
                    />
                  </a>
                  <a
                    href="https://wellfound.com/company/trustle-9"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faAngellist}
                      className="text-[#7CCA68] mx-2 text-lg"
                    />
                  </a>
                  <a
                    href="https://instagram.com/trustle.life"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faInstagram}
                      className="text-[#7CCA68] mx-2 text-lg"
                    />
                  </a>
                  - And subscribing to our{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#7CCA68] to-[#62CA9E] font-bold cursor-pointer">
                    newsletter
                  </span>
                  . This ensures you stay informed about new features, product
                  updates, and industry insights. At Trustle, we're committed to
                  reshaping the digital landscape and empowering individuals and
                  businesses to navigate the online realm with confidence and
                  security.
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="p-8 flex justify-between max-lg:px-0 max-md:flex-col max-md:gap-8 max-md:py-0 rounded-lg bg-[#F9FAFB">
          <div className="flex flex-col gap-2">
            <h1 className="font-primary font-medium text-xl leading-[30px] text-grey-900">
              Still have questions?
            </h1>
            <h1 className="font-secondary text-lg text-grey-700">
              Can’t find the answer you’re looking for? Please chat to our
              friendly team.
            </h1>
          </div>
          <Link
            to="mailto:support@trustle-beta.com"
            className="block max-md:flex"
          >
            <div className="px-4 py-3 rounded-lg border border-[#475467] duration-500 bg-gradient-to-r from-[#1B253C] to-[#101828] flex items-center justify-center cursor-pointer hover:shadow-[0_0_0_0_rgba(21,30,48,0.10),0_3px_8px_0_rgba(21,30,48,0.10),0_14px_14px_0_rgba(21,30,48,0.09),0_31px_19px_0_rgba(21,30,48,0.05),0_55px_22px_0_rgba(21,30,48,0.01),0_87px_24px_0_rgba(21,30,48,0.0)] group hover:gap-2">
              <h1 className="text-white text-sm font-semibold font-secondary whitespace-nowrap">
                Get in touch
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

export default FAQs;
