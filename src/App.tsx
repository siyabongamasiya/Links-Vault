import { useEffect, useState } from "react";
import "./App.css";
import TopSection from "./components/topSection";
import MidSection from "./components/midSection";
import Footer from "./components/footer";
import Link from "./models/link";
import DataAccessObject from "./Utils/dao";
import stringMatcher from "./Utils/stringMatcher";
import { Toaster } from "sonner";

const dao = new DataAccessObject();

function App() {
  const [links, setLinks] = useState<Link[]>([]);
  const [searchedValue, setSearchedvalue] = useState("");

  const onUpdateLinks = (filter: string) => {
    if (dao.getLinks()) {
      const links: Link[] = dao.getLinks()!;
      setLinks(links.filter((link) => stringMatcher(link.id, filter)));
    }
  };
  const onUpdateLinksState = () => {
    const links: Link[] = dao.getLinks()!;
    setLinks(links.filter((link) => stringMatcher(link.id, searchedValue)));
  };

  useEffect(() => {
    if (dao.getLinks()) {
      const links: Link[] = dao.getLinks()!;
      setLinks(links.filter((link) => stringMatcher(link.id, searchedValue)));
    }
  }, []);

  return (
    <>
      <Toaster richColors position="bottom-center" />
      <TopSection
        onSearch={(searchValue) => {
          onUpdateLinks(searchValue);
          setSearchedvalue(searchValue);
        }}
      />
      <MidSection links={links} onUpdateLinks={onUpdateLinksState} />
      <Footer />
    </>
  );
}

export default App;
