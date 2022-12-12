import { NextPage } from "next";
import { useState } from "react";
import EncrypterComponent from "../components/encrypter";
import HackerComponent from "../components/hacker";
// import HackerComponent from "../components/hacker";
import NavbarComponent from "../components/navbar";

const Home: NextPage = () => {
  type Tab = "encrypter" | "hacker";
  const [currentTab, setCurrentTab] = useState<Tab>("encrypter");

  function setTab(tab: string) {
    setCurrentTab(tab as Tab);
  }

  return (
    <>
      <NavbarComponent tabFunction={setTab} currentTab={currentTab.toString()}/>
      {currentTab === "encrypter" && <EncrypterComponent />}
      {currentTab === "hacker" && <HackerComponent />}
    </>
  );
};

export default Home;
