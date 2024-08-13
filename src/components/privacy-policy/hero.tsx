import { Link } from "react-router-dom";
import { useState } from "react";

function Hero() {
  const [tabNum, setTabNum] = useState(0);

  return (
    <div className="max-w-[1512px] m-auto pt-24">
      <div className="py-5 pl-20 border-b border-b-grey-400 max-md:pl-4">
        <h1 className="text-sm font-medium font-secondary text-grey-700">
          Privacy Center
        </h1>
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col pt-6 min-w-[276px] pl-20">
          <div
            className={`py-4 px-3 text-base leading-5 font-secondary text-grey-700 cursor-pointer ${tabNum == 0 && "bg-grey-200"
              }`}
            onClick={() => setTabNum(0)}
          >
            Privacy Policy
          </div>
          <div
            className={`py-4 px-3 text-base leading-5 font-secondary text-grey-700 cursor-pointer ${tabNum == 1 && "bg-grey-200"
              }`}
            onClick={() => setTabNum(1)}
          >
            Cookie Policy
          </div>
        </div>
        <div className="max-w-[1116px] w-[80%] px-6">
          <div className="relative before:absolute before:content-[' '] before:bg-[url(../src/assets/otherPages/hero.webp)] before:opacity-30 before:top-0 before:right-0 before:bottom-0 before:left-0 before:max-md:rounded-b-[48px] before:max-md:shadow-[0_0_0_1px_inset_#EAECF0] py-24 max-md:py-16 flex flex-col gap-6">
            <h1 className="font-primary font-medium text-5xl max-md:text-[32px] max-md:leading-[45px] tracking-[-1.2px] text-center text-grey-900 relative z-10">
              Privacy Center
            </h1>
            <h1 className="mx-auto font-secondary text-[20px] leading-[30px] text-center text-grey-700">
              At Trustle we are committed to protecting the privacy of our users
              and their personal information. <br />
              This Privacy Policy explains how we collect, use, and disclose the
              personal information of our <br />
              users, and what rights and choices they have in relation to their
              personal information.
            </h1>
          </div>
          {tabNum == 0 && (
            <div className="flex flex-col gap-12 p-4 mainpart max-w-720px py-[96px] px-[80px]">
              <div className="flex flex-col gap-4">
                <h1 className="font-primary font-medium text-[32px] leading-[38px] text-grey-900">
                  Privacy Policy
                </h1>
                <h2 className="text-base font-normal leading-7 font-secondary text-grey-700">
                This policy explains how Trustle AB ("Trustle," "we," "us," or "our") uses cookies and similar tracking technologies when you use our services, including our website, and related features (collectively referred to as the "Services"). By using Trustle's Services, you consent to the use of cookies and other tracking technologies as described in this Cookie Policy.
                </h2>
              </div>
              <div className="flex flex-col gap-4">
                <h1 className="font-primary font-medium text-[24px] leading-[38px] text-grey-900">
                  Collection of Personal Information
                </h1>
                <h2 className="text-base font-normal leading-7 font-secondary text-grey-700">
                  We collect personal information from our users when they sign
                  up for an account, complete their profile, and use our
                  services. The personal information we collect may include, but
                  is not limited to, the user's name, email address, social
                  security number, and online account information.
                </h2>
              </div>

              <div className="flex flex-col gap-4">
                <h1 className="font-primary font-medium text-[24px] leading-[38px] text-grey-900">
                  Use of Personal Information
                </h1>
                <h2 className="text-base font-normal leading-7 font-secondary text-grey-700">
                  We use the personal information of our users to provide and
                  improve our services, to communicate with our users, and to
                  comply with legal requirements. The personal information we
                  collect will not be used for any other purpose unless the user
                  gives their explicit consent.
                </h2>
              </div>

              <div className="flex flex-col gap-4">
                <h1 className="font-primary font-medium text-[24px] leading-[38px] text-grey-900">
                  Disclosure of Personal Information
                </h1>
                <h2 className="text-base font-normal leading-7 font-secondary text-grey-700">
                  We may disclose personal information to third parties in the
                  following circumstances:
                  <ul className="flex flex-col py-8 ml-8 list-disc list-outside">
                    <li>To comply with legal requirements</li>
                    <li>To enforce our terms and conditions</li>
                    <li>
                      To protect the rights, property, or safety of Trustle, our
                      users, or others
                    </li>
                  </ul>
                  We will not sell, rent, or otherwise transfer personal
                  information to any third party for commercial purposes without
                  the user's explicit consent.
                </h2>
              </div>

              <div className="flex flex-col gap-4">
                <h1 className="font-primary font-medium text-[24px] leading-[38px] text-grey-900">
                  Security of Personal Information
                </h1>
                <h2 className="text-base font-normal leading-7 font-secondary text-grey-700">
                  We take appropriate technical and organizational measures to
                  protect the personal information of our users against
                  unauthorized access, disclosure, alteration, or destruction.
                </h2>
              </div>

              <div className="flex flex-col gap-4">
                <h1 className="font-primary font-medium text-[24px] leading-[38px] text-grey-900">
                  Data Retention
                </h1>
                <h2 className="text-base font-normal leading-7 font-secondary text-grey-700">
                  We will retain the personal information of our users for as
                  long as necessary to provide our services, comply with legal
                  requirements, and enforce our terms and conditions.
                </h2>
              </div>

              <div className="flex flex-col gap-4">
                <h1 className="font-primary font-medium text-[24px] leading-[38px] text-grey-900">
                  Rights and Choices
                </h1>
                <h2 className="text-base font-normal leading-7 font-secondary text-grey-700">
                  Our users have the right to access, correct, update, or delete
                  their personal information at any time. They also have the
                  right to object to the processing of their personal
                  information and to request the transfer of their personal
                  information to another organisation.
                </h2>
              </div>

              <div className="flex flex-col gap-4">
                <h1 className="font-primary font-medium text-[24px] leading-[38px] text-grey-900">
                  Changes to Privacy Policy
                </h1>
                <h2 className="text-base font-normal leading-7 font-secondary text-grey-700">
                  We may update this Privacy Policy from time to time to reflect
                  changes in our practices or to comply with legal requirements.
                  If we make any material changes to this Privacy Policy, we
                  will notify our users by email or by posting a notice on our
                  website.
                </h2>
              </div>
            </div>
          )}
          {tabNum == 1 && (
            <div className="flex flex-col gap-12 p-4 mainpart max-w-720px py-[96px] px-[80px]">
              <div className="flex flex-col gap-4">
                <h1 className="font-primary font-medium text-[32px] leading-[38px] text-grey-900">
                  Cookie Policy
                </h1>
                <h2 className="text-base font-normal leading-7 font-secondary text-grey-700">
                  This policy explains how Trustle AB ("Trustle," "we," "us," or
                  "our") uses cookies and similar tracking technologies when you
                  use our services, including our website, and related features
                  (collectively referred to as the "Services"). By using
                  Trustle's Services, you consent to the use of cookies and
                  other tracking technologies as described in this Cookie
                  Policy.
                </h2>
              </div>
              <div className="flex flex-col gap-4">
                <h1 className="font-primary font-medium text-[24px] leading-[38px] text-grey-900">
                  What are cookies?
                </h1>
                <h2 className="text-base font-normal leading-7 font-secondary text-grey-700">
                  Cookies are small text files that are placed on your device
                  when you visit our website or use our services. They help us
                  recognise your device and store information about your
                  preferences or actions. Cookies serve various purposes, such
                  as improving your browsing experience, remembering your
                  preferences, and analysing how our services are used.
                </h2>
              </div>
              <div className="flex flex-col gap-4">
                <h1 className="font-primary font-medium text-[24px] leading-[38px] text-grey-900">
                  Types of cookies we use
                </h1>
                <h2 className="text-base font-normal leading-7 font-secondary text-grey-700">
                  We use the personal information of our users to provide and
                  improve our services, to communicate with our users, and to
                  comply with legal requirements. The personal information we
                  collect will not be used for any other purpose unless the user
                  gives their explicit consent.
                </h2>
              </div>

              <div className="flex flex-col gap-4">
                <h1 className="font-primary font-medium text-[24px] leading-[38px] text-grey-900">
                  Types of cookies we use
                </h1>
                <h2 className="text-base font-normal leading-7 font-secondary text-grey-700">
                  Trustle uses the following types of cookies for the purposes
                  described below:
                  <ul className="flex flex-col py-8 ml-8 list-disc list-outside">
                    <li className="text-base font-secondary leading-[28px] font-normal text-grey-700">
                      <span className="font-bold">Essential Cookies:</span>{" "}
                      These cookies are necessary for the operation of our
                      website and services. They enable you to navigate our
                      platform and use its features. Without these cookies,
                      certain services may not be accessible.
                    </li>
                    <li className="text-base font-secondary leading-[28px] font-normal text-grey-700">
                      <span className="font-bold">
                        Performance and Analytics Cookies:
                      </span>{" "}
                      These cookies collect information about how visitors use
                      our website and services. They help us understand user
                      behaviour and improve our platform's performance. The data
                      collected includes pages visited, sources of traffic, and
                      user interactions.
                    </li>
                    <li className="text-base font-secondary leading-[28px] font-normal text-grey-700">
                      <span className="font-bold">Functional Cookies:</span>{" "}
                      Functional cookies allow us to remember your preferences
                      and choices (such as language or region) to provide a more
                      personalised experience. These cookies may also be used to
                      provide certain features you request.
                    </li>
                    <li className="text-base font-secondary leading-[28px] font-normal text-grey-700">
                      <span className="font-bold">Third-Party Cookies:</span>{" "}
                      Trustle may allow third-party service providers to place
                      cookies on our platform to analyse usage and provide
                      additional services. These cookies are subject to the
                      respective privacy policies of these third parties.
                    </li>
                  </ul>
                </h2>
              </div>

              <div className="flex flex-col gap-4">
                <h1 className="font-primary font-medium text-[24px] leading-[38px] text-grey-900">
                  How to manage cookies
                </h1>
                <h2 className="text-base font-normal leading-7 font-secondary text-grey-700">
                  You can control cookies through your browser settings. You can
                  choose to accept or reject cookies and delete existing
                  cookies. Please note that blocking or deleting cookies may
                  affect your experience on our platform and may limit certain
                  features.
                </h2>
              </div>

              <div className="flex flex-col gap-4">
                <h1 className="font-primary font-medium text-[24px] leading-[38px] text-grey-900">
                  Cookie removal preferences
                </h1>
                <h2 className="text-base font-normal leading-7 font-secondary text-grey-700">
                  <ul className="flex flex-col py-8 ml-4 list-decimal list-outside">
                    <li className="text-base font-secondary leading-[28px] font-normal text-grey-700">
                      First-Party Cookies: You can control first-party cookies
                      through your browser settings. You have the option to
                      accept or reject these cookies and delete existing
                      cookies. However, please note that blocking or deleting
                      first-party cookies may affect your experience on our
                      platform and may limit certain features.
                    </li>
                    <li className="text-base font-secondary leading-[28px] font-normal text-grey-700">
                      Third-Party Cookies: Trustle respects your privacy and
                      values your control over your data. We have implemented
                      strict measures to limit the use of third-party cookies on
                      our platform. We do not use third-party cookies for
                      advertising or tracking purposes. Our primary use of
                      cookies is to enhance your experience and provide
                      personalised features. We strive to minimise the use of
                      third-party cookies to ensure your privacy.
                    </li>
                  </ul>
                </h2>
              </div>

              <div className="flex flex-col gap-4">
                <h1 className="font-primary font-medium text-[24px] leading-[38px] text-grey-900">
                  Updates to cookie policy
                </h1>
                <h2 className="text-base font-normal leading-7 font-secondary text-grey-700">
                  Trustle may periodically update this Cookie Policy to reflect
                  changes in our practices and services. When we make changes to
                  this Cookie Policy, we will revise the "Last Updated" date at
                  the top of this document. If there are significant changes
                  that affect your rights or how we process your personal
                  information through cookies, we will provide a more prominent
                  notice or seek your consent as required by applicable law.
                </h2>
                <h2 className="text-base font-normal leading-7 font-secondary text-grey-700">
                  We encourage you to review this Cookie Policy regularly to
                  stay informed about how we are using cookies and ensuring your
                  privacy. Your continued use of Trustle's services after the
                  posting of an updated Cookie Policy means you accept the terms
                  of the updated policy.
                </h2>
              </div>

              <div className="flex flex-col gap-4">
                <h1 className="font-primary font-medium text-[24px] leading-[38px] text-grey-900">
                  Contact Us
                </h1>
                <h2 className="text-base font-normal leading-7 font-secondary text-grey-700">
                  If you have questions or concerns about our use of cookies or
                  our privacy practices, please contact us at
                  <span className="underline"> support@trustle-beta.com</span>.
                </h2>
                <h2 className="text-base font-normal leading-7 font-secondary text-grey-700">
                  Ulrika Gatan 6 <br />
                  115, 23 <br />
                  Stockholm, Sweden.
                </h2>
              </div>
            </div>
          )}
          <div className="flex justify-between p-8 max-lg:px-0 max-md:flex-col max-md:gap-8 max-md:py-0 mb-[176px] rounded-lg bg-[#F9FAFB">
            <div className="flex flex-col gap-2">
              <h1 className="font-primary font-medium text-xl leading-[30px] text-grey-900">
                Still have questions?
              </h1>
              <h1 className="text-lg font-secondary text-grey-700">
                Can’t find the answer you’re looking for? Please chat to our
                friendly team.
              </h1>
            </div>
            <Link
              to="mailto:support@trustle-beta.com"
              className="block max-md:flex"
            >
              <div className="px-4 py-3 rounded-lg border border-[#475467] duration-500 bg-gradient-to-r from-[#1B253C] to-[#101828] flex items-center justify-center cursor-pointer hover:shadow-[0_0_0_0_rgba(21,30,48,0.10),0_3px_8px_0_rgba(21,30,48,0.10),0_14px_14px_0_rgba(21,30,48,0.09),0_31px_19px_0_rgba(21,30,48,0.05),0_55px_22px_0_rgba(21,30,48,0.01),0_87px_24px_0_rgba(21,30,48,0.0)] group hover:gap-2">
                <h1 className="text-sm font-semibold text-white font-secondary whitespace-nowrap">
                  Get in touch
                </h1>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
