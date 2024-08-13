/* eslint-disable @typescript-eslint/no-explicit-any */
import About from "./about";
import FAQ from "../faq";
import Feature from "./feature";
import Footer from "../footer";
import Header from "../header";
import Introduction from "./introduction";
import MobileView from "./mobileView";
import Business from "./business";

function LandingPage() {
  return (
    <>
      <Header />
      <Introduction />
      <About />
      <Feature />
      <MobileView />
      <Business />
      <FAQ />
      <Footer />
    </>
  );
}

export default LandingPage;
