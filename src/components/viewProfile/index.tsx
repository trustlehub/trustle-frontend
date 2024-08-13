/* eslint-disable @typescript-eslint/no-explicit-any */
import FilterBar from "../searchResult/filterBar";
import Footer from "../footer";
import Profile from "./profile";
import Header from "../header";

interface ViewProfileTypes {
  userData: any;
  userName: any;
  setViewProfile: any;
  setUserName: any;
}

function ViewProfile({
  userData,
  userName,
  setViewProfile,
  setUserName,
}: ViewProfileTypes) {
  return (
    <>
      <Header />
      <FilterBar />
      <Profile
        userData={userData}
        userName={userName}
        setViewProfile={setViewProfile}
        setUserName={setUserName}
      />
      <Footer />
    </>
  );
}

export default ViewProfile;
