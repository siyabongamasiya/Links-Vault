import { useEffect, useState } from "react";
import "./App.css";
import TopSection from "./components/topSection";
import MidSection from "./components/midSection";
import Footer from "./components/footer";
import FloatingButton from "./components/floatingbutton";
import Modal from "./components/modal";
import Link from "./models/link";
import DataAccessObject from "./Utils/dao";

const dao = new DataAccessObject();

function App() {
  const [links, setLinks] = useState<Link[]>([]);
  const [filter, setfilter] = useState("");

  const onUpdateLinks = () => {
    const links: Link[] = dao.getLinks()!;
    setLinks(links.filter((Link) => Link.id.includes(filter)));
  };

  useEffect(() => {
    const links: Link[] = dao.getLinks()!;
    setLinks(links.filter((Link) => Link.id.includes(filter)));
  }, []);
  return (
    <>
      <Modal isOpen={false} onClose={() => {}} />
      <TopSection
        onSearch={(searchValue) => {
          setfilter(searchValue)
          onUpdateLinks()
          console.log(searchValue,"search value")
        }}
      />
      <MidSection links={links} onUpdateLinks={onUpdateLinks} />
      <Footer />
      <FloatingButton />
    </>
  );
}

export default App;
