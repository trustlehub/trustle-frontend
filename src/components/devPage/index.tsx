import Footer from "../footer";
import Header from "../header";
import APISection from "./api";
import APIFeature from "./api-feature";
import Case from "./case";
import Community from "./community";
import Hero from "./hero";

function DevPage() {
  return (
    <>
      <Header />
      <Hero />
      <APISection />
      <APIFeature />
      <Case />
      <Community />
      <Footer />
    </>
  );
}

export default DevPage;
