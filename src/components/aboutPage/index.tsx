import Header from "../header";
import FAQ from "../faq";
import Footer from "../footer";
import Hero from "./hero";
import Introduction from "./introduction";
import Team from "./team";
import Principles from "./principles";
import Investors from "./investors";
import Services from './services';

function AboutPage() {
  return (
    <>
      <Header />
      <Hero />
      <Introduction />
      <Team />
      <Investors />
      <Principles />
      <Services/>
      <FAQ />
      <Footer />
    </>
  );
}

export default AboutPage;
