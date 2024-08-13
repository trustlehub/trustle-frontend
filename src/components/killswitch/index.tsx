import Footer from "../footer";
import Header from "../header";
import FAQ from "./faq";
import Hero from "./hero";
import Partner from "./partner";
import Privacy from "./privacy";
import Step from "./step";
import Tool from "./tool";

function Killswitch() {
  return (
    <>
      <Header />
      <Hero />
      <Tool />
      <Step />
      <Privacy />
      <Partner />
      <FAQ />
      <Footer />
    </>
  );
}

export default Killswitch;
