import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "./footer";
import Header from "./header";
import home from "../assets/home.svg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Notfound() {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <div className="max-w-[1512px] m-auto pt-24">
        <div className="px-[116px] pt-16 pb-24 flex max-md:px-10 max-sm:px-4 max-md:flex-col">
          <div className="flex flex-col justify-center gap-12">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-3">
                <div className="flex">
                  <div className="rounded-full bg-error-200 font-secondary font-semibold text-error-1000 p-3 leading-3">
                    404 error
                  </div>
                </div>
                <h1 className="text-transparent bg-clip-text bg-gradient-to-b from-[#1D2939] to-[#1D2939AB] font-primary font-medium text-[60px] max-lg:text-[48px] max-md:text-[40px] leading-[72px] max-md:leading-[48px] tracking-[-1.2px]">
                  Page not found
                </h1>
              </div>
              <div className="flex flex-col font-secondary text-xl leading-[30px] text-grey-700 max-md:text-[18px] max-md:leading-6">
                <h1>Sorry, the page you are looking for doesn't exist.</h1>
                <h1>Here are some helpful links:</h1>
              </div>
            </div>
            <div className="flex gap-3 max-sm:flex-col">
              <div
                className="bg-white rounded-lg px-5 py-3 border border-grey-400 flex items-center hover:gap-2 duration-500 group cursor-pointer shadow-[0_1px_2px_0_#1018280D] justify-center hover:shadow-[0_0_0_0_rgba(21,30,48,0.10),0_3px_8px_0_rgba(21,30,48,0.10),0_14px_14px_0_rgba(21,30,48,0.09),0_31px_19px_0_rgba(21,30,48,0.05),0_55px_22px_0_rgba(21,30,48,0.01),0_87px_24px_0_rgba(21,30,48,0.0)]"
                onClick={() => navigate(-1)}
              >
                <div className="w-0 duration-300 group-hover:w-3 h-[18px] flex items-center">
                  <FontAwesomeIcon
                    icon={faArrowLeft}
                    className="duration-200 opacity-0 group-hover:opacity-100 text-[12px] text-grey-700"
                  />
                </div>
                <h1 className="font-secondary font-medium text-sm text-grey-700">
                  Go back
                </h1>
              </div>
              <Link to="/">
                <div className="cursor-pointer bg-gradient-to-r from-[#1B253C] to-[#101828] rounded-lg px-4 py-3 border border-grey-800 flex gap-0 hover:gap-2 duration-300 group hover:shadow-[0_0_0_0_rgba(21,30,48,0.10),0_3px_8px_0_rgba(21,30,48,0.10),0_14px_14px_0_rgba(21,30,48,0.09),0_31px_19px_0_rgba(21,30,48,0.05),0_55px_22px_0_rgba(21,30,48,0.01),0_87px_24px_0_rgba(21,30,48,0.0)] justify-center">
                  <h1 className="font-secondary font-semibold text-sm text-white text-center">
                    Take me home
                  </h1>
                  <div className="max-w-0 duration-300 group-hover:max-w-[20px] flex items-center">
                    <img
                      src={home}
                      className="duration-200 opacity-0 group-hover:opacity-100"
                    />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Notfound;
