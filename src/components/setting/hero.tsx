import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import avatar from "../../assets/avatar/p_1.jpg";
import link from "../../assets/icons/link.svg";

function Hero() {
  return (
    <div className="max-w-[1512px] m-auto mt-8 px-20">
      <div className="border border-grey-300 rounded-xl overflow-hidden">
        <div className="relative before:absolute before:content-[' '] before:bg-[url(../src/assets/otherPages/hero.webp)] before:opacity-[60%] before:top-0 before:right-0 before:bottom-0 before:left-0 before:max-md:shadow-[0_0_0_1px_inset_#EAECF0] before:bg-[bottom_-340px_right] flex flex-col rounded-b-xl h-[221px] overflow-hidden"></div>
        <div className="px-10 pb-8 flex flex-col gap-8 -top-[60px] relative">
          <div className="flex flex-col gap-6">
            <img
              src={avatar}
              alt=""
              className="h-[120px] w-[120px] border border-white rounded-[50%] object-cover"
            />
            <div className="flex flex-col gap-3 justify-center">
              <h1 className="font-primary font-medium text-[32px] leading-10 text-grey-1100">
                Greg Cumberbatch
              </h1>
              <div className="flex gap-3">
                <img src="" alt="" />
                <h1 className="font-secondary font-medium text-grey-700">
                  Lisbon, Portugal
                </h1>
                <h1 className="text-grey-800">▪</h1>
                <div className="flex gap-2">
                  <img src={link} alt="" />
                  <h1 className="font-secondary font-medium text-grey-700">
                    12 Linked Accounts
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="p-3 rounded-xl bg-[#A6960F1A] flex gap-2 group cursor-pointer">
              <div className="relative bg-white rounded-md border border-grey-300 w-[67px] h-[52px] flex items-center justify-center after:absolute after:content-[' '] after:h-10 after:w-10 after:bg-[url(../src/assets/mainLogo/2-3-con.svg)] after:bg-center after:bg-contain after:bg-no-repeat" />
              <div className="flex flex-col gap-2">
                <h1 className="font-primary font-semibold text-grey-800">
                  2-To-3
                </h1>
                <div className="flex gap-2">
                  <h1 className="font-secondary text-sm text-grey-700">
                    Migrate Your Data
                  </h1>
                  <div className="duration-300 max-w-[30px] flex items-center overflow-hidden">
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="text-grey-700 duration-200 -translate-x-[100%] group-hover:translate-x-0"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="p-3 rounded-xl bg-[#3C70CC1A] flex gap-2 group cursor-pointer">
              <div className="relative bg-white rounded-md border border-grey-300 w-[67px] h-[52px] flex items-center justify-center after:absolute after:content-[' '] after:h-10 after:w-10 after:bg-[url(../src/assets/mainLogo/killswitch.svg)] after:bg-center after:bg-contain after:bg-no-repeat" />
              <div className="flex flex-col gap-2">
                <h1 className="font-primary font-semibold text-grey-800">
                  Killswitch
                </h1>
                <div className="flex gap-2">
                  <h1 className="font-secondary text-sm text-grey-700">
                    Migrate Your Data
                  </h1>
                  <div className="duration-300 max-w-[30px] flex items-center overflow-hidden">
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="text-grey-700 duration-200 -translate-x-[100%] group-hover:translate-x-0"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
