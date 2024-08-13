import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Footer from "../footer";
import Header from "../header";
import Accounts from "./accounts";
import Folder from "./folder";
import Hero from "./hero";

function Setting() {
  const { user } = useAuth0();

  useEffect(() => { }, [user]);
  return (
    <>
      <Header />
      <Folder />
      <Hero />
      <Accounts />
      <Footer />
    </>
  );
}

export default Setting;
