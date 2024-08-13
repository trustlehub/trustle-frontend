import ceo from "../../assets/about/ceo.jpg";
import cto from "../../assets/about/cto.jpg";
import cdo_1 from "../../assets/about/cdo_1.jpg";
import cdo_2 from "../../assets/about/cdo_2.jpg";
import cmo from "../../assets/about/cmo.jpg";
import cexo from "../../assets/about/cexo.jpg";
import sde from "../../assets/about/sde.jpg";
import john from "../../assets/about/john.jpg";
import person from "../../assets/about/person.jpg";
import linkedin from "../../assets/about/LinkedIn.svg";
import twitter from "../../assets/about/Twitter.svg";
import instagram from "../../assets/about/Instagram.svg";
import github from "../../assets/about/Github.svg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faGlobe } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

function Team() {
  return (
    <div className="max-w-[1512px] m-auto">
      <div className="overflow-hidden py-24 grid mx-auto max-lg:px-5 max-w-[893px] gap-20 relative after:absolute after:w-full after:h-full after:bg-[url(../src/assets/landing/faq_footer.png)] after:bg-no-repeat after:bg-contain after:bg-bottom after:top-[60px]">
        <div className="grid grid-rows-[auto_1fr] gap-6 relative z-20">
          <h1 className="text-transparent bg-clip-text bg-gradient-to-b from-[#1D2939] to-[#1D2939AB] font-primary font-medium text-[40px] max-md:text-[28px] max-md:leading-[34px] leading-[48px] text-center">
            Meet The Team
          </h1>
          <h1 className="font-secondary text-[18px] leading-[27px] text-grey-700 text-center">
            Discover the key individuals driving our success.
          </h1>
        </div>
        <div className="relative z-20 flex items-center justify-center">
          <div className="flex flex-wrap items-center justify-center gap-10">
            <div className="p-5 grid grid-rows-[auto_1fr] h-[367px] w-[271px] gap-5 duration-500 rounded-xl relative bg-gradient-to-tr from-[#7CCA682E] to-[#62CA9E2E] after:absolute after:top-0 after:left-0 after:bottom-0 after:right-0 after:bg-grey-200 after:rounded-xl hover:after:top-[2px] hover:after:right-[2px] hover:after:bottom-[2px] hover:after:left-[2px] group">
              <div className="overflow-hidden rounded-lg z-10">
                <img
                  src={ceo}
                  alt=""
                  className="relative duration-500 group-hover:scale-105"
                />
              </div>
              <div className="relative z-10 flex flex-col gap-6">
                <div className="flex flex-col gap-1">
                  <h1 className="text-2xl font-medium leading-9 text-center font-primary text-grey-900">
                    Michael Båge
                  </h1>
                  <h1 className="font-medium text-center font-secondary text-grey-700">
                    CEO & Founder
                  </h1>
                </div>
                <div className="flex gap-[14px] justify-center">
                  <Link to="https://www.linkedin.com/in/michaelbage/">
                    <img src={linkedin} alt="" className="cursor-pointer" />
                  </Link>
                  <Link to="https://www.instagram.com/michaelbagebage/">
                    <img src={instagram} alt="" className="cursor-pointer" />
                  </Link>
                  {/* <Link
                    to="https://github.com/michaelbage"
                    className="h-6 w-6 flex items-center justify-center"
                  >
                    <img src={github} alt="" className="cursor-pointer" />
                  </Link> */}
                </div>
              </div>
            </div>
            <div className="p-5 grid grid-rows-[auto_1fr] h-[367px] w-[271px] gap-5 duration-500 rounded-xl relative bg-gradient-to-tr from-[#7CCA682E] to-[#62CA9E2E] after:absolute after:top-0 after:left-0 after:bottom-0 after:right-0 after:bg-grey-200 after:rounded-xl hover:after:top-[2px] hover:after:right-[2px] hover:after:bottom-[2px] hover:after:left-[2px] group">
              <div className="overflow-hidden rounded-lg z-10">
                <img
                  src={cto}
                  alt=""
                  className="relative duration-500 group-hover:scale-105"
                />
              </div>
              <div className="relative z-10 flex flex-col gap-6">
                <div className="flex flex-col gap-1">
                  <h1 className="text-2xl font-medium leading-9 text-center font-primary text-grey-900">
                    Akira Taro
                  </h1>
                  <h1 className="font-medium text-center font-secondary text-grey-700">
                    CTO & Co-Founder
                  </h1>
                </div>
                <div className="flex gap-[14px] justify-center">
                  {/* <Link to="https://www.linkedin.com/in/akira-taro-302b90284/">
                    <img src={linkedin} alt="" className="cursor-pointer" />
                  </Link> */}
                  {/* <Link
                    to="https://github.com/twinstarhub"
                    className="h-6 w-6 flex items-center justify-center"
                  >
                    <img src={github} alt="" className="cursor-pointer" />
                  </Link> */}
                </div>
              </div>
            </div>
            <div className="p-5 grid grid-rows-[auto_1fr] h-[367px] w-[271px] gap-5 duration-500 rounded-xl relative bg-gradient-to-tr from-[#7CCA682E] to-[#62CA9E2E] after:absolute after:top-0 after:left-0 after:bottom-0 after:right-0 after:bg-grey-200 after:rounded-xl hover:after:top-[2px] hover:after:right-[2px] hover:after:bottom-[2px] hover:after:left-[2px] group">
              <div className="overflow-hidden rounded-lg z-10">
                <img
                  src={cdo_1}
                  alt=""
                  className="relative duration-500 group-hover:scale-105"
                />
              </div>
              <div className="relative z-10 flex flex-col gap-6">
                <div className="flex flex-col gap-1">
                  <h1 className="text-2xl font-medium leading-9 text-center font-primary text-grey-900">
                    Clement Bassey
                  </h1>
                  <h1 className="font-medium text-center font-secondary text-grey-700">
                    CDO & Co-Founder
                  </h1>
                </div>
                <div className="flex gap-[14px] justify-center">
                  <Link to="https://www.linkedin.com/in/clement-bassey/">
                    <img src={linkedin} alt="" className="cursor-pointer" />
                  </Link>
                  <Link to="https://twitter.com/Endeavorr1">
                    <img src={twitter} alt="" className="cursor-pointer" />
                  </Link>
                  <Link to="https://www.instagram.com/sha_zam__/">
                    <img src={instagram} alt="" className="cursor-pointer" />
                  </Link>
                </div>
              </div>
            </div>
            {/* <div className="p-5 grid grid-rows-[auto_1fr] h-[367px] w-[271px] gap-5 duration-500 rounded-xl relative bg-gradient-to-tr from-[#7CCA682E] to-[#62CA9E2E] after:absolute after:top-0 after:left-0 after:bottom-0 after:right-0 after:bg-grey-200 after:rounded-xl hover:after:top-[2px] hover:after:right-[2px] hover:after:bottom-[2px] hover:after:left-[2px] group">
              <div className="overflow-hidden rounded-lg z-10">
                <img
                  src={cdo_2}
                  alt=""
                  className="relative duration-500 group-hover:scale-105"
                />
              </div>
              <div className="relative z-10 flex flex-col gap-6">
                <div className="flex flex-col gap-1">
                  <h1 className="text-2xl font-medium leading-9 text-center font-primary text-grey-900">
                    Alberto Bial
                  </h1>
                  <h1 className="font-medium text-center font-secondary text-grey-700">
                    CBO & Co-founder
                  </h1>
                </div>
                <div className="flex gap-[14px] justify-center">
                  <Link to="https://www.linkedin.com/in/alberto-crypto/">
                    <img src={linkedin} alt="" className="cursor-pointer" />
                  </Link>
                  <Link to="https://twitter.com/AlbertB6912">
                    <img src={twitter} alt="" className="cursor-pointer" />
                  </Link>
                  <Link
                    to="https://github.com/Kattlover99"
                    className="h-6 w-6 flex items-center justify-center"
                  >
                    <img src={github} alt="" className="cursor-pointer" />
                  </Link>
                </div>
              </div>
            </div> */}
            <div className="p-5 grid grid-rows-[auto_1fr] h-[367px] w-[271px] gap-5 duration-500 rounded-xl relative bg-gradient-to-tr from-[#7CCA682E] to-[#62CA9E2E] after:absolute after:top-0 after:left-0 after:bottom-0 after:right-0 after:bg-grey-200 after:rounded-xl hover:after:top-[2px] hover:after:right-[2px] hover:after:bottom-[2px] hover:after:left-[2px] group">
              <div className="overflow-hidden rounded-lg z-10">
                <img
                  src={cmo}
                  alt=""
                  className="relative duration-500 group-hover:scale-105"
                />
              </div>
              <div className="relative z-10 flex flex-col gap-6">
                <div className="flex flex-col gap-1">
                  <h1 className="text-2xl font-medium leading-9 text-center font-primary text-grey-900">
                    Reni C. Achkar
                  </h1>
                  <h1 className="font-medium text-center font-secondary text-grey-700">
                    Chief Marketing Officer
                  </h1>
                </div>
                <div className="flex gap-[14px] justify-center">
                  <Link to="https://www.instagram.com/ranyachkar/">
                    <img src={instagram} alt="" className="cursor-pointer" />
                  </Link>
                  <Link to="https://in.linkedin.com/in/reni-achkar">
                    <img src={linkedin} alt="" className="cursor-pointer" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="p-5 grid grid-rows-[auto_1fr] h-[367px] w-[271px] gap-5 duration-500 rounded-xl relative bg-gradient-to-tr from-[#7CCA682E] to-[#62CA9E2E] after:absolute after:top-0 after:left-0 after:bottom-0 after:right-0 after:bg-grey-200 after:rounded-xl hover:after:top-[2px] hover:after:right-[2px] hover:after:bottom-[2px] hover:after:left-[2px] group">
              <div className="overflow-hidden rounded-lg z-10">
                <img
                  src={cexo}
                  alt=""
                  className="relative duration-500 group-hover:scale-105"
                />
              </div>
              <div className="relative z-10 flex flex-col gap-6">
                <div className="flex flex-col gap-1">
                  <h1 className="text-2xl font-medium leading-9 text-center font-primary text-grey-900">
                    Idris Woodroffe
                  </h1>
                  <h1 className="font-medium text-center font-secondary text-grey-700">
                    Chief Experience Officer
                  </h1>
                </div>
                <div className="flex gap-[14px] justify-center">
                  <Link to="https://www.idriswoodroffe.com/">
                    <FontAwesomeIcon
                      icon={faGlobe}
                      className="text-[#7CCA68] text-xl"
                    />
                  </Link>
                  <Link to="https://www.instagram.com/idriswoodroffe/">
                    <FontAwesomeIcon
                      icon={faInstagram}
                      className="text-[#7CCA68] text-xl"
                    />
                  </Link>
                  <Link to="https://nl.linkedin.com/in/idris-woodroffe-46777a1b8">
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      className="text-[#7CCA68] text-xl"
                    />
                  </Link>
                </div>
              </div>
            </div>
            {/* <div className="p-5 grid grid-rows-[auto_1fr] h-[367px] w-[271px] gap-5 duration-500 rounded-xl relative bg-gradient-to-tr from-[#7CCA682E] to-[#62CA9E2E] after:absolute after:top-0 after:left-0 after:bottom-0 after:right-0 after:bg-grey-200 after:rounded-xl hover:after:top-[2px] hover:after:right-[2px] hover:after:bottom-[2px] hover:after:left-[2px] group">
              <div className="overflow-hidden rounded-lg z-10">
                <img
                  src={sde}
                  alt=""
                  className="relative duration-500 group-hover:scale-105"
                />
              </div>
              <div className="relative z-10 flex flex-col gap-6">
                <div className="flex flex-col gap-1">
                  <h1 className="text-2xl font-medium leading-9 text-center font-primary text-grey-900">
                    Felix Martel
                  </h1>
                  <h1 className="font-medium text-center font-secondary text-grey-700">
                    SDE3; AI Focus
                  </h1>
                </div>
                <div className="flex gap-[14px] justify-center">
                  <Link to="https://github.com/hanselpetter">
                    <FontAwesomeIcon
                      icon={faGithub}
                      className="text-[#7CCA68] text-xl"
                    />
                  </Link>
                </div>
              </div>
            </div> */}
            {/* <div className="p-5 grid grid-rows-[auto_1fr] h-[367px] w-[271px] gap-5 duration-500 rounded-xl relative bg-gradient-to-tr from-[#7CCA682E] to-[#62CA9E2E] after:absolute after:top-0 after:left-0 after:bottom-0 after:right-0 after:bg-grey-200 after:rounded-xl hover:after:top-[2px] hover:after:right-[2px] hover:after:bottom-[2px] hover:after:left-[2px] group">
              <div className="overflow-hidden rounded-lg z-10">
                <img
                  src={john}
                  alt=""
                  className="relative duration-500 group-hover:scale-105"
                />
              </div>
              <div className="relative z-10 flex flex-col gap-6">
                <div className="flex flex-col gap-1">
                  <h1 className="text-2xl font-medium leading-9 text-center font-primary text-grey-900">
                    John Ji
                  </h1>
                  <h1 className="font-medium text-center font-secondary text-grey-700">
                    SDE3; Blockchain Focus
                  </h1>
                </div>
                <div className="flex gap-[14px] justify-center">
                  <Link to="https://www.linkedin.com/in/john-ji-65339824b/">
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      className="text-[#7CCA68] text-xl"
                    />
                  </Link>
                  <Link to="https://github.com/degenpig">
                    <FontAwesomeIcon
                      icon={faGithub}
                      className="text-[#7CCA68] text-xl"
                    />
                  </Link>
                </div>
              </div>
            </div> */}
            {/* <div className="p-5 grid grid-rows-[auto_1fr] h-[367px] w-[271px] gap-5 duration-500 rounded-xl relative bg-gradient-to-tr from-[#7CCA682E] to-[#62CA9E2E] after:absolute after:top-0 after:left-0 after:bottom-0 after:right-0 after:bg-grey-200 after:rounded-xl hover:after:top-[2px] hover:after:right-[2px] hover:after:bottom-[2px] hover:after:left-[2px] group cursor-pointer">
              <div className="overflow-hidden rounded-lg z-10">
                <img
                  src={person}
                  alt=""
                  className="relative duration-500 group-hover:scale-105"
                />
              </div>
              <div className="relative z-10 flex flex-col gap-6">
                <div className="flex flex-col gap-1">
                  <h1 className="text-2xl font-medium leading-9 text-center font-primary text-grey-900">
                    Join Us
                  </h1>
                  <h1 className="font-medium text-center font-secondary text-grey-700">
                    Applicants are reviewed on a rolling basis
                  </h1>
                  <a href="mailto:support@trustle-beta.com">
                    <div className="px-8 py-4 flex gap-0 hover:gap-2 items-center justify-center cursor-pointer duration-300 group">
                      <h1 className="text-primary font-secondary whitespace-nowrap font-medium">
                        Contact us
                      </h1>
                      <div className="max-w-0 duration-300 group-hover:max-w-[30px] flex items-center overflow-hidden">
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className="text-primary duration-200 opacity-0 group-hover:opacity-100"
                        />
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
