import Footer from "../footer";
import Header from "../header";
import Hero from "./hero";
import SearchAPI from "./search-api";
import SearchEnginInfo from "./search-engin-info";
import SearchEngin from "./search-engine";
import Solution from "./solution";

function SearchPage({ setUserName }: { setUserName: (name: string) => void }) {
  return (
    <>
      {/* <Header setUserName={setUserName} /> */}
      <Header />
      <Hero setUserName={setUserName} />
      <Solution />
      <SearchEngin />
      <SearchEnginInfo />
      <SearchAPI />
      <Footer />
    </>
  );
}

export default SearchPage;
