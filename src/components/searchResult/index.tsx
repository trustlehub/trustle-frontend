import React from "react";
import Footer from "../footer";
import Header from "../header";
import FolderView from "../viewProfile/folderView";
import ResultBody from "./resultBody";

interface SearchResultTypes {
  userName: string;
  viewProfile: any;
  setUserName: any;
}
const SearchResult = ({
  userName,
  viewProfile,
  setUserName,
}: SearchResultTypes) => {
  return (
    <>
      <Header />
      <FolderView userName={userName} />
      <ResultBody viewProfile={viewProfile} userName={userName} />
      <Footer />
    </>
  );
};

export default SearchResult;
