import { useAuth0 } from "@auth0/auth0-react";
import Notfound from "../404";
import Footer from "../footer";
import Header from "../header";
import FAQ from "./faq";
import Hero from "./hero";
import PlanList from "./planList";

function PlanPage() {
  const { isAuthenticated } = useAuth0();

  //   if (!isAuthenticated) {
  //     return <Notfound />;
  //   }

  return (
    <>
      <Header />
      <Hero />
      <PlanList />
      <FAQ />
      <Footer />
    </>
  );
}

export default PlanPage;
