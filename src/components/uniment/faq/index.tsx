import Header from "../../header";
import Footer from "../../footer";

function FAQ() {
  return (
    <div className="mt">
      <Header />
      <div className="header pb-[140px] pt-[237px] text-center w-full bg-[#F8FBFD] rounded-b-3xl border border-solid bg-[url('/assets/uniment/faq-head-back.png')] bg-center bg-cover">
        <h1 className="font-medium text-[56px] leading-[56px] text-transparent bg-clip-text bg-gradient-to-b from-[#1D2939] to-[#1D2939AB]">
          Frequently asked questions
        </h1>
        <h2 className="font-normal text-[16px] leading-[30px] mt-6 text-[#667085;] font-secondary">
          Have question?We're here to help.
        </h2>
      </div>
      <div className="content lg:px-[64px] max-sm:px-4 sm:px-4 md:px-8  py-[112px] max-w-[1512px] mx-auto">
        <div className="content-header max-w-[768px]">
          <h1 className="font-primary text-transparent bg-clip-text bg-gradient-to-b from-[#1D2939] to-[#1D2939AB] font-medium text-[48px]">
            FAQS
          </h1>
          <h3 className="font-secondary text-[18px] leading-[27px] pt-[24px] font-normal text-grey-700">
            Everything you need to know about Uniment. Can’t find the answer
            you’re looking for? <br />
            <span className="underline">Please chat to our friendly team.</span>
          </h3>
        </div>
        <div className="main-content">
          <div className="flex flex-row flex-wrap justify-between">
            <div className="flex flex-col gap-4 w-[418.67px] lg:w-[30%] md:w-[45%] pt-[60px]">
              <h1 className="font-secondary font-semibold text-[18px] leading-[27px] text-grey-900">
                What is Uniment
              </h1>
              <h3 className="text-base font-normal leading-6 font-secondary text-grey-700">
                Uniment is a decentralized social media platform that puts you
                in control of your online identity and interactions. It empowers
                you to connect authentically with others in a secure and private
                environment.
              </h3>
            </div>
            <div className="flex flex-col gap-4 w-[418.67px] lg:w-[30%] md:w-[45%] pt-[60px]">
              <h1 className="font-secondary font-semibold text-[18px] leading-[27px] text-grey-900">
                How does Uniment differ from traditional social media?
              </h1>
              <h3 className="text-base font-normal leading-6 font-secondary text-grey-700">
                Unlike traditional platforms, Uniment prioritises user privacy,
                data ownership, and authenticity. We don't sell your data, and
                you have complete control over your digital footprint. Our
                platform fosters genuine connections, free from algorithms that
                prioritize engagement over well-being.
              </h3>
            </div>
            <div className="flex flex-col gap-4 w-[418.67px] lg:w-[30%] md:w-[45%] pt-[60px]">
              <h1 className="font-secondary font-semibold text-[18px] leading-[27px] text-grey-900">
                How do I create an account on Uniment?
              </h1>
              <h3 className="text-base font-normal leading-6 font-secondary text-grey-700">
                To join Uniment, simply sign up with your email address. We
                prioritise user security, so you'll go through a secure identity
                verification process to ensure a safe and authentic community.
              </h3>
            </div>
            <div className="flex flex-col gap-4 w-[418.67px] lg:w-[30%] md:w-[45%] pt-[60px]">
              <h1 className="font-secondary font-semibold text-[18px] leading-[27px] text-grey-900">
              Can I import my data from other social media platforms?
              </h1>
              <h3 className="text-base font-normal leading-6 font-secondary text-grey-700">
              Yes, you can use our 2-to-3 migration feature to import parts of your web2 data onto Uniment. This helps you maintain your digital identity while enjoying the benefits of our decentralised platform.
              </h3>
            </div>
            <div className="flex flex-col gap-4 w-[418.67px] lg:w-[30%] md:w-[45%] pt-[60px]">
              <h1 className="font-secondary font-semibold text-[18px] leading-[27px] text-grey-900">
              What is the AI Alter Ego Twin?
              </h1>
              <h3 className="text-base font-normal leading-6 font-secondary text-grey-700">
              Your AI Alter Ego Twin is a unique feature of Uniment. It's an AI-driven representation of your online persona that can interact with other users. It's a creative way to express yourself and connect with like-minded individuals.
              </h3>
            </div>
            <div className="flex flex-col gap-4 w-[418.67px] lg:w-[30%] md:w-[45%] pt-[60px]">
              <h1 className="font-secondary font-semibold text-[18px] leading-[27px] text-grey-900">
              How does Uniment ensure privacy and data security?
              </h1>
              <h3 className="text-base font-normal leading-6 font-secondary text-grey-700">
              Uniment uses blockchain technology and end-to-end encryption to protect your data and ensure your privacy. You have control over what you share, and we don't track your online activity.
              </h3>
            </div>
            <div className="flex flex-col gap-4 w-[418.67px] lg:w-[30%] md:w-[45%] pt-[60px]">
              <h1 className="font-secondary font-semibold text-[18px] leading-[27px] text-grey-900">
              Can I post different types of content on Uniment?
              </h1>
              <h3 className="text-base font-normal leading-6 font-secondary text-grey-700">
              Absolutely! You can post text, images, videos, stories, and more. Uniment supports a wide range of content formats to help you express yourself.
              </h3>
            </div>
            <div className="flex flex-col gap-4 w-[418.67px] lg:w-[30%] md:w-[45%] pt-[60px]">
              <h1 className="font-secondary font-semibold text-[18px] leading-[27px] text-grey-900">
              What's the purpose of the "Web2 Tombstone"?
              </h1>
              <h3 className="text-base font-normal leading-6 font-secondary text-grey-700">
              The Web2 Tombstone is a humorous take on your past social media presence. It's a playful NPC that reflects the superficiality of traditional social media interactions. It's entirely optional but adds a fun twist to your Uniment experience.
              </h3>
            </div>
            <div className="flex flex-col gap-4 w-[418.67px] lg:w-[30%] md:w-[45%] pt-[60px]">
              <h1 className="font-secondary font-semibold text-[18px] leading-[27px] text-grey-900">
              How can I report inappropriate content or users?
              </h1>
              <h3 className="text-base font-normal leading-6 font-secondary text-grey-700">
              Uniment has a robust reporting system to maintain a safe and respectful environment. You can report content or users directly through the platform, and our moderation team will take appropriate action.
              </h3>
            </div>
            <div className="flex flex-col gap-4 w-[418.67px] lg:w-[30%] md:w-[45%] pt-[60px]">
              <h1 className="font-secondary font-semibold text-[18px] leading-[27px] text-grey-900">
              Is Uniment free to use?
              </h1>
              <h3 className="text-base font-normal leading-6 font-secondary text-grey-700">
              Yes, Uniment is free to use. We believe in providing a platform that prioritizes users' well-being and data privacy without hidden fees or ads.
              </h3>
            </div>
            <div className="flex flex-col gap-4 w-[418.67px] lg:w-[30%] md:w-[45%] pt-[60px]">
              <h1 className="font-secondary font-semibold text-[18px] leading-[27px] text-grey-900">
              How can I get involved in the Uniment community?
              </h1>
              <h3 className="text-base font-normal leading-6 font-secondary text-grey-700">
              Join our vibrant community of users by engaging with others' content, participating in discussions, and sharing your unique perspective. Uniment is a place to connect, learn, and grow together.
              </h3>
            </div>
            <div className="flex flex-col gap-4 w-[418.67px] lg:w-[30%] md:w-[45%] pt-[60px]">
              <h1 className="font-secondary font-semibold text-[18px] leading-[27px] text-grey-900">
              How can I contact Uniment support?
              </h1>
              <h3 className="text-base font-normal leading-6 font-secondary text-grey-700">
              If you have any questions or need assistance, please reach out to our support team at support@trustle-beta.com. We're here to help!
              </h3>
            </div>
            <div className="flex flex-col gap-4 w-[418.67px] lg:w-[30%] md:w-[45%] pt-[60px]">
              <h1 className="font-secondary font-semibold text-[18px] leading-[27px] text-grey-900">
              Is Uniment available on mobile devices?
              </h1>
              <h3 className="text-base font-normal leading-6 font-secondary text-grey-700">
              Yes, you can access Uniment on both mobile devices and desktop computers. We offer a seamless experience across platforms.
              </h3>
            </div>
          </div>
          <div className="mt-16 footer">
            <h1 className="font-primary font-medium text-[32px] leading-[41.6px]">Still have a question?</h1>
            <h2 className="font-secondary font-normal text-base leading-[27px] text-grey-700 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
            <div className="mt-6">
              <button className="font-secondary px-6 py-3 text-grey-700 leading-[140%] rounded-lg border-grey-400 border border-solid">Learn more</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default FAQ;
