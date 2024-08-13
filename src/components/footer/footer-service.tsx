import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

function FooterService() {
  const [virsionTwo, setvirsionTwo] = useState<boolean>(false);
  const [killpage, setKillpage] = useState<boolean>(false);

  const {isAuthenticated} = useAuth0();

  useEffect(() => {
    switch (window.location.pathname) {
      case "/dev":
        setvirsionTwo(true);
        break;
      case "/killswitch":
        setKillpage(true);
        break;
      case "/killswitch/kill":
        setKillpage(true);
        break;
    }
  }, []);

  return (
    <>
      {virsionTwo ? (
        <div className="relative before:absolute before:-top-[30%] before:left-[45%] before:w-[402px] before:h-[402px] before:bg-[#71CFAF78] before:rounded-full before:blur-[131.5px] after:absolute after:-top-[25%] after:left-[30%] after:w-[194px] after:h-[194px] after:bg-[#5795CE] after:rounded-full after:blur-[100px] py-24 px-[410px] max-2xl:px-[330px] max-xl:px-[200px] max-lg:px-[80px] max-md:px-4 overflow-hidden">
          <div className="flex flex-col relative z-30 text-white">
            <h1 className="font-primary font-medium text-5xl max-xl:text-4xl max-md:text-3xl max-sm:text-[28px] text-center">
              Start building with Trustle
            </h1>
            <h1 className="font-secondary text-lg text-center mt-8 max-sm:text-base">
              Ready to incorporate Trustle's capabilities into your projects?
              Sign up for a developer account today and start building powerful,
              data-driven applications that empower users and protect their
              digital identities.
            </h1>
            <div className="flex justify-center mt-10">
              <div className="rounded px-6 py-3 shadow-[0_0_0_1px_inset_white] font-roboto cursor-pointer">
                Contact Us
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          {
            killpage && isAuthenticated ? <></>: (
              <div
                className={`relative py-24 max-md:py-12 px-20 max-xl:px-28 max-md:px-16 max-sm:px-4 flex flex-col gap-6 border-b border-b-[#BCECB030] overflow-hidden`}
              >
                <div className="absolute bottom-0 right-0">
                  <div className="relative">
                    <div className="absolute top-[-250px] left-[-306px] max-xl:top-[-180px] max-xl:left-[-220px] max-lg:top-[-145px] max-lg:left-[-150px] cursor-pointer uniment duration-700 z-[4] hover:z-[30] rounded-full">
                      <Link to="/uniment" className="rounded-full">
                        <div className="w-[327px] max-xl:w-[240px] max-lg:w-[188px] h-[327px] max-xl:h-[240px] max-lg:h-[188px] bg-[url(../src/assets/landing/blue_earth.png)] bg-cover relative before:bg-[url(../src/assets/mainLogo/uniment.svg)] before:opacity-[83%] before:top-12 before:left-12 before:bottom-12 before:right-12 max-xl:before:top-10 max-xl:before:left-10 max-xl:before:bottom-10 max-xl:before:right-10 max-md:before:top-8 max-md:before:left-8 max-md:before:bottom-8 max-md:before:right-8 before:bg-contain before:bg-no-repeat before:absolute after:absolute after:top-0 after:left-0 after:bottom-0 after:right-0 after:bg-[radial-gradient(45.35%_45.33%_at_46.05%_54.49%,rgba(255,255,255,0)_57.18%,rgba(255,255,255,0.71)_100%)] after:rounded-full" />
                      </Link>
                    </div>
                    <div className="absolute top-[-178px] left-[-580px] max-xl:left-[-420px] max-xl:top-[-150px] max-lg:top-[-106px]  max-lg:left-[-300px] cursor-pointer kill duration-700 z-[2] hover:z-[30] rounded-full">
                      <Link to="/killswitch" className="rounded-full">
                        <div className="w-[327px] max-xl:w-[240px] max-lg:w-[188px] h-[327px] max-xl:h-[240px] max-lg:h-[188px] bg-[url(../src/assets/landing/other_earth.png)] bg-cover relative before:bg-[url(../src/assets/mainLogo/killswitch.svg)] before:top-24 before:left-10 before:bottom-24 before:right-10 max-xl:before:top-16 max-xl:before:left-6 max-xl:before:bottom-16 max-xl:before:right-6 max-md:before:top-12 max-md:before:left-4 max-md:before:bottom-12 max-md:before:right-4 before:bg-contain before:bg-no-repeat before:absolute after:absolute after:top-0 after:left-0 after:bottom-0 after:right-0 after:bg-[radial-gradient(54.36%_54.15%_at_57.08%_53.05%,rgba(255,255,255,0)_23.21%,rgba(228,243,243,0.76)_81.9%,#ADCCCB_100%)] after:rounded-full" />
                      </Link>
                    </div>
                    <div className="absolute top-[-366px] left-[-472px] max-xl:left-[-340px] max-xl:top-[-300px] max-lg:top-[-216px] max-lg:left-[-252px] cursor-pointer search duration-700 z-[1] hover:z-[30] rounded-full">
                      <Link to="/search" className="rounded-full">
                        <div className="w-[327px] max-xl:w-[240px] max-lg:w-[188px] h-[327px] max-xl:h-[240px] max-lg:h-[188px] bg-[url(../src/assets/landing/pink_earth.png)] bg-cover relative before:bg-[url(../src/assets/mainLogo/search.svg)] before:top-10 before:left-10 before:bottom-10 before:right-10 max-xl:before:top-6 max-xl:before:left-6 max-xl:before:bottom-6 max-xl:before:right-6 max-md:before:top-3 max-md:before:left-3 max-md:before:bottom-3 max-md:before:right-3 before:bg-contain before:bg-no-repeat before:absolute after:absolute after:top-0 after:left-0 after:bottom-0 after:right-0 after:bg-[radial-gradient(51.06%_51.07%_at_46.05%_54.49%,rgba(255,255,255,0)_55.21%,rgba(255,255,255,0.65)_100%)] after:rounded-full" />
                      </Link>
                    </div>
                    <div className="absolute top-[-444px] left-[-228px] max-xl:top-[-360px] max-xl:left-[-180px] max-lg:top-[-255px] max-lg:left-[-115px] cursor-pointer two_3 duration-700 z-[3] hover:z-[30] rounded-full">
                      <Link to="/2-to-3" className=" group bg-grey-100">
                        <div className="w-[327px] max-xl:w-[240px] max-lg:w-[188px] h-[327px] max-xl:h-[240px] max-lg:h-[188px] bg-[url(../src/assets/landing/green_earth.png)] bg-cover relative before:bg-[url(../src/assets/mainLogo/2-3-con.svg)] before:top-10 before:left-10 before:bottom-10 before:right-10 max-xl:before:top-6 max-xl:before:left-6 max-xl:before:bottom-6 max-xl:before:right-6 max-md:before:top-3 max-md:before:left-3 max-md:before:bottom-3 max-md:before:right-3 before:bg-contain before:bg-no-repeat before:absolute after:absolute after:top-0 after:left-0 after:bottom-0 after:right-0 after:bg-[radial-gradient(37.04%_37.24%_at_46.05%_54.49%,rgba(255,255,255,0)_0%,rgba(255,255,255,0.71)_100%)] after:rounded-full" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-3 z-10 max-w-[600px]">
                  <h1 className="font-primary font-medium text-[56px] leading-[64px] text-white max-md:text-[32px] max-md:leading-[39px]">
                    Stay in the loop
                  </h1>
                  <h1 className="font-secondary text-white max-md:text-sm max-md:leading-[21px]">
                    Join our dynamic community of innovators shaping the digital
                    future.
                  </h1>
                </div>
                <div className="flex flex-col gap-4 max-lg:mb-[160px] max-md:mb-[260px] z-10 max-w-[600px] max-lg:max-w-none max-lg:w-full">
                  <div className="flex gap-4 max-md:flex-col">
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Enter your email"
                      className="rounded-[8px_12px_8px_12px] p-3 bg-[#F9FAFB0D] shadow-[0_0_0_1px_inset_#FFFFFF24] text-[#FFFFFF99] text-sm font-secondary max-w-[428px] max-lg:max-w-none w-full focus:outline-none focus:shadow-[0_0_0_2px_inset_#BCECB0]"
                    />
                    <div className="bg-white rounded-lg px-6 py-3 font-secondary font-semibold text-grey-700 text-sm shadow-[0_0_0_1px_inset_#EAECF0,0_1px_2px_0_#1018280D] cursor-pointer text-center">
                      Subscribe
                    </div>
                  </div>
                  <h1 className="font-secondary text-xs leading-[18px] text-[#FFFFFFC7] flex gap-1">
                    By subscribing you agree to with our
                    <Link to="/privacy">
                      <p className="underline cursor-pointer font-roboto">
                        Privacy Policy
                      </p>
                    </Link>
                  </h1>
                </div>
              </div>
            )
          }
        </>
        
      )}
    </>
  );
}

export default FooterService;
