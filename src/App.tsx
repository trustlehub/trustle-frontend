/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import LandingPage from "./components/landingPage";
import SearchPage from "./components/searchPage";
import AboutPage from "./components/aboutPage";
import Progress from "./components/searchPage/progress";
import ViewProfile from "./components/viewProfile";
import SearchResult from "./components/searchResult";
import Notfound from "./components/404";
import TwoTothree from "./components/twoTothree";
import FAQpage from "./components/faqPage";
import Killswitch from "./components/killswitch";
import Uniment from "./components/uniment";
import Account from "./components/killswitch/account";
import Setting from "./components/setting";
import { AccountContext, accountProperties } from "./context/accountsContext";
import Process from "./components/killswitch/process";
import { KillAccountContext } from "./context/killAccountContext";
import OrderHistory from "./components/killswitch/history";
import { OrderContext, orderProperties } from "./context/orderContext";
import PlanPage from "./components/planPage";
import LearnMore from "./components/uniment/learnMore";
import { UserInfoContext, userInfoProperties } from "./context/userInfoContext";
import Terms from "./components/termsPage";
import VerifyPage from "./components/verifyPage/verifyPage";
import KillLearnMore from "./components/killswitch/learnMore";
import Cookie from "./components/cookie";
import DevPage from "./components/devPage";

import KillSwitchTerms from './components/killswitch/KillSwitchTerms';
import UnimentFaq from "./components/uniment/faq/index";
import PrivacyPolicy from './components/privacy-policy/index';
import Refund from './components/refundPolicy/index';

function App() {
  const [userData, setUserData] = useState({});
  const [userName, setUserName] = useState("");
  const [viewProfile, setViewProfile] = useState({});
  const [accounts, setAccounts] = useState<Array<accountProperties>>([]);
  const [killAccounts, setKillAccounts] = useState<Array<accountProperties>>(
    []
  );
  const [orders, setOrders] = useState<Array<orderProperties>>([]);
  const [userInfo, setUserInfo] = useState<userInfoProperties>({
    id: -1,
    credit: 0,
    accept: true,
  });

  function deleteAllCookies() {
    const cookies = document.cookie.split(";");

    for (let i = 0; i < cookies.length; i++) {
      if (cookies[i] !== "trustle=ok") {
        const cookie = cookies[i];
        const eqPos = cookie.indexOf("=");
        const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
      }
    }
  }

  useEffect(() => {
    // deleteAllCookies();
  }, []);

  return (
    <AccountContext.Provider value={{ accounts, setAccounts }}>
      <KillAccountContext.Provider value={{ killAccounts, setKillAccounts }}>
        <OrderContext.Provider value={{ orders, setOrders }}>
          <UserInfoContext.Provider value={{ userInfo, setUserInfo }}>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/plan" element={<PlanPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route
                path="/search"
                element={<SearchPage setUserName={setUserName} />}
              />
              <Route
                path="/search/progress"
                element={
                  <Progress
                    setUserName={setUserName}
                    getData={setUserData}
                    userName={userName}
                  />
                }
              />
              <Route
                path="/search/result"
                element={
                  <ViewProfile
                    userData={userData}
                    userName={userName}
                    setViewProfile={setViewProfile}
                    setUserName={setUserName}
                  />
                }
              />
              <Route
                path="/search/profile/"
                element={
                  <SearchResult
                    userName={userName}
                    viewProfile={viewProfile}
                    setUserName={setUserName}
                  />
                }
              />
              {/* <Route path="/overview" element={<Upcoming />} /> */}
              {/* <Route path="/ourservices" element={<Upcoming />} /> */}
              <Route path="/setting" element={<Setting />} />
              <Route path="/faqs" element={<FAQpage />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/refund" element={<Refund />} />
              <Route path="/2-to-3" element={<TwoTothree />} />
              <Route path="/killswitch" element={<Killswitch />} />
              <Route path="/killswitch/learnmore" element={<KillLearnMore />} />
              <Route path="/killswitch/kill" element={<Account />} />
              <Route path="/killswitch/processing" element={<Process />} />
              <Route path="/killswitch/terms" element={<KillSwitchTerms />} />
              <Route path="/uniment" element={<Uniment />} />
              <Route path="/uniment/learnmore" element={<LearnMore />} />
              <Route path="/uniment/faqs" element={<UnimentFaq />} />
              <Route path="/history" element={<OrderHistory />} />
              {/* <Route path="/terms" element={<Upcoming />} /> */}
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="verify" element={<VerifyPage />} />
              <Route path="dev" element={<DevPage />} />
              <Route path="/404" element={<Notfound />} />
              <Route path="*" element={<Notfound />} />
            </Routes>
            <Cookie />
          </UserInfoContext.Provider>
        </OrderContext.Provider>
      </KillAccountContext.Provider>
    </AccountContext.Provider>
  );
}

export default App;
